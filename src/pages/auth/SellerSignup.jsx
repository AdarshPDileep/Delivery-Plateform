import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Building2, User, MapPin, FileText, Lock } from 'lucide-react';
import {
  getSellerPickupServiceability,
  registerSellerAccount,
  verifySellerOtp,
  updateSellerBank,
  updateSellerBusiness,
  updateSellerKyc,
  updateSellerPickupAddress,
  submitSellerApplication,
} from '../../api/api';

const inputClass = 'w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400';
const selectClass = `${inputClass} bg-white text-gray-900`;
const onlyDigits = (value) => value.replace(/\D/g, '');
const hasText = (value) => Boolean(String(value || '').trim());
const responseData = (response) => response?.data || response || {};
const sellerIdFrom = (response) => {
  const data = responseData(response);
  return data.sellerId || data.id || data.seller?.id || null;
};

const businessTypes = [
  ['PRIVATE_LIMITED', 'Private Limited'],
  ['PROPRIETORSHIP', 'Proprietorship'],
  ['PARTNERSHIP', 'Partnership'],
  ['LLP', 'LLP'],
];

const idProofTypes = [
  ['PAN_CARD', 'PAN Card'],
  ['AADHAAR_CARD', 'Aadhaar Card'],
  ['VOTER_ID', 'Voter ID'],
  ['PASSPORT', 'Passport'],
  ['DRIVING_LICENSE', 'Driving License'],
];

function Field({ label, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input className={inputClass} {...props} />
    </div>
  );
}

function SelectField({ label, options, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select className={selectClass} {...props}>
        {options.map(([value, labelText]) => <option key={value} value={value}>{labelText}</option>)}
      </select>
    </div>
  );
}

export default function SellerSignup() {
  const navigate = useNavigate();
  const otpRefs = useRef([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [sellerId, setSellerId] = useState(null);
  const [sellerCode, setSellerCode] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [account, setAccount] = useState({ fullName: '', email: '', mobile: '', password: '', confirmPassword: '', termsAccepted: false });
  const [business, setBusiness] = useState({ businessName: '', businessType: 'PRIVATE_LIMITED', gstRegistered: true, gstin: '', businessPan: '', websiteUrl: '' });
  const [kyc, setKyc] = useState({ idProofType: 'PAN_CARD', idProofNumber: '', idProofFileName: '' });
  const [bank, setBank] = useState({ bankName: '', accountHolderName: '', accountNumber: '', confirmAccountNumber: '', ifscCode: '' });
  const [pickup, setPickup] = useState({ locationName: '', contactPerson: '', contactPhone: '', address: '', pincode: '' });
  const [pickupCheck, setPickupCheck] = useState({ status: 'idle', message: 'Pickup availability will be checked after entering pincode.', state: '', district: '', town: '' });

  const otpValue = otpDigits.join('');
  const pickupGeo = useMemo(() => ({
    state: pickupCheck.state,
    district: pickupCheck.district,
    town: pickupCheck.town,
    serviceable: pickupCheck.status === 'available',
  }), [pickupCheck]);

  const steps = [
    { num: 1, title: 'Account', icon: User },
    { num: 2, title: 'Verification', icon: Lock },
    { num: 3, title: 'Business', icon: Building2 },
    { num: 4, title: 'KYC', icon: FileText },
    { num: 5, title: 'Pickup', icon: MapPin },
  ];

  const update = (setter) => (field, value) => {
    setter((prev) => ({ ...prev, [field]: value }));
    setError('');
    setNotice('');
  };

  const setAccountField = update(setAccount);
  const setBusinessField = update(setBusiness);
  const setKycField = update(setKyc);
  const setBankField = update(setBank);
  const setPickupField = update(setPickup);

  const validateAccount = () => {
    if (!hasText(account.fullName)) return 'Full name is required.';
    if (!/^\S+@\S+\.\S+$/.test(account.email.trim())) return 'Enter a valid email address.';
    if (onlyDigits(account.mobile).length !== 10) return 'Enter a valid 10 digit mobile number.';
    if (account.password.length < 8) return 'Password must be at least 8 characters.';
    if (account.password !== account.confirmPassword) return 'Password and confirm password must match.';
    if (!account.termsAccepted) return 'Please accept the Terms & Privacy Policy.';
    return '';
  };

  const validateBusiness = () => {
    if (!hasText(business.businessName)) return 'Business name is required.';
    if (business.gstRegistered && !hasText(business.gstin)) return 'GSTIN is required for GST registered businesses.';
    if (!hasText(business.businessPan)) return 'Business PAN is required.';
    return '';
  };

  const validateKycAndBank = () => {
    if (!hasText(kyc.idProofNumber)) return 'ID proof number is required.';
    if (!hasText(bank.bankName)) return 'Bank name is required.';
    if (!hasText(bank.accountHolderName)) return 'Account holder name is required.';
    if (!hasText(bank.accountNumber)) return 'Account number is required.';
    if (bank.accountNumber !== bank.confirmAccountNumber) return 'Account number and confirmation must match.';
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(bank.ifscCode.trim().toUpperCase())) return 'Enter a valid IFSC code.';
    return '';
  };

  const validatePickup = () => {
    if (!hasText(pickup.locationName)) return 'Location name is required.';
    if (!hasText(pickup.contactPerson)) return 'Contact person is required.';
    if (onlyDigits(pickup.contactPhone).length !== 10) return 'Enter a valid 10 digit contact phone.';
    if (!hasText(pickup.address)) return 'Complete address is required.';
    if (pickup.pincode.length !== 6) return 'Enter a valid 6 digit pincode.';
    return '';
  };

  const requireSellerId = () => {
    if (sellerId) return true;
    setError('Please complete account registration first.');
    setCurrentStep(1);
    return false;
  };

  const runRequest = async (request, fallbackMessage) => {
    setIsSubmitting(true);
    try {
      await request();
    } catch (err) {
      setError(err.message || fallbackMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitAccount = () => {
    const validationError = validateAccount();
    if (validationError) return setError(validationError);

    return runRequest(async () => {
      const response = await registerSellerAccount({
        fullName: account.fullName.trim(),
        email: account.email.trim(),
        mobile: onlyDigits(account.mobile),
        password: account.password,
        confirmPassword: account.confirmPassword,
        termsAccepted: account.termsAccepted,
      });
      const returnedSellerId = sellerIdFrom(response);
      if (!returnedSellerId) throw new Error('Seller account created, but seller id was not returned.');
      setSellerId(returnedSellerId);
      setNotice('Account created. Enter any 6 digit OTP to continue.');
      setCurrentStep(2);
    }, 'Unable to create seller account.');
  };

  const verifyDummyOtp = () => {
    if (!requireSellerId()) return;
    if (!/^\d{6}$/.test(otpValue)) return setError('Enter any 6 digit OTP to verify.');

    return runRequest(async () => {
      await verifySellerOtp({ sellerId, otp: otpValue });
      setNotice('Mobile verified.');
      setCurrentStep(3);
    }, 'Unable to verify OTP.');
  };

  const submitBusiness = () => {
    if (!requireSellerId()) return;
    const validationError = validateBusiness();
    if (validationError) return setError(validationError);

    return runRequest(async () => {
      await updateSellerBusiness(sellerId, {
        businessName: business.businessName.trim(),
        businessType: business.businessType,
        gstRegistered: business.gstRegistered,
        gstin: business.gstRegistered ? business.gstin.trim().toUpperCase() : null,
        businessPan: business.businessPan.trim().toUpperCase(),
        websiteUrl: business.websiteUrl.trim() || null,
      });
      setCurrentStep(4);
    }, 'Unable to save business details.');
  };

  const submitKycAndBank = () => {
    if (!requireSellerId()) return;
    const validationError = validateKycAndBank();
    if (validationError) return setError(validationError);

    return runRequest(async () => {
      await updateSellerKyc(sellerId, {
        idProofType: kyc.idProofType,
        idProofNumber: kyc.idProofNumber.trim().toUpperCase(),
      });
      await updateSellerBank(sellerId, {
        bankName: bank.bankName.trim(),
        accountHolderName: bank.accountHolderName.trim(),
        accountNumber: bank.accountNumber.trim(),
        confirmAccountNumber: bank.confirmAccountNumber.trim(),
        ifscCode: bank.ifscCode.trim().toUpperCase(),
      });
      setCurrentStep(5);
    }, 'Unable to save KYC and bank details.');
  };

  const submitPickupAndApplication = () => {
    if (!requireSellerId()) return;
    if (pickupCheck.status === 'checking') return setError('Please wait while pickup service is being checked.');
    if (pickupCheck.status !== 'available') return setError(pickupCheck.message || 'Pickup service is not available for this pincode.');
    const validationError = validatePickup();
    if (validationError) return setError(validationError);

    return runRequest(async () => {
      if (/^\d{6}$/.test(otpValue)) {
        await verifySellerOtp({ sellerId, otp: otpValue });
      }
      await updateSellerPickupAddress(sellerId, {
        locationName: pickup.locationName.trim(),
        contactPerson: pickup.contactPerson.trim(),
        contactPhone: onlyDigits(pickup.contactPhone),
        address: pickup.address.trim(),
        pincode: pickup.pincode,
      });
      const response = await submitSellerApplication(sellerId);
      const data = responseData(response);
      setSellerCode(data.sellerCode || data.seller?.sellerCode || '');
      setCurrentStep(6);
    }, 'Unable to submit seller application.');
  };

  const checkPickupServiceability = async (pincode) => {
    if (pincode.length !== 6) {
      setPickupCheck({ status: 'idle', message: 'Pickup availability will be checked after entering pincode.', state: '', district: '', town: '' });
      return;
    }

    setPickupCheck({ status: 'checking', message: 'Checking pickup availability...', state: '', district: '', town: '' });
    try {
      const response = await getSellerPickupServiceability(pincode);
      const data = response?.data || response || {};
      if (data.serviceable && data.pickupAvailable) {
        setPickupCheck({ status: 'available', message: 'Pickup service available', state: data.state || '', district: data.district || '', town: data.town || '' });
      } else {
        setPickupCheck({ status: 'unavailable', message: data.message || 'Pickup service is not available for this pincode.', state: '', district: '', town: '' });
      }
    } catch (err) {
      setPickupCheck({ status: 'unavailable', message: err.message || 'Pickup service is not available for this pincode.', state: '', district: '', town: '' });
    }
  };

  const handlePincodeChange = (value) => {
    const pincode = onlyDigits(value).slice(0, 6);
    setPickupField('pincode', pincode);
    checkPickupServiceability(pincode);
  };

  const handleContinue = () => {
    setError('');
    setNotice('');
    if (currentStep === 1) submitAccount();
    if (currentStep === 2) verifyDummyOtp();
    if (currentStep === 3) submitBusiness();
    if (currentStep === 4) submitKycAndBank();
    if (currentStep === 5) submitPickupAndApplication();
  };

  const handleOtpChange = (index, value) => {
    const digit = onlyDigits(value).slice(-1);
    const nextOtp = [...otpDigits];
    nextOtp[index] = digit;
    setOtpDigits(nextOtp);
    setError('');
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpPaste = (event) => {
    event.preventDefault();
    const pasted = onlyDigits(event.clipboardData.getData('text')).slice(0, 6).split('');
    setOtpDigits(Array.from({ length: 6 }, (_, index) => pasted[index] || ''));
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const goBack = () => {
    setError('');
    setNotice('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const mobileLabel = onlyDigits(account.mobile).length === 10 ? `+91 ${account.mobile.slice(0, 5)} ****${account.mobile.slice(-1)}` : 'your mobile number';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 h-20 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <span className="font-extrabold text-3xl tracking-tight text-[#E31837]">Commerza<span className="text-gray-900">Global</span></span>
        </div>
        <div className="text-sm font-medium text-gray-500">
          Already have an account? <button onClick={() => navigate('/seller/login')} className="text-[#E31837] hover:underline font-bold">Login here</button>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-12">
        {currentStep < 6 && (
          <div className="w-full md:w-64 flex-shrink-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Seller Registration</h2>
            <div className="space-y-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = currentStep === step.num;
                const isCompleted = currentStep > step.num;
                return (
                  <div key={step.num} className="flex items-start gap-4 relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-[#111111] text-white shadow-lg' : isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>Step {step.num}</p>
                      <p className={`text-sm ${isActive ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{step.title}</p>
                    </div>
                    {idx < steps.length - 1 && <div className={`absolute left-[19px] top-10 w-0.5 h-6 ${isCompleted ? 'bg-green-200' : 'bg-gray-100'}`}></div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          {error && <div className="mb-6 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
          {notice && <div className="mb-6 rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{notice}</div>}

          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h3>
              <p className="text-gray-500 mb-8">Enter your personal details to get started.</p>
              <div className="space-y-5">
                <Field label="Full Name" placeholder="John Doe" value={account.fullName} onChange={(e) => setAccountField('fullName', e.target.value)} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Email Address" type="email" placeholder="john@example.com" value={account.email} onChange={(e) => setAccountField('email', e.target.value)} />
                  <Field label="Mobile Number" type="tel" placeholder="9876543210" value={account.mobile} onChange={(e) => setAccountField('mobile', onlyDigits(e.target.value).slice(0, 10))} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Password" type="password" placeholder="Minimum 8 characters" value={account.password} onChange={(e) => setAccountField('password', e.target.value)} />
                  <Field label="Confirm Password" type="password" placeholder="Re-enter password" value={account.confirmPassword} onChange={(e) => setAccountField('confirmPassword', e.target.value)} />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <input type="checkbox" id="terms" className="w-4 h-4 text-[#E31837] border-gray-300 rounded focus:ring-[#E31837]" checked={account.termsAccepted} onChange={(e) => setAccountField('termsAccepted', e.target.checked)} />
                  <label htmlFor="terms" className="text-sm text-gray-600">I agree to the Terms & Privacy Policy</label>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in text-center py-10">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6"><Lock className="w-10 h-10 text-blue-500" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Verify your Mobile</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Enter any 6 digit OTP for now. Real OTP verification will be connected later for {mobileLabel}.</p>
              <div className="flex justify-center gap-3 mb-8" onPaste={handleOtpPaste}>
                {otpDigits.map((digit, index) => (
                  <input key={index} ref={(node) => { otpRefs.current[index] = node; }} type="text" inputMode="numeric" maxLength={1} className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837]" value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} onKeyDown={(e) => { if (e.key === 'Backspace' && !otpDigits[index] && index > 0) otpRefs.current[index - 1]?.focus(); }} />
                ))}
              </div>
              <button type="button" onClick={() => { setOtpDigits(['', '', '', '', '', '']); setNotice('Dummy OTP resent. Any 6 digits will verify for now.'); otpRefs.current[0]?.focus(); }} className="text-sm font-medium text-[#E31837] hover:underline">Resend dummy OTP</button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Details</h3>
              <p className="text-gray-500 mb-8">Tell us about your company or enterprise.</p>
              <div className="space-y-5">
                <Field label="Business Name" placeholder="Acme Logistics Pvt Ltd" value={business.businessName} onChange={(e) => setBusinessField('businessName', e.target.value)} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <SelectField label="Business Type" options={businessTypes} value={business.businessType} onChange={(e) => setBusinessField('businessType', e.target.value)} />
                  <SelectField label="GST Registered?" options={[[true, 'Yes'], [false, 'No']]} value={business.gstRegistered} onChange={(e) => setBusinessField('gstRegistered', e.target.value === 'true')} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {business.gstRegistered && <Field label="GSTIN" placeholder="22AAAAA0000A1Z5" value={business.gstin} onChange={(e) => setBusinessField('gstin', e.target.value.toUpperCase())} />}
                  <Field label="Business PAN" placeholder="ABCDE1234F" value={business.businessPan} onChange={(e) => setBusinessField('businessPan', e.target.value.toUpperCase())} />
                </div>
                <Field label="Website URL (Optional)" type="url" placeholder="https://www.example.com" value={business.websiteUrl} onChange={(e) => setBusinessField('websiteUrl', e.target.value)} />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">KYC & Settlement Details</h3>
              <p className="text-gray-500 mb-8">Required for COD remittances and account verification.</p>
              <div className="space-y-6">
                <div className="p-5 border border-gray-100 bg-gray-50 rounded-xl space-y-4">
                  <h4 className="font-bold text-gray-900">Identity Proof</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SelectField label="PAN / ID Proof Type" options={idProofTypes} value={kyc.idProofType} onChange={(e) => setKycField('idProofType', e.target.value)} />
                    <Field label="ID Proof Number" placeholder="ABCDE1234F" value={kyc.idProofNumber} onChange={(e) => setKycField('idProofNumber', e.target.value.toUpperCase())} />
                  </div>
                  <label className="w-full min-h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-500 bg-white hover:bg-gray-50 cursor-pointer transition-colors px-4 text-center">
                    <input type="file" className="hidden" onChange={(e) => setKycField('idProofFileName', e.target.files?.[0]?.name || '')} />
                    <span className="font-medium text-blue-600 mr-1">Click to upload</span>{kyc.idProofFileName || 'or drag and drop'}
                  </label>
                </div>
                <div className="p-5 border border-gray-100 bg-gray-50 rounded-xl space-y-4">
                  <h4 className="font-bold text-gray-900">Bank Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field className="md:col-span-2" label="Bank Name" placeholder="e.g. HDFC Bank" value={bank.bankName} onChange={(e) => setBankField('bankName', e.target.value)} />
                    <Field className="md:col-span-2" label="Account Holder Name" value={bank.accountHolderName} onChange={(e) => setBankField('accountHolderName', e.target.value)} />
                    <Field label="Account Number" value={bank.accountNumber} onChange={(e) => setBankField('accountNumber', onlyDigits(e.target.value))} />
                    <Field label="Confirm Account Number" value={bank.confirmAccountNumber} onChange={(e) => setBankField('confirmAccountNumber', onlyDigits(e.target.value))} />
                    <Field label="IFSC Code" value={bank.ifscCode} onChange={(e) => setBankField('ifscCode', e.target.value.toUpperCase())} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Configure Pickup Address</h3>
              <p className="text-gray-500 mb-8">Where will our delivery agents collect your shipments from?</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Location Name" placeholder="e.g. Main Warehouse" value={pickup.locationName} onChange={(e) => setPickupField('locationName', e.target.value)} />
                  <Field label="Contact Person" placeholder="Name of person at location" value={pickup.contactPerson} onChange={(e) => setPickupField('contactPerson', e.target.value)} />
                </div>
                <Field label="Contact Phone" type="tel" placeholder="9876543210" value={pickup.contactPhone} onChange={(e) => setPickupField('contactPhone', onlyDigits(e.target.value).slice(0, 10))} />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address</label>
                  <textarea rows={3} className="w-full p-4 rounded-lg border border-gray-200 resize-none focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="Building, Street, Area..." value={pickup.address} onChange={(e) => setPickupField('address', e.target.value)}></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Pincode" placeholder="695121" value={pickup.pincode} onChange={(e) => handlePincodeChange(e.target.value)} />
                  <Field label="State" readOnly placeholder="Auto-filled" value={pickupGeo.state} className="[&_input]:bg-gray-50 [&_input]:text-gray-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="District" readOnly placeholder="Auto-filled" value={pickupGeo.district} className="[&_input]:bg-gray-50 [&_input]:text-gray-500" />
                  <Field label="Town" readOnly placeholder="Auto-filled" value={pickupGeo.town} className="[&_input]:bg-gray-50 [&_input]:text-gray-500" />
                </div>
                <div className={`mt-4 p-4 rounded-lg flex items-center gap-3 border ${pickupCheck.status === 'available' ? 'bg-green-50 border-green-100 text-green-800' : pickupCheck.status === 'unavailable' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-blue-50 border-blue-100 text-blue-700'}`}>
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">{pickupCheck.message}</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="animate-fade-in text-center py-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 className="w-12 h-12 text-green-600" /></div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto mb-4">Your seller application has been received and is currently <span className="font-bold text-amber-600">Pending Verification</span> by our Head Office. We will notify you once approved.</p>
              {sellerCode && <p className="text-sm font-bold text-gray-500 mb-10">Seller Code: {sellerCode}</p>}
              <button onClick={() => navigate('/seller/login')} className="bg-[#111111] hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">Go to Login</button>
            </div>
          )}

          {currentStep < 6 && (
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              {currentStep > 1 ? <button type="button" onClick={goBack} disabled={isSubmitting} className="text-gray-500 hover:text-gray-900 font-medium px-4 py-2 disabled:opacity-50">Back</button> : <div></div>}
              <button type="button" onClick={handleContinue} disabled={isSubmitting || (currentStep === 5 && pickupCheck.status !== 'available')} className="bg-[#111111] hover:bg-black text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? 'Saving...' : currentStep === 5 ? 'Submit Application' : currentStep === 2 ? 'Verify OTP' : 'Continue'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}








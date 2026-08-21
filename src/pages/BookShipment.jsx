import { useState } from 'react';
import { createShipment } from '../api/api';
import { Package, Copy, Check, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookShipment() {
  const [form, setForm] = useState({
    senderName: '', senderPhone: '', senderAddress: '',
    receiverName: '', receiverPhone: '', receiverAddress: '',
    weight: '', dimensions: '',
    paymentMode: 'Prepaid', codAmount: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.senderName.trim()) errs.senderName = 'Sender name is required';
    if (!form.senderPhone.trim()) errs.senderPhone = 'Sender phone is required';
    else if (!/^[6-9]\d{9}$/.test(form.senderPhone.trim())) errs.senderPhone = 'Enter a valid 10-digit phone number';
    if (!form.senderAddress.trim()) errs.senderAddress = 'Pickup address is required';

    if (!form.receiverName.trim()) errs.receiverName = 'Receiver name is required';
    if (!form.receiverPhone.trim()) errs.receiverPhone = 'Receiver phone is required';
    else if (!/^[6-9]\d{9}$/.test(form.receiverPhone.trim())) errs.receiverPhone = 'Enter a valid 10-digit phone number';
    if (!form.receiverAddress.trim()) errs.receiverAddress = 'Delivery address is required';

    if (form.paymentMode === 'COD' && (!form.codAmount || parseFloat(form.codAmount) <= 0)) {
      errs.codAmount = 'COD amount is required and must be greater than 0';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await createShipment({
        ...form,
        weight: form.weight ? parseFloat(form.weight) : null,
        codAmount: form.codAmount ? parseFloat(form.codAmount) : null,
      });
      setResult(res.data);
    } catch (err) {
      alert('Failed to create shipment: ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result.awb);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookAnother = () => {
    setResult(null);
    setForm({
      senderName: '', senderPhone: '', senderAddress: '',
      receiverName: '', receiverPhone: '', receiverAddress: '',
      weight: '', dimensions: '',
      paymentMode: 'Prepaid', codAmount: '',
    });
  };

  const InputField = ({ label, name, type = 'text', placeholder, required = false }) => (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`input-field ${errors[name] ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-navy-600 mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              Book a Shipment
            </h1>
            <p className="text-slate-500 mt-2">Fill in the details below to create a new shipment.</p>
          </div>

          {result ? (
            /* Success State */
            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Shipment Booked!</h2>
              <p className="text-slate-500 mb-6">Your shipment has been created successfully.</p>

              <div className="bg-slate-50 rounded-xl p-6 mb-6 inline-block">
                <p className="text-sm text-slate-500 mb-2">AWB Tracking Number</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono font-bold text-navy-700">{result.awb}</span>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg hover:bg-slate-200 transition-colors"
                    title="Copy AWB"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <Copy className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Expected Delivery: <span className="font-medium text-slate-600">{result.expectedDeliveryDate}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to={`/track/${result.awb}`} className="btn-secondary">
                  Track Shipment
                </Link>
                <button onClick={handleBookAnother} className="btn-outline">
                  Book Another
                </button>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Sender Details */}
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center text-xs font-bold">1</div>
                  Sender Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Name" name="senderName" placeholder="Full name" required />
                  <InputField label="Phone" name="senderPhone" placeholder="10-digit mobile" required />
                </div>
                <div className="mt-4">
                  <InputField label="Pickup Address" name="senderAddress" placeholder="Full pickup address" required />
                </div>
              </div>

              {/* Receiver Details */}
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center text-xs font-bold">2</div>
                  Receiver Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Name" name="receiverName" placeholder="Full name" required />
                  <InputField label="Phone" name="receiverPhone" placeholder="10-digit mobile" required />
                </div>
                <div className="mt-4">
                  <InputField label="Delivery Address" name="receiverAddress" placeholder="Full delivery address" required />
                </div>
              </div>

              {/* Package Details */}
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center text-xs font-bold">3</div>
                  Package & Payment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Weight (kg)" name="weight" type="number" placeholder="e.g. 2.5" />
                  <InputField label="Dimensions (LxWxH cm)" name="dimensions" placeholder="e.g. 30x20x15" />
                </div>

                {/* Payment Mode */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Payment Mode <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    {['Prepaid', 'COD'].map((mode) => (
                      <label
                        key={mode}
                        className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200
                          ${form.paymentMode === mode
                            ? 'border-navy-500 bg-navy-50 text-navy-700'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
                          }`}
                      >
                        <input
                          type="radio"
                          name="paymentMode"
                          value={mode}
                          checked={form.paymentMode === mode}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                          ${form.paymentMode === mode ? 'border-navy-500' : 'border-slate-300'}`}>
                          {form.paymentMode === mode && (
                            <div className="w-2 h-2 rounded-full bg-navy-500" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* COD Amount */}
                {form.paymentMode === 'COD' && (
                  <div className="mt-4">
                    <InputField
                      label="COD Amount (₹)"
                      name="codAmount"
                      type="number"
                      placeholder="Amount to collect"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 rounded-xl text-base flex items-center justify-center gap-2
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Shipment...
                  </>
                ) : (
                  <>
                    <Package className="w-5 h-5" />
                    Book Shipment
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Building2, User, MapPin, FileText, Lock } from 'lucide-react';

export default function SellerSignup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Mock states for form data
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { num: 1, title: 'Account', icon: User },
    { num: 2, title: 'Verification', icon: Lock },
    { num: 3, title: 'Business', icon: Building2 },
    { num: 4, title: 'KYC', icon: FileText },
    { num: 5, title: 'Pickup', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-100 h-20 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <span className="font-extrabold text-3xl tracking-tight text-[#E31837]">
            Commerza<span className="text-gray-900">Global</span>
          </span>
        </div>
        <div className="text-sm font-medium text-gray-500">
          Already have an account? <button onClick={() => navigate('/seller/login')} className="text-[#E31837] hover:underline font-bold">Login here</button>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-12">
        {/* Left sidebar - Progress */}
        {currentStep < 6 && (
          <div className="w-full md:w-64 flex-shrink-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Seller Registration</h2>
            <div className="space-y-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = currentStep === step.num;
                const isCompleted = currentStep > step.num;

                return (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-[#111111] text-white shadow-lg' : 
                      isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>Step {step.num}</p>
                      <p className={`text-sm ${isActive ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{step.title}</p>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`absolute ml-[19px] mt-10 w-0.5 h-6 ${isCompleted ? 'bg-green-200' : 'bg-gray-100'}`}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Right content - Forms */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h3>
              <p className="text-gray-500 mb-8">Enter your personal details to get started.</p>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <input type="tel" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input type="password" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="••••••••" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in text-center py-10">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Verify your Mobile</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">We've sent a 6-digit one time password to your mobile number +91 98765 ****0.</p>
              
              <div className="flex justify-center gap-3 mb-8">
                {[1,2,3,4,5,6].map((i) => (
                  <input key={i} type="text" maxLength={1} className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-[#E31837] focus:ring-1 focus:ring-[#E31837]" />
                ))}
              </div>
              <button className="text-sm font-medium text-[#E31837] hover:underline">Resend OTP in 00:45</button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Details</h3>
              <p className="text-gray-500 mb-8">Tell us about your company or enterprise.</p>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="Acme Logistics Pvt Ltd" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <select className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400">
                      <option>Private Limited</option>
                      <option>Proprietorship</option>
                      <option>Partnership</option>
                      <option>LLP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="22AAAAA0000A1Z5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website URL (Optional)</label>
                  <input type="url" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400" placeholder="https://www.example.com" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">KYC & Bank Details</h3>
              <p className="text-gray-500 mb-8">Required for COD remittances and account verification.</p>
              
              <div className="space-y-6">
                <div className="p-5 border border-gray-100 bg-gray-50 rounded-xl space-y-4">
                  <h4 className="font-bold text-gray-900">Identity Proof</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                      <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white" placeholder="ABCDE1234F" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar / ID Number</label>
                      <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white" placeholder="xxxx-xxxx-xxxx" />
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-gray-100 bg-gray-50 rounded-xl space-y-4">
                  <h4 className="font-bold text-gray-900">Bank Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                      <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                      <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                      <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white" />
                    </div>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200" placeholder="e.g. Main Warehouse" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200" placeholder="Name of person at location" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address</label>
                  <textarea rows={3} className="w-full p-4 rounded-lg border border-gray-200 resize-none" placeholder="Building, Street, Area..."></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200" placeholder="110001" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50" readOnly placeholder="Auto-filled" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50" readOnly placeholder="Auto-filled" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="animate-fade-in text-center py-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto mb-10">
                Your seller application has been received and is currently <span className="font-bold text-amber-600">Pending Verification</span> by our Head Office. We will notify you once approved.
              </p>
              
              <button 
                onClick={() => navigate('/seller/login')}
                className="bg-[#111111] hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl"
              >
                Go to Login
              </button>
            </div>
          )}

          {/* Form Navigation */}
          {currentStep < 6 && (
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button 
                  onClick={prevStep}
                  className="text-gray-500 hover:text-gray-900 font-medium px-4 py-2"
                >
                  Back
                </button>
              ) : <div></div>}
              
              <button 
                onClick={nextStep}
                className="bg-[#111111] hover:bg-black text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
              >
                {currentStep === 5 ? 'Submit Application' : 'Continue'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

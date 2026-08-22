import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';
import Modal from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@commerza.com');
  const [password, setPassword] = useState('admin123');
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return addToast('Please enter email and password', 'error');
    setShowOtp(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) return addToast('Enter valid 6-digit OTP', 'error');
    
    if (login(email, password, 'admin')) {
      addToast('Login successful');
      navigate('/admin/dashboard');
    } else {
      addToast('Invalid credentials or access denied', 'error');
      setShowOtp(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#f8f9fa] overflow-hidden font-sans">
      {/* Network Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-[0.03]"></div>
      
      {/* Background Graphic Lines (CSS fallback for the screenshot's geometric lines) */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l border-b border-gray-200/50 transform rotate-12 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-t border-gray-200/50 transform -rotate-12 -translate-x-1/4 translate-y-1/4"></div>

      <div className="bg-white rounded-md shadow-2xl p-10 w-full max-w-sm relative z-10 border border-gray-100">
        <div className="text-center mb-8">
          <ShieldCheck className="w-16 h-16 text-[#c0122e] mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Control Center</h2>
          <p className="text-gray-500 mt-1">Secure Access</p>
        </div>

        <form onSubmit={handleInitialSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-gray-500 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="px-3 py-2 border-2 border-[#c0122e] rounded focus:outline-none focus:ring-1 focus:ring-[#c0122e] text-gray-900 text-sm font-medium"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-gray-500 mb-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 text-gray-900 text-sm font-medium"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#c0122e] hover:bg-[#a00f26] text-white py-2.5 rounded font-medium transition-colors mt-2 text-sm shadow-sm"
          >
            Login
          </button>
          
          <div className="text-center mt-6">
            <button type="button" className="text-xs font-semibold text-[#c0122e] hover:underline">
              Forgot Password
            </button>
          </div>
        </form>
      </div>

      <Modal open={showOtp} onClose={() => setShowOtp(false)} title="2-Step Verification" size="sm">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">Enter the 6-digit OTP sent to your registered mobile number ending in ****1234.</p>
        </div>
        <form onSubmit={handleOtpSubmit} className="space-y-5">
          <input 
            type="text" 
            maxLength={6} 
            value={otp} 
            onChange={e => setOtp(e.target.value.replace(/\D/g, ''))} 
            placeholder="Enter OTP (e.g. 123456)" 
            className="w-full px-3 py-3 border-2 border-[#c0122e] rounded focus:outline-none focus:ring-1 focus:ring-[#c0122e] text-gray-900 text-center text-xl tracking-[0.5em] font-mono"
          />
          <button 
            type="submit" 
            className="w-full bg-[#c0122e] hover:bg-[#a00f26] text-white py-2.5 rounded font-medium transition-colors mt-2 text-sm shadow-sm"
          >
            Verify & Sign In
          </button>
        </form>
      </Modal>
    </div>
  );
}

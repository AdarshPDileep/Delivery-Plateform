import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import Modal from '../../../components/ui/Modal';
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md" padding="p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Super Admin Portal</h2>
          <p className="text-sm text-slate-500 mt-1">Sign in to central control tower</p>
        </div>

        <form onSubmit={handleInitialSubmit} className="space-y-4">
          <Input 
            label="Email Address" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="admin@commerza.com" 
          />
          <Input 
            label="Password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="••••••••" 
          />
          <Button type="submit" className="w-full mt-2">Continue</Button>
          
          <div className="text-center text-xs text-slate-400 mt-4">
            Demo: admin@commerza.com / admin123
          </div>
        </form>
      </Card>

      <Modal open={showOtp} onClose={() => setShowOtp(false)} title="2-Step Verification" size="sm">
        <div className="text-center mb-6">
          <p className="text-sm text-slate-600">Enter the 6-digit OTP sent to your registered mobile number ending in ****1234.</p>
        </div>
        <form onSubmit={handleOtpSubmit} className="space-y-6">
          <Input 
            type="text" 
            maxLength={6} 
            value={otp} 
            onChange={e => setOtp(e.target.value.replace(/\D/g, ''))} 
            placeholder="Enter OTP (e.g. 123456)" 
            className="text-center text-xl tracking-[0.5em] font-mono"
          />
          <Button type="submit" className="w-full">Verify & Sign In</Button>
        </form>
      </Modal>
    </div>
  );
}

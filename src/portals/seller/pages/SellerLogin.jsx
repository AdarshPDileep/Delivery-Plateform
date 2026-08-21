import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import Tabs from '../../../components/ui/Tabs';
import { Briefcase } from 'lucide-react';

export default function SellerLogin() {
  const [email, setEmail] = useState('arvind@trendycart.in');
  const [password, setPassword] = useState('seller123');
  const [activeTab, setActiveTab] = useState('login');
  
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return addToast('Please enter email and password', 'error');
    
    if (login(email, password, 'seller')) {
      addToast('Welcome to Commerza Global Seller Panel');
      navigate('/seller/dashboard');
    } else {
      addToast('Invalid credentials', 'error');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    addToast('Registration successful! Please complete KYC.', 'success');
    setActiveTab('login');
  };

  const tabs = [
    { key: 'login', label: 'Sign In' },
    { key: 'register', label: 'Register (KYC)' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md" padding="p-8">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-teal-900 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Seller Portal</h2>
          <p className="text-sm text-slate-500 mt-1">Manage your e-commerce shipments</p>
        </div>

        <div className="flex gap-4 mb-6 border-b border-slate-200">
          <button 
            className={`pb-2 text-sm font-medium border-b-2 transition-colors flex-1 ${activeTab === 'login' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Sign In
          </button>
          <button 
            className={`pb-2 text-sm font-medium border-b-2 transition-colors flex-1 ${activeTab === 'register' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500'}`}
            onClick={() => setActiveTab('register')}
          >
            Register Business
          </button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <Input label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 focus:ring-teal-500">Sign In</Button>
            <div className="text-center text-xs text-slate-400 mt-4">Demo: arvind@trendycart.in / any password</div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <Input label="Business Name" placeholder="TrendyCart India" />
            <Input label="Email Address" type="email" placeholder="contact@trendycart.in" />
            <Input label="GST Number" placeholder="15-digit GSTIN" />
            <Input label="Password" type="password" placeholder="Create password" />
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 focus:ring-teal-500">Create Account</Button>
          </form>
        )}
      </Card>
    </div>
  );
}

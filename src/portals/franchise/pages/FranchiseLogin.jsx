import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import { Store } from 'lucide-react';

export default function FranchiseLogin() {
  const [email, setEmail] = useState('rajesh@mumbaiexpress.in');
  const [password, setPassword] = useState('franchise123');
  
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return addToast('Please enter email and password', 'error');
    
    if (login(email, password, 'franchise')) {
      addToast('Welcome back to your Franchise Portal');
      navigate('/franchise/dashboard');
    } else {
      addToast('Invalid credentials or access denied', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md" padding="p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Store className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Franchise Portal</h2>
          <p className="text-sm text-slate-500 mt-1">Manage operations and agents for your territory</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input 
            label="Email Address / Franchise ID" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="e.g. FR001" 
          />
          <Input 
            label="Password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="••••••••" 
          />
          
          <div className="flex items-center justify-between mt-2 mb-4">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
              Remember me
            </label>
            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">Forgot Password?</a>
          </div>

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-500">Sign In</Button>
          
          <div className="text-center text-xs text-slate-400 mt-4">
            Demo: rajesh@mumbaiexpress.in / any password
          </div>
        </form>
      </Card>
    </div>
  );
}

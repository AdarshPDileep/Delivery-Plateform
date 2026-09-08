import { useState } from 'react';
import { Eye, EyeOff, LockKeyhole, ShieldCheck } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';
import Button from '../../../components/ui/Button';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@commerzaglobal.local');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { loginWithAdminBackend } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      addToast('Please enter admin email and password', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await loginWithAdminBackend(email.trim(), password);
      addToast('Admin login successful');
      navigate(location.state?.from?.pathname || '/admin/dashboard', { replace: true });
    } catch (error) {
      addToast(error.message || 'Invalid admin credentials', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-900 to-black flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-black mb-2">Welcome Back!</h1>
          <p className="text-sm text-slate-500">Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="admin-email" className="block text-sm font-semibold text-black">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-black text-sm bg-white transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="admin-password" className="block text-sm font-semibold text-black">
              Password
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="Enter password"
                className="w-full px-4 py-3 pr-11 border border-slate-200 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-black text-sm bg-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(value => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-black rounded-md transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition-all focus:ring-4 focus:ring-red-600/20"
          >
            Login
          </Button>
        </form>

      </div>
    </div>
  );
}


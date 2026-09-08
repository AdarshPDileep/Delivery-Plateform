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
    <div className="min-h-screen bg-[#f4f6f8] text-slate-950 grid lg:grid-cols-[1fr_440px] font-sans">
      <section className="hidden lg:flex relative overflow-hidden bg-[#111111] text-white p-12 flex-col justify-between">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_0_30%,#E31837_30%_31%,transparent_31%_100%)] bg-[length:56px_56px]" />
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#E31837] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-lg font-semibold">Commerza Global Admin</span>
        </div>

        <div className="relative max-w-xl">
          <p className="text-sm text-slate-300 mb-4">Control center</p>
          <h1 className="text-5xl font-bold leading-tight tracking-normal">
            Operations access for shipment, seller, and franchise control.
          </h1>
        </div>

        <div className="relative grid grid-cols-3 gap-3 text-sm">
          <div className="border border-white/15 bg-white/5 rounded p-4">
            <p className="text-2xl font-semibold">24/7</p>
            <p className="text-slate-300 mt-1">Network oversight</p>
          </div>
          <div className="border border-white/15 bg-white/5 rounded p-4">
            <p className="text-2xl font-semibold">COD</p>
            <p className="text-slate-300 mt-1">Finance control</p>
          </div>
          <div className="border border-white/15 bg-white/5 rounded p-4">
            <p className="text-2xl font-semibold">ACL</p>
            <p className="text-slate-300 mt-1">Admin access</p>
          </div>
        </div>
      </section>

      <main className="flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="w-12 h-12 rounded bg-[#E31837] text-white flex items-center justify-center mb-5">
              <LockKeyhole className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-normal text-slate-950">Admin sign in</h2>
            <p className="text-sm text-slate-500 mt-2">Use your Commerza Global admin credentials.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="admin-email" className="text-sm font-medium text-slate-700 mb-1.5">Email address</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="username"
                className="px-3 py-2.5 border border-slate-300 rounded focus:outline-none focus:ring-4 focus:ring-[#E31837]/15 focus:border-[#E31837] text-slate-950 text-sm bg-white"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="admin-password" className="text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full px-3 py-2.5 pr-11 border border-slate-300 rounded focus:outline-none focus:ring-4 focus:ring-[#E31837]/15 focus:border-[#E31837] text-slate-950 text-sm bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(value => !value)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-slate-900 rounded"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="w-full bg-[#E31837] hover:bg-[#bf102b] focus:ring-[#E31837]"
            >
              Sign in
            </Button>
          </form>

          <div className="mt-6 text-xs text-slate-500 border border-slate-200 rounded p-3 bg-white">
            Backend endpoint: <span className="font-medium text-slate-700">/api/admin/login</span>
          </div>
        </div>
      </main>
    </div>
  );
}


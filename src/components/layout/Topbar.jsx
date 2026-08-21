import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Avatar from '../ui/Avatar';

export default function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    if (user?.portal === 'admin') navigate('/admin/login');
    else if (user?.portal === 'franchise') navigate('/franchise/login');
    else if (user?.portal === 'seller') navigate('/seller/login');
    else navigate('/');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        
        <div className="h-6 w-px bg-slate-200 mx-1" />
        
        <div className="flex items-center gap-3 group relative">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-slate-700">{user?.name || 'User'}</p>
            <p className="text-xs text-slate-500">{user?.role || 'Guest'}</p>
          </div>
          <Avatar name={user?.name || 'User'} size="sm" />
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
            <div className="p-1">
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginSelection() {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'seller',
      title: 'Seller / Merchant',
      description: 'Login to manage your orders, track shipments, and view COD remittances.',
      icon: Store,
      path: '/seller/login',
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'hover:border-blue-500'
    },
    {
      id: 'franchise',
      title: 'Franchise Partner',
      description: 'Access the operations dashboard to manage pickups, deliveries, and manifests.',
      icon: Users,
      path: '/franchise/login',
      color: 'bg-emerald-50 text-emerald-600',
      borderColor: 'hover:border-emerald-500'
    },
    {
      id: 'admin',
      title: 'Administration',
      description: 'Super Admin control tower for network management and system settings.',
      icon: ShieldCheck,
      path: '/admin/login',
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'hover:border-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#111111] skew-y-3 transform origin-top-left -translate-y-10"></div>
      
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Welcome to Commerza<span className="text-[#E31837]">Global</span>
          </h2>
          <p className="text-gray-300 text-lg">Select your portal to continue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <div 
                key={portal.id}
                onClick={() => navigate(portal.path)}
                className={`bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent ${portal.borderColor} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-xl ${portal.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{portal.title}</h3>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed mb-6">
                  {portal.description}
                </p>
                
                <div className="mt-auto flex items-center font-medium text-[#E31837] group-hover:gap-2 transition-all">
                  Proceed to Login <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Don't have an account yet?{' '}
            <button 
              onClick={() => navigate('/seller/signup')}
              className="font-bold text-[#E31837] hover:underline"
            >
              Sign up as a Seller
            </button>
          </p>
          <div className="mt-6 flex justify-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-gray-600 font-medium text-sm transition-colors"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

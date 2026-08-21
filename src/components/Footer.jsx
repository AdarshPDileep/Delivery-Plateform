import { Truck, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Commerza<span className="text-accent-400">Global</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reliable delivery and logistics solutions for businesses of all sizes.
              Track your shipments in real-time with our platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/track', label: 'Track Shipment' },
                { to: '/book', label: 'Book Shipment' },
                { to: '/admin/login', label: 'Admin Login' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-accent-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                {/* TODO: Replace with actual email */}
                support@commerzaglobal.com
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                {/* TODO: Replace with actual phone */}
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                {/* TODO: Replace with actual address */}
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Commerza Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

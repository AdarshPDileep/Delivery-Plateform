import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <span className="font-extrabold text-3xl tracking-tight text-[#E31837] mb-6 block">
              Commerza<span className="text-white">Global</span>
            </span>
            <p className="text-gray-400 max-w-sm mb-6">
              Commerza Global is India's largest integrated logistics service provider. We provide express parcel, warehousing, cross-border, fulfilment, and supply chain solutions.
            </p>
            <div className="flex gap-4">
              {/* Mock Social Icons */}
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] transition-colors cursor-pointer text-white">
                In
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] transition-colors cursor-pointer text-white">
                Tw
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] transition-colors cursor-pointer text-white">
                Fb
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Express Parcel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partial-Truckload</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cross-Border</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Raise a Query</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Commerza Global. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <span>ISO 9001: 2015 Certified</span>
            <span>ISO 27001: 2013 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

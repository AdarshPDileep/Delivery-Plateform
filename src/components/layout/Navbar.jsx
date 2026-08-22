import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Menu, User, Package, Factory, Truck, Globe, Map, ShieldCheck, Zap, Server, Send, 
  Store, UserCircle, Building2, Crosshair, Users, Bike, GraduationCap 
} from 'lucide-react';
import TrackingModal from './TrackingModal';

const dropdownServices = [
  { id: 'express-parcel', name: 'Express Parcel', icon: Package, path: '/services/express-parcel' },
  { id: 'warehousing', name: 'Warehousing', icon: Factory, path: '/services/warehousing' },
  { id: 'part-truckload', name: 'Part Truckload', icon: Truck, path: '/services/part-truckload' },
  { id: 'full-truckload', name: 'Full Truckload', icon: Truck, path: '/services/full-truckload' },
  { id: 'international', name: 'International', icon: Globe, path: '/services/international' },
  { id: 'local-delivery', name: 'Local Delivery', icon: Send, path: '/services/local-delivery' },
  { id: 'transport-one', name: 'TransportOne', icon: Zap, path: '/services/transport-one' },
  { id: 'data-intelligence', name: 'Data Intelligence', icon: Server, path: '/services/data-intelligence' },
  { id: 'commerza-maps', name: 'Commerza Maps', icon: Map, isBeta: true, path: '/services/commerza-maps' },
];

const dropdownSolutions = [
  { id: 'd2c-brands', name: 'D2C Brands', icon: Store, path: '/solutions/d2c-brands' },
  { id: 'personal-courier', name: 'Personal Courier', icon: UserCircle, path: '/solutions/personal-courier' },
  { id: 'b2b-enterprises', name: 'B2B Enterprises', icon: Building2, path: '/solutions/b2b-enterprises' },
  { id: 'rto-predictor', name: 'RTO Predictor', icon: Crosshair, path: '/solutions/rto-predictor' },
];

const dropdownPartners = [
  { id: 'franchise-opportunities', name: 'Franchise Opportunities', icon: Users, path: '/partners/franchise-opportunities' },
  { id: 'delivery-partner', name: 'Delivery Partner', icon: Bike, path: '/partners/delivery-partner' },
  { id: 'fleet-owners', name: 'Fleet Owners', icon: Truck, path: '/partners/fleet-owners' },
  { id: 'school-of-logistics', name: 'Commerza School of Logistics', icon: GraduationCap, path: '/partners/school-of-logistics' },
];

const dropdownCompany = [
  { id: 'about-us', name: 'About Us', icon: Building2, path: '/company/about-us' },
  { id: 'governance', name: 'Governance', icon: ShieldCheck, path: '/company/governance' },
  { id: 'press-release', name: 'Press Release', icon: Send, path: '/company/press-release' },
  { id: 'careers', name: 'Careers', icon: Users, path: '/company/careers' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const renderDropdown = (items, isActive) => (
    isActive && (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-lg shadow-2xl py-2 overflow-hidden border border-gray-100 mt-2">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 transform border-l border-t border-gray-100"></div>
        <div className="relative z-10 flex flex-col">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.id} 
                to={item.path}
                className="px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-[#E31837] group/item"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-red-50 text-gray-500 group-hover/item:text-[#E31837] transition-colors flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm flex-1">{item.name}</span>
                {item.isBeta && (
                  <span className="text-[10px] text-[#E31837] font-bold">Beta</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    )
  );

  return (
    <nav className="bg-[#111111] border-b border-gray-800 px-6 h-20 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-10 h-full">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <span className="font-extrabold text-3xl tracking-tight text-[#E31837]">
            Commerza<span className="text-white">Global</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center h-full gap-8">

          {/* Services Dropdown */}
          <div 
            className="relative h-full flex items-center group cursor-pointer"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={`text-white font-medium flex items-center gap-1 transition-colors relative h-full pt-[2px]`}>
              Services
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#E31837] rounded-t-sm transition-transform duration-300 origin-center ${activeDropdown === 'services' ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
            {renderDropdown(dropdownServices, activeDropdown === 'services')}
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative h-full flex items-center group cursor-pointer"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={`text-gray-300 font-medium group-hover:text-white flex items-center gap-1 transition-colors relative h-full pt-[2px]`}>
              Solutions
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#E31837] rounded-t-sm transition-transform duration-300 origin-center ${activeDropdown === 'solutions' ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
            {renderDropdown(dropdownSolutions, activeDropdown === 'solutions')}
          </div>

          {/* Partners Dropdown */}
          <div 
            className="relative h-full flex items-center group cursor-pointer"
            onMouseEnter={() => setActiveDropdown('partners')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={`text-gray-300 font-medium group-hover:text-white flex items-center gap-1 transition-colors relative h-full pt-[2px]`}>
              Partners
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#E31837] rounded-t-sm transition-transform duration-300 origin-center ${activeDropdown === 'partners' ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
            {renderDropdown(dropdownPartners, activeDropdown === 'partners')}
          </div>

          {/* Company Dropdown */}
          <div 
            className="relative h-full flex items-center group cursor-pointer"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={`text-gray-300 font-medium group-hover:text-white flex items-center gap-1 transition-colors relative h-full pt-[2px]`}>
              Company
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#E31837] rounded-t-sm transition-transform duration-300 origin-center ${activeDropdown === 'company' ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
            {renderDropdown(dropdownCompany, activeDropdown === 'company')}
          </div>

          <button 
            onClick={() => setIsTrackingOpen(true)}
            className="text-gray-300 font-medium hover:text-white transition-colors relative h-full group"
          >
            Tracking
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E31837] rounded-t-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => navigate('/auth/login')}
          className="hidden md:flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors"
        >
          <User className="w-5 h-5" />
          <span>Login</span>
        </button>
        <button 
          onClick={() => navigate('/seller/signup')}
          className="hidden md:block bg-[#E31837] hover:bg-[#c0122e] text-white px-6 py-2.5 rounded-full font-bold transition-colors"
        >
          Sign Up
        </button>
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <TrackingModal 
        isOpen={isTrackingOpen} 
        onClose={() => setIsTrackingOpen(false)} 
      />
    </nav>
  );
}

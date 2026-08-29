import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Circle, Truck, Globe } from 'lucide-react';
import heroImage from '../../assets/hero-logistics.jpg';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('track'); // 'track' | 'ship'
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackType, setTrackType] = useState('mobile');
  const [shipType, setShipType] = useState('domestic'); // 'domestic' | 'international'
  
  const navigate = useNavigate();

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track/${trackingNumber.trim()}`);
    }
  };

  return (
    <div className="relative w-full min-h-[650px] lg:h-[750px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image & Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 pb-20 lg:py-0">
        
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
            <span className="italic font-light">We are India's largest fully integrated</span><br />
            <span className="italic text-[#E31837]">logistics services</span> <span className="italic font-light">provider</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 text-white font-medium mt-8 text-sm md:text-base">
            <span>Express Parcel</span>
            <div className="w-1.5 h-1.5 bg-[#E31837]"></div>
            <span>PTL</span>
            <div className="w-1.5 h-1.5 bg-[#E31837]"></div>
            <span>FTL</span>
            <div className="w-1.5 h-1.5 bg-[#E31837]"></div>
            <span>International</span>
            <div className="w-1.5 h-1.5 bg-[#E31837]"></div>
            <span>Supply Chain</span>
          </div>

          <div className="w-12 h-12 bg-[#E31837] mt-16 lg:mt-32"></div>
        </div>

        {/* Right Content - Widget */}
        <div className="w-full max-w-[480px]">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full text-left relative z-20">
            {/* Top Tabs */}
            <div className="flex items-center gap-6 border-b border-gray-100 mb-6">
              <button 
                onClick={() => setActiveTab('track')}
                className={`font-bold text-lg pb-4 border-b-4 transition-colors ${activeTab === 'track' ? 'text-gray-900 border-[#E31837]' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
              >
                Track order
              </button>
              <button 
                onClick={() => setActiveTab('ship')}
                className={`font-bold text-lg pb-4 border-b-4 transition-colors ${activeTab === 'ship' ? 'text-gray-900 border-[#E31837]' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
              >
                Ship order
              </button>
            </div>

            {activeTab === 'track' ? (
              // Tracking Form
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Track <span className="font-normal text-gray-700">your order through</span>
                </h2>

                <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-6">
                  {['mobile', 'awb', 'orderId', 'lrn'].map((type) => (
                    <button 
                      key={type}
                      className={`flex-1 py-3 text-sm font-semibold transition-colors ${trackType === type ? 'bg-[#111111] text-white' : 'bg-white text-gray-400 hover:bg-gray-50 border-l border-gray-200 first:border-l-0'}`}
                      onClick={() => setTrackType(type)}
                      type="button"
                    >
                      {type === 'mobile' ? 'Mobile' : type === 'awb' ? 'AWB' : type === 'orderId' ? 'Order Id' : 'LRN'}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleTrack}>
                  <div className="mb-6">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder={
                        trackType === 'mobile' ? 'Enter your mobile number' : 
                        trackType === 'awb' ? 'Enter AWB number' : 
                        trackType === 'orderId' ? 'Enter Order Id' : 'Enter LRN'
                      }
                      className="w-full h-12 px-4 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  
                  <button type="submit" className="w-full h-12 bg-[#111111] hover:bg-black text-white font-bold rounded-lg transition-colors">
                    {trackType === 'mobile' ? 'Get OTP' : 'Track Order'}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 font-medium mb-4">Live tracking updates & extra support on our App</p>
                  <div className="flex items-center justify-center gap-4">
                    <button className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Ship Order Form
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ship <span className="font-normal text-gray-700">personal courier</span>
                </h2>

                <div className="flex border border-gray-200 rounded-full p-1 mb-6">
                  <button 
                    className={`flex-1 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all ${shipType === 'domestic' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
                    onClick={() => setShipType('domestic')}
                    type="button"
                  >
                    <Truck className="w-4 h-4" /> Domestic
                  </button>
                  <button 
                    className={`flex-1 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all ${shipType === 'international' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
                    onClick={() => setShipType('international')}
                    type="button"
                  >
                    <Globe className="w-4 h-4" /> International
                  </button>
                </div>

                <div className="flex gap-4 mb-6">
                  <div className="flex flex-col items-center mt-3 text-gray-300">
                    <Circle className="w-4 h-4 text-gray-400" />
                    <div className="flex-1 w-px border-l-2 border-dashed border-gray-300 my-1"></div>
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <input
                      type="text"
                      placeholder="Enter pickup pin code"
                      className="w-full h-12 px-4 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Enter delivery pin code"
                      className="w-full h-12 px-4 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <button type="button" className="w-full h-12 bg-[#111111] hover:bg-black text-white font-bold rounded-lg transition-colors mb-4">
                  Get OTP & Ship Now
                </button>
                
                <div className="text-center">
                  <a href="#" className="text-[#E31837] text-sm hover:underline font-medium">Sign up to ship as a business here</a>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

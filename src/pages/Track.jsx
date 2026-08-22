import React, { useEffect, useState } from 'react';
import { ArrowRight, Apple, Play } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Track() {
  const [activeTab, setActiveTab] = useState('Mobile');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Why is my package delayed?",
    "What do I do if tracking page doesn't show the expected date of arrival?",
    "How can I get the contact number of my delivery partner?",
    "What should I do if I am not available at the time of delivery?",
    "My shipment has been returned/cancelled. What should I do?"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#111111] overflow-x-hidden">
      <Navbar />
      
      {/* Red Notice Bar */}
      <div className="bg-[#e31837] text-white text-xs py-2 px-4 whitespace-nowrap overflow-hidden flex items-center font-bold">
        <div className="animate-marquee flex gap-12">
          <span>■ Commerza Global does not require OTP or credentials for address confirmation for your delivery</span>
          <span>■ Payment links that are not shared from Commerza Global's official accounts are fraudulent</span>
          <span>■ Our Customer Support team is reachable only from our website or app.</span>
          {/* Duplicate for infinite loop effect */}
          <span>■ Commerza Global does not require OTP or credentials for address confirmation for your delivery</span>
        </div>
      </div>

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <div className="relative w-full bg-[#EAE8E3] min-h-[500px] flex flex-col md:flex-row items-stretch">
          
          {/* Left: Text & App Buttons */}
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-10 bg-gradient-to-r from-black/60 to-transparent">
            {/* Background Image Overlay for left side */}
            <div className="absolute inset-0 z-[-1]">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200" 
                alt="Boxes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Documents, Packages, and Everything Else
            </h1>
            <p className="text-2xl font-bold text-white mb-10">Courier Anything, Anywhere!</p>
            
            <div className="flex gap-4">
              <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-none mt-1">App Store</div>
                </div>
              </button>
              <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <Play className="w-6 h-6" fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Tracking Box */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-cover bg-center relative z-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200')"}}>
             <div className="absolute inset-0 bg-black/10"></div>
            
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative z-20 my-10 md:my-0">
              <h2 className="text-2xl font-bold text-center mb-8 text-black">
                Track your <span className="font-normal text-gray-600">order</span>
              </h2>
              
              <div className="flex border border-gray-200 rounded mb-6 text-sm font-medium">
                {['Mobile', 'AWB', 'Order Id', 'LRN'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-center transition-colors ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <input 
                type="text" 
                placeholder={`Enter your ${activeTab.toLowerCase()}${activeTab === 'Mobile' ? ' number' : ''}`}
                className="w-full p-4 border border-gray-200 rounded mb-6 outline-none focus:border-black transition-colors"
              />
              
              <button className="w-full bg-black text-white font-bold py-4 rounded hover:bg-gray-900 transition-colors">
                {activeTab === 'Mobile' ? 'Get OTP & Track' : 'Track Order'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left: FAQs */}
          <div className="w-full md:w-1/2 p-12 md:p-24 bg-white text-black">
            <h3 className="text-2xl font-bold mb-8 inline-block relative">
              FAQs
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#e31837]"></div>
            </h3>

            <div className="space-y-4 mb-10">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-black pl-4 py-1">
                  <button 
                    onClick={() => toggleFaq(idx)} 
                    className="text-left font-bold hover:text-[#e31837] transition-colors text-lg"
                  >
                    {faq}
                  </button>
                  {openFaq === idx && (
                    <p className="mt-2 text-gray-600 text-sm">
                      Please log in to your account or contact our customer support for detailed assistance regarding this issue.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button className="bg-black text-white px-6 py-3 font-bold text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Need More Help? <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Feature Cards */}
          <div className="w-full md:w-1/2 bg-[#111111] p-12 md:p-24 relative overflow-hidden flex flex-col gap-8 justify-center">
            
            {/* Card 1 */}
            <div className="w-full max-w-sm self-start group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800" alt="Ship to friends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="flex justify-end">
                 <p className="text-white font-medium flex items-center gap-2 group-hover:text-[#e31837] transition-colors">
                  Ship to your friends <ArrowRight className="w-4 h-4 text-[#e31837]" />
                 </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-sm self-end group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" alt="For Businesses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-4 right-0 w-4 h-4 bg-[#e31837]"></div>
              </div>
              <div className="flex justify-end">
                 <p className="text-white font-medium flex items-center gap-2 group-hover:text-[#e31837] transition-colors">
                  For Businesses <ArrowRight className="w-4 h-4 text-[#e31837]" />
                 </p>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}

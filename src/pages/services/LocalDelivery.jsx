import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronRight, Plus, Minus, Search, Check, Smartphone } from 'lucide-react';

export default function LocalDelivery() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "How do I book an intra-city local delivery with Delhivery?",
      a: "You can easily book a delivery using the Delhivery app available on Google Play and the Apple App Store. Once you install the app, fill in the from & to details, select your pickup and drop-off locations, choose your vehicle, and proceed to book your delivery."
    },
    { q: "How are the delivery charges calculated?", a: "Charges are calculated based on the distance between pickup and drop locations, the vehicle selected, and the time of day." },
    { q: "What items can be sent on Delhivery Local?", a: "You can send documents, parcels, groceries, electronics, and small furniture. Please ensure items are properly packed." },
    { q: "What are the restricted items?", a: "We do not deliver hazardous materials, illegal goods, explosives, or live animals." }
  ];

  const features = [
    {
      title: "Vehicle types",
      content: "Select from 2-wheelers, 3-wheelers, and pick-up trucks based on your shipment needs."
    },
    { title: "Multi-stop Deliveries", content: "Add multiple drop-off points in a single booking to optimize your routes and save costs." },
    { title: "Live Tracking", content: "Track your delivery agent in real-time from the moment of pickup until the final drop-off." },
    { title: "Proof of Delivery", content: "Get secure OTP-based delivery confirmation and digital signatures for all your shipments." }
  ];

  const cities = [
    { name: "Bengaluru", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80" },
    { name: "Mumbai", img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=400&q=80" },
    { name: "Delhi NCR", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80" },
    { name: "Hyderabad", img: "https://images.unsplash.com/photo-1574712061058-2947a7bf755a?auto=format&fit=crop&w=400&q=80" },
    { name: "Ahmedabad", img: "https://images.unsplash.com/photo-1605649487212-4d51b3d6439f?auto=format&fit=crop&w=400&q=80" },
    { name: "Pune", img: "https://images.unsplash.com/photo-1598007622830-1c3905e94b29?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-lg pt-4">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black leading-[1.15] mb-10 tracking-tight">
            One app to <span className="text-[#f62c2c]">send</span><br/>
            <span className="text-[#f62c2c]">anything anywhere</span><br/>
            in your city
          </h1>
          
          <div className="bg-black text-white p-3 rounded-[20px] flex items-center gap-4 max-w-fit shadow-lg mt-4">
            <div className="bg-white p-1.5 rounded-[14px]">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=commerzaglobal" alt="QR" className="w-16 h-16 rounded-lg" />
            </div>
            <div className="flex flex-col justify-center pr-6">
              <p className="font-bold text-[17px] mb-2 leading-none tracking-tight">Download the App</p>
              <div className="flex gap-2">
                <div className="bg-white text-black text-[9px] px-2.5 py-1.5 rounded flex items-center gap-1.5 font-bold cursor-pointer hover:bg-gray-100 transition">
                  <Smartphone className="w-3.5 h-3.5" /> Google Play
                </div>
                <div className="bg-white text-black text-[9px] px-2.5 py-1.5 rounded flex items-center gap-1.5 font-bold cursor-pointer hover:bg-gray-100 transition">
                  <Smartphone className="w-3.5 h-3.5" /> App Store
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full flex justify-center md:justify-end md:pr-16">
          {/* Mock Mobile App screen (CSS Replica) */}
          <div className="relative">
            {/* Physical Buttons */}
            <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-300 rounded-l-md border border-gray-400"></div>
            <div className="absolute top-36 -left-1 w-1 h-12 bg-gray-300 rounded-l-md border border-gray-400"></div>
            <div className="absolute top-52 -left-1 w-1 h-12 bg-gray-300 rounded-l-md border border-gray-400"></div>
            <div className="absolute top-36 -right-1 w-1 h-16 bg-gray-300 rounded-r-md border border-gray-400"></div>

            <div className="relative w-full max-w-[310px] aspect-[1/2.15] bg-[#f8f9fa] rounded-[50px] shadow-2xl border-[12px] border-[#333] overflow-hidden ring-[2px] ring-[#555] ring-inset flex flex-col">
              
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] font-bold text-black z-20">
                <span>10:49</span>
                <div className="flex gap-1.5 items-center">
                  <span>5G</span>
                  <div className="w-5 h-2.5 border border-black rounded-[3px] p-[1px] flex justify-start">
                    <div className="bg-black w-3/4 h-full rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#333] rounded-b-[20px] z-30"></div>

              {/* App UI Content */}
              <div className="flex-1 bg-[#f4f5f7] flex flex-col">
                {/* Header Search */}
                <div className="px-5 pt-3 pb-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 text-[#f62c2c] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2L22 20H2L12 2Z" transform="rotate(180 12 11)"/></svg>
                    </div>
                    <span className="font-bold text-[13px] text-gray-800">Pickup From</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    <div className="ml-auto flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-500" />
                      <div className="bg-white text-[10px] font-bold px-2 py-1.5 rounded-md border border-gray-200 text-gray-600 flex items-center gap-1 shadow-sm">
                        <span className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-[8px]">?</span> Help
                      </div>
                    </div>
                  </div>
                </div>

                {/* Red Banner */}
                <div className="px-5 mb-3">
                  <div className="bg-[#f62c2c] rounded-[20px] p-5 pb-4 text-white relative h-40 shadow-md">
                    <p className="text-[11px] font-semibold opacity-90 mb-0.5">Introducing</p>
                    <h3 className="text-xl font-bold leading-tight mb-2 max-w-[140px]">Multi-Stop Deliveries</h3>
                    <p className="text-[10px] opacity-90 max-w-[120px] mb-4 leading-snug">Book multiple pickups and drops at one go</p>
                    <button className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-lg shadow-sm">Book Now</button>
                    {/* Decorative truck placeholder */}
                    <div className="absolute -right-6 bottom-2 w-32 h-24 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center rounded-xl transform -rotate-12 opacity-80 mix-blend-screen shadow-2xl border-4 border-white"></div>
                  </div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-1 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  <div className="w-4 h-1.5 rounded-full bg-gray-300"></div>
                </div>

                {/* Bottom Cards */}
                <div className="px-5 grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 h-[110px] flex flex-col justify-end relative">
                    <div className="absolute top-2 right-2 w-14 h-12">
                       <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover rounded-lg" alt="bike" />
                    </div>
                    <h4 className="font-bold text-[11px] text-gray-900 leading-tight mb-1">Book Bike/Truck</h4>
                    <p className="text-[9px] text-gray-500 font-medium">⚡ Fast Pickup</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 h-[110px] flex flex-col justify-end relative">
                    <div className="absolute top-3 right-3 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl shadow-inner border border-gray-200">
                      📦
                    </div>
                    <h4 className="font-bold text-[11px] text-gray-900 leading-tight mb-1">National Courier</h4>
                    <p className="text-[9px] text-gray-500 font-medium">↓ Price Drop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-1">
              4.0 <Star className="w-6 h-6 fill-black" />
            </h3>
            <p className="text-gray-500 mt-2 text-sm">Play store rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">10M+</h3>
            <p className="text-gray-500 mt-2 text-sm">App downloads</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">20L+</h3>
            <p className="text-gray-500 mt-2 text-sm">Sellers onboarded</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">1L+</h3>
            <p className="text-gray-500 mt-2 text-sm">Pincodes served</p>
          </div>
        </div>
      </section>

      {/* Built for everyone */}
      <section className="bg-[#111111] py-20 lg:py-28 px-6 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">Built for everyone</h2>
          <p className="text-gray-400 mb-16 text-sm lg:text-base">Whether you are a business or an individual, we have got you covered</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#f62c2c]"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">Retailers & Wholesalers</h3>
                  <span className="text-[#f62c2c] text-xs font-bold px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">B2B Delivery</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">Streamline multi-point drops and scheduled bulk orders with our B2B specialized network.</p>
                <div className="h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&w=800&q=80" alt="Retailers" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">Multiple pickups and drops</span>
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">Agent onboarding</span>
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">Assured Delivery</span>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#f62c2c]"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">Individuals</h3>
                  <span className="text-[#f62c2c] text-xs font-bold px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">B2C & P2P</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">Send items instantly to friends, family, or customers anywhere across your city.</p>
                <div className="h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620608756597-9e6e33ce107a?auto=format&fit=crop&w=800&q=80" alt="Individuals" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">Courier delivery</span>
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">Document delivery</span>
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">House shifting</span>
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">P2P Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything in One App */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Everything in <span className="text-gray-500">One App</span></h2>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center">
            {/* Phone Hand Mockup */}
            <div className="relative w-64 md:w-80 rounded-[40px] overflow-hidden shadow-2xl border-[10px] border-gray-900 bg-white">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80" alt="App Interface" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="border-t border-gray-200">
              {features.map((feature, idx) => (
                <div key={idx} className="border-b border-gray-200">
                  <button 
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                    onClick={() => setActiveFeature(activeFeature === idx ? -1 : idx)}
                  >
                    <span className="font-bold text-lg text-gray-900">{feature.title}</span>
                    {activeFeature === idx ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                  </button>
                  {activeFeature === idx && (
                    <div className="pb-6 text-gray-600 text-sm pr-8 leading-relaxed">
                      {feature.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pick what fits your load */}
      <section className="bg-[#111111] py-20 lg:py-28 px-6 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">Pick what fits your load</h2>
          <p className="text-gray-400 mb-16 text-sm lg:text-base">Vehicles for your needs</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Bike */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f62c2c]/10 rounded-full blur-3xl group-hover:bg-[#f62c2c]/20 transition-all"></div>
              {/* Semicircle graphic background like in screenshot */}
              <div className="w-full aspect-video bg-[#ffe5e5] rounded-t-full mb-6 relative flex items-end justify-center pt-8">
                 <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80" alt="Bike 2w" className="w-3/4 object-cover drop-shadow-xl z-10 rounded-lg -mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-20">Bike 2w</h3>
              <p className="text-gray-400 text-xs relative z-20">20kgs • 40 x 40 x 40</p>
            </div>
            
            {/* 3 Wheeler */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f62c2c]/10 rounded-full blur-3xl group-hover:bg-[#f62c2c]/20 transition-all"></div>
              <div className="w-full aspect-video bg-[#ffe5e5] rounded-t-full mb-6 relative flex items-end justify-center pt-8">
                 <img src="https://images.unsplash.com/photo-1593026042971-ce443b7493a3?auto=format&fit=crop&w=300&q=80" alt="3 Wheeler" className="w-3/4 object-cover drop-shadow-xl z-10 rounded-lg -mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-20">3 Wheeler</h3>
              <p className="text-gray-400 text-xs relative z-20">500kgs • 150 x 140 x 130</p>
            </div>

            {/* Tata Ace */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f62c2c]/10 rounded-full blur-3xl group-hover:bg-[#f62c2c]/20 transition-all"></div>
              <div className="w-full aspect-video bg-[#ffe5e5] rounded-t-full mb-6 relative flex items-end justify-center pt-8">
                 <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=300&q=80" alt="Tata Ace" className="w-3/4 object-cover drop-shadow-xl z-10 rounded-lg -mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-20">Tata Ace</h3>
              <p className="text-gray-400 text-xs relative z-20">750kgs • 210 x 150 x 140</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">FAQs</h2>
          
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Type to find answer quickly for" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:outline-none" />
          </div>

          <div className="border-t border-gray-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button 
                  className="w-full flex items-start text-left py-6 focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 mr-4 flex-shrink-0 mt-0.5">
                    {activeFaq === idx ? <Minus className="w-3 h-3 text-[#f62c2c]" /> : <Plus className="w-3 h-3" />}
                  </div>
                  <span className={`font-bold flex-1 pr-4 ${activeFaq === idx ? 'text-gray-900' : 'text-gray-800'}`}>{faq.q}</span>
                </button>
                {activeFaq === idx && (
                  <div className="pb-6 pl-10 text-gray-600 text-sm leading-relaxed pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="text-[#f62c2c] font-bold text-sm hover:underline">Read More &rarr;</button>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="bg-black py-16 px-6 text-white text-center border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-white">Live in 6 cities, more to be launched soon</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden w-32 h-20 group cursor-default">
                <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="font-bold text-sm text-white drop-shadow-md">{city.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-bl-full -z-10"></div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              The easiest way to send<br/>parcels across the city.
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               {/* Play Store Button */}
               <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition">
                 <Smartphone className="w-6 h-6" />
                 <div className="text-left">
                   <p className="text-[10px] uppercase text-gray-300 font-semibold tracking-wider">Get it on</p>
                   <p className="font-bold leading-none">Google Play</p>
                 </div>
               </button>
               {/* App Store Button */}
               <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition">
                 <Smartphone className="w-6 h-6" />
                 <div className="text-left">
                   <p className="text-[10px] uppercase text-gray-300 font-semibold tracking-wider">Download on the</p>
                   <p className="font-bold leading-none">App Store</p>
                 </div>
               </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
              <p className="text-sm font-bold text-gray-900 mb-4 max-w-[120px]">Scan the QR code to download the app</p>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=commerzaglobal-app" alt="QR Code" className="w-24 h-24 mb-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

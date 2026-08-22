import React, { useEffect } from 'react';
import { 
  Bike, Smartphone, Navigation, MapPin, DollarSign, Headset, 
  ArrowRight, Camera, Key, CheckCircle2, QrCode, AlertCircle
} from 'lucide-react';

export default function DeliveryPartner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-red-50 text-gray-900 pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b border-red-100 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-[#e31837] font-bold text-sm tracking-wide mb-6">
              <Bike className="w-4 h-4" /> FOR DELIVERY EXECUTIVES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Deliver with <span className="text-[#e31837]">Commerza Global</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Join our delivery network, manage pickup and delivery tasks through the Commerza Global delivery app, and serve customers in your local area.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-500/30">
                Become a Delivery Partner
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors border border-gray-200">
                Learn How It Works
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full flex justify-center">
            {/* Delivery App Phone Mockup */}
            <div className="w-[300px] h-[600px] bg-[#111111] rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-t-[2rem]"></div>
              
              {/* App Header */}
              <div className="bg-[#e31837] pt-8 pb-6 px-6 text-white rounded-b-2xl relative z-10 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs font-bold text-red-200 uppercase tracking-wider">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                      <h2 className="font-bold">On Duty</h2>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Headset className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                    <p className="text-xs text-red-100 font-bold mb-1">Pickups</p>
                    <p className="text-2xl font-black">05</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                    <p className="text-xs text-red-100 font-bold mb-1">Deliveries</p>
                    <p className="text-2xl font-black">18</p>
                  </div>
                </div>
              </div>

              {/* App Body */}
              <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">COD to Collect</p>
                  <p className="text-xl font-black text-[#e31837]">₹8,450</p>
                </div>
                
                <h3 className="font-bold text-gray-900 text-sm pl-1 pt-2">Current Task</h3>
                <div className="bg-white p-4 rounded-xl shadow border border-[#e31837] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#e31837]"></div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase">DELIVERY</span>
                    <span className="text-xs font-bold text-gray-500">2.4 km away</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 truncate">Rajesh Kumar</h4>
                  <p className="text-xs text-gray-500 mb-3 truncate">Tc 14/123, Kazhakkoottam, Trivandrum</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-900 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-1">
                      <Navigation className="w-3 h-3" /> Navigate
                    </button>
                    <button className="flex-1 bg-green-500 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-1">
                      <QrCode className="w-3 h-3" /> Scan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-200/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Why Join? */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Why Join Commerza Global?
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <MapPin className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Local Delivery Opportunities</h3>
              <p className="text-gray-600 text-sm font-medium">Work in an assigned delivery territory near your location for better route efficiency.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <Smartphone className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile App</h3>
              <p className="text-gray-600 text-sm font-medium">Receive all your pickup and delivery tasks directly through our intuitive mobile application.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <Navigation className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Navigation Support</h3>
              <p className="text-gray-600 text-sm font-medium">Use integrated map-based navigation to easily find customer locations without hassle.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <QrCode className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Delivery Tracking</h3>
              <p className="text-gray-600 text-sm font-medium">Complete tasks effortlessly through shipment barcode scanning and digital proof of delivery.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <DollarSign className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Earnings Visibility</h3>
              <p className="text-gray-600 text-sm font-medium">Track your completed delivery activity, collected COD, and settlements directly in the app.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <Headset className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Franchise Support</h3>
              <p className="text-gray-600 text-sm font-medium">Get immediate assistance and support from your assigned local town franchise manager.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Workflow */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">The Delivery Workflow</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our mobile application streamlines every step of the delivery process.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-gray-800 -z-10 -translate-y-1/2"></div>
            
            <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800 shadow-xl relative z-10 hover:border-[#e31837] transition-colors">
              <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-700">
                <Smartphone className="w-6 h-6 text-[#e31837]" />
              </div>
              <h4 className="font-bold mb-2">1. Receive Task</h4>
              <p className="text-xs text-gray-400">Go On Duty and receive assigned runsheets.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800 shadow-xl relative z-10 hover:border-[#e31837] transition-colors">
              <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-700">
                <Navigation className="w-6 h-6 text-[#e31837]" />
              </div>
              <h4 className="font-bold mb-2">2. Navigate</h4>
              <p className="text-xs text-gray-400">Use GPS to reach the pickup or delivery location.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800 shadow-xl relative z-10 hover:border-[#e31837] transition-colors">
              <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-700">
                <QrCode className="w-6 h-6 text-[#e31837]" />
              </div>
              <h4 className="font-bold mb-2">3. Scan & Collect</h4>
              <p className="text-xs text-gray-400">Scan barcodes and collect COD if applicable.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800 shadow-xl relative z-10 hover:border-[#e31837] transition-colors">
              <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-700">
                <Camera className="w-6 h-6 text-[#e31837]" />
              </div>
              <h4 className="font-bold mb-2">4. Proof of Delivery</h4>
              <p className="text-xs text-gray-400">Capture OTP, signature, or a geo-tagged photo.</p>
            </div>
          </div>
          
          {/* Failed / COD Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h4 className="font-bold text-xl mb-4 text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" /> Non-Delivery Handling
              </h4>
              <p className="text-sm text-gray-400 mb-4">Easily report failed deliveries directly from the app.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold bg-gray-900 text-gray-300 px-3 py-1.5 rounded border border-gray-700">Customer Unavailable</span>
                <span className="text-xs font-bold bg-gray-900 text-gray-300 px-3 py-1.5 rounded border border-gray-700">Incorrect Address</span>
                <span className="text-xs font-bold bg-gray-900 text-gray-300 px-3 py-1.5 rounded border border-gray-700">Customer Refused</span>
                <span className="text-xs font-bold bg-gray-900 text-gray-300 px-3 py-1.5 rounded border border-gray-700">Reschedule Delivery</span>
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h4 className="font-bold text-xl mb-4 text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" /> COD Management
              </h4>
              <p className="text-sm text-gray-400 mb-6">Track cash collected and submit deposits to your franchise.</p>
              <div className="flex justify-between items-end border-b border-gray-700 pb-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Cash in Hand</p>
                  <p className="text-3xl font-black text-white">₹8,200</p>
                </div>
                <button className="bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-4 py-2 rounded transition-colors">
                  Submit Deposit
                </button>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Collected Today: <strong className="text-white">₹12,450</strong></span>
                <span className="text-gray-400">Deposited: <strong className="text-white">₹4,250</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-black mb-2 text-gray-900 text-center">Register as a Delivery Partner</h2>
            <p className="text-center text-gray-500 mb-10">Fill out your details to join our growing delivery network.</p>
            
            <form className="space-y-8">
              {/* Personal Details */}
              <div>
                <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Personal Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                  <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                  <input type="date" placeholder="Date of Birth" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-gray-500 focus:border-[#e31837]" />
                </div>
              </div>

              {/* Address */}
              <div>
                <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Address & Location</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>State</option></select>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>District</option></select>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>Taluk</option></select>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837] col-span-2 md:col-span-1"><option>Town</option></select>
                  <input type="text" placeholder="Pincode" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837] col-span-2" />
                </div>
              </div>

              {/* Vehicle & Documents */}
              <div>
                <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Vehicle Details</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <label className="border border-gray-200 rounded p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#e31837] bg-gray-50 transition-colors">
                    <input type="radio" name="vehicle" className="hidden" />
                    <Bike className="w-6 h-6 text-gray-600" />
                    <span className="text-xs font-bold">Bicycle</span>
                  </label>
                  <label className="border border-[#e31837] bg-red-50 rounded p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors relative">
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#e31837]"></div>
                    <input type="radio" name="vehicle" className="hidden" defaultChecked />
                    <Bike className="w-6 h-6 text-[#e31837]" />
                    <span className="text-xs font-bold text-[#e31837]">Two Wheeler</span>
                  </label>
                  <label className="border border-gray-200 rounded p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#e31837] bg-gray-50 transition-colors">
                    <input type="radio" name="vehicle" className="hidden" />
                    <span className="text-xs font-bold">Three Wheeler</span>
                  </label>
                  <label className="border border-gray-200 rounded p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#e31837] bg-gray-50 transition-colors">
                    <input type="radio" name="vehicle" className="hidden" />
                    <span className="text-xs font-bold">Other</span>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Vehicle Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                  <input type="text" placeholder="Driving Licence Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <button type="button" className="bg-[#e31837] text-white px-10 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-200 w-full sm:w-auto">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900">What documents are required to join?</h3>
              <p className="text-gray-600 mt-2 text-sm">You will need an ID Proof, Address Proof, Driving Licence, Vehicle RC, and Bank Details for earnings deposit.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900">How are tasks assigned?</h3>
              <p className="text-gray-600 mt-2 text-sm">Tasks are assigned to your mobile app by the local town franchise based on your delivery territory and route efficiency.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900">Do I need my own vehicle?</h3>
              <p className="text-gray-600 mt-2 text-sm">Yes, delivery partners must have their own bicycle, two-wheeler, or three-wheeler to perform local deliveries.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

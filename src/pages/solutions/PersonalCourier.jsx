import React, { useEffect } from 'react';
import { 
  ArrowRight, Package, FileText, Gift, Shirt, MapPin, 
  CheckCircle2, Box, Truck, ShieldCheck, Bell, MessageSquare, 
  Search, Calculator, User, UserCircle
} from 'lucide-react';

export default function PersonalCourier() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-red-50 text-gray-900 pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b border-red-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[#e31837] font-bold text-sm tracking-wide mb-6">
              FOR INDIVIDUALS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-gray-900">
              Personal Courier <br />Made <span className="text-[#e31837]">Simple</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Send documents, gifts, and personal parcels with convenient doorstep pickup, real-time tracking, and reliable delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-500/30">
                Book a Parcel
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors border border-gray-200">
                Track Shipment
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 transform lg:rotate-3 max-w-lg mx-auto lg:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=800&q=80" 
                alt="Personal Courier Delivery" 
                className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl object-cover"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-bounce-slow hidden md:flex">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Delivery Successful</p>
                <p className="text-xs text-gray-500">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For & What Can You Send */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Who Is It For */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 inline-flex flex-col">
                Who Is It For?
                <div className="w-12 h-[3px] bg-[#e31837] mt-3"></div>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-colors">
                  <User className="w-8 h-8 text-[#e31837] mb-4" />
                  <h3 className="font-bold text-gray-900">Individuals</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-colors">
                  <FileText className="w-8 h-8 text-[#e31837] mb-4" />
                  <h3 className="font-bold text-gray-900">Students</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-colors">
                  <UserCircle className="w-8 h-8 text-[#e31837] mb-4" />
                  <h3 className="font-bold text-gray-900">Families</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-colors">
                  <Box className="w-8 h-8 text-[#e31837] mb-4" />
                  <h3 className="font-bold text-gray-900">Home Businesses</h3>
                </div>
              </div>
            </div>

            {/* What Can You Send */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 inline-flex flex-col">
                What Can You Send?
                <div className="w-12 h-[3px] bg-[#e31837] mt-3"></div>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-700">Documents & Legal Papers</span>
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                    <Gift className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="font-bold text-gray-700">Gifts & Surprises</span>
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                    <Shirt className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-bold text-gray-700">Clothes & Accessories</span>
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                    <Package className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-bold text-gray-700">Small Parcels & Lightweight Packages</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works (Vertical Timeline) */}
      <section className="py-24 px-6 bg-gray-900 text-white border-y border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white inline-flex flex-col">
              How It Works
              <div className="w-16 h-[3px] bg-[#e31837] mt-4"></div>
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              Booking a personal courier is fast and simple. From address entry to final delivery, we keep you updated at every step.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-[#e31837] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded-lg shadow-xl">
                  <h3 className="font-bold text-white text-lg mb-1">Enter Pickup Address</h3>
                  <p className="text-sm text-gray-400">Where should we collect it?</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-[#e31837] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded-lg shadow-xl">
                  <h3 className="font-bold text-white text-lg mb-1">Enter Delivery Address</h3>
                  <p className="text-sm text-gray-400">Where is it going?</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-gray-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-300 text-lg mb-1">Add Parcel Details & Price</h3>
                  <p className="text-sm text-gray-500">Weight, dimensions, and instant quote.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-gray-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-300 text-lg mb-1">Pickup & Track</h3>
                  <p className="text-sm text-gray-500">Agent collects and you track till delivery.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Forms (Booking & Calculator) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Quick Booking Form Mockup */}
          <div className="lg:col-span-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Package className="w-6 h-6 text-[#e31837]" /> Quick Booking Form
            </h2>
            
            <div className="space-y-8">
              {/* Sender & Receiver */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">Sender Details</h3>
                  <div className="space-y-3">
                    <input type="text" placeholder="Sender Name" className="w-full p-3 border border-gray-300 rounded focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] outline-none" />
                    <input type="tel" placeholder="Mobile Number" className="w-full p-3 border border-gray-300 rounded focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] outline-none" />
                    <div className="flex gap-2">
                      <input type="text" placeholder="Pincode" className="w-1/3 p-3 border border-gray-300 rounded outline-none" />
                      <input type="text" placeholder="Pickup Address" className="w-2/3 p-3 border border-gray-300 rounded outline-none" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">Receiver Details</h3>
                  <div className="space-y-3">
                    <input type="text" placeholder="Receiver Name" className="w-full p-3 border border-gray-300 rounded outline-none" />
                    <input type="tel" placeholder="Mobile Number" className="w-full p-3 border border-gray-300 rounded outline-none" />
                    <div className="flex gap-2">
                      <input type="text" placeholder="Pincode" className="w-1/3 p-3 border border-gray-300 rounded outline-none" />
                      <input type="text" placeholder="Delivery Address" className="w-2/3 p-3 border border-gray-300 rounded outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">Package Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <select className="p-3 border border-gray-300 rounded outline-none bg-white col-span-2 md:col-span-1">
                    <option>Document</option>
                    <option>Parcel</option>
                  </select>
                  <input type="text" placeholder="Weight (kg)" className="p-3 border border-gray-300 rounded outline-none" />
                  <input type="text" placeholder="L x W x H (cm)" className="p-3 border border-gray-300 rounded outline-none" />
                  <input type="text" placeholder="Value (₹)" className="p-3 border border-gray-300 rounded outline-none" />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Calculator & Tracking */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Calculator */}
            <div className="bg-[#111111] text-white p-6 rounded-2xl shadow-xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#e31837]" /> Cost Calculator
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex gap-2">
                  <input type="text" placeholder="From Pincode" className="w-1/2 p-2 bg-black border border-gray-800 rounded text-sm text-white focus:border-[#e31837] outline-none transition-colors" />
                  <input type="text" placeholder="To Pincode" className="w-1/2 p-2 bg-black border border-gray-800 rounded text-sm text-white focus:border-[#e31837] outline-none transition-colors" />
                </div>
                <input type="text" placeholder="Weight (kg)" className="w-full p-2 bg-black border border-gray-800 rounded text-sm text-white focus:border-[#e31837] outline-none transition-colors" />
                <button className="w-full bg-white text-black py-2 font-bold rounded hover:bg-gray-200 transition-colors">
                  Calculate
                </button>
              </div>
              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Estimated Charge</p>
                <p className="text-3xl font-black text-white">₹85</p>
                <div className="mt-3 space-y-1 text-sm text-gray-300">
                  <p className="flex justify-between"><span>Pickup:</span> <span className="text-green-500 font-bold">Available</span></p>
                  <p className="flex justify-between"><span>Delivery:</span> <span>2-4 Days</span></p>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#e31837]" /> Track Shipment
              </h2>
              <div className="flex gap-2 mb-6">
                <input type="text" placeholder="AWB Number" className="flex-1 p-2 border border-gray-300 rounded outline-none text-sm" />
                <button className="bg-gray-900 text-white px-4 py-2 rounded font-bold text-sm">Track</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Picked Up</p>
                    <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">In Transit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Out for Delivery</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Key Features
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-[#e31837]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Doorstep Pickup</h3>
              <p className="text-sm text-gray-500">Convenient collection from your home or office.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-[#e31837]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Handling</h3>
              <p className="text-sm text-gray-500">Safe transport with digital proof of delivery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-[#e31837]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Notifications</h3>
              <p className="text-sm text-gray-500">SMS and WhatsApp alerts at every stage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#e31837]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-sm text-gray-500">Dedicated assistance for all your queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900">How do I book a personal courier?</h3>
              <p className="text-gray-600 mt-2 text-sm">Simply use our quick booking form above, enter the addresses and package details, and confirm pickup.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900">Is doorstep pickup available?</h3>
              <p className="text-gray-600 mt-2 text-sm">Yes, we provide doorstep pickup across most pin codes in India.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900">What items cannot be shipped?</h3>
              <p className="text-gray-600 mt-2 text-sm">Hazardous materials, cash, perishable goods, and prohibited items as per government regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#111111] text-center border-t-4 border-[#e31837]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Ready to send your parcel?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors">
              Book Personal Courier
            </button>
            <button className="bg-transparent border border-gray-600 text-white px-8 py-4 font-bold rounded hover:bg-gray-800 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

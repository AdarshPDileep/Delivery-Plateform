import React, { useEffect } from 'react';
import { ArrowRight, Box, BarChart2, MapPin, ShieldCheck, ChevronLeft, ChevronRight, Package, Truck, Boxes } from 'lucide-react';

export default function Warehousing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-center">
        {/* Background image of warehouse */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&q=80')]" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-4">
            <span className="text-[#f62c2c]">Stock closer</span> to your customers
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-lg font-medium">
            Our distributed fulfillment & warehousing network helps you manage your inventory better.
          </p>
          <button className="bg-white text-black px-6 py-3 text-sm md:text-base font-bold flex items-center gap-2 hover:bg-gray-100 transition rounded-sm">
            Start Shipping <ArrowRight className="w-4 h-4" />
          </button>
          {/* Red square detail */}
          <div className="absolute -bottom-10 left-6 md:left-12 w-8 h-8 bg-[#f62c2c]"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">End-to-end warehousing and distribution logistics</h2>
          <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
            Delhivery's network of fulfillment centers is a fully-equipped, end-to-end service designed around maximizing supply chain efficiency. We offer dedicated and shared warehousing space giving you the flexibility to optimize your storage cost and speed of delivery.
          </p>
          <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
            As a one stop provider of warehousing operations, we manage B2B and B2C inventory, allowing varying storage and service level models while delivering the experience your customers they require.
          </p>
          <button className="bg-[#111111] text-white px-6 py-3 text-sm md:text-base font-bold flex items-center gap-2 hover:bg-black transition rounded-sm">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
          <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80" alt="Warehouse interior" className="w-full h-full object-cover rounded-sm shadow-xl" />
          <div className="absolute top-8 -right-4 w-6 h-6 bg-[#f62c2c]"></div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="bg-[#111111] py-20 md:py-28 px-6 md:px-12 text-white relative border-t-8 border-[#f62c2c] lg:border-t-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2 text-white">The Delhivery<br/>Advantage</h2>
            <div className="w-16 h-[2px] bg-white mt-4"></div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 relative">
                 <Box className="w-6 h-6 text-[#f62c2c]" />
                 <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f62c2c] rounded-full border-2 border-[#111111]"></div>
              </div>
              <h3 className="font-bold text-[17px] leading-snug text-white">Multi-tenant warehouses with 7 Mn+ square feet of warehousing infrastructure</h3>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 relative">
                 <BarChart2 className="w-6 h-6 text-[#f62c2c]" />
                 <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f62c2c] rounded-full border-2 border-[#111111]"></div>
              </div>
              <h3 className="font-bold text-[17px] leading-snug text-white">Proprietary technology that lowers cost of fulfillment as you scale</h3>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 relative">
                 <MapPin className="w-6 h-6 text-[#f62c2c]" />
                 <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f62c2c] rounded-full border-2 border-[#111111]"></div>
              </div>
              <h3 className="font-bold text-[17px] leading-snug text-white">Seamless integration with Express Parcel, Freight and Cross Border shipping</h3>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 relative">
                 <ShieldCheck className="w-6 h-6 text-[#f62c2c]" />
                 <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f62c2c] rounded-full border-2 border-[#111111]"></div>
              </div>
              <h3 className="font-bold text-[17px] leading-snug text-white">End to end visibility over inventory, order management and supply chain</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-gray-900">How our <span className="text-[#f62c2c]">seamless order fulfillment</span> works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Card 1 */}
            <div className="flex flex-col group cursor-default">
               <div className="h-40 mb-6 bg-[#ebedf0] rounded-sm flex items-center justify-center overflow-hidden relative">
                 <Boxes className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
               </div>
               <h3 className="font-bold text-[17px] mb-3 text-gray-900">Inventory control</h3>
               <p className="text-gray-600 text-[14px] leading-relaxed">Our system allows real-time visibility into inventory and status of all goods to ensure efficient tracking and fulfillment. Stock levels are automatically managed at scale.</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col group cursor-default">
               <div className="h-40 mb-6 bg-[#ebedf0] rounded-sm flex items-center justify-center overflow-hidden relative">
                 <Package className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
               </div>
               <h3 className="font-bold text-[17px] mb-3 text-gray-900">In-house management system</h3>
               <p className="text-gray-600 text-[14px] leading-relaxed">Delhivery's integration of the warehouse management system with in-house platforms (express parcel, cross border) helps lower TAT and enables multi-location order routing.</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col group cursor-default">
               <div className="h-40 mb-6 bg-[#ebedf0] rounded-sm flex items-center justify-center overflow-hidden relative">
                 <Truck className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
               </div>
               <h3 className="font-bold text-[17px] mb-3 text-gray-900">Cost advantage</h3>
               <p className="text-gray-600 text-[14px] leading-relaxed">Delhivery offers integrated solution for distribution and transport. This is backed by strong technology and warehousing infrastructure to help distribute your inventory closer.</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col group cursor-default">
               <div className="h-40 mb-6 bg-[#ebedf0] rounded-sm flex items-center justify-center overflow-hidden relative">
                 <BarChart2 className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
               </div>
               <h3 className="font-bold text-[17px] mb-3 text-gray-900">Technology differentiation</h3>
               <p className="text-gray-600 text-[14px] leading-relaxed">Our extensive warehousing network gives you more time to focus on business and less time on managing warehouses. We act as your fulfillment partner to help grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12 text-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="flex-1 pr-0 lg:pr-12">
             <h2 className="text-xl font-bold mb-8 flex items-center">
                Case Studies
             </h2>
             <div className="w-12 h-1 bg-[#f62c2c] mb-8"></div>
             <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">A leading D2C beauty brand in India scales order volume by 4000%</h3>
             <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
               The client has grown rapidly over the last four years, using Delhivery's technology driven Warehouse Management System (WMS) platform to generate inventory data driven insights and shipping orders on the same day. Operating in B2C & B2B segment, Delhivery's fulfillment center currently processes 60,000+ orders per day. Delhivery has enabled this company to process up to 4000% more volume.
             </p>
             <div className="flex gap-4">
               <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition"><ChevronLeft className="w-5 h-5" /></button>
               <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition"><ChevronRight className="w-5 h-5" /></button>
             </div>
          </div>
          <div className="flex-1 relative w-full h-[300px] md:h-[450px]">
             <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80" alt="Beauty products" className="w-full h-full object-cover rounded-sm shadow-lg" />
             <div className="absolute top-1/2 -right-4 w-6 h-6 bg-[#f62c2c] transform -translate-y-1/2 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-24 text-center text-white px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Need a flexible, end-to-end warehousing solution?</h2>
        <p className="text-gray-400 mb-10 text-[15px]">Connect with Delhivery's Fulfillment Service</p>
        <button className="bg-white text-black px-8 py-3.5 text-sm md:text-base font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition rounded-sm">
          Contact Us <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Explore other services */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-gray-900">Explore other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Express Parcel */}
            <div className="bg-white cursor-pointer group shadow-sm hover:shadow-md transition duration-300">
              <div className="relative overflow-hidden h-56">
                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80" alt="Express Parcel" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-6 -left-2 w-4 h-4 bg-[#f62c2c]"></div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-[17px] mb-3 group-hover:text-[#f62c2c] transition-colors text-gray-900">Express Parcel</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">Reach 99.5% of India's population quickly and reliably. Delivering up to 2 million parcels daily across the nation.</p>
              </div>
            </div>
            {/* PTL */}
            <div className="bg-white cursor-pointer group shadow-sm hover:shadow-md transition duration-300">
              <div className="relative overflow-hidden h-56">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" alt="PTL" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-[17px] mb-3 group-hover:text-[#f62c2c] transition-colors text-gray-900">Part Truckload Freight (PTL)</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">Leverage our extensive freight network for B2B movement across India with assured deliveries and transparent tracking.</p>
              </div>
            </div>
            {/* FTL */}
            <div className="bg-white cursor-pointer group shadow-sm hover:shadow-md transition duration-300">
              <div className="relative overflow-hidden h-56">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80" alt="FTL" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#f62c2c] transform -translate-y-1/2"></div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-[17px] mb-3 group-hover:text-[#f62c2c] transition-colors text-gray-900">Full Truckload Freight (FTL)</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">A unified nationwide marketplace connects thousands of fleet owners with businesses requiring dedicated trucks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

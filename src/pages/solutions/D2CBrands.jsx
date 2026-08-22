import React, { useEffect } from 'react';
import { 
  ArrowRight, Truck, UserCircle, MapPin, Package, Smartphone,
  ShoppingBag, Repeat, TrendingUp, MonitorSmartphone, DollarSign,
  CheckCircle2, Box, Activity, Users, ShieldCheck, Building2
} from 'lucide-react';

export default function D2CBrands() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white pt-48 pb-20 md:pt-[220px] md:pb-28 px-6 relative border-b-8 border-[#e31837] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-[#111111] to-[#111111] opacity-40"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-white">
              Grow your <span className="text-[#e31837]">Direct To Consumer brand</span> with Delhivery's end-to-end logistics solutions
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Faster deliveries, lower returns and improved consumer experience that drives your brand's growth
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Talk to an expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 shadow-2xl relative z-10 transform lg:translate-x-12">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                alt="eCommerce Logistics" 
                className="w-full h-auto rounded-xl object-cover shadow-lg"
              />
            </div>
            {/* Red accent square */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#e31837] z-0"></div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 inline-flex flex-col">
            With you at every step of your journey
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>

          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-red-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col relative">
                <div className="hidden md:block absolute top-[40px] left-0 w-1/2 h-[2px] bg-[#e31837]"></div>
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-100 relative z-10">
                  <Smartphone className="w-10 h-10 text-[#e31837]" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  1. Customer is engaged on your app/website and buys
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col relative">
                <div className="hidden md:block absolute top-[40px] left-0 w-1/2 h-[2px] bg-[#e31837]"></div>
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-100 relative z-10">
                  <MonitorSmartphone className="w-10 h-10 text-[#e31837]" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  2. Order is synced to your Delhivery One account
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col relative">
                <div className="hidden md:block absolute top-[40px] left-0 w-1/2 h-[2px] bg-[#e31837]"></div>
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-100 relative z-10">
                  <Truck className="w-10 h-10 text-[#e31837]" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  3. Delhivery's agent comes and picks up your shipment
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col relative">
                <div className="hidden md:block absolute top-[40px] left-0 w-1/2 h-[2px] bg-[#e31837]"></div>
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-100 relative z-10">
                  <Package className="w-10 h-10 text-[#e31837]" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  4. Package is delivered & shopper experience is seamless
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="bg-[#111111] py-20 px-6 text-white border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 inline-flex flex-col text-white">
            Ship at any scale for all types of business
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col gap-4">
              <Users className="w-10 h-10 text-[#e31837]" />
              <span className="font-bold text-lg text-white">Social<br/>Sellers</span>
            </div>
            <div className="flex flex-col gap-4">
              <UserCircle className="w-10 h-10 text-[#e31837]" />
              <span className="font-bold text-lg text-white">Micro<br/>Entrepreneurs</span>
            </div>
            <div className="flex flex-col gap-4">
              <Building2 className="w-10 h-10 text-[#e31837]" />
              <span className="font-bold text-lg text-white">Marketplace<br/>Shippers</span>
            </div>
            <div className="flex flex-col gap-4">
              <ShoppingBag className="w-10 h-10 text-[#e31837]" />
              <span className="font-bold text-lg text-white">eCommerce<br/>D2C Brands</span>
            </div>
            <div className="flex flex-col gap-4">
              <Box className="w-10 h-10 text-[#e31837]" />
              <span className="font-bold text-lg text-white">Omnichannel<br/>Brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Split Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
              Delhivery One powers a digital experience for eCommerce logistics for businesses of any scale
            </h2>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#e31837] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">Ship across India with 0 platform fees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#e31837] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">Reduce your RTO % with our Smart Return Management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#e31837] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">Provide interactive customer communications</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#e31837] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">API integrations to automate your business</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#e31837] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">End-to-end multi-channel visibility</span>
              </li>
            </ul>
            <button className="bg-[#111111] text-white px-8 py-4 font-bold rounded flex items-center gap-2 hover:bg-gray-900 transition-colors">
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-2xl p-2 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard Mockup" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating UI Elements Mockup */}
            <div className="absolute -left-12 top-20 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 hidden md:flex">
              <Activity className="w-8 h-8 text-emerald-500" />
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Success Rate</p>
                <p className="text-lg font-black text-gray-900">98.4%</p>
              </div>
            </div>
            <div className="absolute -right-8 bottom-12 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 hidden md:flex">
              <div className="w-10 h-10 bg-red-50 flex items-center justify-center rounded-full">
                <Truck className="w-5 h-5 text-[#e31837]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Active Shipments</p>
                <p className="text-lg font-black text-gray-900">1,245</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale & Efficiency Benefits */}
      <section className="bg-[#111111] py-24 px-6 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-2xl text-white inline-flex flex-col leading-tight">
            Get scale and efficiency to charge your business' growth
            <div className="w-16 h-[3px] bg-[#e31837] mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <MapPin className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Pan India reach</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Reach out to shoppers across 19,000+ pin codes in India, ensuring no customer is out of your delivery radius.
              </p>
            </div>
            <div>
              <DollarSign className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2-day COD remittance</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Automate payments with COD remittance in 48 hours and improve the cash flow cycle for your business.
              </p>
            </div>
            <div>
              <ShieldCheck className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Quality check on reverse pickups</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Verify return orders at the doorstep via dedicated operations teams and improve the reliability of your returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 inline-flex flex-col">
            Case Studies
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-black mb-6">Neeman's</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                "Delhivery is a partner we trust when it comes to offering an exceptional delivery experience to our customers. Their extensive network ensures our orders reach every part of India securely. Their commitment to continuous improvement makes them an ideal logistics partner."
              </p>
              <p className="text-gray-400 text-sm italic">
                - Taran Chhabra, Founder & CEO, Neeman's
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=800&q=80" 
                alt="Case Study" 
                className="w-full h-80 object-cover rounded-sm shadow-xl"
              />
              <div className="absolute top-8 -right-4 w-8 h-8 bg-[#e31837]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="bg-[#111111] py-24 px-6 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-2xl text-white inline-flex flex-col leading-tight">
            Technology that helps you run your business smoothly
            <div className="w-16 h-[3px] bg-[#e31837] mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <MonitorSmartphone className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Order to Delivery Visibility</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                End-to-end visibility for both you and your shoppers on our proprietary real-time tracking interface.
              </p>
            </div>
            <div>
              <Truck className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Faster and more reliable deliveries</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Deliver more than 80% orders reliably within 48 hours via our advanced routing algorithms.
              </p>
            </div>
            <div>
              <TrendingUp className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Upto 40% lower RTO</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Reduce returns with automated RTO predictions and address intelligence using our ML capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-12 text-center md:text-left inline-flex flex-col">
            Trusted by both large D2C brands and emerging small businesses:
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="font-black text-2xl font-display tracking-tighter">mamaearth</div>
            <div className="font-black text-2xl font-display tracking-widest uppercase">Lenskart</div>
            <div className="font-black text-2xl font-display tracking-tighter">MyGlamm</div>
            <div className="font-black text-2xl font-display italic">boAt</div>
            <div className="font-black text-2xl font-display tracking-tighter text-[#e31837]">WOW</div>
            <div className="font-black text-2xl font-display tracking-tight">XYXX</div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 px-6 bg-[#0a0f1a] text-center border-t border-[#e31837]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Let Delhivery power your eCommerce growth with storage, shipping, fulfillment, returns and replacements, all managed at the click of a button
          </h2>
          <button className="bg-white text-gray-900 px-10 py-4 font-bold rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Sign up <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

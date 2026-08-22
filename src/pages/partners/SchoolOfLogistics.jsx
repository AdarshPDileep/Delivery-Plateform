import React, { useEffect } from 'react';
import { 
  GraduationCap, BookOpen, MonitorPlay, Users, Award, 
  ArrowRight, CheckCircle2, LayoutTemplate, Briefcase, PackageCheck, Building2
} from 'lucide-react';

export default function SchoolOfLogistics() {
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
              <GraduationCap className="w-4 h-4" /> EDUCATION & TRAINING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Learn Logistics. <br />Build Your <span className="text-[#e31837]">Future.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Gain practical knowledge of courier operations, supply chain processes, delivery management, ecommerce logistics, and modern logistics technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-500/30">
                Explore Programs
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors border border-gray-200">
                Register Interest
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 transform lg:-rotate-2 max-w-lg mx-auto lg:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
                alt="Students learning logistics" 
                className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl object-cover"
              />
            </div>
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-200/50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/4"></div>
          </div>
        </div>
      </section>

      {/* Who Is It For? */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Who Is It For?
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-red-200 transition-colors">
              <Users className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Students</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-red-200 transition-colors">
              <GraduationCap className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Fresh Graduates</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-red-200 transition-colors">
              <PackageCheck className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Delivery Professionals</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-red-200 transition-colors">
              <Building2 className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Franchise Staff</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-red-200 transition-colors">
              <Briefcase className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Logistics Employees</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:border-red-200 transition-colors">
              <LayoutTemplate className="w-8 h-8 text-[#e31837] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Business Owners</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-400">Industry-aligned curriculums designed to make you operational from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Course 1 */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col hover:border-[#e31837] transition-colors">
              <div className="p-6 border-b border-gray-800">
                <span className="text-xs font-bold bg-[#e31837] text-white px-2 py-1 rounded mb-4 inline-block">MOST POPULAR</span>
                <h3 className="text-xl font-bold mb-2">Ecommerce Logistics Essentials</h3>
                <p className="text-sm text-gray-400">Comprehensive end-to-end training on fulfilling online orders.</p>
              </div>
              <div className="p-6 bg-black flex-1">
                <div className="flex justify-between text-sm mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Duration</p>
                    <p className="font-bold">4 Weeks</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Mode</p>
                    <p className="font-bold">Online / Classroom</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Level</p>
                    <p className="font-bold">Beginner</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 font-medium mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Order Fulfilment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Shipping & Manifests</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> RTO & Returns Management</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> COD Processing</li>
                </ul>
                <button className="w-full bg-white text-black py-3 rounded font-bold hover:bg-gray-200 transition-colors mt-auto">View Course</button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col hover:border-[#e31837] transition-colors">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold mb-2 mt-8">Last-Mile Delivery Operations</h3>
                <p className="text-sm text-gray-400">Master the final and most crucial step of the supply chain.</p>
              </div>
              <div className="p-6 bg-black flex-1">
                <div className="flex justify-between text-sm mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Duration</p>
                    <p className="font-bold">2 Weeks</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Mode</p>
                    <p className="font-bold">Online</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Level</p>
                    <p className="font-bold">Beginner</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 font-medium mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Delivery Planning & Routes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Scanning & App Usage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Proof of Delivery Protocols</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> NDR (Non-Delivery) Management</li>
                </ul>
                <button className="w-full bg-white text-black py-3 rounded font-bold hover:bg-gray-200 transition-colors mt-auto">View Course</button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col hover:border-[#e31837] transition-colors">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold mb-2 mt-8">Franchise Operations Management</h3>
                <p className="text-sm text-gray-400">Advanced training for running a successful logistics franchise.</p>
              </div>
              <div className="p-6 bg-black flex-1">
                <div className="flex justify-between text-sm mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Duration</p>
                    <p className="font-bold">6 Weeks</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Mode</p>
                    <p className="font-bold">Classroom</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Level</p>
                    <p className="font-bold">Advanced</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 font-medium mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Shipment Booking & Pricing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Inbound & Outbound Hub Ops</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Financials & COD Reconciliation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#e31837]" /> Team & Asset Management</li>
                </ul>
                <button className="w-full bg-white text-black py-3 rounded font-bold hover:bg-gray-200 transition-colors mt-auto">View Course</button>
              </div>
            </div>
          </div>

          {/* Learning Format */}
          <div className="border-t border-gray-800 pt-16">
            <h3 className="text-xl font-bold mb-8 text-center">Flexible Learning Formats</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black border border-gray-800 px-6 py-4 rounded-xl flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" /> <span className="font-bold">Classroom Training</span>
              </div>
              <div className="bg-black border border-gray-800 px-6 py-4 rounded-xl flex items-center gap-3">
                <MonitorPlay className="w-5 h-5 text-gray-400" /> <span className="font-bold">Online Sessions</span>
              </div>
              <div className="bg-black border border-gray-800 px-6 py-4 rounded-xl flex items-center gap-3">
                <PackageCheck className="w-5 h-5 text-gray-400" /> <span className="font-bold">Practical Field Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 px-6 bg-red-50 text-center">
        <div className="max-w-4xl mx-auto">
          <Award className="w-16 h-16 text-[#e31837] mx-auto mb-6" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">Commerza Certified Logistics Associate</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Upon successful completion of the assessments, students are awarded the Commerza Certified Logistics Associate credential, signifying their readiness to operate within modern logistics networks.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-bold text-sm text-gray-900">
            <span>Program Completion</span>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <span>Pass Assessment</span>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <span className="text-[#e31837] bg-white px-4 py-2 rounded-full shadow-sm border border-red-100">Receive Certificate</span>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Register Your Interest</h2>
            <p className="text-gray-600">Fill out the form below and our academic counselors will contact you.</p>
          </div>
          
          <form className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-gray-200 rounded outline-none focus:border-[#e31837]" />
              <input type="tel" placeholder="Mobile Number" className="w-full p-4 bg-white border border-gray-200 rounded outline-none focus:border-[#e31837]" />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-white border border-gray-200 rounded outline-none focus:border-[#e31837]" />
              <input type="text" placeholder="Location / City" className="w-full p-4 bg-white border border-gray-200 rounded outline-none focus:border-[#e31837]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="w-full p-4 bg-white border border-gray-200 rounded outline-none focus:border-[#e31837] text-gray-600">
                <option>Select Education Level</option>
                <option>High School</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>Working Professional</option>
              </select>
              <select className="w-full p-4 bg-white border border-gray-200 rounded outline-none focus:border-[#e31837] text-gray-600">
                <option>Program Interested In</option>
                <option>Ecommerce Logistics</option>
                <option>Last-Mile Delivery</option>
                <option>Franchise Operations</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button type="button" className="w-full sm:w-auto bg-[#e31837] text-white px-10 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}

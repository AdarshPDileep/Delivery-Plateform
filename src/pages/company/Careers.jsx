import React, { useEffect, useState } from 'react';
import { 
  Users, Briefcase, MapPin, Search, ArrowRight, CheckCircle2, 
  TrendingUp, MonitorPlay, Zap, ShieldCheck, HeartHandshake, UploadCloud
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'Technology',
      location: 'Trivandrum',
      type: 'Full Time',
      experience: '2-4 Years'
    },
    {
      id: 2,
      title: 'Backend Engineer (Node.js)',
      department: 'Technology',
      location: 'Trivandrum',
      type: 'Full Time',
      experience: '3-5 Years'
    },
    {
      id: 3,
      title: 'Operations Executive',
      department: 'Logistics Operations',
      location: 'Kochi',
      type: 'Full Time',
      experience: '1-3 Years'
    },
    {
      id: 4,
      title: 'Hub Manager',
      department: 'Network Operations',
      location: 'Calicut',
      type: 'Full Time',
      experience: '4-7 Years'
    },
    {
      id: 5,
      title: 'Franchise Development Executive',
      department: 'Sales & Business',
      location: 'Trivandrum',
      type: 'Full Time',
      experience: '2-5 Years'
    },
    {
      id: 6,
      title: 'Customer Experience Associate',
      department: 'Customer Support',
      location: 'Trivandrum',
      type: 'Full Time',
      experience: '0-2 Years'
    },
    {
      id: 7,
      title: 'COD Reconciliation Analyst',
      department: 'Finance',
      location: 'Trivandrum',
      type: 'Full Time',
      experience: '2-4 Years'
    }
  ];

  const filteredJobs = activeTab === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.department.includes(activeTab) || (activeTab === 'Technology' && job.department === 'Technology'));

  return (
    <div className="w-full font-sans bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b-8 border-[#e31837] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-[#111111] to-[#111111] opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 font-bold text-sm tracking-wide mb-8 border border-white/20">
            <Users className="w-4 h-4 text-[#e31837]" /> CAREERS AT COMMERZA
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 text-white">
            Build the Future of <span className="text-[#e31837]">Logistics</span> With Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Join a rapidly growing team working across technology, logistics operations, customer experience, sales, and delivery networks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-900/50"
            >
              View Open Positions
            </button>
            <button className="bg-white/10 text-white px-8 py-4 font-bold rounded hover:bg-white/20 transition-colors border border-white/10">
              Join Our Talent Network
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Why Work With Us
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <TrendingUp className="w-8 h-8 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Growing Network</h3>
              <p className="text-gray-600 text-sm font-medium">Be part of an expanding logistics ecosystem with massive opportunities for scale and impact.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <MonitorPlay className="w-8 h-8 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tech-Driven Culture</h3>
              <p className="text-gray-600 text-sm font-medium">Work with modern technology stacks to solve complex routing, tracking, and operational challenges.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <Zap className="w-8 h-8 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Career Development</h3>
              <p className="text-gray-600 text-sm font-medium">Clear progression paths and continuous learning opportunities across all departments.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <HeartHandshake className="w-8 h-8 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Collaborative Environment</h3>
              <p className="text-gray-600 text-sm font-medium">Join a supportive team that values cross-functional collaboration and shared success.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <ShieldCheck className="w-8 h-8 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Real Operational Impact</h3>
              <p className="text-gray-600 text-sm font-medium">Your work directly influences how thousands of shipments move across the country every day.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <CheckCircle2 className="w-8 h-8 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Learning Opportunities</h3>
              <p className="text-gray-600 text-sm font-medium">Gain deep domain expertise in e-commerce, supply chain management, and enterprise logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teams */}
      <section className="py-24 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Our Teams
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                <MonitorPlay className="w-5 h-5 text-[#e31837]" /> Technology
              </h3>
              <ul className="text-sm font-medium text-gray-600 space-y-2">
                <li>• Frontend & Backend Development</li>
                <li>• Mobile App Development</li>
                <li>• Quality Assurance (QA)</li>
                <li>• DevOps & Infrastructure</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#e31837]" /> Operations
              </h3>
              <ul className="text-sm font-medium text-gray-600 space-y-2">
                <li>• Hub & Sortation Operations</li>
                <li>• Network Management</li>
                <li>• Delivery Operations</li>
                <li>• Franchise Coordination</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#e31837]" /> Sales & Business
              </h3>
              <ul className="text-sm font-medium text-gray-600 space-y-2">
                <li>• Enterprise Sales</li>
                <li>• Seller Acquisition</li>
                <li>• Franchise Development</li>
                <li>• Strategic Partnerships</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#e31837]" /> Finance & CX
              </h3>
              <ul className="text-sm font-medium text-gray-600 space-y-2">
                <li>• COD Reconciliation & Settlements</li>
                <li>• Accounts & Audit</li>
                <li>• Seller & Franchise Support</li>
                <li>• Shipment Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Job Board */}
      <section id="open-positions" className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">Find your next role at Commerza Global.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {['All', 'Technology', 'Logistics Operations', 'Sales & Business', 'Customer Support', 'Finance'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeTab === tab 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-[#e31837] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#e31837] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-gray-400" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-gray-400" /> {job.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white border border-gray-300 text-gray-900 font-bold px-6 py-2.5 rounded hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors shrink-0"
                >
                  Apply Now
                </button>
              </div>
            ))}
            
            {filteredJobs.length === 0 && (
              <div className="py-12 text-center text-gray-500 border border-dashed border-gray-300 rounded-xl">
                <p>No open positions in this department right now. Please check back later!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-white">Submit Application</h2>
            <p className="text-gray-400">Can't find the perfect role above? Submit your resume and we'll reach out when a match opens up.</p>
          </div>
          
          <form className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Full Name <span className="text-[#e31837]">*</span></label>
                <input type="text" className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Email Address <span className="text-[#e31837]">*</span></label>
                <input type="email" className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Mobile Number <span className="text-[#e31837]">*</span></label>
                <input type="tel" className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Current Location</label>
                <input type="text" className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-800">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Position Applied For <span className="text-[#e31837]">*</span></label>
                <select className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]">
                  <option>Select Position</option>
                  <option>Frontend Developer</option>
                  <option>Operations Executive</option>
                  <option>General / Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Total Experience</label>
                <select className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]">
                  <option>Select Experience</option>
                  <option>Fresher</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Current Company</label>
                <input type="text" className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Notice Period</label>
                <select className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]">
                  <option>Select Notice Period</option>
                  <option>Immediate Joiner</option>
                  <option>15 Days</option>
                  <option>30 Days</option>
                  <option>2 Months</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">LinkedIn Profile URL</label>
                <input type="url" placeholder="https://linkedin.com/in/..." className="w-full p-3 bg-black border border-gray-800 rounded outline-none text-white focus:border-[#e31837]" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Resume / CV <span className="text-[#e31837]">*</span></label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 hover:border-[#e31837] rounded-lg cursor-pointer bg-black transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-8 h-8 text-gray-500 mb-2" />
                    <p className="text-sm text-gray-400 font-bold mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, DOCX up to 5MB</p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
              </div>
            </div>

            <button type="button" className="w-full bg-[#e31837] text-white py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg">
              Submit Application
            </button>
            
          </form>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 px-6 bg-white border-b border-gray-200 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Hiring Process</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold text-gray-600">
            <span className="bg-gray-100 px-4 py-2 rounded">Apply</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
            <span className="bg-gray-100 px-4 py-2 rounded">Review</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
            <span className="bg-gray-100 px-4 py-2 rounded">Discussion</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
            <span className="bg-gray-100 px-4 py-2 rounded">Interview</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
            <span className="bg-[#e31837] text-white px-4 py-2 rounded">Offer</span>
          </div>
        </div>
      </section>

      {/* Delivery Partners Callout */}
      <section className="py-16 px-6 bg-red-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Looking for Delivery Opportunities?</h2>
          <p className="text-gray-600 mb-8 font-medium">Join our delivery network as a Delivery Partner and start earning in your local territory.</p>
          <button 
            onClick={() => navigate('/partners/delivery-partner')}
            className="bg-[#e31837] text-white px-8 py-3 font-bold rounded hover:bg-red-700 transition-colors"
          >
            Become a Delivery Partner
          </button>
        </div>
      </section>

    </div>
  );
}

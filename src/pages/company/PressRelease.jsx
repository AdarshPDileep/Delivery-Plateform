import React, { useEffect, useState } from 'react';
import { 
  Newspaper, ArrowRight, Calendar, Tag, ChevronRight, Mail
} from 'lucide-react';

export default function PressRelease() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Company News', 'Partnerships', 'Technology', 'Network Expansion', 'Services'];

  const newsItems = [
    {
      id: 1,
      category: 'NETWORK EXPANSION',
      date: '12 AUG 2026',
      title: 'Commerza Global Expands Logistics Network Across Kerala',
      description: 'Commerza Global announces the expansion of its technology-enabled logistics network to additional regions, empowering more local franchise partners.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      category: 'TECHNOLOGY',
      date: '05 AUG 2026',
      title: 'Commerza Global Introduces Enhanced Shipment Tracking',
      description: 'New platform update provides sellers and customers with real-time, granular visibility into their parcel journey.',
      featured: false
    },
    {
      id: 3,
      category: 'PARTNERSHIPS',
      date: '28 JUL 2026',
      title: 'New Franchise Partnerships Announced in Trivandrum Zone',
      description: 'Strengthening our last-mile delivery capabilities with three new major town franchise agreements.',
      featured: false
    },
    {
      id: 4,
      category: 'SERVICES',
      date: '15 JUL 2026',
      title: 'Next-Day Ecommerce Delivery Service Launched',
      description: 'Accelerating business growth for online sellers with our newly optimized next-day delivery routes.',
      featured: false
    },
    {
      id: 5,
      category: 'COMPANY NEWS',
      date: '02 JUL 2026',
      title: 'Commerza Global Milestone: 1 Million Shipments Processed',
      description: 'Celebrating a major operational milestone as our logistics platform processes its one millionth shipment.',
      featured: false
    },
    {
      id: 6,
      category: 'TECHNOLOGY',
      date: '20 JUN 2026',
      title: 'Upgraded Mobile App for Delivery Personnel',
      description: 'Enhanced navigation and faster barcode scanning features deployed to the Delivery Executive application.',
      featured: false
    }
  ];

  const filteredNews = activeFilter === 'All' 
    ? newsItems.filter(item => !item.featured)
    : newsItems.filter(item => !item.featured && item.category.toLowerCase() === activeFilter.toLowerCase());

  const featuredNews = newsItems.find(item => item.featured);

  return (
    <div className="w-full font-sans bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 md:pt-[140px] md:pb-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#e31837] font-bold text-sm tracking-wide mb-8 border border-red-100">
            <Newspaper className="w-4 h-4" /> MEDIA CENTRE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            News & Press Releases
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Stay updated with the latest announcements, partnerships, network expansions, platform updates, and milestones from Commerza Global.
          </p>
        </div>
      </section>

      {/* Featured Press Release */}
      {featuredNews && activeFilter === 'All' && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-black text-gray-400 tracking-widest uppercase mb-6">Featured Story</h2>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:border-gray-300 transition-colors">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-500">
                  <span className="text-[#e31837] bg-red-50 px-3 py-1 rounded-full">{featuredNews.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featuredNews.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#e31837] transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                  {featuredNews.description}
                </p>
                <div className="mt-auto">
                  <button className="text-gray-900 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4 text-[#e31837]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters & Grid */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-6">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeFilter === filter 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(item => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-gray-300 transition-all flex flex-col group cursor-pointer">
                <div className="flex items-center justify-between mb-6 text-xs font-bold">
                  <span className="text-gray-500 flex items-center gap-1"><Tag className="w-3 h-3" /> {item.category}</span>
                  <span className="text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#e31837] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-8 flex-1">
                  {item.description}
                </p>
                <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between text-sm font-bold text-gray-900">
                  View Press Release
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e31837] group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
            
            {filteredNews.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                <p>No press releases found for this category.</p>
              </div>
            )}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded font-bold text-sm hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 text-white">Media Enquiries</h2>
            <p className="text-gray-400 mb-8 font-medium leading-relaxed">
              For press inquiries, interview requests, or high-resolution brand assets, please contact our corporate communications team.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg border border-gray-800">
                <Mail className="w-6 h-6 text-[#e31837]" />
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email</p>
                  <p className="font-bold">press@commerzaglobal.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900">
            <h3 className="font-bold text-xl mb-6">Send an Enquiry</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-sm focus:border-[#e31837]" />
              <input type="text" placeholder="Organisation / Publication" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-sm focus:border-[#e31837]" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-sm focus:border-[#e31837]" />
              <textarea placeholder="Message" rows="4" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-sm resize-none focus:border-[#e31837]"></textarea>
              <button type="button" className="w-full bg-[#e31837] text-white py-3 font-bold rounded hover:bg-red-700 transition-colors">
                Submit Media Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
}

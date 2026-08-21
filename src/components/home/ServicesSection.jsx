import React from 'react';
import { Truck, PackageSearch, Plane, ShieldCheck, Zap, Factory } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Express Parcel',
    description: 'Extensive delivery network covering all of India with fastest turnaround times.'
  },
  {
    icon: Factory,
    title: 'Warehousing',
    description: 'State-of-the-art facilities with intelligent inventory and order management systems.'
  },
  {
    icon: PackageSearch,
    title: 'Partial-Truckload (PTL)',
    description: 'Cost-effective freight solutions for large or heavy shipments with high reliability.'
  },
  {
    icon: Zap,
    title: 'Supply Chain Services',
    description: 'End-to-end customized supply chain solutions for large enterprises.'
  },
  {
    icon: Plane,
    title: 'Cross Border',
    description: 'Global logistics made easy with our international shipping and customs expertise.'
  },
  {
    icon: ShieldCheck,
    title: 'Data Intelligence',
    description: 'Harnessing the power of billions of shipments to optimize your logistics.'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full bg-white">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Comprehensive logistics and supply chain solutions tailored to your business needs, powered by our proprietary technology and expansive network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 hover:border-transparent bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#E31837] mb-6 shadow-sm group-hover:bg-[#E31837] group-hover:text-white transition-colors duration-300">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 text-[#E31837] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <span className="text-xl">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

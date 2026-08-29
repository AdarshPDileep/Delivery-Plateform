import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, PackageSearch, Plane, ShieldCheck, Zap, Factory, ArrowRight } from 'lucide-react';

// Service images
import expressImg from '../../assets/service-express.jpg';
import warehouseImg from '../../assets/service-warehouse.jpg';
import truckloadImg from '../../assets/service-truckload.jpg';
import supplychainImg from '../../assets/service-supplychain.jpg';
import crossborderImg from '../../assets/service-crossborder.jpg';
import dataImg from '../../assets/service-data.jpg';

const services = [
  {
    icon: Truck,
    title: 'Express Parcel',
    description: 'Extensive delivery network covering all of India with fastest turnaround times.',
    path: '/services/express-parcel',
    image: expressImg
  },
  {
    icon: Factory,
    title: 'Warehousing',
    description: 'State-of-the-art facilities with intelligent inventory and order management systems.',
    path: '/services/warehousing',
    image: warehouseImg
  },
  {
    icon: PackageSearch,
    title: 'Partial-Truckload (PTL)',
    description: 'Cost-effective freight solutions for large or heavy shipments with high reliability.',
    path: '/services/part-truckload',
    image: truckloadImg
  },
  {
    icon: Zap,
    title: 'Supply Chain Services',
    description: 'End-to-end customized supply chain solutions for large enterprises.',
    path: '/services/transport-one',
    image: supplychainImg
  },
  {
    icon: Plane,
    title: 'Cross Border',
    description: 'Global logistics made easy with our international shipping and customs expertise.',
    path: '/services/international',
    image: crossborderImg
  },
  {
    icon: ShieldCheck,
    title: 'Data Intelligence',
    description: 'Harnessing the power of billions of shipments to optimize your logistics.',
    path: '/services/data-intelligence',
    image: dataImg
  }
];

export default function ServicesSection() {
  const navigate = useNavigate();

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
              onClick={() => navigate(service.path)}
              className="group rounded-2xl border border-gray-100 hover:border-transparent bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#E31837] shadow-lg group-hover:bg-[#E31837] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  {service.description}
                </p>
                <div className="mt-5 text-[#E31837] font-semibold flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-400">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

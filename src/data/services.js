import { Package, Factory, Truck, Globe, Map, ShieldCheck, Zap, Server, Send } from 'lucide-react';

export const serviceDetails = {
  'express-parcel': {
    title: 'Express Parcel',
    description: 'Our core service for fast, reliable, and technology-driven parcel delivery across the nation.',
    icon: Package,
    features: [
      'Pan-India Coverage with 19,000+ Pin codes',
      'Real-time Tracking and Notifications',
      'Next-day and Same-day delivery in major metros',
      'Industry-leading COD remittance (T+2)'
    ],
    benefits: 'Ship documents, small parcels, and e-commerce orders with the most extensive and reliable network in India.',
    heroGradient: 'from-red-500 to-rose-600'
  },
  'warehousing': {
    title: 'Warehousing',
    description: 'State-of-the-art multi-client facilities strategically located across the country.',
    icon: Factory,
    features: [
      'Flexible space and pay-per-use models',
      'Intelligent inventory management system',
      'B2B and B2C fulfillment under one roof',
      'Value Added Services (Kitting, Labeling)'
    ],
    benefits: 'Reduce your logistics overhead by utilizing our modern warehouses equipped with the latest automation technology.',
    heroGradient: 'from-blue-500 to-indigo-600'
  },
  'part-truckload': {
    title: 'Part Truckload (PTL)',
    description: 'Cost-effective freight solutions for shipments that do not require a full truck.',
    icon: Truck,
    features: [
      'Daily direct connections between major hubs',
      'Door-to-door pickup and delivery',
      'Advanced load planning for minimal damage',
      'Complete visibility on heavy shipments'
    ],
    benefits: 'Pay only for the space you use. Ideal for B2B distributors and manufacturers shipping medium-weight cargo.',
    heroGradient: 'from-amber-500 to-orange-600'
  },
  'full-truckload': {
    title: 'Full Truckload (FTL)',
    description: 'Dedicated fleet services for high-volume cargo requiring exclusive transport.',
    icon: Truck,
    features: [
      'Dedicated vehicles (LCV, HCV, Trailers)',
      'GPS tracked fleet for real-time security',
      'Customized routing and scheduling',
      'Dedicated account managers'
    ],
    benefits: 'Secure and direct transportation of your high-value or high-volume goods with zero transshipment.',
    heroGradient: 'from-emerald-500 to-green-600'
  },
  'international': {
    title: 'International',
    description: 'Cross-border logistics made easy with our global network and customs expertise.',
    icon: Globe,
    features: [
      'Import/Export clearance services',
      'Air and Ocean freight forwarding',
      'End-to-end tracking across borders',
      'IATA certified partnerships'
    ],
    benefits: 'Take your business global. We handle the complexities of international shipping and customs compliance.',
    heroGradient: 'from-cyan-500 to-blue-600'
  },
  'local-delivery': {
    title: 'Local Delivery',
    description: 'Hyper-local rapid delivery solutions for groceries, food, and urgent documents.',
    icon: Send,
    features: [
      '2-hour and 4-hour delivery windows',
      'Two-wheeler and electric vehicle fleet',
      'Optimized route planning',
      'API integration for quick dispatch'
    ],
    benefits: 'Meet your customers\' demand for instant gratification with our intra-city rapid delivery fleet.',
    heroGradient: 'from-purple-500 to-fuchsia-600'
  },
  'transport-one': {
    title: 'TransportOne',
    description: 'Our integrated digital freight matching platform for brokers and fleet owners.',
    icon: Zap,
    features: [
      'Instant load matching',
      'Transparent pricing and bidding',
      'Verified drivers and vehicles',
      'Automated digital payments and invoicing'
    ],
    benefits: 'A unified marketplace connecting supply and demand in the trucking industry efficiently.',
    heroGradient: 'from-slate-700 to-gray-900'
  },
  'data-intelligence': {
    title: 'Data Intelligence',
    description: 'Harness the power of machine learning and billions of data points to optimize your supply chain.',
    icon: Server,
    features: [
      'Address formatting and geo-coding APIs',
      'RTO prediction models',
      'Network optimization consulting',
      'Demand forecasting'
    ],
    benefits: 'Make data-driven decisions that reduce costs and improve delivery success rates.',
    heroGradient: 'from-teal-500 to-emerald-600'
  },
  'commerza-maps': {
    title: 'Commerza Maps',
    description: 'Our proprietary mapping solution built specifically for the complexities of Indian addresses.',
    icon: Map,
    features: [
      'Highly accurate location intelligence',
      'Polygon mapping for accurate locality detection',
      'Route optimization APIs',
      'Delivery heatmaps'
    ],
    benefits: 'Improve first-attempt delivery success with our ground-truth verified mapping technology.',
    heroGradient: 'from-pink-500 to-rose-600'
  }
};

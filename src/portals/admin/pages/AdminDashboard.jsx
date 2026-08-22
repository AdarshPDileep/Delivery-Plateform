import React from 'react';
import { 
  Package, Truck, MapPin, CheckCircle2, CornerUpLeft, IndianRupee, 
  ShieldAlert, Store, TrendingUp, TrendingDown, Calendar, DownloadCloud,
  ChevronDown, Trophy, Clock, Target, ShieldCheck, MoreVertical
} from 'lucide-react';

// Custom SVG components for charts
const LineChart = () => (
  <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
     <defs>
      <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(227, 24, 55, 0.2)" />
        <stop offset="100%" stopColor="rgba(227, 24, 55, 0)" />
      </linearGradient>
    </defs>
    
    {/* Grid Lines */}
    {[0, 30, 60, 90, 120].map((y, i) => (
      <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#f1f5f9" strokeWidth="1" />
    ))}
    
    {/* Delivered Line (Black) */}
    <path 
      d="M 0 120 Q 50 80 100 90 T 200 60 T 300 80 T 400 40" 
      fill="none" 
      stroke="#E31837" 
      strokeWidth="2.5" 
    />
    {/* Points for Delivered */}
    {[ [0,120], [100,90], [200,60], [300,80], [400,40] ].map((p, i) => (
      <circle key={`d-${i}`} cx={p[0]} cy={p[1]} r="4" fill="#E31837" stroke="#fff" strokeWidth="1.5" />
    ))}

    {/* Booked Area (Red Gradient) */}
    <path 
      d="M 0 90 Q 50 70 100 80 T 200 30 T 300 40 T 400 10 L 400 150 L 0 150 Z" 
      fill="url(#redGradient)" 
    />
    
    {/* Booked Line (Red) */}
    <path 
      d="M 0 90 Q 50 70 100 80 T 200 30 T 300 40 T 400 10" 
      fill="none" 
      stroke="#E31837" 
      strokeWidth="2.5" 
    />
    {/* Points for Booked */}
    {[ [0,90], [100,80], [200,30], [300,40], [400,10] ].map((p, i) => (
      <circle key={`b-${i}`} cx={p[0]} cy={p[1]} r="4" fill="#E31837" stroke="#fff" strokeWidth="1.5" />
    ))}
  </svg>
);

const DonutChart = () => {
  // Mocking the SVG donut. Using a thick stroke dasharray
  const circumference = 2 * Math.PI * 40;
  return (
    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="20" />
        {/* In Transit (Black) 44.5% */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="#E31837" strokeWidth="20" 
                strokeDasharray={`${circumference * 0.445} ${circumference}`} strokeDashoffset="0" />
        {/* Delivered (Green) 32.8% */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" 
                strokeDasharray={`${circumference * 0.328} ${circumference}`} strokeDashoffset={-(circumference * 0.445) - 2} />
        {/* Out for Delivery (Orange) 9.6% */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="20" 
                strokeDasharray={`${circumference * 0.096} ${circumference}`} strokeDashoffset={-(circumference * 0.773) - 4} />
        {/* RTO (Red) 1.5% */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="#E31837" strokeWidth="20" 
                strokeDasharray={`${circumference * 0.015} ${circumference}`} strokeDashoffset={-(circumference * 0.869) - 6} />
        {/* Others */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="#94a3b8" strokeWidth="20" 
                strokeDasharray={`${circumference * 0.116} ${circumference}`} strokeDashoffset={-(circumference * 0.884) - 8} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 leading-none">19,008</h3>
        <p className="text-[10px] text-gray-500 font-medium">Total Shipments</p>
      </div>
    </div>
  );
};

const Sparkline = ({ color = '#10b981' }) => (
  <svg viewBox="0 0 100 20" className="w-16 h-4 overflow-visible">
    <path d="M 0 15 Q 20 10 40 18 T 70 5 T 100 10" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);


export default function AdminDashboard() {
  const kpis = [
    { title: 'Shipments Today', value: '2,458', icon: Package, color: 'text-[#E31837]', bg: 'bg-red-50', trend: '↗ 8.4%', trendColor: 'text-green-600' },
    { title: 'In Transit', value: '8,450', icon: Truck, color: 'text-gray-600', bg: 'bg-gray-100', trend: '↗ 6.7%', trendColor: 'text-green-600' },
    { title: 'Out for Delivery', value: '1,830', icon: MapPin, color: 'text-amber-600', bg: 'bg-amber-50', trend: '↗ 5.2%', trendColor: 'text-green-600' },
    { title: 'Delivered', value: '6,242', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', trend: '↗ 9.1%', trendColor: 'text-green-600' },
    { title: 'RTO', value: '286', icon: CornerUpLeft, color: 'text-orange-500', bg: 'bg-orange-50', trend: '↗ 3.6%', trendColor: 'text-red-600' },
    { title: 'COD in Hand', value: '₹8.42L', icon: IndianRupee, color: 'text-purple-600', bg: 'bg-purple-50', trend: '↗ 12.3%', trendColor: 'text-green-600' },
    { title: 'SLA Breaches', value: '32', icon: ShieldAlert, color: 'text-[#E31837]', bg: 'bg-red-50', trend: '↗ 14.3%', trendColor: 'text-red-600' },
    { title: 'Active Franchises', value: '146', icon: Store, color: 'text-slate-600', bg: 'bg-slate-100', trend: '↗ 4.8%', trendColor: 'text-green-600' },
  ];

  return (
    <div className="p-8 w-full mx-auto space-y-6 animate-fade-in bg-[#f8fafc] min-h-screen">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Control Tower</h1>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E31837] mb-4"></div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm text-sm">
            <Calendar className="w-4 h-4" /> Today, 27 May 2025 <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          <button className="flex items-center gap-2 bg-[#E31837] text-white px-4 py-2 rounded-lg font-medium hover:bg-black transition-colors shadow-sm text-sm">
            <DownloadCloud className="w-4 h-4" /> Generate Report
          </button>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt--2 mb-8">Real-time network operations and performance overview</p>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-gray-200 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${kpi.bg}`}>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 leading-none">{kpi.value}</h3>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[10px] font-bold">
                <span className={kpi.trendColor}>{kpi.trend}</span>
                <span className="text-gray-400">vs yesterday</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Shipment Flow */}
        <div className="lg:col-span-5 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gray-400" /> Shipment Flow
            </h2>
            <button className="text-xs font-medium border border-gray-200 rounded px-2 py-1 flex items-center gap-1 text-gray-600 hover:bg-gray-50">
              Last 7 Days <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          
          <div className="flex items-center gap-6 mb-4 text-xs font-medium text-gray-500 ml-4">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#E31837]"></div> Booked</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#E31837]"></div> Delivered</div>
          </div>

          <div className="flex-1 relative min-h-[160px] pl-6 pb-6">
             {/* Y-axis labels */}
             <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] font-medium text-gray-400">
               <span>2.5K</span><span>2K</span><span>1.5K</span><span>1K</span><span className="text-[#E31837]">500</span><span>0</span>
             </div>
             <LineChart />
             {/* X-axis labels */}
             <div className="absolute left-6 right-0 bottom-0 flex justify-between text-[10px] font-medium text-gray-400 mt-2">
               <span>21 May</span><span>22 May</span><span>23 May</span><span>24 May</span><span>25 May</span><span>26 May</span><span>27 May</span>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-5 mt-2 border-t border-gray-50">
             <div>
               <p className="text-[10px] font-medium text-gray-500">Total Booked</p>
               <p className="text-lg font-bold text-gray-900">12,845</p>
               <p className="text-[10px] font-bold text-green-600 flex items-center mt-1">↗ 10.2% <TrendingUp className="w-3 h-3 ml-2 text-red-400" /></p>
             </div>
             <div>
               <p className="text-[10px] font-medium text-gray-500">Total Delivered</p>
               <p className="text-lg font-bold text-gray-900">9,672</p>
               <p className="text-[10px] font-bold text-green-600 flex items-center mt-1">↗ 9.6% <TrendingDown className="w-3 h-3 ml-2 text-gray-400" /></p>
             </div>
             <div className="border-l border-gray-100 pl-4 relative">
               <p className="text-[10px] font-medium text-gray-500">Delivery Rate</p>
               <p className="text-lg font-bold text-gray-900">75.3%</p>
               <p className="text-[10px] font-bold text-green-600 mt-1">↗ 1.8%</p>
               {/* Mini circle */}
               <div className="absolute right-0 top-2 w-8 h-8 rounded-full border-2 border-gray-100">
                 <div className="w-full h-full rounded-full border-2 border-[#E31837] border-l-transparent transform -rotate-45"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Status Mix */}
        <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-6">
            <Package className="w-4 h-4 text-gray-400" /> Shipment Status Mix
          </h2>
          
          <div className="flex-1 flex items-center">
            <div className="w-1/2 flex justify-center">
               <DonutChart />
            </div>
            <div className="w-1/2 pl-6 space-y-3">
               {[
                 { label: 'In Transit', value: '8,450', pct: '44.5%', color: 'bg-[#E31837]' },
                 { label: 'Delivered', value: '6,242', pct: '32.8%', color: 'bg-green-500' },
                 { label: 'Out for Delivery', value: '1,830', pct: '9.6%', color: 'bg-amber-500' },
                 { label: 'RTO', value: '286', pct: '1.5%', color: 'bg-[#E31837]' },
                 { label: 'Exceptions', value: '300', pct: '1.6%', color: 'bg-gray-400' },
                 { label: 'Others', value: '1,900', pct: '9.9%', color: 'bg-gray-300' },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between text-xs">
                   <div className="flex items-center gap-2 w-28">
                     <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                     <span className="text-gray-600 font-medium">{item.label}</span>
                   </div>
                   <span className="font-bold text-gray-700 w-10 text-right">{item.pct}</span>
                   <span className="text-gray-400 w-10 text-right">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="mt-6 bg-red-50 text-red-600 rounded-lg p-3 text-xs font-medium flex items-center justify-between border border-red-100 cursor-pointer hover:bg-red-100 transition-colors">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Delivery performance is 9.1% higher than yesterday.
            </div>
            <ChevronDown className="w-4 h-4 transform -rotate-90" />
          </div>
        </div>

        {/* Network Efficiency */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Truck className="w-4 h-4 text-gray-400" /> Network Efficiency
            </h2>
            <button className="text-xs font-medium border border-gray-200 rounded px-2 py-1 flex items-center gap-1 text-gray-600 hover:bg-gray-50">
              Today <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="mb-8">
            <div className="flex items-end justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">Route Efficiency</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900 leading-none">91.2%</span>
                <span className="text-xs font-bold text-green-600">↗ 3.7%</span>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full mt-3 flex overflow-hidden">
               <div className="h-full bg-gradient-to-r from-[#E31837] to-[#E31837]" style={{ width: '91.2%' }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-bold">
               <span>0%</span><span>50%</span><span>100%</span>
            </div>
          </div>

          <div className="space-y-5 flex-1">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-red-50 text-red-500"><Clock className="w-4 h-4" /></div>
                  <span className="text-sm font-medium text-gray-700">Avg. Transit Time</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900">2.6 Days</span>
                  <span className="text-xs font-bold text-green-600 w-8 text-right">↘ 0.3</span>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-red-50 text-red-500"><Target className="w-4 h-4" /></div>
                  <span className="text-sm font-medium text-gray-700">First Attempt Delivery</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900">91.8%</span>
                  <span className="text-xs font-bold text-green-600 w-8 text-right">↗ 2.6%</span>
                </div>
             </div>

             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-red-50 text-red-500"><Package className="w-4 h-4" /></div>
                  <span className="text-sm font-medium text-gray-700">On-time Pickups</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900">96.4%</span>
                  <span className="text-xs font-bold text-green-600 w-8 text-right">↗ 1.8%</span>
                </div>
             </div>

             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-red-50 text-red-500"><ShieldCheck className="w-4 h-4" /></div>
                  <span className="text-sm font-medium text-gray-700">SLA Compliance</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900">97.1%</span>
                  <span className="text-xs font-bold text-green-600 w-8 text-right">↗ 2.2%</span>
                </div>
             </div>
          </div>

        </div>

      </div>

      {/* Franchise Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gray-400" /> Franchise Performance Leaderboard
          </h2>
          <button className="text-sm font-bold text-[#E31837] hover:underline flex items-center gap-1">
            View full leaderboard <ChevronDown className="w-4 h-4 transform -rotate-90" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">#</th>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Franchise</th>
                <th colSpan="2" className="px-4 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center border-b border-gray-50">Shipments</th>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Delivery Rate</th>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">RTO Rate</th>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">COD in Hand</th>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">SLA Compliance</th>
                <th rowSpan="2" className="px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">Trend (7D)</th>
                <th rowSpan="2" className="px-4 py-3 border-b border-gray-100"></th>
              </tr>
              <tr>
                <th className="px-4 py-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center border-b border-gray-100">Booked</th>
                <th className="px-4 py-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center border-b border-gray-100">Delivered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: 'FR-BLR-001 (Koramangala)', booked: 840, delivered: 790, dRate: '94.0%', rto: '1.4%', cod: '₹1.41L', sla: '98.5%', color: '#10b981' },
                { name: 'FR-DEL-042 (Saket)', booked: 620, delivered: 580, dRate: '93.5%', rto: '1.3%', cod: '₹84K', sla: '97.2%', color: '#10b981' },
                { name: 'FR-BOM-112 (Andheri East)', booked: 910, delivered: 840, dRate: '92.3%', rto: '2.7%', cod: '₹2.1L', sla: '96.8%', color: '#f59e0b' },
                { name: 'FR-MAA-005 (Adyar)', booked: 450, delivered: 420, dRate: '93.3%', rto: '1.1%', cod: '₹45K', sla: '99.1%', color: '#10b981' },
                { name: 'FR-HYD-019 (Banjara Hills)', booked: 380, delivered: 350, dRate: '92.1%', rto: '1.8%', cod: '₹38K', sla: '95.6%', color: '#10b981' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white
                      ${i === 0 ? 'bg-[#f59e0b]' : i === 1 ? 'bg-gray-300' : i === 2 ? 'bg-orange-400' : 'bg-transparent text-gray-900'}
                    `}>
                      {i + 1}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-gray-900 text-xs">{row.name}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs text-center font-medium">{row.booked}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs text-center font-medium">{row.delivered}</td>
                  <td className="px-4 py-3 text-green-600 font-bold text-xs text-center">{row.dRate}</td>
                  <td className="px-4 py-3 text-[#E31837] font-bold text-xs text-center">{row.rto}</td>
                  <td className="px-4 py-3 text-gray-600 font-medium text-xs text-center">{row.cod}</td>
                  <td className="px-4 py-3 text-green-600 font-bold text-xs text-center">{row.sla}</td>
                  <td className="px-4 py-3 flex justify-center items-center">
                    <Sparkline color={row.color} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

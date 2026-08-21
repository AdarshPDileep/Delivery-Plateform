import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function KPICard({ title, value, icon: Icon, trend, trendValue, subtitle, color = 'bg-white', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${color} rounded-xl p-5 border border-slate-200/80 hover:shadow-md transition-all duration-200 ${onClick ? 'cursor-pointer hover:-translate-y-0.5' : ''}`}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        {Icon && (
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon className="w-4.5 h-4.5 text-slate-500" />
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-slate-900 mb-1">{value}</p>
      {(trend || subtitle) && (
        <div className="flex items-center gap-1.5">
          {trend === 'up' && <TrendingUp className="w-3.5 h-3.5 text-green-500" />}
          {trend === 'down' && <TrendingDown className="w-3.5 h-3.5 text-red-500" />}
          {trend === 'flat' && <Minus className="w-3.5 h-3.5 text-slate-400" />}
          <span className={`text-xs font-medium ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-400'}`}>
            {trendValue || subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

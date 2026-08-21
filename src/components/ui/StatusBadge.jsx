import { STATUS_COLORS } from '../../utils/constants';

const sizeMap = { sm: 'text-xs px-2 py-0.5', md: 'text-xs px-2.5 py-1', lg: 'text-sm px-3 py-1.5' };

export default function StatusBadge({ status, size = 'md' }) {
  const colors = STATUS_COLORS[status] || { bg: 'bg-slate-100', text: 'text-slate-600' };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-semibold ${colors.bg} ${colors.text} ${sizeMap[size]}`}>
      {colors.dot && <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />}
      {status}
    </span>
  );
}

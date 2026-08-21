import { Check, Circle, RotateCcw, AlertTriangle } from 'lucide-react';

const STEPS = [
  { key: 'Booked', label: 'Booked' },
  { key: 'Picked Up', label: 'Picked Up' },
  { key: 'In Transit', label: 'In Transit' },
  { key: 'Out for Delivery', label: 'Out for Delivery' },
  { key: 'Delivered', label: 'Delivered' },
];

export default function StatusTimeline({ currentStatus, statusHistory = [] }) {
  const isRTO = currentStatus === 'RTO';

  // Find the index of the current status in the main flow
  const currentIdx = isRTO ? -1 : STEPS.findIndex((s) => s.key === currentStatus);

  // Get timestamp for a given status
  const getTimestamp = (statusKey) => {
    const entry = statusHistory.find((h) => h.status === statusKey);
    if (!entry) return null;
    return new Date(entry.timestamp).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="w-full">
      {/* Desktop horizontal timeline */}
      <div className="hidden sm:block">
        <div className="flex items-start justify-between relative">
          {/* Background line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 z-0" />
          {/* Progress line */}
          {currentIdx >= 0 && (
            <div
              className="absolute top-5 left-0 h-0.5 bg-accent-500 z-0 transition-all duration-700"
              style={{ width: `${(currentIdx / (STEPS.length - 1)) * 100}%` }}
            />
          )}

          {STEPS.map((step, idx) => {
            const isCompleted = currentIdx >= idx;
            const isCurrent = currentIdx === idx;

            return (
              <div key={step.key} className="flex flex-col items-center relative z-10 flex-1">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isCompleted
                      ? 'bg-accent-500 border-accent-500 text-white shadow-md shadow-accent-500/25'
                      : 'bg-white border-slate-300 text-slate-400'
                    }
                    ${isCurrent ? 'ring-4 ring-accent-100 scale-110' : ''}
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Circle className="w-4 h-4" />
                  )}
                </div>
                {/* Label */}
                <span
                  className={`mt-2.5 text-xs font-medium text-center
                    ${isCompleted ? 'text-navy-700' : 'text-slate-400'}
                    ${isCurrent ? 'font-semibold text-accent-600' : ''}
                  `}
                >
                  {step.label}
                </span>
                {/* Timestamp */}
                {getTimestamp(step.key) && (
                  <span className="mt-1 text-[10px] text-slate-400 text-center">
                    {getTimestamp(step.key)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="sm:hidden space-y-0">
        {STEPS.map((step, idx) => {
          const isCompleted = currentIdx >= idx;
          const isCurrent = currentIdx === idx;
          const isLast = idx === STEPS.length - 1;

          return (
            <div key={step.key} className="flex items-start gap-3">
              {/* Line + Circle column */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 transition-all
                    ${isCompleted
                      ? 'bg-accent-500 border-accent-500 text-white'
                      : 'bg-white border-slate-300 text-slate-400'
                    }
                    ${isCurrent ? 'ring-4 ring-accent-100' : ''}
                  `}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : <Circle className="w-3 h-3" />}
                </div>
                {!isLast && (
                  <div
                    className={`w-0.5 h-8 ${isCompleted && currentIdx > idx ? 'bg-accent-500' : 'bg-slate-200'}`}
                  />
                )}
              </div>
              {/* Label */}
              <div className="pt-1 pb-4">
                <span
                  className={`text-sm font-medium
                    ${isCompleted ? 'text-navy-700' : 'text-slate-400'}
                    ${isCurrent ? 'font-semibold text-accent-600' : ''}
                  `}
                >
                  {step.label}
                </span>
                {getTimestamp(step.key) && (
                  <p className="text-xs text-slate-400 mt-0.5">{getTimestamp(step.key)}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* RTO badge */}
      {isRTO && (
        <div className="mt-6 flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
          <RotateCcw className="w-5 h-5 text-red-500 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-red-700">Return to Origin (RTO)</p>
            <p className="text-xs text-red-500 mt-0.5">
              This shipment has been returned to the sender.
              {getTimestamp('RTO') && ` — ${getTimestamp('RTO')}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { CheckCircle2, Clock, MapPin } from 'lucide-react';

export default function StatusTimeline({ history = [] }) {
  if (!history || history.length === 0) {
    return <div className="text-sm text-slate-500 py-4 text-center border border-dashed rounded-lg">No tracking history available</div>;
  }

  return (
    <div className="relative border-l-2 border-slate-200 ml-4 py-2 space-y-8">
      {history.map((event, idx) => {
        const isLatest = idx === 0;
        
      
        return (
          <div key={idx} className="relative pl-8">
            {/* Timeline dot */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-white ${
              isLatest 
                ? event.status === 'Delivered' ? 'border-green-500' : 'border-blue-500' 
                : 'border-slate-300'
            }`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <p className={`font-semibold ${isLatest ? 'text-slate-900' : 'text-slate-600'}`}>{event.status}</p>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{event.location}</span>
                  {event.remark && (
                    <>
                      <span className="px-1.5">&bull;</span>
                      <span className="text-slate-600 italic">{event.remark}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5" />
                {new Date(event.timestamp).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

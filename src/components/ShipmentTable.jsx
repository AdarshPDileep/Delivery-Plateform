import { useState } from 'react';
import { updateShipmentStatus } from '../api/api';
import { ChevronDown, Loader2 } from 'lucide-react';

const STATUSES = ['Booked', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered', 'RTO'];

const STATUS_COLORS = {
  'Booked': 'bg-blue-100 text-blue-700',
  'Picked Up': 'bg-purple-100 text-purple-700',
  'In Transit': 'bg-amber-100 text-amber-700',
  'Out for Delivery': 'bg-cyan-100 text-cyan-700',
  'Delivered': 'bg-green-100 text-green-700',
  'RTO': 'bg-red-100 text-red-700',
};

export default function ShipmentTable({ shipments, onStatusUpdated }) {
  const [updatingAwb, setUpdatingAwb] = useState(null);

  const handleStatusChange = async (awb, newStatus) => {
    setUpdatingAwb(awb);
    try {
      await updateShipmentStatus(awb, newStatus);
      onStatusUpdated?.();
    } catch (err) {
      alert('Failed to update status: ' + (err.response?.data?.error || err.message));
    } finally {
      setUpdatingAwb(null);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (!shipments || shipments.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-lg font-medium">No shipments found</p>
        <p className="text-sm mt-1">Shipments will appear here once created.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">AWB</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Sender</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider hidden md:table-cell">Receiver</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider hidden lg:table-cell">Payment</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider hidden lg:table-cell">Created</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Update</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {shipments.map((s) => (
            <tr key={s.awb} className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3 px-4">
                <span className="font-mono font-semibold text-navy-700 text-xs">{s.awb}</span>
              </td>
              <td className="py-3 px-4">
                <div>
                  <p className="font-medium text-slate-800">{s.sender?.name || s.senderName}</p>
                  <p className="text-xs text-slate-400 truncate max-w-[150px]">{s.sender?.address || s.senderAddress}</p>
                </div>
              </td>
              <td className="py-3 px-4 hidden md:table-cell">
                <div>
                  <p className="font-medium text-slate-800">{s.receiver?.name || s.receiverName}</p>
                  <p className="text-xs text-slate-400 truncate max-w-[150px]">{s.receiver?.address || s.receiverAddress}</p>
                </div>
              </td>
              <td className="py-3 px-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[s.status] || 'bg-slate-100 text-slate-600'}`}>
                  {s.status}
                </span>
              </td>
              <td className="py-3 px-4 hidden lg:table-cell">
                <span className="text-slate-600">{s.paymentMode}</span>
                {s.codAmount && (
                  <span className="text-xs text-slate-400 ml-1">(₹{s.codAmount})</span>
                )}
              </td>
              <td className="py-3 px-4 hidden lg:table-cell">
                <span className="text-slate-500 text-xs">{formatDate(s.createdAt)}</span>
              </td>
              <td className="py-3 px-4">
                <div className="relative">
                  {updatingAwb === s.awb ? (
                    <div className="flex items-center gap-1 text-slate-400">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  ) : (
                    <select
                      value={s.status}
                      onChange={(e) => handleStatusChange(s.awb, e.target.value)}
                      className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 pr-8 text-xs
                               font-medium text-slate-700 cursor-pointer hover:border-navy-300 focus:outline-none
                               focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                    >
                      {STATUSES.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

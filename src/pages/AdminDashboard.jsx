import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAllShipments } from '../api/api';
import { Search, Package, LogOut, RefreshCw, Loader2, LayoutDashboard } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ShipmentTable from '../components/ShipmentTable';

const STATUSES = ['All', 'Booked', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered', 'RTO'];

export default function AdminDashboard() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const fetchShipments = async () => {
    setLoading(true);
    try {
      const res = await getAllShipments();
      setShipments(res.data);
    } catch (err) {
      console.error('Failed to fetch shipments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  // Filter shipments
  const filtered = shipments.filter((s) => {
    const matchesSearch = searchTerm === '' ||
      s.awb?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.sender?.name || s.senderName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.receiver?.name || s.receiverName || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || s.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Stats
  const stats = [
    { label: 'Total', value: shipments.length, color: 'bg-navy-50 text-navy-700' },
    { label: 'In Transit', value: shipments.filter(s => s.status === 'In Transit').length, color: 'bg-amber-50 text-amber-700' },
    { label: 'Delivered', value: shipments.filter(s => s.status === 'Delivered').length, color: 'bg-green-50 text-green-700' },
    { label: 'RTO', value: shipments.filter(s => s.status === 'RTO').length, color: 'bg-red-50 text-red-700' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-white" />
                </div>
                Dashboard
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                Welcome, <span className="font-medium text-slate-700">{admin?.email}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={fetchShipments}
                disabled={loading}
                className="p-2.5 rounded-lg border border-slate-200 bg-white text-slate-600
                         hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-50"
                title="Refresh"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <Link to="/book" className="btn-primary py-2.5 px-4 text-sm flex items-center gap-1.5">
                <Package className="w-4 h-4" />
                New Shipment
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className={`rounded-xl p-4 ${stat.color}`}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-75 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="card p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by AWB, sender, or receiver..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm
                           placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20
                           focus:border-navy-500 focus:bg-white transition-all"
                />
              </div>

              {/* Status filter */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {STATUSES.map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all
                      ${statusFilter === st
                        ? 'bg-navy-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-navy-500 animate-spin" />
              </div>
            ) : (
              <>
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    Showing <span className="font-semibold text-slate-700">{filtered.length}</span> of{' '}
                    <span className="font-semibold text-slate-700">{shipments.length}</span> shipments
                  </p>
                </div>
                <ShipmentTable shipments={filtered} onStatusUpdated={fetchShipments} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

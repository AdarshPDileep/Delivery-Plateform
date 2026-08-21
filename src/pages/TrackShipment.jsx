import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import StatusTimeline from '../components/data/StatusTimeline';
import { shipments } from '../data/shipments';
import { Package, Search, MapPin, Calendar, Clock, Star } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function TrackShipment() {
  const { awb } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const [searchInput, setSearchInput] = useState(awb || '');
  const [shipment, setShipment] = useState(null);
  const [feedback, setFeedback] = useState(0);

  useEffect(() => {
    if (awb) {
      const found = shipments.find(s => s.awb.toLowerCase() === awb.toLowerCase());
      setShipment(found || null);
      if (!found) {
        addToast(`Shipment ${awb} not found`, 'error');
      }
    }
  }, [awb, addToast]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/track/${searchInput.trim()}`);
    }
  };

  const submitFeedback = () => {
    addToast('Thank you for your feedback!', 'success');
    setFeedback(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Simple Header */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-navy-900 hidden sm:block">Commerza<span className="text-navy-600">Global</span></span>
        </div>
        
        <form onSubmit={handleSearch} className="flex max-w-md w-full ml-4">
          <Input 
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Enter AWB Number" 
            className="rounded-r-none h-10 w-full"
          />
          <Button type="submit" className="rounded-l-none h-10 px-4" icon={Search}></Button>
        </form>
      </nav>

      <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
        {!awb ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Track Your Package</h2>
            <p className="text-slate-500 max-w-md mx-auto">Enter your AWB (Airway Bill) number in the search bar above to see the real-time status of your shipment.</p>
            
            <div className="mt-8">
              <p className="text-sm text-slate-400 mb-2">Try a demo AWB:</p>
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="sm" onClick={() => navigate('/track/CG20240001')}>CG20240001</Button>
                <Button variant="outline" size="sm" onClick={() => navigate('/track/CG20240002')}>CG20240002</Button>
                <Button variant="outline" size="sm" onClick={() => navigate('/track/CG20240015')}>CG20240015</Button>
              </div>
            </div>
          </div>
        ) : shipment ? (
          <div className="space-y-6">
            {/* Summary Card */}
            <Card className="border-t-4 border-t-blue-600">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-1">AWB: {shipment.awb}</h1>
                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="font-medium text-slate-700">{shipment.serviceType} Delivery</span>
                    <span>&bull;</span>
                    {shipment.paymentMode} {shipment.paymentMode === 'COD' && `(₹${shipment.codAmount})`}
                  </p>
                </div>
                
                <div className={`px-4 py-2 rounded-xl text-center flex-shrink-0 ${
                  shipment.status === 'Delivered' ? 'bg-green-50 text-green-700 border border-green-200' :
                  shipment.status.includes('RTO') ? 'bg-red-50 text-red-700 border border-red-200' :
                  'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  <p className="text-xs uppercase font-bold tracking-wider opacity-80 mb-0.5">Current Status</p>
                  <p className="text-lg font-bold">{shipment.status}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-6">
                <div className="flex gap-4">
                  <div className="mt-1"><MapPin className="text-slate-400 w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Origin</p>
                    <p className="font-medium text-slate-900">{shipment.sender.name}</p>
                    <p className="text-sm text-slate-600">{shipment.sender.address}</p>
                    <p className="text-sm text-slate-600 font-medium">PIN: {shipment.sender.pincode}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><MapPin className="text-blue-500 w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Destination</p>
                    <p className="font-medium text-slate-900">{shipment.receiver.name}</p>
                    <p className="text-sm text-slate-600">{shipment.receiver.address}</p>
                    <p className="text-sm text-slate-600 font-medium">PIN: {shipment.receiver.pincode}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Timeline */}
              <div className="lg:col-span-2">
                <Card>
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-slate-400" /> 
                    Tracking History
                  </h3>
                  <StatusTimeline history={shipment.history} />
                </Card>
              </div>

              {/* Sidebar Info & Feedback */}
              <div className="space-y-6">
                <Card>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Estimated Delivery</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Aug 22, 2024</p>
                      <p className="text-xs text-slate-500">By end of day</p>
                    </div>
                  </div>
                </Card>

                {shipment.status === 'Delivered' && (
                  <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-blue-100">
                    <h3 className="text-sm font-bold text-indigo-900 mb-3 text-center">Rate your experience</h3>
                    <div className="flex justify-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button 
                          key={star}
                          onClick={() => setFeedback(star)}
                          className={`focus:outline-none transition-transform hover:scale-110 ${feedback >= star ? 'text-yellow-400' : 'text-slate-300'}`}
                        >
                          <Star className="w-8 h-8 fill-current" />
                        </button>
                      ))}
                    </div>
                    {feedback > 0 && (
                      <div className="text-center animate-in fade-in slide-in-from-bottom-2">
                        <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700" onClick={submitFeedback}>Submit Feedback</Button>
                      </div>
                    )}
                  </Card>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Shipment Not Found</h2>
            <p className="text-slate-500 max-w-md mx-auto">We couldn't find any active shipment for AWB <span className="font-bold text-slate-700">{awb}</span>. Please check the number and try again.</p>
            <Button className="mt-6" onClick={() => navigate('/track')}>Search Again</Button>
          </div>
        )}
      </div>
    </div>
  );
}

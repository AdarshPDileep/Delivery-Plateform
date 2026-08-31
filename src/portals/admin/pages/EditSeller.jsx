import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle2, Upload, Trash2, Bell } from 'lucide-react';

export default function EditSeller() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sellerId = id || 'SEL-94823';

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
           <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500">
             <ArrowLeft className="w-5 h-5" />
           </button>
           <div>
             <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                Edit Seller 
             </h1>
             <p className="text-gray-500 text-sm mt-1">Update seller business details, contact information, and rate card assignment.</p>
           </div>
        </div>
        <div className="flex items-center gap-4 hidden md:flex">
           <div className="text-right">
             <p className="font-bold text-gray-900 text-sm">Admin User</p>
             <p className="text-gray-500 text-xs">Super Admin</p>
           </div>
           <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">AU</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Form */}
        <div className="flex-1 space-y-6">
           
           {/* Business Details */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-6">Business Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                 
                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Business Name *</label>
                   <input type="text" defaultValue="Acme Electronics" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent" />
                 </div>
                 
                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Seller ID</label>
                   <input type="text" defaultValue={sellerId} disabled className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium bg-gray-50 text-gray-500" />
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Business Type</label>
                   <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white">
                     <option>Electronics</option>
                     <option>Fashion</option>
                     <option>FMCG</option>
                   </select>
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Contact Person *</label>
                   <input type="text" defaultValue="John Doe" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Email *</label>
                   <input type="email" defaultValue="john.doe@acmeelectronics.com" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Phone Number *</label>
                   <input type="text" defaultValue="+91 98765 43210" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Alternate Phone</label>
                   <input type="text" defaultValue="+91 91234 56789" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">GST Number *</label>
                   <input type="text" defaultValue="29ABCDE1234F1Z5" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                 </div>

                 <div className="space-y-1.5 md:col-span-2">
                   <label className="text-xs font-bold text-gray-700">PAN Number *</label>
                   <input type="text" defaultValue="ABCDE1234F" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                 </div>

                 <div className="space-y-1.5 md:col-span-2 mt-2">
                   <label className="text-xs font-bold text-gray-700">Address *</label>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-500 uppercase">State</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white">
                          <option>Karnataka</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-500 uppercase">District</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white">
                          <option>Bangalore</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-500 uppercase">City</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white">
                          <option>Bangalore</option>
                        </select>
                      </div>
                      <div className="space-y-1.5 md:col-span-3">
                        <label className="text-[10px] font-bold text-gray-500 uppercase">Pincode *</label>
                        <input type="text" defaultValue="560100" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                      </div>
                   </div>
                 </div>

              </div>
           </div>

           {/* Business Documents */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-6">Business Documents</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-700">GST Certificate</label>
                   <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between group hover:border-[#fca5a5] transition-colors">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-red-50 text-[#E31837] flex items-center justify-center shrink-0">
                         <FileText className="w-4 h-4" />
                       </div>
                       <div className="truncate">
                         <p className="text-sm font-bold text-gray-900 truncate">gst_certificate.pdf</p>
                         <p className="text-[10px] font-medium text-gray-500">1.2 MB</p>
                       </div>
                     </div>
                     <button className="text-gray-400 hover:text-[#E31837] p-1 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-700">PAN Card</label>
                   <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between group hover:border-[#fca5a5] transition-colors">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-red-50 text-[#E31837] flex items-center justify-center shrink-0">
                         <FileText className="w-4 h-4" />
                       </div>
                       <div className="truncate">
                         <p className="text-sm font-bold text-gray-900 truncate">pan_card.pdf</p>
                         <p className="text-[10px] font-medium text-gray-500">850 KB</p>
                       </div>
                     </div>
                     <button className="text-gray-400 hover:text-[#E31837] p-1 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                   </div>
                 </div>

              </div>
           </div>

        </div>

        {/* Right Column: Side Panels */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
           
           {/* Account Status */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-5">Account Status</h3>
              <div className="space-y-4">
                 <div>
                   <p className="text-xs font-bold text-gray-500 mb-1.5">Status</p>
                   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-green-700 bg-green-50 border border-green-100 cursor-pointer hover:bg-green-100 transition-colors">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                   </div>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-500 mb-1">Seller Since</p>
                   <p className="font-bold text-gray-900 text-sm">12 Jan 2024</p>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-500 mb-1">Last Updated</p>
                   <p className="font-bold text-gray-900 text-sm">30 Aug 2026, 10:15 AM</p>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-500 mb-1">Created By</p>
                   <p className="font-bold text-gray-900 text-sm">Admin User</p>
                 </div>
              </div>
           </div>

           {/* Rate Card Assignment */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-5">Rate Card Assignment</h3>
              <div className="space-y-4">
                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-700">Assigned Rate Card *</label>
                   <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white">
                     <option>Standard Tech Rate</option>
                     <option>Default rate</option>
                     <option>FMCG Special</option>
                   </select>
                 </div>
                 <button className="text-sm font-bold text-[#E31837] hover:underline">Preview Rate Card</button>
              </div>
           </div>

           {/* Notes */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-5">Notes</h3>
              <div className="relative">
                 <textarea 
                   placeholder="Add internal note..." 
                   className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E31837] min-h-[100px] resize-none"
                 ></textarea>
                 <span className="absolute bottom-2 right-2 text-[10px] font-medium text-gray-400">0/500</span>
              </div>
           </div>

           <div className="flex items-center justify-end gap-3 pt-2">
             <button onClick={() => navigate(-1)} className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors">
               Cancel
             </button>
             <button className="px-5 py-2.5 bg-[#E31837] border border-[#E31837] text-white font-bold text-sm rounded-lg hover:bg-red-700 transition-colors shadow-sm shadow-red-200">
               Save Changes
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}

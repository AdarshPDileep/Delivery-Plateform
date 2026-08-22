import React, { useEffect } from 'react';
import { 
  Shield, CheckCircle2, Lock, Eye, FileText, Database, 
  Users, Activity, Building, Network, ShieldCheck, Mail
} from 'lucide-react';

export default function Governance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 font-bold text-sm tracking-wide mb-8 border border-gray-200 shadow-sm">
            <Shield className="w-4 h-4 text-[#e31837]" /> CORPORATE GOVERNANCE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            Governance, Transparency & Accountability
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Our governance framework is designed to support responsible decision-making, operational transparency, data protection, and accountable business practices across the Commerza Global logistics network.
          </p>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Governance Principles
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
              <Eye className="w-8 h-8 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparency</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Clear operational and financial processes ensuring all stakeholders have appropriate visibility into network activities.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
              <CheckCircle2 className="w-8 h-8 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Accountability</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Defined responsibilities and ownership across every level of the logistics network, from head office to delivery personnel.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
              <ShieldCheck className="w-8 h-8 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compliance</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Processes aligned with applicable legal requirements, industry standards, and internal corporate policies.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
              <Lock className="w-8 h-8 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Data Protection</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Strictly controlled access to operational and customer information, safeguarding sensitive data across the platform.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
              <Activity className="w-8 h-8 text-gray-700 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Auditability</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Traceable system actions and immutable transaction logs ensuring a clear record of operations and financial movements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-24 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Governance Structure
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              
              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative z-10 w-3/4 max-w-sm">
                <h3 className="font-bold text-gray-900">Leadership & Board</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase font-bold">Strategic Oversight</p>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative z-10 w-4/5 max-w-md">
                <Building className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Head Office Management</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase font-bold">Platform & Policy Control</p>
              </div>

              <div className="w-px h-8 bg-gray-300"></div>

              <div className="grid grid-cols-2 gap-6 w-full relative z-10">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                  <Database className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Operations & Finance</h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase font-bold">Execution & Reconciliation</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                  <ShieldCheck className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Risk & Compliance</h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase font-bold">Audit & Security</p>
                </div>
              </div>

              <div className="w-px h-8 bg-gray-300 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gray-300 -translate-y-[1px]"></div>
              </div>

              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative z-10 w-4/5 max-w-md">
                <Network className="w-6 h-6 text-[#e31837] mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Regional / Franchise Network</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase font-bold">Territory Operations</p>
              </div>

              <div className="w-px h-8 bg-gray-300"></div>

              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative z-10 w-3/4 max-w-sm">
                <Users className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Delivery Operations</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase font-bold">Field Execution</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Access & Security / Audit Trail */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Access & Security */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Access & Security</h2>
              <p className="text-gray-400 mb-8 font-medium">
                Our platform enforces strict role-based access control (RBAC) to ensure that users only have access to the data and actions necessary for their specific roles.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 flex items-center gap-4">
                  <Lock className="w-6 h-6 text-[#e31837]" />
                  <div>
                    <h4 className="font-bold text-white">Role-Based Access</h4>
                    <p className="text-xs text-gray-500">Granular permissions based on organizational hierarchy.</p>
                  </div>
                </div>
                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#e31837]" />
                  <div>
                    <h4 className="font-bold text-white">OTP Authentication</h4>
                    <p className="text-xs text-gray-500">Multi-factor authentication for sensitive actions.</p>
                  </div>
                </div>
                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 flex items-center gap-4">
                  <Activity className="w-6 h-6 text-[#e31837]" />
                  <div>
                    <h4 className="font-bold text-white">Session Management</h4>
                    <p className="text-xs text-gray-500">Secure token handling and automatic timeouts.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Trail Mockup */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Audit & Compliance</h2>
              <p className="text-gray-400 mb-8 font-medium">
                Every critical action within the platform is recorded in an immutable audit trail, ensuring complete accountability.
              </p>
              
              <div className="bg-black border border-gray-800 rounded-xl overflow-hidden font-mono text-sm">
                <div className="bg-gray-900 p-4 border-b border-gray-800 flex justify-between text-gray-400 font-bold text-xs uppercase">
                  <span className="w-1/3">User / Actor</span>
                  <span className="w-1/3">Action</span>
                  <span className="w-1/3 text-right">Timestamp</span>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="w-1/3 font-bold text-white">Admin User</span>
                    <span className="w-1/3 text-blue-400">Updated Rate Card</span>
                    <span className="w-1/3 text-right text-gray-500 text-xs">Today, 10:42 AM</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="w-1/3 font-bold text-white">Franchise FR102</span>
                    <span className="w-1/3 text-green-400">COD Remittance Submitted</span>
                    <span className="w-1/3 text-right text-gray-500 text-xs">Today, 09:15 AM</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="w-1/3 font-bold text-white">Seller SL425</span>
                    <span className="w-1/3 text-purple-400">Shipment Created</span>
                    <span className="w-1/3 text-right text-gray-500 text-xs">Today, 08:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="w-1/3 font-bold text-white">Admin User</span>
                    <span className="w-1/3 text-orange-400">Territory Approved</span>
                    <span className="w-1/3 text-right text-gray-500 text-xs">Yesterday, 04:22 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 opacity-50">
                    <span className="w-1/3 font-bold text-white">System Worker</span>
                    <span className="w-1/3 text-gray-400">Automated Reconciliation</span>
                    <span className="w-1/3 text-right text-gray-500 text-xs">Yesterday, 11:59 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Policies & Documents */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Policies & Frameworks
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center group cursor-pointer hover:border-gray-400 transition-colors">
              <FileText className="w-8 h-8 text-gray-500 mb-4 group-hover:text-gray-800 transition-colors" />
              <h3 className="font-bold text-sm text-gray-900 mb-1">Code of Conduct</h3>
              <p className="text-xs text-gray-500">Corporate Ethics Policy</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center group cursor-pointer hover:border-gray-400 transition-colors">
              <Lock className="w-8 h-8 text-gray-500 mb-4 group-hover:text-gray-800 transition-colors" />
              <h3 className="font-bold text-sm text-gray-900 mb-1">Data Privacy</h3>
              <p className="text-xs text-gray-500">Data Protection Framework</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center group cursor-pointer hover:border-gray-400 transition-colors">
              <ShieldCheck className="w-8 h-8 text-gray-500 mb-4 group-hover:text-gray-800 transition-colors" />
              <h3 className="font-bold text-sm text-gray-900 mb-1">Information Security</h3>
              <p className="text-xs text-gray-500">IT Security Protocols</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center group cursor-pointer hover:border-gray-400 transition-colors">
              <Users className="w-8 h-8 text-gray-500 mb-4 group-hover:text-gray-800 transition-colors" />
              <h3 className="font-bold text-sm text-gray-900 mb-1">Partner Governance</h3>
              <p className="text-xs text-gray-500">Franchise Operating Guidelines</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center group cursor-pointer hover:border-gray-400 transition-colors">
              <Database className="w-8 h-8 text-gray-500 mb-4 group-hover:text-gray-800 transition-colors" />
              <h3 className="font-bold text-sm text-gray-900 mb-1">Financial Controls</h3>
              <p className="text-xs text-gray-500">Reconciliation & Settlement</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center group cursor-pointer hover:border-gray-400 transition-colors">
              <Mail className="w-8 h-8 text-gray-500 mb-4 group-hover:text-gray-800 transition-colors" />
              <h3 className="font-bold text-sm text-gray-900 mb-1">Escalation Policy</h3>
              <p className="text-xs text-gray-500">Complaint Resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-6">Committed to transparent and responsible operations.</h2>
          <p className="text-gray-400 mb-10">If you have inquiries regarding our policies, compliance frameworks, or data protection practices, please reach out to our compliance team.</p>
          <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-100 transition-colors">
            Contact Compliance Team
          </button>
        </div>
      </section>

    </div>
  );
}

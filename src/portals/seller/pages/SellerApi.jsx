import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { useToast } from '../../../context/ToastContext';
import { Copy, RefreshCw, Code2, BookOpen } from 'lucide-react';

export default function SellerApi() {
  const { addToast } = useToast();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    addToast('Copied to clipboard');
  };

  return (
    <div>
      <PageHeader 
        title="API Console & Integrations" 
        description="Manage your API credentials for seamless integration with Shopify, WooCommerce, or custom platforms."
        actions={<Button icon={BookOpen} variant="outline" onClick={() => addToast('Opening API Docs...')}>View Documentation</Button>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Production Credentials</h3>
              <p className="text-sm text-slate-500">Use these keys for live operations</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Input label="Client ID" value="cg_live_client_8f9a2b4c6d" disabled />
              <button onClick={() => handleCopy('cg_live_client_8f9a2b4c6d')} className="absolute right-3 top-[34px] text-slate-400 hover:text-teal-600">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <Input label="Client Secret" type="password" value="********************************" disabled />
              <button onClick={() => handleCopy('cg_live_secret_real_key_here')} className="absolute right-3 top-[34px] text-slate-400 hover:text-teal-600">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="outline" icon={RefreshCw} onClick={() => addToast('Keys Regenerated', 'success')}>Regenerate Keys</Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-slate-900 mb-4">Webhook Subscriptions</h3>
          <p className="text-sm text-slate-600 mb-6">
            Receive real-time HTTP push notifications when shipment statuses change.
          </p>

          <div className="space-y-4">
            <Input label="Webhook URL" placeholder="https://your-domain.com/webhooks/commerza" defaultValue="https://api.trendycart.in/webhooks/logistics" />
            
            <div className="space-y-2 mt-4">
              <label className="text-sm font-medium text-slate-700">Events to subscribe</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" /> shipment.booked</label>
                <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" /> shipment.picked_up</label>
                <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" /> shipment.out_for_delivery</label>
                <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" /> shipment.delivered</label>
                <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" /> shipment.rto_initiated</label>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button onClick={() => addToast('Webhook settings saved', 'success')}>Save Configuration</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import Tabs from '../../../components/ui/Tabs';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import FormSection from '../../../components/forms/FormSection';
import { useToast } from '../../../context/ToastContext';

export default function SystemMasters() {
  const { addToast } = useToast();

  const handleSave = (e) => {
    e.preventDefault();
    addToast('Configuration Saved Successfully', 'success');
  };

  const tabs = [
    { 
      key: 'general', 
      label: 'General Settings', 
      content: (
        <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
          <FormSection title="Company Information">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Company Name" defaultValue="Commerza Global Logistics" />
              <Input label="Registration Number" defaultValue="CIN-U63090MH2025PTC123456" />
              <Input label="Support Email" defaultValue="support@commerza.com" />
              <Input label="Support Phone" defaultValue="+91 1800-123-4567" />
            </div>
          </FormSection>
          <FormSection title="System Preferences">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Default Currency" defaultValue="INR (₹)" disabled />
              <Input label="Timezone" defaultValue="Asia/Kolkata (IST)" disabled />
              <Input label="Pagination Default Size" type="number" defaultValue="10" />
            </div>
          </FormSection>
          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      )
    },
    { 
      key: 'api', 
      label: 'API Integrations', 
      content: (
        <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
          <FormSection title="SMS Gateway (Twilio / Msg91)">
            <div className="grid grid-cols-2 gap-4">
              <Input label="API Key" type="password" defaultValue="****************" />
              <Input label="Sender ID" defaultValue="CGLOGI" />
            </div>
          </FormSection>
          <FormSection title="Payment Gateway (Razorpay)">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Merchant ID" defaultValue="rzp_live_12345" />
              <Input label="Secret Key" type="password" defaultValue="****************" />
            </div>
          </FormSection>
          <div className="flex justify-end">
            <Button type="submit">Save API Keys</Button>
          </div>
        </form>
      )
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Masters & System Configuration" 
        description="Global settings, API keys, and system parameters."
      />
      <Tabs tabs={tabs} defaultTab="general" />
    </div>
  );
}

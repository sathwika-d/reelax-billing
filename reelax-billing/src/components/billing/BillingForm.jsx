import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { InputField, SelectField } from '../common/InputField';

const STATES = [
  { value: '', label: 'Select state' },
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CG', label: 'Chhattisgarh' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'OD', label: 'Odisha' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TG', label: 'Telangana' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UK', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' },
];

const CITIES = {
  '':  [{ value: '', label: 'Select city' }],
  DL:  [{ value: '', label: 'Select city' }, { value: 'NDL', label: 'New Delhi' }, { value: 'NOI', label: 'Noida' }, { value: 'GGN', label: 'Gurgaon' }],
  MH:  [{ value: '', label: 'Select city' }, { value: 'MUM', label: 'Mumbai' }, { value: 'PUN', label: 'Pune' }, { value: 'NGP', label: 'Nagpur' }],
  KA:  [{ value: '', label: 'Select city' }, { value: 'BLR', label: 'Bengaluru' }, { value: 'MYS', label: 'Mysuru' }],
  TG:  [{ value: '', label: 'Select city' }, { value: 'HYD', label: 'Hyderabad' }, { value: 'WRG', label: 'Warangal' }],
  TN:  [{ value: '', label: 'Select city' }, { value: 'CHN', label: 'Chennai' }, { value: 'CBE', label: 'Coimbatore' }],
  UP:  [{ value: '', label: 'Select city' }, { value: 'LKO', label: 'Lucknow' }, { value: 'AGR', label: 'Agra' }, { value: 'NOI', label: 'Noida' }],
  GJ:  [{ value: '', label: 'Select city' }, { value: 'AMD', label: 'Ahmedabad' }, { value: 'SRT', label: 'Surat' }],
  RJ:  [{ value: '', label: 'Select city' }, { value: 'JPR', label: 'Jaipur' }, { value: 'JDH', label: 'Jodhpur' }],
  WB:  [{ value: '', label: 'Select city' }, { value: 'KOL', label: 'Kolkata' }, { value: 'DRG', label: 'Durgapur' }],
};

export default function BillingForm({ onCancel, onSave }) {
  const [form, setForm] = useState({
    companyName: '',
    email: '',
    gst: '',
    pan: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pincode: '',
  });

  const set = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
      ...(field === 'state' ? { city: '' } : {}),
    }));

  const cityOptions = CITIES[form.state] || [{ value: '', label: 'Select city' }];

  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Review your details</h1>
      <h2 className="text-base font-semibold text-gray-800 mb-6">Billing Information</h2>

      <div className="flex flex-col gap-5">
        {/* company + email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Company Name" placeholder="SathwikaDanthuri" value={form.companyName} onChange={set('companyName')} />
          <InputField label="Email" placeholder="SathwikaDanthuri.@getreelax.com" type="email" value={form.email} onChange={set('email')} />
        </div>

        {/* GST + PAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="GST Number" placeholder="GST Number" optional value={form.gst} onChange={set('gst')} />
          <InputField label="PAN Number" placeholder="PAN Number" optional value={form.pan} onChange={set('pan')} />
        </div>

        {/* premise + street */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Premise/House no." placeholder="Premise/House no." value={form.premise} onChange={set('premise')} />
          <InputField label="Street" placeholder="Street" value={form.street} onChange={set('street')} />
        </div>

        {/* state + city */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField label="State" options={STATES} value={form.state} onChange={set('state')} />
          <SelectField label="City" options={cityOptions} value={form.city} onChange={set('city')} />
        </div>

        {/* country + pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Country" placeholder="India" value={form.country} onChange={set('country')} />
          <InputField label="Pin Code" placeholder="Pincode" value={form.pincode} onChange={set('pincode')} />
        </div>
      </div>

      {/* action buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
        <button
          onClick={onCancel}
          className="px-6 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors order-2 sm:order-1"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(form)}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm order-1 sm:order-2"
        >
          Save Details
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { X, Globe, Fuel, DollarSign, Percent, Shield, ArrowUpRight, BarChart } from 'lucide-react';
import { CountryFuelRecord } from '../data/fuelData.ts';

interface CountryDetailModalProps {
  country: CountryFuelRecord | null;
  onClose: () => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({ country, onClose }) => {
  if (!country) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shadow-md">
              {country.code}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{country.name}</h3>
              <p className="text-xs text-slate-500">{country.region} • {country.incomeLevel}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Metrics Grid */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Fuel className="w-3.5 h-3.5 text-blue-600" />
                <span>Avg. Petrol Price</span>
              </div>
              <div className="text-xl font-extrabold text-slate-900">${country.petrolPrice.toFixed(2)}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">USD per Liter (Retail)</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Fuel className="w-3.5 h-3.5 text-indigo-600" />
                <span>Avg. Diesel Price</span>
              </div>
              <div className="text-xl font-extrabold text-slate-900">${country.dieselPrice.toFixed(2)}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Commercial transport grade</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Fuel className="w-3.5 h-3.5 text-cyan-600" />
                <span>Avg. LPG Price</span>
              </div>
              <div className="text-xl font-extrabold text-slate-900">${country.lpgPrice.toFixed(2)}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Liquefied petroleum gas</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Percent className="w-3.5 h-3.5 text-amber-600" />
                <span>Tax Percentage</span>
              </div>
              <div className="text-xl font-extrabold text-slate-900">{country.taxPercentage.toFixed(2)}%</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Excise, VAT & Environmental duty</div>
            </div>

          </div>

          {/* Policy & Classification Details */}
          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 text-xs text-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-600">Subsidy Framework:</span>
              <span className="font-bold text-blue-900 bg-white px-2 py-0.5 rounded border border-blue-200">
                {country.subsidyLevel}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-600">Crude Benchmark Spread:</span>
              <span className="font-bold text-slate-900">
                {country.brentBenchmarkDiff >= 0 ? `+${country.brentBenchmarkDiff}` : country.brentBenchmarkDiff} $/L vs Brent
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-600">Economic Cohort:</span>
              <span className="font-bold text-slate-900">{country.incomeLevel}</span>
            </div>
          </div>

          {/* Strategic Context Note */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">Stakeholder Takeaway:</span> In {country.name}, retail pricing reflects a {country.subsidyLevel.toLowerCase()} regime. With taxation accounting for {country.taxPercentage.toFixed(1)}% of end-user expenditure, price movements show {country.taxPercentage > 30 ? 'high resilience to crude spikes' : 'direct vulnerability to global commodity shifts'}.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { X, Download, FileSpreadsheet, FileCode, Printer, Check, Database, ShieldCheck } from 'lucide-react';
import { COUNTRIES_DATA, GLOBAL_YEAR_TRENDS } from '../data/fuelData.ts';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadCSV = () => {
    const headers = [
      'Country_Code',
      'Country_Name',
      'Region',
      'Income_Level',
      'Subsidy_Level',
      'Avg_Petrol_USD_Liter',
      'Avg_Diesel_USD_Liter',
      'Avg_LPG_USD_Liter',
      'Avg_Tax_Percentage',
      'Brent_Benchmark_Diff'
    ];

    const rows = COUNTRIES_DATA.map((c) => [
      c.code,
      `"${c.name}"`,
      `"${c.region}"`,
      `"${c.incomeLevel}"`,
      `"${c.subsidyLevel}"`,
      c.petrolPrice.toFixed(2),
      c.dieselPrice.toFixed(2),
      c.lpgPrice.toFixed(2),
      c.taxPercentage.toFixed(2),
      c.brentBenchmarkDiff.toFixed(2)
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'global_fuel_prices_taxation_2020_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadJSON = () => {
    const payload = {
      reportTitle: 'Global Fuel Prices and Taxation Trends (2020–2026)',
      recordCount: 27468,
      nationsCount: COUNTRIES_DATA.length,
      globalIndicators: {
        avgPetrolUsd: 2.28,
        avgDieselUsd: 2.13,
        avgLpgUsd: 1.71,
        avgTaxPercentage: 26.77
      },
      yearlyTrends: GLOBAL_YEAR_TRENDS,
      countries: COUNTRIES_DATA
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', 'global_fuel_analytics_complete.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Export Analytics & Intelligence</h3>
              <p className="text-xs text-slate-500">Global Fuel Prices & Taxation Trends Dataset</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-blue-50/70 rounded-xl p-4 border border-blue-100/80 text-xs text-blue-900 flex items-start gap-3">
            <Database className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Dataset Summary:</span> Contains 27,468 complete records across 84 nations and 7 regions covering 10 distinct fuel price, subsidy, and taxation variables.
            </div>
          </div>

          <div className="space-y-2.5">
            {/* CSV Option */}
            <button
              onClick={handleDownloadCSV}
              className="w-full p-3.5 bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-xl flex items-center justify-between group transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                    Download Full CSV Dataset
                  </div>
                  <div className="text-xs text-slate-500">
                    Compatible with Excel, Tableau, PowerBI, R, and Python Pandas
                  </div>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </button>

            {/* JSON Option */}
            <button
              onClick={handleDownloadJSON}
              className="w-full p-3.5 bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-xl flex items-center justify-between group transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                  <FileCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                    Export Structured JSON
                  </div>
                  <div className="text-xs text-slate-500">
                    Includes hierarchical series, metadata, and persona benchmarks
                  </div>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </button>

            {/* Print/PDF Option */}
            <button
              onClick={handlePrint}
              className="w-full p-3.5 bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-xl flex items-center justify-between group transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                    Print / Save as PDF Executive Summary
                  </div>
                  <div className="text-xs text-slate-500">
                    Clean, styled layout optimized for ministerial or board briefings
                  </div>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </button>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Open Research Data
            </span>
            <span>CC BY-NC 4.0 License</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

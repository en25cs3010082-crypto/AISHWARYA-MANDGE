import React, { useState } from 'react';
import { BarChart3, Fuel, PieChart, UserCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONA_SCENARIOS } from '../data/fuelData.ts';

interface AboutSectionProps {
  onSelectPersona?: (personaId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectPersona }) => {
  const [activePersonaId, setActivePersonaId] = useState<string>('sarah');
  const activePersona = PERSONA_SCENARIOS.find((p) => p.id === activePersonaId) || PERSONA_SCENARIOS[0];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header with blue accent bar matching Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            About the Data
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            This dataset encompasses global fuel prices and taxation trends spanning from 2020 to 2026, offering detailed insights into petrol, diesel, and LPG costs across different regions. It enables comparative evaluation of national fuel pricing policies and their correlation with tax structures worldwide.
          </p>
        </div>

        {/* 3 Insight Cards matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Key Insights */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Key Insights</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed flex-1">
              Europe consistently demonstrates the highest average tax percentage (~34%) on fuels, significantly contributing to higher retail prices. Conversely, regions like the Middle East display the lowest taxation rates (~19%), subsidized heavily by local petroleum production.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
              <span>European Baseline</span>
              <span className="bg-blue-100/70 px-2 py-0.5 rounded">34.82% Avg. Tax</span>
            </div>
          </div>

          {/* Card 2: Petrol vs. Diesel */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <Fuel className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Petrol vs. Diesel</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed flex-1">
              Historically, diesel prices remained marginally lower than petrol globally. However, the data highlights converging price points post-2022, primarily driven by surging commercial demand and varying environmental taxation protocols.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
              <span>Parity Spread</span>
              <span className="bg-blue-100/70 px-2 py-0.5 rounded">Δ $0.15 / Liter</span>
            </div>
          </div>

          {/* Card 3: Comparison Analysis */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <PieChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Comparison Analysis</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed flex-1">
              When comparing high-tax regions with minimal-tax nations, there is an inverse correlation between taxation levels and raw fuel price volatility. Advanced economies employ higher taxes as a buffer and a means of funding infrastructure, while producing nations maintain baseline costs.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
              <span>Volatility Dampening</span>
              <span className="bg-blue-100/70 px-2 py-0.5 rounded">-42% Variance</span>
            </div>
          </div>
        </div>

        {/* Stakeholder Exploration Scenarios (Prompt Scenarios 1, 2, 3) */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tailored Analytical Scenarios</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Stakeholder Decision Lenses & Workflows
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Explore how policy consultants, supply chain operators, and academic researchers leverage this report.
            </p>
          </div>

          {/* Scenario tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {PERSONA_SCENARIOS.map((persona) => {
              const isSelected = activePersona.id === persona.id;
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersonaId(persona.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <UserCheck className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  <span>{persona.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-normal ${isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-500'}`}>
                    {persona.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card Details */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {activePersona.role}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {activePersona.name}: {activePersona.focus}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activePersona.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Investigative Questions:
                  </div>
                  <div className="space-y-2">
                    {activePersona.keyQuestions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CTA / Filter configuration */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Targeted Query Profile
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-600 mb-4">
                    <div>
                      <span className="font-semibold text-slate-700">Priority Geographies:</span>{' '}
                      {activePersona.recommendedFilters.regions.join(', ')}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Core Indicators:</span>{' '}
                      {activePersona.recommendedFilters.measures.join(', ')}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (onSelectPersona) {
                      onSelectPersona(activePersona.id);
                    }
                    const dashEl = document.getElementById('dashboard');
                    if (dashEl) {
                      dashEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Apply Scenario View in Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

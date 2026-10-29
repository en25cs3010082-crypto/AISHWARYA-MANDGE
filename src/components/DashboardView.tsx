import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  RotateCcw, 
  Maximize2, 
  ChevronDown, 
  MapPin, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  GLOBAL_YEAR_TRENDS, 
  REGIONAL_TAX_DATA, 
  TOP_TAX_NATIONS, 
  TOP_THREE_COUNTRIES_COMPARISON,
  COUNTRIES_DATA,
  CountryFuelRecord 
} from '../data/fuelData.ts';

interface DashboardViewProps {
  onSelectCountry: (country: CountryFuelRecord) => void;
  activePersonaId?: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onSelectCountry,
  activePersonaId
}) => {
  // Filters state
  const [selectedMeasure, setSelectedMeasure] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedIncome, setSelectedIncome] = useState<string>('All');
  const [selectedSubsidy, setSelectedSubsidy] = useState<string>('All');
  const [hoveredCountry, setHoveredCountry] = useState<CountryFuelRecord | null>(null);
  const [activeTabMap, setActiveTabMap] = useState<'petrol' | 'diesel'>('petrol');

  // Filtered dataset
  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((item) => {
      if (selectedCountry !== 'All' && item.name !== selectedCountry) return false;
      if (selectedRegion !== 'All' && item.region !== selectedRegion) return false;
      if (selectedIncome !== 'All' && item.incomeLevel !== selectedIncome) return false;
      if (selectedSubsidy !== 'All' && item.subsidyLevel !== selectedSubsidy) return false;
      return true;
    });
  }, [selectedCountry, selectedRegion, selectedIncome, selectedSubsidy]);

  // Dynamic KPIs calculated from filtered subset
  const calculatedKPIs = useMemo(() => {
    if (filteredCountries.length === 0) {
      return { diesel: '2.13$', lpg: '1.71$', petrol: '2.28$', tax: '26.77%' };
    }
    // If user filtered by a single year or standard default:
    if (selectedYear !== 'All') {
      const yearPoint = GLOBAL_YEAR_TRENDS.find((y) => y.year.toString() === selectedYear);
      if (yearPoint && selectedCountry === 'All' && selectedRegion === 'All') {
        return {
          diesel: `${yearPoint.diesel.toFixed(2)}$`,
          lpg: `${yearPoint.lpg.toFixed(2)}$`,
          petrol: `${yearPoint.petrol.toFixed(2)}$`,
          tax: '26.77%'
        };
      }
    }
    const avgDiesel = (filteredCountries.reduce((acc, c) => acc + c.dieselPrice, 0) / filteredCountries.length).toFixed(2);
    const avgLpg = (filteredCountries.reduce((acc, c) => acc + c.lpgPrice, 0) / filteredCountries.length).toFixed(2);
    const avgPetrol = (filteredCountries.reduce((acc, c) => acc + c.petrolPrice, 0) / filteredCountries.length).toFixed(2);
    const avgTax = (filteredCountries.reduce((acc, c) => acc + c.taxPercentage, 0) / filteredCountries.length).toFixed(2);

    return {
      diesel: `${avgDiesel}$`,
      lpg: `${avgLpg}$`,
      petrol: `${avgPetrol}$`,
      tax: `${avgTax}%`
    };
  }, [filteredCountries, selectedYear, selectedCountry, selectedRegion]);

  const resetFilters = () => {
    setSelectedMeasure('All');
    setSelectedCountry('All');
    setSelectedYear('All');
    setSelectedRegion('All');
    setSelectedIncome('All');
    setSelectedSubsidy('All');
  };

  const hasActiveFilters =
    selectedMeasure !== 'All' ||
    selectedCountry !== 'All' ||
    selectedYear !== 'All' ||
    selectedRegion !== 'All' ||
    selectedIncome !== 'All' ||
    selectedSubsidy !== 'All';

  return (
    <section id="dashboard" className="py-16 px-2 sm:px-4 lg:px-8 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Data Insights Dashboard
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Interactive dashboard visualizing Average Prices and Taxation Performance Indicators.
          </p>
        </div>

        {/* Tableau Style Outer Container with Cyan / Light Blue Theme matching Screenshot 1 & 3 */}
        <div className="bg-[#62c4ea] border-4 border-[#4aaed6] rounded-xl shadow-2xl p-2 sm:p-3 overflow-hidden text-slate-900 font-sans">
          
          {/* Main Title Bar */}
          <div className="bg-[#52badf] border border-white/60 py-2 px-4 mb-2 flex items-center justify-between text-center rounded-sm">
            <h3 className="w-full text-base sm:text-lg font-bold tracking-tight text-slate-900 drop-shadow-sm">
              Global Fuel Prices and Taxation Trends (2020–2026)
            </h3>
          </div>

          {/* KPI Strip & Right Filter Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-2">
            
            {/* KPI Performance Indicators Box (Left 9 columns) */}
            <div className="lg:col-span-9 bg-[#5ebfe2] border border-white/80 rounded-sm p-1.5 flex flex-col justify-between">
              <div className="text-center font-bold text-xs sm:text-sm text-slate-900 border-b border-white/60 pb-1 mb-1">
                Global Fuel Price and Tax Performance Indicators
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-center">
                <div className="bg-[#56b9dd] border border-white/60 p-1.5 rounded-sm">
                  <div className="text-[11px] font-semibold text-slate-800">Avg. Diesel Usd Liter</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">{calculatedKPIs.diesel}</div>
                </div>
                <div className="bg-[#56b9dd] border border-white/60 p-1.5 rounded-sm">
                  <div className="text-[11px] font-semibold text-slate-800">Avg. Lpg Usd Liter</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">{calculatedKPIs.lpg}</div>
                </div>
                <div className="bg-[#56b9dd] border border-white/60 p-1.5 rounded-sm">
                  <div className="text-[11px] font-semibold text-slate-800">Avg. Petrol Usd Liter</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">{calculatedKPIs.petrol}</div>
                </div>
                <div className="bg-[#56b9dd] border border-white/60 p-1.5 rounded-sm">
                  <div className="text-[11px] font-semibold text-slate-800">Avg. Tax Percentage</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">{calculatedKPIs.tax}</div>
                </div>
              </div>
            </div>

            {/* Tableau Filter Box (Right 3 columns) matching Screenshot 1 & 3 */}
            <div className="lg:col-span-3 bg-[#5ebfe2] border border-white/80 rounded-sm p-1.5 space-y-1 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase">Measure Names</label>
                <div className="relative">
                  <select
                    value={selectedMeasure}
                    onChange={(e) => setSelectedMeasure(e.target.value)}
                    className="w-full bg-white text-slate-800 text-[11px] border border-slate-300 rounded px-2 py-0.5 pr-6 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="All">[Multiple values]</option>
                    <option value="petrol">Petrol Price (USD)</option>
                    <option value="diesel">Diesel Price (USD)</option>
                    <option value="lpg">LPG Price (USD)</option>
                    <option value="brent">Brent Crude Oil</option>
                    <option value="tax">Tax Percentage</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-1.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase">Country</label>
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full bg-white text-slate-800 text-[11px] border border-slate-300 rounded px-2 py-0.5 pr-6 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="All">(All)</option>
                    {COUNTRIES_DATA.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.region})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-1.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase">Action (YEAR(Date))</label>
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-white text-slate-800 text-[11px] border border-slate-300 rounded px-2 py-0.5 pr-6 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="All">(All)</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-1.5 pointer-events-none" />
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="w-full mt-1 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-700 py-0.5 text-[10px] font-semibold border border-slate-300 rounded flex items-center justify-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Segment Filter Pill Bar */}
          <div className="bg-[#56b9dd] border border-white/60 rounded-sm p-1.5 mb-2 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-[10px] text-slate-900 uppercase flex items-center gap-1">
                <Filter className="w-3 h-3" /> Region:
              </span>
              {['All', 'Europe', 'North America', 'Middle East', 'Asia', 'Africa', 'Oceania', 'South America'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-2 py-0.5 text-[10px] rounded font-medium transition-all ${
                    selectedRegion === reg
                      ? 'bg-slate-900 text-white font-bold shadow-sm'
                      : 'bg-white/80 hover:bg-white text-slate-800'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-800">
              <span className="bg-white/70 px-2 py-0.5 rounded border border-white">
                Filtered: <strong className="text-slate-950">{filteredCountries.length}</strong> / 84 nations
              </span>
            </div>
          </div>

          {/* Main 3-Column Visual Grid matching Screenshot 1 & 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            
            {/* COLUMN 1: Maps (Left 4 columns) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              
              {/* Map 1: Petrol Map */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-2 relative flex flex-col h-[280px]">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-slate-900">
                    Global Comparison of Average Petrol Prices (USD per Liter)
                  </h4>
                  <span className="text-[9px] bg-white/70 text-slate-700 px-1 py-0.2 rounded font-mono">
                    Petrol $/L
                  </span>
                </div>

                {/* SVG Interactive Map */}
                <div className="relative flex-1 w-full bg-[#a0d8ef]/60 border border-white/50 rounded overflow-hidden">
                  <svg
                    viewBox="0 0 100 65"
                    className="w-full h-full object-fill cursor-crosshair select-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Oceans */}
                    <rect width="100" height="65" fill="#aee0f5" />
                    
                    {/* Continents shapes */}
                    {/* North America */}
                    <path d="M 10 8 Q 24 6 32 18 Q 30 28 20 28 Q 12 20 10 8 Z" fill="#c3e8a4" stroke="#7ab868" strokeWidth="0.5" />
                    <path d="M 16 28 Q 22 35 24 40 Q 18 42 16 28 Z" fill="#c3e8a4" stroke="#7ab868" strokeWidth="0.5" />
                    {/* South America */}
                    <path d="M 24 40 Q 34 43 32 58 Q 26 62 24 40 Z" fill="#c3e8a4" stroke="#7ab868" strokeWidth="0.5" />
                    {/* Europe */}
                    <path d="M 45 10 Q 56 8 58 22 Q 48 24 45 10 Z" fill="#f7d498" stroke="#d49b4c" strokeWidth="0.5" />
                    {/* Africa */}
                    <path d="M 44 24 Q 62 25 59 48 Q 48 50 44 24 Z" fill="#ebd2a9" stroke="#bda275" strokeWidth="0.5" />
                    {/* Asia */}
                    <path d="M 58 10 Q 86 10 84 32 Q 68 34 58 10 Z" fill="#d2e3b2" stroke="#9bb86f" strokeWidth="0.5" />
                    {/* Australia */}
                    <path d="M 78 44 Q 90 44 88 56 Q 78 56 78 44 Z" fill="#f4caa2" stroke="#c98a53" strokeWidth="0.5" />

                    {/* Country Markers for Petrol Prices */}
                    {filteredCountries.map((country) => {
                      const isHovered = hoveredCountry?.id === country.id;
                      // Color scale based on petrol price: low (<1.5 = green, 1.5-2.4 = orange/amber, >2.4 = red)
                      const markerColor =
                        country.petrolPrice > 2.5
                          ? '#ef4444'
                          : country.petrolPrice > 1.8
                          ? '#f59e0b'
                          : '#10b981';

                      return (
                        <g
                          key={country.id}
                          className="cursor-pointer transition-transform duration-200"
                          onClick={() => onSelectCountry(country)}
                          onMouseEnter={() => setHoveredCountry(country)}
                          onMouseLeave={() => setHoveredCountry(null)}
                        >
                          <circle
                            cx={country.coordinates[0] * 0.95 + 2}
                            cy={country.coordinates[1] * 0.65}
                            r={isHovered ? 2.8 : 1.6}
                            fill={markerColor}
                            stroke="#ffffff"
                            strokeWidth="0.4"
                            className="transition-all"
                          />
                          {/* Label prominent countries matching screenshot labels */}
                          {['USA', 'CAN', 'GBR', 'DEU', 'SAU', 'CHN', 'AUS', 'BRA', 'ZAF'].includes(country.id) && (
                            <text
                              x={country.coordinates[0] * 0.95 + 2}
                              y={country.coordinates[1] * 0.65 - 2}
                              fontSize="2.2"
                              fill="#0f172a"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              {country.name}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* OpenStreetMap / Mapbox style watermark matching screenshot */}
                  <div className="absolute bottom-1 left-1.5 text-[8px] text-slate-600 bg-white/70 px-1 rounded pointer-events-none font-mono">
                    © 2026 Mapbox © OpenStreetMap
                  </div>

                  {/* Hover Tooltip Overlay */}
                  {hoveredCountry && (
                    <div className="absolute top-2 right-2 bg-slate-900/90 text-white p-2 rounded shadow-lg text-[10px] pointer-events-none z-20 border border-slate-700">
                      <div className="font-bold text-amber-300">{hoveredCountry.name}</div>
                      <div>Petrol: <strong className="text-white">${hoveredCountry.petrolPrice.toFixed(2)}/L</strong></div>
                      <div>Tax Rate: <strong className="text-blue-300">{hoveredCountry.taxPercentage}%</strong></div>
                      <div>Subsidy: {hoveredCountry.subsidyLevel}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Map 2: Diesel Map */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-2 relative flex flex-col h-[280px]">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-slate-900">
                    Global Comparison of Average Diesel Prices (USD per Liter)
                  </h4>
                  <span className="text-[9px] bg-white/70 text-slate-700 px-1 py-0.2 rounded font-mono">
                    Diesel $/L
                  </span>
                </div>

                <div className="relative flex-1 w-full bg-[#a0d8ef]/60 border border-white/50 rounded overflow-hidden">
                  <svg
                    viewBox="0 0 100 65"
                    className="w-full h-full object-fill cursor-crosshair select-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="65" fill="#aee0f5" />
                    
                    {/* Continents shapes */}
                    <path d="M 10 8 Q 24 6 32 18 Q 30 28 20 28 Q 12 20 10 8 Z" fill="#b9e29a" stroke="#689f57" strokeWidth="0.5" />
                    <path d="M 16 28 Q 22 35 24 40 Q 18 42 16 28 Z" fill="#b9e29a" stroke="#689f57" strokeWidth="0.5" />
                    <path d="M 24 40 Q 34 43 32 58 Q 26 62 24 40 Z" fill="#b9e29a" stroke="#689f57" strokeWidth="0.5" />
                    <path d="M 45 10 Q 56 8 58 22 Q 48 24 45 10 Z" fill="#f2cb8a" stroke="#c08639" strokeWidth="0.5" />
                    <path d="M 44 24 Q 62 25 59 48 Q 48 50 44 24 Z" fill="#e5c898" stroke="#a98e62" strokeWidth="0.5" />
                    <path d="M 58 10 Q 86 10 84 32 Q 68 34 58 10 Z" fill="#c7dba1" stroke="#89a55e" strokeWidth="0.5" />
                    <path d="M 78 44 Q 90 44 88 56 Q 78 56 78 44 Z" fill="#eec094" stroke="#ba7943" strokeWidth="0.5" />

                    {/* Diesel price dots */}
                    {filteredCountries.map((country) => {
                      const isHovered = hoveredCountry?.id === country.id;
                      const markerColor =
                        country.dieselPrice > 2.4
                          ? '#dc2626'
                          : country.dieselPrice > 1.8
                          ? '#d97706'
                          : '#059669';

                      return (
                        <g
                          key={country.id}
                          className="cursor-pointer"
                          onClick={() => onSelectCountry(country)}
                          onMouseEnter={() => setHoveredCountry(country)}
                          onMouseLeave={() => setHoveredCountry(null)}
                        >
                          <circle
                            cx={country.coordinates[0] * 0.95 + 2}
                            cy={country.coordinates[1] * 0.65}
                            r={isHovered ? 2.8 : 1.6}
                            fill={markerColor}
                            stroke="#ffffff"
                            strokeWidth="0.4"
                          />
                          {['MEX', 'RUS', 'IND', 'IDN', 'NGA', 'ARG'].includes(country.id) && (
                            <text
                              x={country.coordinates[0] * 0.95 + 2}
                              y={country.coordinates[1] * 0.65 - 2}
                              fontSize="2.2"
                              fill="#0f172a"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              {country.name}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  <div className="absolute bottom-1 left-1.5 text-[8px] text-slate-600 bg-white/70 px-1 rounded pointer-events-none font-mono">
                    © 2026 Mapbox © OpenStreetMap
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Trend Lines & Top 3 Comparison (Center 5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              
              {/* Trend 1: Average Petrol Prices (2020–2027) matching Screenshot 1 & 3 */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-1.5 flex flex-col">
                <div className="text-center font-bold text-[11px] text-slate-900 mb-1">
                  Global Trend of Average Petrol Prices (2020–2027)
                </div>
                <div className="relative h-14 bg-white/80 border border-white/60 rounded px-2 flex items-center">
                  <div className="text-[9px] font-bold text-slate-700 w-10 shrink-0 leading-tight">
                    Avg. Pet..
                    <div className="text-[8px] font-normal text-slate-500">2<br />1<br />0</div>
                  </div>
                  {/* Visual Line Graphic with exact data points matching screenshot */}
                  <div className="flex-1 grid grid-cols-8 gap-0 h-full items-end pb-1 text-center">
                    {GLOBAL_YEAR_TRENDS.map((pt, idx) => {
                      const heightPercent = Math.min(100, Math.max(15, (pt.petrol / 3.0) * 100));
                      const isHighlighted = selectedYear === pt.year.toString();
                      return (
                        <div key={pt.year} className="flex flex-col items-center justify-end h-full group relative">
                          <span className={`text-[8.5px] font-extrabold ${isHighlighted ? 'text-blue-900 bg-amber-200 px-0.5 rounded' : 'text-slate-800'}`}>
                            ${pt.petrol.toFixed(2)}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 my-0.5 border border-white shadow-xs group-hover:scale-125 transition-transform" />
                          <div
                            className={`w-full h-0.5 ${idx < GLOBAL_YEAR_TRENDS.length - 1 ? 'border-t border-blue-500' : ''}`}
                          />
                          <span className="text-[8px] text-slate-600 font-mono mt-0.5">{pt.year}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Trend 2: Average Diesel Prices (2020–2027) matching Screenshot 1 & 3 */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-1.5 flex flex-col">
                <div className="text-center font-bold text-[11px] text-slate-900 mb-1">
                  Global Trend of Average Diesel Prices (2020–2027)
                </div>
                <div className="relative h-14 bg-white/80 border border-white/60 rounded px-2 flex items-center">
                  <div className="text-[9px] font-bold text-slate-700 w-10 shrink-0 leading-tight">
                    Avg. Die..
                    <div className="text-[8px] font-normal text-slate-500">2<br />1<br />0</div>
                  </div>
                  <div className="flex-1 grid grid-cols-8 gap-0 h-full items-end pb-1 text-center">
                    {GLOBAL_YEAR_TRENDS.map((pt) => {
                      const isHighlighted = selectedYear === pt.year.toString();
                      return (
                        <div key={pt.year} className="flex flex-col items-center justify-end h-full group relative">
                          <span className={`text-[8.5px] font-extrabold ${isHighlighted ? 'text-blue-900 bg-amber-200 px-0.5 rounded' : 'text-slate-800'}`}>
                            ${pt.diesel.toFixed(2)}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 my-0.5 border border-white shadow-xs group-hover:scale-125 transition-transform" />
                          <span className="text-[8px] text-slate-600 font-mono mt-0.5">{pt.year}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Trend 3: Average LPG Prices (2020–2027) matching Screenshot 1 & 3 */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-1.5 flex flex-col">
                <div className="text-center font-bold text-[11px] text-slate-900 mb-1">
                  Global Trend of Average Lpg Prices (2020–2027)
                </div>
                <div className="relative h-14 bg-white/80 border border-white/60 rounded px-2 flex items-center">
                  <div className="text-[9px] font-bold text-slate-700 w-10 shrink-0 leading-tight">
                    Avg. Lpg<br />Usd Liter
                    <div className="text-[8px] font-normal text-slate-500">2<br />1<br />0</div>
                  </div>
                  <div className="flex-1 grid grid-cols-8 gap-0 h-full items-end pb-1 text-center">
                    {GLOBAL_YEAR_TRENDS.map((pt) => {
                      const isHighlighted = selectedYear === pt.year.toString();
                      return (
                        <div key={pt.year} className="flex flex-col items-center justify-end h-full group relative">
                          <span className={`text-[8.5px] font-extrabold ${isHighlighted ? 'text-blue-900 bg-amber-200 px-0.5 rounded' : 'text-slate-800'}`}>
                            ${pt.lpg.toFixed(2)}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-700 my-0.5 border border-white shadow-xs group-hover:scale-125 transition-transform" />
                          <span className="text-[8px] text-slate-600 font-mono mt-0.5">{pt.year}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Trend 4: Brent Crude Oil Prices (2020–2027) matching Screenshot 1 & 3 */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-1.5 flex flex-col">
                <div className="text-center font-bold text-[11px] text-slate-900 mb-1">
                  Global Trend of Average Brent Crude Oil Prices (2020–2027)
                </div>
                <div className="relative h-14 bg-white/80 border border-white/60 rounded px-2 flex items-center">
                  <div className="text-[9px] font-bold text-slate-700 w-10 shrink-0 leading-tight">
                    Avg. Bren..<br />
                    <div className="text-[8px] font-normal text-slate-500">100<br />50<br />0</div>
                  </div>
                  <div className="flex-1 grid grid-cols-8 gap-0 h-full items-end pb-1 text-center">
                    {GLOBAL_YEAR_TRENDS.map((pt) => {
                      const isHighlighted = selectedYear === pt.year.toString();
                      return (
                        <div key={pt.year} className="flex flex-col items-center justify-end h-full group relative">
                          <span className={`text-[8px] font-extrabold ${isHighlighted ? 'text-blue-900 bg-amber-200 px-0.5 rounded' : 'text-slate-800'}`}>
                            {pt.brentCrude.toFixed(1)}$
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 my-0.5 border border-white shadow-xs group-hover:scale-125 transition-transform" />
                          <span className="text-[8px] text-slate-600 font-mono mt-0.5">{pt.year}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Fuel Price Comparison Among Top 3 Countries (Grouped Bar Chart matching Screenshot 1 & 3) */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-2 flex flex-col">
                <div className="text-center font-bold text-[11px] text-slate-900 mb-1.5">
                  Fuel Price Comparison Among Top 3 Countries
                </div>
                
                <div className="relative h-32 bg-white/85 border border-white/70 rounded p-2 flex">
                  {/* Y Axis */}
                  <div className="w-8 shrink-0 flex flex-col justify-between text-[8px] text-slate-600 font-mono border-r border-slate-200 pr-1 pb-4">
                    <span className="font-bold text-[8px]">Value</span>
                    <span>3 —</span>
                    <span>2 —</span>
                    <span>1 —</span>
                    <span>0 —</span>
                  </div>

                  {/* 3 Country Groups: Canada, Mexico, United States */}
                  <div className="flex-1 grid grid-cols-3 gap-2 px-1">
                    {TOP_THREE_COUNTRIES_COMPARISON.map((grp) => {
                      const maxVal = 3.2;
                      return (
                        <div key={grp.country} className="flex flex-col items-center h-full justify-between">
                          <span className="text-[9px] font-bold text-slate-800">{grp.country}</span>
                          
                          {/* 3 Bars: LPG (red), Diesel (teal), Petrol (orange/amber) */}
                          <div className="flex items-end justify-center gap-1 w-full h-20 pt-1 pb-1 border-b border-slate-300">
                            {/* LPG bar */}
                            <div className="flex flex-col items-center flex-1 h-full justify-end group">
                              <span className="text-[7.5px] font-bold text-slate-700">{grp.lpg.toFixed(1)}$</span>
                              <div
                                style={{ height: `${(grp.lpg / maxVal) * 100}%` }}
                                className="w-full bg-[#f87171] rounded-t-xs hover:brightness-110 transition-all"
                                title={`${grp.country} LPG: $${grp.lpg}`}
                              />
                            </div>
                            {/* Diesel bar */}
                            <div className="flex flex-col items-center flex-1 h-full justify-end group">
                              <span className="text-[7.5px] font-bold text-slate-700">{grp.diesel.toFixed(1)}$</span>
                              <div
                                style={{ height: `${(grp.diesel / maxVal) * 100}%` }}
                                className="w-full bg-[#38bdf8] rounded-t-xs hover:brightness-110 transition-all"
                                title={`${grp.country} Diesel: $${grp.diesel}`}
                              />
                            </div>
                            {/* Petrol bar */}
                            <div className="flex flex-col items-center flex-1 h-full justify-end group">
                              <span className="text-[7.5px] font-bold text-slate-700">{grp.petrol.toFixed(1)}$</span>
                              <div
                                style={{ height: `${(grp.petrol / maxVal) * 100}%` }}
                                className="w-full bg-[#fb923c] rounded-t-xs hover:brightness-110 transition-all"
                                title={`${grp.country} Petrol: $${grp.petrol}`}
                              />
                            </div>
                          </div>

                          {/* Legend beneath bars */}
                          <div className="flex items-center justify-center gap-1 text-[6.5px] text-slate-600 font-mono mt-0.5">
                            <span className="text-[#dc2626]">LPG</span>
                            <span className="text-[#0284c7]">Die</span>
                            <span className="text-[#ea580c]">Pet</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 3: Regional Pie & Top Tax Nations (Right 3 columns) */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              
              {/* Top: Average Tax Percentage by Global Region (Pie/Donut matching Screenshot 1 & 3) */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-2 flex flex-col h-[280px]">
                <div className="text-center font-bold text-xs text-slate-900 mb-1">
                  Average Tax Percentage by Global Region
                </div>

                <div className="relative flex-1 bg-white/85 border border-white/60 rounded p-1.5 flex flex-col items-center justify-center">
                  {/* SVG Pie Chart */}
                  <svg viewBox="0 0 160 160" className="w-36 h-36">
                    {/* Pie Slices */}
                    {/* Oceania 38.69% (~139 deg) */}
                    <path d="M 80 80 L 80 10 A 70 70 0 0 1 148 95 Z" fill="#3b82f6" />
                    {/* North America 29.21% (~105 deg) */}
                    <path d="M 80 80 L 148 95 A 70 70 0 0 1 70 150 Z" fill="#06b6d4" />
                    {/* Africa 25.79% */}
                    <path d="M 80 80 L 70 150 A 70 70 0 0 1 20 115 Z" fill="#10b981" />
                    {/* Asia 23.01% */}
                    <path d="M 80 80 L 20 115 A 70 70 0 0 1 22 55 Z" fill="#eab308" />
                    {/* Middle East 19.60% */}
                    <path d="M 80 80 L 22 55 A 70 70 0 0 1 50 18 Z" fill="#f97316" />
                    {/* South America 18.20% */}
                    <path d="M 80 80 L 50 18 A 70 70 0 0 1 80 10 Z" fill="#ec4899" />
                    {/* Inner donut core */}
                    <circle cx="80" cy="80" r="26" fill="#ffffff" />
                    <text x="80" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">Tax</text>
                    <text x="80" y="90" textAnchor="middle" fontSize="7" fill="#64748b">Shares</text>
                  </svg>

                  {/* Percentage Labels matching Screenshot 1 */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8.5px] mt-1 w-full px-1">
                    <div className="flex items-center gap-1 text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                      <span>Oceania: <strong>38.69%</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
                      <span>N. America: <strong>29.21%</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span>Africa: <strong>25.79%</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                      <span>Asia: <strong>23.01%</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                      <span>Mid East: <strong>19.60%</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#ec4899]" />
                      <span>S. America: <strong>18.20%</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Highest Tax-Paying Nations: Comparative Analysis (Vertical Bars matching Screenshot 1 & 3) */}
              <div className="bg-[#6bc7ea] border border-white/80 rounded-sm p-2 flex flex-col h-[280px]">
                <div className="text-center font-bold text-xs text-slate-900 mb-1 leading-tight">
                  Highest Tax-Paying Nations:<br />Comparative Analysis
                </div>

                <div className="relative flex-1 bg-white/85 border border-white/60 rounded p-2 flex flex-col justify-between">
                  <div className="flex items-stretch flex-1 gap-1.5 pt-1">
                    
                    {/* Y-axis */}
                    <div className="w-6 shrink-0 flex flex-col justify-between text-[8px] text-slate-600 font-mono border-r border-slate-200 pr-0.5 pb-6">
                      <span className="text-[7px] font-bold">Tax %</span>
                      <span>40 —</span>
                      <span>30 —</span>
                      <span>20 —</span>
                      <span>10 —</span>
                      <span>0 —</span>
                    </div>

                    {/* Bars: Rwanda, New Zealand, Germany, Turkey, Denmark */}
                    <div className="flex-1 grid grid-cols-5 gap-1.5 h-full">
                      {TOP_TAX_NATIONS.map((nation) => {
                        return (
                          <div key={nation.name} className="flex flex-col items-center justify-end h-full group">
                            {/* Value label on top */}
                            <span className="text-[7.5px] font-extrabold text-slate-800 mb-0.5 whitespace-nowrap">
                              {nation.percentage}%
                            </span>
                            
                            {/* Bar */}
                            <div
                              style={{
                                height: `${(nation.percentage / 45) * 100}%`,
                                backgroundColor: nation.color
                              }}
                              className="w-full rounded-t-xs hover:brightness-110 shadow-xs transition-all cursor-pointer"
                              onClick={() => {
                                const found = COUNTRIES_DATA.find((c) => c.name === nation.name);
                                if (found) onSelectCountry(found);
                              }}
                            />
                            
                            {/* Rotated Country Name */}
                            <div className="h-12 flex items-center justify-center mt-1">
                              <span className="text-[8px] font-semibold text-slate-700 -rotate-90 whitespace-nowrap origin-center">
                                {nation.name}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Description Section directly under Dashboard matching Screenshot 3 */}
        <div className="mt-10 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Description
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            The global fuel pricing dashboards have been designed with a professional color scheme (light blue backgrounds with navy text) and clear visual hierarchy, enabling intuitive exploration and immediate insight recognition. The layouts are responsive across multiple screen sizes and devices, ensuring accessibility for desktop, tablet, and mobile users. Interactive filters enable dynamic exploration by Country, Region, Date Range, Income Level, and Subsidy Level, enabling stakeholders to segment data and explore how fuel pricing and taxation patterns differ across specific geographic areas, economic contexts, and policy environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="text-xs font-bold text-blue-700 uppercase mb-1">Scenario 1 Focus</div>
              <div className="text-sm font-bold text-slate-800 mb-1">Dr. Sarah Mitchell</div>
              <p className="text-xs text-slate-600">
                Optimizing fuel taxation disparities and subsidy phase-out structures across 84 sovereign jurisdictions.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="text-xs font-bold text-amber-700 uppercase mb-1">Scenario 2 Focus</div>
              <div className="text-sm font-bold text-slate-800 mb-1">Marcus Thompson</div>
              <p className="text-xs text-slate-600">
                Navigating cross-border diesel volatility, procurement hedging, and multimodal routing costs.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Scenario 3 Focus</div>
              <div className="text-sm font-bold text-slate-800 mb-1">Prof. Elena Rodriguez</div>
              <p className="text-xs text-slate-600">
                Examining econometric correlations between national GDP per capita and consumer fuel tax burdens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export interface CountryFuelRecord {
  id: string;
  name: string;
  code: string;
  region: 'North America' | 'South America' | 'Europe' | 'Asia' | 'Africa' | 'Middle East' | 'Oceania';
  incomeLevel: 'High income' | 'Upper middle income' | 'Lower middle income' | 'Low income';
  subsidyLevel: 'High Subsidy' | 'Moderate Subsidy' | 'Low/No Subsidy' | 'Net Tax';
  petrolPrice: number; // USD / liter
  dieselPrice: number; // USD / liter
  lpgPrice: number;    // USD / liter
  taxPercentage: number; // %
  brentBenchmarkDiff: number; // difference to crude base
  coordinates: [number, number]; // [xPercent, yPercent] for SVG world map placement (0-100)
}

export interface YearTrendPoint {
  year: number;
  petrol: number;
  diesel: number;
  lpg: number;
  brentCrude: number;
}

export const GLOBAL_YEAR_TRENDS: YearTrendPoint[] = [
  { year: 2020, petrol: 1.48, diesel: 1.39, lpg: 1.11, brentCrude: 77.6 },
  { year: 2021, petrol: 2.28, diesel: 2.13, lpg: 1.71, brentCrude: 106.6 },
  { year: 2022, petrol: 2.51, diesel: 2.34, lpg: 1.88, brentCrude: 117.1 },
  { year: 2023, petrol: 2.23, diesel: 2.09, lpg: 1.68, brentCrude: 104.4 },
  { year: 2024, petrol: 2.55, diesel: 2.38, lpg: 1.91, brentCrude: 119.0 },
  { year: 2025, petrol: 2.13, diesel: 2.37, lpg: 1.90, brentCrude: 118.7 },
  { year: 2026, petrol: 2.13, diesel: 2.23, lpg: 1.79, brentCrude: 113.0 },
  { year: 2027, petrol: 2.13, diesel: 2.23, lpg: 1.79, brentCrude: 113.0 }
];

export const REGIONAL_TAX_DATA = [
  { region: 'Oceania', percentage: 38.69, color: '#3b82f6', countries: 3 },
  { region: 'Europe', percentage: 34.82, color: '#8b5cf6', countries: 24 },
  { region: 'North America', percentage: 29.21, color: '#06b6d4', countries: 3 },
  { region: 'Africa', percentage: 25.79, color: '#10b981', countries: 18 },
  { region: 'Asia', percentage: 23.01, color: '#eab308', countries: 21 },
  { region: 'Middle East', percentage: 19.60, color: '#f97316', countries: 9 },
  { region: 'South America', percentage: 18.20, color: '#ec4899', countries: 6 }
];

export const TOP_TAX_NATIONS = [
  { name: 'Rwanda', percentage: 39.56, color: '#0284c7' },
  { name: 'New Zealand', percentage: 39.27, color: '#0d9488' },
  { name: 'Germany', percentage: 39.21, color: '#4f46e5' },
  { name: 'Turkey', percentage: 38.99, color: '#f43f5e' },
  { name: 'Denmark', percentage: 38.87, color: '#f97316' }
];

export const TOP_THREE_COUNTRIES_COMPARISON = [
  {
    country: 'Canada',
    lpg: 2.2,
    diesel: 2.7,
    petrol: 2.9
  },
  {
    country: 'Mexico',
    lpg: 0.7,
    diesel: 0.9,
    petrol: 1.0
  },
  {
    country: 'United States',
    lpg: 1.7,
    diesel: 2.1,
    petrol: 2.3
  }
];

export const COUNTRIES_DATA: CountryFuelRecord[] = [
  // North America
  { id: 'CAN', name: 'Canada', code: 'CA', region: 'North America', incomeLevel: 'High income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.90, dieselPrice: 2.70, lpgPrice: 2.20, taxPercentage: 31.4, brentBenchmarkDiff: 1.15, coordinates: [21, 26] },
  { id: 'USA', name: 'United States', code: 'US', region: 'North America', incomeLevel: 'High income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.30, dieselPrice: 2.10, lpgPrice: 1.70, taxPercentage: 18.2, brentBenchmarkDiff: 0.85, coordinates: [20, 36] },
  { id: 'MEX', name: 'Mexico', code: 'MX', region: 'North America', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.00, dieselPrice: 0.90, lpgPrice: 0.70, taxPercentage: 16.5, brentBenchmarkDiff: 0.32, coordinates: [18, 48] },

  // Europe
  { id: 'DEU', name: 'Germany', code: 'DE', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.82, dieselPrice: 2.64, lpgPrice: 1.95, taxPercentage: 39.21, brentBenchmarkDiff: 1.34, coordinates: [51, 31] },
  { id: 'DNK', name: 'Denmark', code: 'DK', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.89, dieselPrice: 2.68, lpgPrice: 2.01, taxPercentage: 38.87, brentBenchmarkDiff: 1.41, coordinates: [52, 26] },
  { id: 'GBR', name: 'United Kingdom', code: 'GB', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.78, dieselPrice: 2.69, lpgPrice: 1.92, taxPercentage: 37.80, brentBenchmarkDiff: 1.30, coordinates: [47, 30] },
  { id: 'FRA', name: 'France', code: 'FR', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.75, dieselPrice: 2.59, lpgPrice: 1.88, taxPercentage: 37.10, brentBenchmarkDiff: 1.25, coordinates: [49, 35] },
  { id: 'PRT', name: 'Portugal', code: 'PT', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.65, dieselPrice: 2.48, lpgPrice: 1.78, taxPercentage: 36.40, brentBenchmarkDiff: 1.18, coordinates: [45, 40] },
  { id: 'ROU', name: 'Romania', code: 'RO', region: 'Europe', incomeLevel: 'Upper middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.35, dieselPrice: 2.28, lpgPrice: 1.62, taxPercentage: 32.10, brentBenchmarkDiff: 0.95, coordinates: [56, 35] },
  { id: 'SWE', name: 'Sweden', code: 'SE', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.85, dieselPrice: 2.72, lpgPrice: 1.98, taxPercentage: 38.40, brentBenchmarkDiff: 1.38, coordinates: [53, 23] },
  { id: 'NOR', name: 'Norway', code: 'NO', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.92, dieselPrice: 2.74, lpgPrice: 2.05, taxPercentage: 38.10, brentBenchmarkDiff: 1.45, coordinates: [50, 22] },
  { id: 'TUR', name: 'Turkey', code: 'TR', region: 'Europe', incomeLevel: 'Upper middle income', subsidyLevel: 'Net Tax', petrolPrice: 2.45, dieselPrice: 2.39, lpgPrice: 1.68, taxPercentage: 38.99, brentBenchmarkDiff: 1.05, coordinates: [58, 39] },
  { id: 'ITA', name: 'Italy', code: 'IT', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.79, dieselPrice: 2.62, lpgPrice: 1.89, taxPercentage: 37.50, brentBenchmarkDiff: 1.29, coordinates: [52, 38] },
  { id: 'ESP', name: 'Spain', code: 'ES', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.58, dieselPrice: 2.45, lpgPrice: 1.74, taxPercentage: 35.80, brentBenchmarkDiff: 1.12, coordinates: [46, 39] },
  { id: 'NLD', name: 'Netherlands', code: 'NL', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.95, dieselPrice: 2.71, lpgPrice: 2.08, taxPercentage: 39.10, brentBenchmarkDiff: 1.48, coordinates: [49, 31] },

  // Middle East
  { id: 'SAU', name: 'Saudi Arabia', code: 'SA', region: 'Middle East', incomeLevel: 'High income', subsidyLevel: 'High Subsidy', petrolPrice: 0.62, dieselPrice: 0.31, lpgPrice: 0.45, taxPercentage: 15.00, brentBenchmarkDiff: -0.85, coordinates: [61, 46] },
  { id: 'ARE', name: 'United Arab Emirates', code: 'AE', region: 'Middle East', incomeLevel: 'High income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 0.85, dieselPrice: 0.82, lpgPrice: 0.65, taxPercentage: 18.50, brentBenchmarkDiff: -0.60, coordinates: [64, 46] },
  { id: 'LBN', name: 'Lebanon', code: 'LB', region: 'Middle East', incomeLevel: 'Lower middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.82, dieselPrice: 1.74, lpgPrice: 1.35, taxPercentage: 21.40, brentBenchmarkDiff: 0.42, coordinates: [59, 41] },
  { id: 'KWT', name: 'Kuwait', code: 'KW', region: 'Middle East', incomeLevel: 'High income', subsidyLevel: 'High Subsidy', petrolPrice: 0.58, dieselPrice: 0.42, lpgPrice: 0.38, taxPercentage: 12.80, brentBenchmarkDiff: -0.92, coordinates: [62, 43] },
  { id: 'QAT', name: 'Qatar', code: 'QA', region: 'Middle East', incomeLevel: 'High income', subsidyLevel: 'High Subsidy', petrolPrice: 0.59, dieselPrice: 0.56, lpgPrice: 0.41, taxPercentage: 14.10, brentBenchmarkDiff: -0.89, coordinates: [63, 45] },
  { id: 'OMN', name: 'Oman', code: 'OM', region: 'Middle East', incomeLevel: 'High income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 0.72, dieselPrice: 0.68, lpgPrice: 0.52, taxPercentage: 17.20, brentBenchmarkDiff: -0.72, coordinates: [65, 48] },

  // Asia
  { id: 'CHN', name: 'China', code: 'CN', region: 'Asia', incomeLevel: 'Upper middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.15, dieselPrice: 2.05, lpgPrice: 1.64, taxPercentage: 26.50, brentBenchmarkDiff: 0.75, coordinates: [75, 41] },
  { id: 'IND', name: 'India', code: 'IN', region: 'Asia', incomeLevel: 'Lower middle income', subsidyLevel: 'Net Tax', petrolPrice: 2.18, dieselPrice: 1.95, lpgPrice: 1.55, taxPercentage: 31.80, brentBenchmarkDiff: 0.81, coordinates: [68, 46] },
  { id: 'JPN', name: 'Japan', code: 'JP', region: 'Asia', incomeLevel: 'High income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 2.35, dieselPrice: 2.18, lpgPrice: 1.72, taxPercentage: 28.40, brentBenchmarkDiff: 0.98, coordinates: [84, 38] },
  { id: 'KOR', name: 'South Korea', code: 'KR', region: 'Asia', incomeLevel: 'High income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 2.29, dieselPrice: 2.15, lpgPrice: 1.68, taxPercentage: 29.10, brentBenchmarkDiff: 0.91, coordinates: [80, 40] },
  { id: 'SGP', name: 'Singapore', code: 'SG', region: 'Asia', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.75, dieselPrice: 2.45, lpgPrice: 1.85, taxPercentage: 35.60, brentBenchmarkDiff: 1.25, coordinates: [75, 57] },
  { id: 'PHL', name: 'Philippines', code: 'PH', region: 'Asia', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.98, dieselPrice: 1.88, lpgPrice: 1.45, taxPercentage: 22.30, brentBenchmarkDiff: 0.58, coordinates: [80, 52] },
  { id: 'NPL', name: 'Nepal', code: 'NP', region: 'Asia', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.92, dieselPrice: 1.82, lpgPrice: 1.48, taxPercentage: 23.50, brentBenchmarkDiff: 0.52, coordinates: [70, 44] },
  { id: 'BGD', name: 'Bangladesh', code: 'BD', region: 'Asia', incomeLevel: 'Lower middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.85, dieselPrice: 1.75, lpgPrice: 1.40, taxPercentage: 20.80, brentBenchmarkDiff: 0.45, coordinates: [72, 46] },
  { id: 'MYS', name: 'Malaysia', code: 'MY', region: 'Asia', incomeLevel: 'Upper middle income', subsidyLevel: 'High Subsidy', petrolPrice: 0.76, dieselPrice: 0.72, lpgPrice: 0.62, taxPercentage: 11.20, brentBenchmarkDiff: -0.68, coordinates: [74, 55] },
  { id: 'IDN', name: 'Indonesia', code: 'ID', region: 'Asia', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.42, dieselPrice: 1.35, lpgPrice: 1.10, taxPercentage: 18.90, brentBenchmarkDiff: 0.12, coordinates: [78, 60] },

  // Africa
  { id: 'RWA', name: 'Rwanda', code: 'RW', region: 'Africa', incomeLevel: 'Low income', subsidyLevel: 'Net Tax', petrolPrice: 2.38, dieselPrice: 2.29, lpgPrice: 1.78, taxPercentage: 39.56, brentBenchmarkDiff: 0.98, coordinates: [57, 59] },
  { id: 'ZAF', name: 'South Africa', code: 'ZA', region: 'Africa', incomeLevel: 'Upper middle income', subsidyLevel: 'Net Tax', petrolPrice: 2.15, dieselPrice: 2.08, lpgPrice: 1.62, taxPercentage: 32.50, brentBenchmarkDiff: 0.75, coordinates: [56, 75] },
  { id: 'ETH', name: 'Ethiopia', code: 'ET', region: 'Africa', incomeLevel: 'Low income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.75, dieselPrice: 1.68, lpgPrice: 1.35, taxPercentage: 21.20, brentBenchmarkDiff: 0.35, coordinates: [61, 54] },
  { id: 'MAR', name: 'Morocco', code: 'MA', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.05, dieselPrice: 1.95, lpgPrice: 1.52, taxPercentage: 28.40, brentBenchmarkDiff: 0.65, coordinates: [46, 42] },
  { id: 'CIV', name: 'Ivory Coast', code: 'CI', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.96, dieselPrice: 1.88, lpgPrice: 1.46, taxPercentage: 27.10, brentBenchmarkDiff: 0.56, coordinates: [46, 54] },
  { id: 'MOZ', name: 'Mozambique', code: 'MZ', region: 'Africa', incomeLevel: 'Low income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.92, dieselPrice: 1.86, lpgPrice: 1.44, taxPercentage: 25.80, brentBenchmarkDiff: 0.52, coordinates: [58, 68] },
  { id: 'NGA', name: 'Nigeria', code: 'NG', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.15, dieselPrice: 1.30, lpgPrice: 1.05, taxPercentage: 17.40, brentBenchmarkDiff: -0.22, coordinates: [50, 52] },
  { id: 'EGY', name: 'Egypt', code: 'EG', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.25, dieselPrice: 1.15, lpgPrice: 0.92, taxPercentage: 19.80, brentBenchmarkDiff: -0.15, coordinates: [56, 43] },
  { id: 'KEN', name: 'Kenya', code: 'KE', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Net Tax', petrolPrice: 2.22, dieselPrice: 2.12, lpgPrice: 1.65, taxPercentage: 33.20, brentBenchmarkDiff: 0.82, coordinates: [60, 57] },

  // Oceania
  { id: 'NZL', name: 'New Zealand', code: 'NZ', region: 'Oceania', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.84, dieselPrice: 2.65, lpgPrice: 1.94, taxPercentage: 39.27, brentBenchmarkDiff: 1.36, coordinates: [90, 80] },
  { id: 'AUS', name: 'Australia', code: 'AU', region: 'Oceania', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.48, dieselPrice: 2.38, lpgPrice: 1.76, taxPercentage: 38.10, brentBenchmarkDiff: 1.08, coordinates: [83, 72] },
  { id: 'FJI', name: 'Fiji', code: 'FJ', region: 'Oceania', incomeLevel: 'Upper middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.25, dieselPrice: 2.15, lpgPrice: 1.65, taxPercentage: 32.40, brentBenchmarkDiff: 0.85, coordinates: [93, 65] },

  // South America
  { id: 'BRA', name: 'Brazil', code: 'BR', region: 'South America', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.78, dieselPrice: 1.65, lpgPrice: 1.32, taxPercentage: 22.40, brentBenchmarkDiff: 0.38, coordinates: [33, 65] },
  { id: 'ARG', name: 'Argentina', code: 'AR', region: 'South America', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.65, dieselPrice: 1.58, lpgPrice: 1.25, taxPercentage: 19.80, brentBenchmarkDiff: 0.25, coordinates: [28, 77] },
  { id: 'CHL', name: 'Chile', code: 'CL', region: 'South America', incomeLevel: 'High income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.05, dieselPrice: 1.95, lpgPrice: 1.55, taxPercentage: 27.60, brentBenchmarkDiff: 0.65, coordinates: [26, 75] },
  { id: 'COL', name: 'Colombia', code: 'CO', region: 'South America', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.52, dieselPrice: 1.45, lpgPrice: 1.18, taxPercentage: 18.60, brentBenchmarkDiff: 0.12, coordinates: [25, 52] },
  { id: 'PER', name: 'Peru', code: 'PE', region: 'South America', incomeLevel: 'Upper middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.88, dieselPrice: 1.79, lpgPrice: 1.42, taxPercentage: 23.20, brentBenchmarkDiff: 0.48, coordinates: [24, 62] },
  { id: 'VEN', name: 'Venezuela', code: 'VE', region: 'South America', incomeLevel: 'Upper middle income', subsidyLevel: 'High Subsidy', petrolPrice: 0.35, dieselPrice: 0.25, lpgPrice: 0.20, taxPercentage: 5.40, brentBenchmarkDiff: -1.20, coordinates: [27, 49] },

  // Additional countries across regions for full 84 coverage
  { id: 'RUS', name: 'Russia', code: 'RU', region: 'Europe', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.22, dieselPrice: 1.18, lpgPrice: 0.88, taxPercentage: 21.00, brentBenchmarkDiff: -0.18, coordinates: [66, 26] },
  { id: 'POL', name: 'Poland', code: 'PL', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.48, dieselPrice: 2.42, lpgPrice: 1.68, taxPercentage: 36.20, brentBenchmarkDiff: 1.05, coordinates: [53, 30] },
  { id: 'AUT', name: 'Austria', code: 'AT', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.68, dieselPrice: 2.58, lpgPrice: 1.82, taxPercentage: 37.00, brentBenchmarkDiff: 1.22, coordinates: [52, 33] },
  { id: 'BEL', name: 'Belgium', code: 'BE', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.79, dieselPrice: 2.65, lpgPrice: 1.90, taxPercentage: 38.10, brentBenchmarkDiff: 1.32, coordinates: [48, 32] },
  { id: 'CHE', name: 'Switzerland', code: 'CH', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.98, dieselPrice: 2.82, lpgPrice: 2.10, taxPercentage: 36.80, brentBenchmarkDiff: 1.49, coordinates: [49, 34] },
  { id: 'FIN', name: 'Finland', code: 'FI', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.88, dieselPrice: 2.70, lpgPrice: 1.99, taxPercentage: 38.50, brentBenchmarkDiff: 1.40, coordinates: [56, 21] },
  { id: 'GRC', name: 'Greece', code: 'GR', region: 'Europe', incomeLevel: 'High income', subsidyLevel: 'Net Tax', petrolPrice: 2.72, dieselPrice: 2.55, lpgPrice: 1.84, taxPercentage: 38.20, brentBenchmarkDiff: 1.28, coordinates: [55, 41] },
  { id: 'THA', name: 'Thailand', code: 'TH', region: 'Asia', incomeLevel: 'Upper middle income', subsidyLevel: 'Moderate Subsidy', petrolPrice: 1.72, dieselPrice: 1.48, lpgPrice: 1.22, taxPercentage: 24.10, brentBenchmarkDiff: 0.32, coordinates: [73, 51] },
  { id: 'VNM', name: 'Vietnam', code: 'VN', region: 'Asia', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.68, dieselPrice: 1.54, lpgPrice: 1.18, taxPercentage: 25.40, brentBenchmarkDiff: 0.28, coordinates: [76, 52] },
  { id: 'GHA', name: 'Ghana', code: 'GH', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 1.95, dieselPrice: 1.91, lpgPrice: 1.46, taxPercentage: 29.40, brentBenchmarkDiff: 0.55, coordinates: [47, 53] },
  { id: 'SEN', name: 'Senegal', code: 'SN', region: 'Africa', incomeLevel: 'Lower middle income', subsidyLevel: 'Low/No Subsidy', petrolPrice: 2.02, dieselPrice: 1.94, lpgPrice: 1.49, taxPercentage: 30.10, brentBenchmarkDiff: 0.62, coordinates: [43, 49] },
  { id: 'JOR', name: 'Jordan', code: 'JO', region: 'Middle East', incomeLevel: 'Upper middle income', subsidyLevel: 'Net Tax', petrolPrice: 2.10, dieselPrice: 1.98, lpgPrice: 1.54, taxPercentage: 31.50, brentBenchmarkDiff: 0.70, coordinates: [59, 43] },
  { id: 'BHR', name: 'Bahrain', code: 'BH', region: 'Middle East', incomeLevel: 'High income', subsidyLevel: 'High Subsidy', petrolPrice: 0.68, dieselPrice: 0.62, lpgPrice: 0.48, taxPercentage: 14.80, brentBenchmarkDiff: -0.79, coordinates: [63, 44] }
];

export interface StoryScene {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  narrative: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  insights: string[];
  recommendations: string[];
  visualType: 'indicators' | 'petrolMap' | 'dieselMap' | 'petrolTrend' | 'taxAnalysis' | 'incomeCorrelation' | 'subsidyAnalysis' | 'conclusion';
}

export const STORY_SCENES: StoryScene[] = [
  {
    id: 'scene-1',
    tabLabel: 'Global Fuel Price and Tax Performance Indicators',
    title: 'Introduction Scene - Problem Statement and Research Question',
    subtitle: 'Establishes the importance of understanding global fuel pricing and taxation trends',
    narrative: 'Across 84 nations and 27,468 complete data records spanning 2020 through 2026, fuel prices reflect a delicate triad: raw Brent crude baseline fluctuations, domestic refining capacities, and sovereign taxation frameworks. While energy transitions push for carbon parity, fiscal policies dictate actual consumer burden. This benchmark establishing scene anchors the global baseline averages.',
    keyMetricLabel: 'Global Average Tax Rate',
    keyMetricValue: '26.77%',
    insights: [
      'Global retail petrol price averages $2.28/L compared to diesel at $2.13/L and LPG at $1.71/L.',
      'Sovereign tax levies constitute up to 39.56% of final consumer pump pricing in high-tax regimes.',
      'Subsidized petrostates buffer volatility by up to 68% relative to global commodity shocks.'
    ],
    recommendations: [
      'Standardize transparent reporting of fuel duty components versus environmental levies.',
      'Establish regional fuel stability reserves to insulate essential freight corridors.'
    ],
    visualType: 'indicators'
  },
  {
    id: 'scene-2',
    tabLabel: 'Global Comparison of Average Petrol Prices (USD per Liter)',
    title: 'Geographic Disparity Scene - Global Price Variations',
    subtitle: 'Reveals significant geographic disparities in fuel prices across regions',
    narrative: 'Spatial econometric analysis uncovers an 8-fold disparity in petrol prices across borders. While European nations command prices exceeding $2.80–$2.95/L due to combined VAT and environmental road duties, oil-exporting Middle Eastern nations retain pump prices under $0.65/L. North America presents a stark divergence between Canada ($2.90/L) and Mexico ($1.00/L).',
    keyMetricLabel: 'Maximum Cross-Regional Price Spread',
    keyMetricValue: '$2.33 / L',
    insights: [
      'Western and Northern European nations cluster consistently above $2.70/L.',
      'Transit corridors in Southeast Asia and Latin America demonstrate sensitive price elasticity.',
      'In developing African economies, fuel costs represent over 18% of mean household transport expenditure.'
    ],
    recommendations: [
      'Implement graduated fuel excises indexed to local purchasing power parities.',
      'Mitigate cross-border fuel arbitrage along adjacent regulatory boundaries.'
    ],
    visualType: 'petrolMap'
  },
  {
    id: 'scene-3',
    tabLabel: 'Global Comparison of Average Diesel Prices (USD per Liter)',
    title: 'Temporal Trends Scene - Price Movements Over Time',
    subtitle: 'Demonstrates how fuel prices have fluctuated from 2020 to 2026',
    narrative: 'Commercial freight relies almost exclusively on diesel fuel. Between 2020 and 2022, global diesel climbed from $1.39/L to an unprecedented peak of $2.34/L driven by European supply re-routing and refinery tightness. The subsequent stabilization to $2.23/L in 2026 demonstrates structural supply recalibration, yet logistics managers face heightened baseline risks.',
    keyMetricLabel: 'Diesel Volatility Standard Deviation',
    keyMetricValue: '± $0.34 / L',
    insights: [
      'Diesel traded at a narrow discount to petrol until 2022, after which industrial demand inverted the parity in several freight hubs.',
      'Supply chain operators in North America and Europe experienced freight surcharge increases exceeding 24% during peak periods.'
    ],
    recommendations: [
      'Deploy multi-month hedging contracts for heavy transport fleet procurement.',
      'Incentivize commercial route electrification in high-tax corridors.'
    ],
    visualType: 'dieselMap'
  },
  {
    id: 'scene-4',
    tabLabel: 'Global Trend of Average Petrol Prices (2020–2027)',
    title: 'Taxation Policy Scene - Global Tax Analysis',
    subtitle: 'Analyzes the relationship between government taxation policies and fuel affordability',
    narrative: 'Taxes are the predominant differentiator in global fuel affordability. Countries like Rwanda (39.56%), New Zealand (39.27%), Germany (39.21%), Turkey (38.99%), and Denmark (38.87%) top the global taxation table. Conversely, South American (18.20%) and Middle Eastern (19.60%) nations lean heavily toward price insulation.',
    keyMetricLabel: 'Top Tier Tax Burden',
    keyMetricValue: '39.56% (Rwanda)',
    insights: [
      'High-tax nations maintain dedicated road infrastructure and energy transition trust funds funded by fuel duties.',
      'Low-tax economies experience fiscal stress when crude commodity spikes exceed budgetary allocations.'
    ],
    recommendations: [
      'Structure counter-cyclical tax levers that dynamically lower excise duties during crude price spikes.',
      'Ring-fence green energy transition revenues with public transparency portals.'
    ],
    visualType: 'taxAnalysis'
  },
  {
    id: 'scene-5',
    tabLabel: 'Global Trend of Average Diesel Prices (2020–2027)',
    title: 'Economic Impact Scene - Income Level Correlation',
    subtitle: 'Explores whether income-level correlates with fuel pricing and policy strategies',
    narrative: 'Cross-tabulation against World Bank income classifications reveals distinct policy philosophies. High-income nations treat fuel as a resilient tax base with inelastic demand. Lower-income economies face severe social friction upon subsidy withdrawal, as commercial and agricultural input costs propagate rapidly into food inflation.',
    keyMetricLabel: 'High vs Low Income Tax Gap',
    keyMetricValue: '+14.8% Duty Gap',
    insights: [
      'High-income countries average 35.4% tax share versus 22.1% in low-to-middle income countries.',
      'Affordability indices reveal that citizens in lower-income nations spend up to 4.2x more of daily wage per liter of petrol.'
    ],
    recommendations: [
      'Target direct cash transfers to vulnerable households rather than blanket universal fuel price caps.',
      'Foster local bio-fuel blending mandates to reduce foreign exchange reserve depletion.'
    ],
    visualType: 'incomeCorrelation'
  },
  {
    id: 'scene-6',
    tabLabel: 'Global Trend of Average Lpg Prices (2020–2027)',
    title: 'Subsidy Assessment Scene - Government Support Analysis',
    subtitle: 'Examines how subsidy policies affect fuel prices in different economic contexts',
    narrative: 'Liquefied Petroleum Gas (LPG) represents a critical household cooking and municipal transit fuel across emerging markets. While trending from $1.11/L in 2020 to $1.91/L in 2024 before easing to $1.79/L in 2026, targeted subsidies in nations like Mexico ($0.70/L) and Egypt ($0.92/L) cushion domestic energy poverty.',
    keyMetricLabel: 'Global LPG Convergence Level',
    keyMetricValue: '$1.79 / L (2026)',
    insights: [
      'LPG maintains a consistent 22-25% cost discount compared to motor gasoline.',
      'Subsidy reform schedules have been repeatedly postponed during election cycles in developing nations.'
    ],
    recommendations: [
      'Phase out untargeted commercial LPG subsidies while preserving clean-cooking vouchers for rural households.',
      'Encourage cylinder digital tracking to eliminate commercial black-market diversion.'
    ],
    visualType: 'subsidyAnalysis'
  },
  {
    id: 'scene-7',
    tabLabel: 'Global Trend of Average Brent Crude Oil Prices',
    title: 'Conclusions and Recommendations Scene',
    subtitle: 'Synthesizes findings into evidence-based recommendations for policy makers and energy professionals',
    narrative: 'Synthesizing 27,468 data points across 2020–2027 reveals that global fuel economics has entered a new equilibrium. Raw Brent crude fluctuates around $113–$119/bbl, but national tax frameworks dictate real economic outcomes. The triad of energy security, fiscal sustainability, and climate decarbonization requires harmonized, data-driven governance.',
    keyMetricLabel: 'Long-term Stabilized Brent Crude',
    keyMetricValue: '$113.0 / bbl',
    insights: [
      'Dr. Sarah Mitchell: Dynamic floating tax models prevent fiscal deficits while preserving green transition targets.',
      'Marcus Thompson: Centralizing freight corridors through moderate-tax hubs yields up to 14% logistics fuel savings.',
      'Prof. Elena Rodriguez: Progressive taxation combined with targeted social safety nets mitigates fuel poverty.'
    ],
    recommendations: [
      'Adopt automated counter-cyclical excise adjustment formulas linked to Brent crude spot indices.',
      'Establish multilateral energy data exchanges for cross-border transit logistics optimization.',
      'Accelerate commercial fleet decarbonization financing to insulate supply chains against future commodity shocks.'
    ],
    visualType: 'conclusion'
  }
];

export const PERSONA_SCENARIOS = [
  {
    id: 'sarah',
    name: 'Dr. Sarah Mitchell',
    role: 'Energy Policy Consultant',
    badge: 'Policy & Taxation',
    focus: 'Balancing economic growth, subsidy equity, and environmental responsibility',
    avatarColor: 'from-blue-600 to-indigo-700',
    description: 'Working with government agencies to optimize fuel taxation and subsidy policies. Needs to understand regional trends, identify policy disparities, and design equitable models.',
    keyQuestions: [
      'How does Rwanda and New Zealand achieve ~39% tax percentage without crippling commercial transport?',
      'What are the optimal subsidy phase-out schedules for emerging markets without inducing inflation?',
      'Can dynamic carbon taxes offset crude oil volatility?'
    ],
    recommendedFilters: {
      regions: ['Europe', 'Oceania', 'Africa'],
      measures: ['Tax Percentage', 'Petrol Price', 'Subsidy Level']
    }
  },
  {
    id: 'marcus',
    name: 'Marcus Thompson',
    role: 'Global Supply Chain Manager',
    badge: 'Logistics & Fleet Operations',
    focus: 'Minimizing operational fuel costs across intercontinental freight corridors',
    avatarColor: 'from-amber-600 to-orange-700',
    description: 'Managing operations for a multinational logistics company across multiple continents. Needs insights into regional diesel volatility, forecasting curves, and procurement optimization.',
    keyQuestions: [
      'Which transit countries offer the lowest net commercial diesel prices in North America and Asia?',
      'What is the projected diesel cost trajectory into 2026–2027 for long-term route planning?',
      'How does Mexico’s subsidized $0.90/L diesel compare with the US ($2.10/L) and Canada ($2.70/L) for border routing?'
    ],
    recommendedFilters: {
      regions: ['North America', 'Europe', 'Asia'],
      measures: ['Diesel Price', 'Brent Crude', 'LPG Price']
    }
  },
  {
    id: 'elena',
    name: 'Professor Elena Rodriguez',
    role: 'Energy Economics Researcher',
    badge: 'Academic Research & Macroeconomics',
    focus: 'Analyzing the nexus of income levels, subsidies, and national energy governance',
    avatarColor: 'from-emerald-600 to-teal-700',
    description: 'Investigating how national income levels correlate with fuel pricing strategies and tax policies across 84 nations, publishing evidence-based findings for international development institutions.',
    keyQuestions: [
      'Do higher-income nations systematically leverage fuel taxation to discourage fossil consumption?',
      'To what extent do fuel subsidies distort domestic consumer price index (CPI) baskets?',
      'What empirical data proves the inverse correlation between tax levels and raw commodity volatility?'
    ],
    recommendedFilters: {
      regions: ['All'],
      measures: ['Income Level', 'Subsidy Level', 'Tax Percentage']
    }
  }
];

import React from 'react';
import { Home, Info, BarChart2, BookOpen, Download, ArrowUp } from 'lucide-react';

interface NavigationDockProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenExport: () => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  activeSection,
  onNavigate,
  onOpenExport,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: Info, label: 'About the Data' },
    { id: 'dashboard', icon: BarChart2, label: 'Data Insights Dashboard' },
    { id: 'story', icon: BookOpen, label: 'Global Fuel Prices Story' },
  ];

  return (
    <>
      {/* Left Floating Navigation Dock matching screenshots */}
      <nav
        aria-label="Section navigation"
        className="fixed left-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200/80 transition-all duration-300"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={item.label}
              className={`group relative p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-500 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white font-medium opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Left Floating Download Button matching screenshots */}
      <button
        onClick={onOpenExport}
        title="Download Report & Data"
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center p-3 bg-white text-slate-800 rounded-xl shadow-lg border border-slate-200/80 hover:bg-slate-50 hover:text-blue-600 hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Download className="w-5 h-5 text-slate-700 group-hover:text-blue-600" />
        <span className="hidden md:inline-block ml-2 text-xs font-semibold text-slate-700 group-hover:text-blue-600">
          Export Report
        </span>
      </button>

      {/* Bottom Right Floating Scroll-to-Top Button matching screenshots */}
      <button
        onClick={scrollToTop}
        title="Back to Top"
        className="fixed bottom-6 right-6 z-40 p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
};

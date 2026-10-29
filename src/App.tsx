/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavigationDock } from './components/NavigationDock.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { DashboardView } from './components/DashboardView.tsx';
import { StoryView } from './components/StoryView.tsx';
import { ExportModal } from './components/ExportModal.tsx';
import { CountryDetailModal } from './components/CountryDetailModal.tsx';
import { CountryFuelRecord } from './data/fuelData.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryFuelRecord | null>(null);
  const [activePersonaId, setActivePersonaId] = useState<string>('sarah');

  // Scroll spy to update active section in left navigation dock
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'dashboard', 'story'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Floating Navigation Dock matching screenshots */}
      <NavigationDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="pl-0 sm:pl-10">
        {/* Hero Section */}
        <HeroSection onExploreClick={() => handleNavigate('dashboard')} />

        {/* About the Data Section */}
        <AboutSection
          onSelectPersona={(personaId) => {
            setActivePersonaId(personaId);
          }}
        />

        {/* Data Insights Dashboard Section */}
        <DashboardView
          onSelectCountry={(country) => setSelectedCountry(country)}
          activePersonaId={activePersonaId}
        />

        {/* Global Fuel Prices Story Section */}
        <StoryView />

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-center">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <span className="font-bold text-white text-sm">Global Fuel Analytics & Intelligence</span>
              <p className="mt-1 text-slate-400">
                Spanning 84 countries, 7 regions, and 27,468 complete records (2020–2026).
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNavigate('hero')}
                className="hover:text-white transition-colors"
              >
                Top
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className="hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigate('dashboard')}
                className="hover:text-white transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleNavigate('story')}
                className="hover:text-white transition-colors"
              >
                Story
              </button>
              <button
                onClick={() => setIsExportOpen(true)}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Export Data
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Modals */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      <CountryDetailModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </div>
  );
}

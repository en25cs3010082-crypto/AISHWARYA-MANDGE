import React, { useState } from 'react';
import { Share2, Check, Globe2, TrendingUp, ShieldCheck, Database } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = 'Global Fuel Prices and Taxation Trends: Comprehensive Global Intelligence Report (2020-2026)';
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100/80 via-slate-50 to-white pt-12 pb-16">
      {/* Background Stylized World Map SVG matching screenshot */}
      <div className="absolute inset-0 pointer-events-none opacity-45 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full max-w-6xl object-contain text-slate-300 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* North America */}
          <path d="M 120 70 Q 180 50 250 60 Q 280 110 260 160 Q 200 180 150 140 Z" fill="#94a3b8" opacity="0.6" />
          <path d="M 140 140 Q 210 160 250 190 Q 210 230 170 200 Z" fill="#94a3b8" opacity="0.65" />
          <path d="M 160 200 Q 200 240 220 280 Q 180 290 160 230 Z" fill="#94a3b8" opacity="0.6" />
          {/* South America */}
          <path d="M 260 260 Q 320 280 340 350 Q 310 430 270 450 Q 250 360 260 260 Z" fill="#94a3b8" opacity="0.65" />
          {/* Europe */}
          <path d="M 460 70 Q 540 60 560 120 Q 520 160 470 140 Q 450 100 460 70 Z" fill="#94a3b8" opacity="0.75" />
          <path d="M 500 70 Q 530 40 560 70 Q 550 110 520 100 Z" fill="#94a3b8" opacity="0.65" />
          {/* Africa */}
          <path d="M 470 160 Q 570 170 590 260 Q 550 360 510 370 Q 460 280 470 160 Z" fill="#94a3b8" opacity="0.7" />
          {/* Asia */}
          <path d="M 560 70 Q 720 50 820 100 Q 840 200 740 250 Q 640 230 580 160 Z" fill="#94a3b8" opacity="0.7" />
          <path d="M 680 230 Q 730 250 720 310 Q 670 300 680 230 Z" fill="#94a3b8" opacity="0.65" />
          <path d="M 750 240 Q 820 270 810 330 Q 760 330 750 240 Z" fill="#94a3b8" opacity="0.6" />
          {/* Australia & Oceania */}
          <path d="M 780 340 Q 870 340 880 410 Q 810 430 770 390 Z" fill="#94a3b8" opacity="0.7" />
          <path d="M 890 410 Q 920 420 910 450 Q 880 440 890 410 Z" fill="#94a3b8" opacity="0.65" />
          {/* Greenland & North */}
          <path d="M 330 30 Q 400 20 400 60 Q 340 80 320 50 Z" fill="#cbd5e1" opacity="0.5" />
          {/* Ocean grid dots / subtle coordinates */}
          <circle cx="200" cy="100" r="2" fill="#94a3b8" opacity="0.4" />
          <circle cx="400" cy="200" r="2" fill="#94a3b8" opacity="0.4" />
          <circle cx="600" cy="300" r="2" fill="#94a3b8" opacity="0.4" />
          <circle cx="800" cy="150" r="2" fill="#94a3b8" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Global Performance & Intelligence Report (2020–2026)</span>
        </div>

        {/* Main Title matching Screenshot 1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight mb-3">
          Global Fuel Analytics
        </h1>

        {/* Subtitle with underlined link matching Screenshot 1 */}
        <div className="text-xl sm:text-2xl text-slate-600 font-normal mb-6 flex items-center justify-center gap-2">
          <span>Exploring</span>
          <button
            onClick={onExploreClick}
            className="text-slate-900 font-semibold underline underline-offset-4 decoration-2 decoration-blue-600 hover:text-blue-700 hover:decoration-blue-800 transition-colors cursor-pointer"
          >
            Market Data
          </button>
        </div>

        {/* Social Share Icons matching Screenshot 1: X (Twitter), Facebook, LinkedIn */}
        <div className="flex items-center gap-4 text-slate-600 mb-10">
          <button
            onClick={() => handleShare('twitter')}
            title="Share on X"
            className="p-2 rounded-full hover:bg-slate-200/80 hover:text-slate-900 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare('facebook')}
            title="Share on Facebook"
            className="p-2 rounded-full hover:bg-slate-200/80 hover:text-slate-900 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            title="Share on LinkedIn"
            className="p-2 rounded-full hover:bg-slate-200/80 hover:text-slate-900 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare('copy')}
            title="Copy Report Link"
            className="p-2 rounded-full hover:bg-slate-200/80 hover:text-slate-900 transition-colors flex items-center gap-1 text-xs font-medium"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            {copied && <span className="text-emerald-600 text-xs">Copied</span>}
          </button>
        </div>

        {/* Intelligence Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-200/60">
          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/70 shadow-sm text-center">
            <div className="flex items-center justify-center text-blue-600 mb-1">
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold text-slate-800">84 Nations</div>
            <div className="text-xs text-slate-500 font-medium">Across 7 Global Regions</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/70 shadow-sm text-center">
            <div className="flex items-center justify-center text-emerald-600 mb-1">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold text-slate-800">2020–2026</div>
            <div className="text-xs text-slate-500 font-medium">With 2027 Projections</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/70 shadow-sm text-center">
            <div className="flex items-center justify-center text-indigo-600 mb-1">
              <Database className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold text-slate-800">27,468</div>
            <div className="text-xs text-slate-500 font-medium">Complete Records Analyzed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/70 shadow-sm text-center">
            <div className="flex items-center justify-center text-amber-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold text-slate-800">10 Variables</div>
            <div className="text-xs text-slate-500 font-medium">Prices, Taxes & Subsidies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

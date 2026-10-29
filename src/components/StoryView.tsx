import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Lightbulb, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  ShieldAlert, 
  Layers,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';
import { STORY_SCENES, StoryScene } from '../data/fuelData.ts';

export const StoryView: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentScene: StoryScene = STORY_SCENES[currentSceneIndex];

  const handleNext = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % STORY_SCENES.length);
  };

  const handlePrev = () => {
    setCurrentSceneIndex((prev) => (prev - 1 + STORY_SCENES.length) % STORY_SCENES.length);
  };

  // Autoplay effect
  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % STORY_SCENES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section id="story" className="py-20 px-2 sm:px-4 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Global Fuel Prices Story
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            A step-by-step narrative exploring global trends.
          </p>
        </div>

        {/* Story Section Wrapper */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-4 sm:p-6 mb-12">
          
          {/* Story Label & Autoplay controls */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-slate-800">Story 1</span>
              <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-0.5 rounded-full">
                Scene {currentSceneIndex + 1} of {STORY_SCENES.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  isPlaying
                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause Story' : 'Auto Play'}</span>
              </button>
            </div>
          </div>

          {/* Horizontal Story Tabs Carousel matching Screenshot 2 & 4 */}
          <div className="relative flex items-center mb-6">
            <button
              onClick={handlePrev}
              title="Previous Scene"
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg shrink-0 mr-1 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Story Header Tabs */}
            <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-1 py-1">
              {STORY_SCENES.map((scene, idx) => {
                const isActive = idx === currentSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setCurrentSceneIndex(idx)}
                    className={`shrink-0 px-3 py-2 text-[11px] sm:text-xs font-semibold rounded-t border-b-2 transition-all max-w-[210px] truncate text-left ${
                      isActive
                        ? 'bg-slate-300/80 text-slate-900 border-blue-600 font-bold shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/90 text-slate-600 border-transparent'
                    }`}
                    title={scene.tabLabel}
                  >
                    {scene.tabLabel}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              title="Next Scene"
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg shrink-0 ml-1 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tableau-Style Cyan Story Frame matching Screenshot 2 & 4 */}
          <div className="bg-[#62c4ea] border-4 border-[#47a8d0] rounded-xl p-3 text-slate-900 shadow-inner">
            
            {/* KPI Performance Header Strip matching Screenshot 2 */}
            <div className="bg-[#56b9dd] border border-white/80 rounded-sm p-2 mb-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="bg-[#4eb0d4] border border-white/60 p-2 rounded-xs">
                  <div className="text-xs font-semibold text-slate-900">Avg. Diesel Usd Liter</div>
                  <div className="text-lg font-black text-slate-950">2.13$</div>
                </div>
                <div className="bg-[#4eb0d4] border border-white/60 p-2 rounded-xs">
                  <div className="text-xs font-semibold text-slate-900">Avg. Lpg Usd Liter</div>
                  <div className="text-lg font-black text-slate-950">1.71$</div>
                </div>
                <div className="bg-[#4eb0d4] border border-white/60 p-2 rounded-xs">
                  <div className="text-xs font-semibold text-slate-900">Avg. Petrol Usd Liter</div>
                  <div className="text-lg font-black text-slate-950">2.28$</div>
                </div>
                <div className="bg-[#4eb0d4] border border-white/60 p-2 rounded-xs">
                  <div className="text-xs font-semibold text-slate-900">Avg. Tax Percentage</div>
                  <div className="text-lg font-black text-slate-950">26.77%</div>
                </div>
              </div>
            </div>

            {/* Cyan Narrative Display Panel */}
            <div className="bg-[#78d1f2] border border-white/80 rounded-sm p-4 sm:p-6 min-h-[320px] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-950 bg-white/70 px-2.5 py-1 rounded">
                    {currentScene.title}
                  </span>
                  <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded text-xs font-bold text-slate-900 border border-white">
                    <span>{currentScene.keyMetricLabel}:</span>
                    <span className="text-blue-700 font-extrabold">{currentScene.keyMetricValue}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 mb-3">
                  {currentScene.subtitle}
                </h3>

                <p className="text-slate-900 text-sm sm:text-base leading-relaxed bg-white/60 p-4 rounded-lg border border-white/80 mb-4 font-normal">
                  {currentScene.narrative}
                </p>

                {/* Key Insights & Policy Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/80 p-3.5 rounded-lg border border-white">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                      <span>Empirical Takeaways</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-800">
                      {currentScene.insights.map((ins, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-700 font-bold">•</span>
                          <span>{ins}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/80 p-3.5 rounded-lg border border-white">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Strategic Policy Recommendations</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-800">
                      {currentScene.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">✓</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Carousel Navigation Bar */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/60">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-white/90 hover:bg-white text-slate-900 rounded font-semibold text-xs flex items-center gap-1 shadow-xs transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous Scene</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {STORY_SCENES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSceneIndex(dotIdx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        dotIdx === currentSceneIndex ? 'bg-slate-950 w-6' : 'bg-white/70 hover:bg-white'
                      }`}
                      title={`Go to scene ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded font-semibold text-xs flex items-center gap-1 shadow-xs transition-all cursor-pointer"
                >
                  <span>Next Scene</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Narrative Scenes Index matching Screenshot 4 */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <span>Story Scene Outline & Synthesis</span>
          </h3>

          <div className="space-y-5">
            {STORY_SCENES.map((scene, index) => {
              const isSelected = index === currentSceneIndex;
              return (
                <div
                  key={scene.id}
                  onClick={() => {
                    setCurrentSceneIndex(index);
                    const storyEl = document.getElementById('story');
                    if (storyEl) {
                      storyEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                      : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {scene.title}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {scene.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

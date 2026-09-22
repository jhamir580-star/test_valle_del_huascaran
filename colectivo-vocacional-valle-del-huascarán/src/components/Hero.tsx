import { Sparkles, ArrowRight, ShieldCheck, MapPin, TrendingUp, CheckCircle2, Users, GraduationCap, ChevronDown } from 'lucide-react';
import huascaranImage from '../assets/images/refugio_huascaran_1790047638479.jpg';

interface HeroProps {
  onStartQuiz: () => void;
  onExploreSalaries: () => void;
  onExploreAllies: () => void;
}

export const Hero = ({ onStartQuiz, onExploreSalaries, onExploreAllies }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[620px] lg:min-h-[680px] flex items-center">
      
      {/* Background with Refugio Huascarán photo & gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={huascaranImage}
          alt="Refugio Huascarán y Nevado Huascarán en el Callejón de Huaylas, Áncash"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.80] contrast-[1.15] transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Layered Andean atmospheric gradients for pristine legibility and rich colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-radial-[at_50%_40%] from-teal-900/35 via-transparent to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-slate-900/85 border border-teal-500/40 backdrop-blur-md shadow-lg shadow-teal-950/30">
          <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-300">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            Valle del Huascarán & Callejón de Huaylas
          </span>
          <span className="text-slate-600 hidden xs:inline">•</span>
          <span className="text-[11px] sm:text-xs text-slate-300 font-medium hidden xs:inline">
            Refugio y Nevado Huascarán
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] sm:leading-[1.15] drop-shadow-md">
          Desde el Huascarán <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">hacia el Mundo</span>
        </h1>

        {/* Subtitle - Exact text requested by user */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
          Iniciativa educativa impulsada y respaldada con orgullo por estudiantes universitarios, técnicos y miembros de las fuerzas armadas para guiar la vocación de los jóvenes del Valle del Huascarán.
        </p>

        {/* Key metric pills */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/70 backdrop-blur-sm text-xs sm:text-sm text-slate-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>75</strong> Universitarias</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/70 backdrop-blur-sm text-xs sm:text-sm text-slate-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span><strong>37</strong> Técnicas Superiores</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/70 backdrop-blur-sm text-xs sm:text-sm text-slate-200 shadow-sm">
            <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Sueldos Oficiales MTPE</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/70 backdrop-blur-sm text-xs sm:text-sm text-slate-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>FFAA y Policías</span>
          </div>
        </div>

        {/* 3 Action Buttons requested by the user */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-3xl mx-auto">
          
          {/* Button 1: Test Vocacional */}
          <button
            id="hero-start-quiz-btn"
            onClick={onStartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 hover:from-teal-300 hover:to-emerald-200 shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Iniciar Test Vocacional</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          {/* Button 2: Observatorio de Sueldos */}
          <button
            id="hero-explore-salaries-btn"
            onClick={onExploreSalaries}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-100 bg-slate-900/85 hover:bg-slate-800 border border-slate-700/90 hover:border-teal-500/60 shadow-lg shadow-black/30 hover:text-white transition-all cursor-pointer"
          >
            <TrendingUp className="w-4 h-4 text-teal-400" />
            <span>Observatorio de Sueldos</span>
          </button>

          {/* Button 3: Conócenos */}
          <button
            id="hero-explore-allies-btn"
            onClick={onExploreAllies}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-amber-200 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/50 hover:border-amber-400 shadow-lg shadow-amber-950/20 transition-all cursor-pointer group"
          >
            <Users className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block leading-tight font-bold">Conócenos</span>
              <span className="block text-[10px] text-amber-300/80 font-normal">Estudiantes y miembros aliados</span>
            </div>
            <ChevronDown className="w-4 h-4 text-amber-400 ml-1 group-hover:translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>

      {/* Subtle bottom edge gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
};

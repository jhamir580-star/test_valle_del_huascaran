import { useState } from 'react';
import { GraduationCap, Menu, X, Sparkles, BookOpen, DollarSign, Users, Mountain } from 'lucide-react';

interface NavbarProps {
  onStartQuiz: () => void;
  onNavigateHome: () => void;
  currentView: 'home' | 'quiz';
}

export const Navbar = ({ onStartQuiz, onNavigateHome, currentView }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 text-white shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo Brand */}
          <button 
            onClick={() => {
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                Colectivo Vocacional Valle del Huascarán
              </div>
              <div className="text-[11px] text-teal-300 font-semibold tracking-normal flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Caminos de Éxito</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-normal">Áncash</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => {
                onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-white bg-slate-800/60' : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('aliados')}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors cursor-pointer"
            >
              Instituciones Aliadas
            </button>
            <button
              onClick={() => scrollToSection('sueldos')}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors cursor-pointer"
            >
              Observatorio de Sueldos
            </button>
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-start-quiz-btn"
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Test Vocacional (15 P)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onStartQuiz}
              className="p-2 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-slate-200 hover:bg-slate-800 active:bg-slate-700"
          >
            <Mountain className="w-4 h-4 text-teal-400" />
            <span>Inicio</span>
          </button>
          <button
            onClick={() => scrollToSection('aliados')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-slate-200 hover:bg-slate-800 active:bg-slate-700"
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Instituciones y Estudiantes Aliados</span>
          </button>
          <button
            onClick={() => scrollToSection('sueldos')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-slate-200 hover:bg-slate-800 active:bg-slate-700"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Observatorio de Sueldos Oficiales</span>
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartQuiz();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 shadow-lg shadow-teal-500/20 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Iniciar Test Vocacional (15 Preguntas)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import { GraduationCap, MapPin, Compass, Sparkles, Mountain } from 'lucide-react';

interface FooterProps {
  onStartQuiz: () => void;
  onNavigateHome: () => void;
}

export const Footer = ({ onStartQuiz, onNavigateHome }: FooterProps) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center shadow-md shadow-teal-500/20">
              <GraduationCap className="w-6 h-6 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                Colectivo Vocacional Valle del Huascarán
              </div>
              <div className="text-xs text-teal-300 font-semibold flex items-center gap-1.5 mt-0.5">
                <span>Caminos de Éxito</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-normal flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-teal-400" />
                  Huaraz, Carhuaz, Yungay, Caraz y todo Áncash
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <button 
              onClick={() => {
                onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <span>•</span>
            <button 
              onClick={onStartQuiz}
              className="text-teal-300 hover:text-teal-200 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5" />
              Test Vocacional 15 Preguntas
            </button>
          </div>

        </div>

        {/* Frase inspiradora solicitada por el usuario */}
        <div className="my-8 py-5 px-6 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-teal-950/60 border border-teal-500/25 text-center shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 text-teal-300/90 text-[11px] font-bold uppercase tracking-widest mb-1.5">
            <Mountain className="w-3.5 h-3.5 text-teal-400" />
            <span>Colectivo Vocacional</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-100 tracking-wide italic">
            "No pares compañero, será difícil pero no imposible."
          </p>
        </div>

        {/* Source and Copyright notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            <p>© 2026 Colectivo Vocacional Valle del Huascarán. Comprometidos con el desarrollo educativo y laboral de nuestra juventud.</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Fuente de datos salariales: Planilla Electrónica del Ministerio de Trabajo y Promoción del Empleo (MTPE) y Observatorio Ponte en Carrera.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1 text-[11px] text-slate-500">
            <span>Iniciativa estudiantil desde la Cordillera Blanca</span>
            <span className="text-[10px] text-slate-400/80 font-medium">
              Página actualizada hasta el 12/12/2026
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

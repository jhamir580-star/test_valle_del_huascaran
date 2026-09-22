import { Sparkles, ArrowRight, CheckCircle2, Clock, Award, Compass } from 'lucide-react';

interface TestVocationalBannerProps {
  onStartQuiz: () => void;
}

export const TestVocationalBanner = ({ onStartQuiz }: TestVocationalBannerProps) => {
  return (
    <section id="test" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white p-6 sm:p-12 shadow-2xl border border-slate-800">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            Evaluación Vocacional Áncash 2026
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Descubre tu Vocación con el <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
              Test Vocacional Oficial (15 Preguntas)
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Basado en cuestionarios psicométricos validados y cruzado con los salarios reales del mercado laboral peruano. Al finalizar, obtendrás:
          </p>

          {/* Value Highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <strong className="block text-white">Carrera Universitaria</strong>
                <span className="text-slate-400">Sueldo inicial y maduro</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <strong className="block text-white">Carrera Técnica</strong>
                <span className="text-slate-400">Alta demanda y 3 años</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <strong className="block text-white">Solo ~3 Minutos</strong>
                <span className="text-slate-400">15 preguntas claras</span>
              </div>
            </div>
          </div>

          {/* The explicit Button requested by the user */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="start-vocational-test-main-btn"
              onClick={onStartQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-extrabold text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 hover:from-teal-300 hover:to-emerald-200 shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Iniciar Test Vocacional</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>
          </div>

          <p className="mt-3 text-[11px] text-slate-400">
            *Sin costo, sin registro previo y 100% interactivo en tu teléfono o computadora.
          </p>

        </div>
      </div>
    </section>
  );
};

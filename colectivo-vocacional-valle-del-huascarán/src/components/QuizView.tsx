import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Award, 
  Wrench, 
  GraduationCap, 
  DollarSign, 
  MapPin, 
  Share2, 
  Check, 
  TrendingUp, 
  Clock, 
  Briefcase,
  Users,
  Compass
} from 'lucide-react';
import { QUIZ_QUESTIONS, VOCATIONAL_PROFILES } from '../data/quizData';
import { ProfileCategory, VocationalProfileResult } from '../types';

interface QuizViewProps {
  onBackToHome: () => void;
  onExploreSalaries: () => void;
}

export const QuizView = ({ onBackToHome, onExploreSalaries }: QuizViewProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, ProfileCategory>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [resultProfile, setResultProfile] = useState<VocationalProfileResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, isFinished]);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100);
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (category: ProfileCategory) => {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: category
    };
    setAnswers(updatedAnswers);

    // If on last question, compute result
    if (currentStep + 1 >= totalQuestions) {
      calculateFinalResults(updatedAnswers);
    } else {
      // Auto-advance with small pleasant delay
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 220);
    }
  };

  const calculateFinalResults = (finalAnswers: Record<number, ProfileCategory>) => {
    const counts: Record<string, number> = {};
    Object.values(finalAnswers).forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1;
    });

    let topCategory: ProfileCategory = 'ingenieria_mineria';
    let maxCount = -1;

    for (const cat in counts) {
      if (counts[cat] > maxCount) {
        maxCount = counts[cat];
        topCategory = cat as ProfileCategory;
      }
    }

    const profile = VOCATIONAL_PROFILES[topCategory] || VOCATIONAL_PROFILES.ingenieria_mineria;
    setResultProfile(profile);
    setIsFinished(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
    setResultProfile(null);
  };

  const handleCopyResults = () => {
    if (!resultProfile) return;
    const text = `🎯 Mi Resultado Vocacional - Colectivo Valle del Huascarán\nPerfil: ${resultProfile.title}\n\n🎓 Carrera Universitaria: ${resultProfile.recommendedUniversity.name}\nSueldo inicial prom: ${resultProfile.recommendedUniversity.avgYoung} (30+ años: ${resultProfile.recommendedUniversity.avgAdult})\n\n⚙️ Carrera Técnica: ${resultProfile.recommendedTechnical.name}\nSueldo inicial prom: ${resultProfile.recommendedTechnical.avgYoung} (30+ años: ${resultProfile.recommendedTechnical.avgAdult})\n\nDescubre el tuyo en el portal del Colectivo Vocacional Valle del Huascarán.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/60 pb-16">
      
      {/* Top Floating App Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Portal</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-full">
              Test Vocacional (15 Preguntas)
            </span>
          </div>
        </div>

        {/* Progress bar (only active during test) */}
        {!isFinished && (
          <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {!isFinished ? (
          /* ================================================================= */
          /* QUESTION CARD SCREEN                                              */
          /* ================================================================= */
          <div className="space-y-6">
            
            {/* Header / Counter */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Pregunta {currentStep + 1} de {totalQuestions}
              </span>
              <span className="bg-slate-200/80 px-2.5 py-0.5 rounded-full font-medium text-slate-700">
                {progressPercent}% completado
              </span>
            </div>

            {/* Question Container Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
              
              {/* Context / Situation */}
              {currentQuestion.situation && (
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>Situación:</span>
                  <span className="text-slate-700 normal-case font-medium">{currentQuestion.situation}</span>
                </div>
              )}

              {/* Question Headline */}
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentQuestion.question}
              </h2>

              {/* 4 Clickable Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === option.category;
                  const letters = ['A', 'B', 'C', 'D'];

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.category)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer group ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/80 shadow-xs ring-2 ring-teal-500/20'
                          : 'border-slate-200 hover:border-teal-400 bg-white hover:bg-slate-50/70'
                      }`}
                    >
                      {/* Letter badge / check indicator */}
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-teal-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-800'
                      }`}>
                        {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : letters[idx]}
                      </span>

                      <div className="flex-1 pt-0.5">
                        <p className={`text-sm sm:text-base leading-relaxed ${
                          isSelected ? 'font-bold text-teal-950' : 'font-medium text-slate-800'
                        }`}>
                          {option.text}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Navigation Buttons: Previous & Skip */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  currentStep === 0 
                    ? 'opacity-0 pointer-events-none' 
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Pregunta Anterior</span>
              </button>

              {answers[currentQuestion.id] && (
                <button
                  onClick={() => {
                    if (currentStep + 1 < totalQuestions) {
                      setCurrentStep(prev => prev + 1);
                    } else {
                      calculateFinalResults(answers);
                    }
                  }}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 shadow-sm transition-all cursor-pointer"
                >
                  <span>{currentStep + 1 === totalQuestions ? 'Ver Resultados' : 'Siguiente'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* ================================================================= */
          /* RESULTS SCREEN: EXACTLY WHAT THE USER REQUESTED                   */
          /* "mira esta es tu posibilidad de carrera tecnica y la otra carrera */
          /* universitaria con sueldos prom asi"                               */
          /* ================================================================= */
          resultProfile && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Celebration Hero Badge */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl text-center border border-slate-800 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold mb-3">
                  <Award className="w-4 h-4 text-emerald-400" />
                  ¡Diagnóstico Vocacional Completado!
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
                  Mira, esta es tu posibilidad de carrera técnica y tu carrera universitaria
                </h2>

                <p className="mt-2 text-sm sm:text-base text-teal-200 font-semibold">
                  Área Vocacional: {resultProfile.title}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  {resultProfile.description}
                </p>
              </div>

              {/* ============================================================= */}
              {/* THE TWO MAIN MATCHES: TÉCNICA vs UNIVERSITARIA                */}
              {/* ============================================================= */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* 1. POSIBILIDAD DE CARRERA TÉCNICA */}
                <div className="bg-white rounded-3xl border-2 border-teal-500/60 shadow-lg p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-teal-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    Ruta Técnica (3 años)
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 text-teal-800 font-extrabold text-xs uppercase tracking-wider mb-2">
                      <Wrench className="w-4 h-4 text-teal-600" />
                      <span>Tu Posibilidad Técnica</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {resultProfile.recommendedTechnical.name}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {resultProfile.recommendedTechnical.description}
                    </p>

                    {/* Official Salary Box */}
                    <div className="mt-4 p-4 rounded-2xl bg-teal-50/80 border border-teal-200/70 space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-semibold text-teal-900">
                          Sueldo Promedio Inicial (18-29):
                        </span>
                        <span className="text-lg sm:text-xl font-black text-teal-800">
                          {resultProfile.recommendedTechnical.avgYoung}
                        </span>
                      </div>
                      
                      <div className="flex items-baseline justify-between text-xs text-teal-800/90 pt-1.5 border-t border-teal-200/50">
                        <span>Proyección (30+ años):</span>
                        <span className="font-bold text-slate-900">
                          {resultProfile.recommendedTechnical.avgAdult}
                        </span>
                      </div>

                      <div className="text-[10px] text-teal-700">
                        Rango salarial: {resultProfile.recommendedTechnical.rangeYoung}
                      </div>
                    </div>

                    {/* Key Institutions */}
                    <div className="mt-4">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                        Institutos Recomendados:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {resultProfile.recommendedTechnical.keyInstitutes.map((inst, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200">
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Rápida inserción laboral y alta demanda operativa</span>
                  </div>
                </div>

                {/* 2. POSIBILIDAD DE CARRERA UNIVERSITARIA */}
                <div className="bg-white rounded-3xl border-2 border-blue-600/60 shadow-lg p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    Ruta Universitaria (5 años)
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 text-blue-900 font-extrabold text-xs uppercase tracking-wider mb-2">
                      <GraduationCap className="w-4 h-4 text-blue-700" />
                      <span>Tu Posibilidad Universitaria</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {resultProfile.recommendedUniversity.name}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {resultProfile.recommendedUniversity.description}
                    </p>

                    {/* Official Salary Box */}
                    <div className="mt-4 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/70 space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-semibold text-blue-950">
                          Sueldo Promedio Inicial (18-29):
                        </span>
                        <span className="text-lg sm:text-xl font-black text-blue-900">
                          {resultProfile.recommendedUniversity.avgYoung}
                        </span>
                      </div>
                      
                      <div className="flex items-baseline justify-between text-xs text-blue-900/90 pt-1.5 border-t border-blue-200/50">
                        <span>Proyección (30+ años):</span>
                        <span className="font-bold text-slate-900">
                          {resultProfile.recommendedUniversity.avgAdult}
                        </span>
                      </div>

                      <div className="text-[10px] text-blue-700">
                        Rango salarial: {resultProfile.recommendedUniversity.rangeYoung}
                      </div>
                    </div>

                    {/* Key Universities */}
                    <div className="mt-4">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                        Universidades Recomendadas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {resultProfile.recommendedUniversity.keyUniversities.map((uni, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200">
                            {uni}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Liderazgo estratégico, titulación profesional y posgrados</span>
                  </div>
                </div>

              </div>

              {/* Skills & Talents Matrix */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  Competencias y Fortalezas Clave de tu Perfil
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {resultProfile.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Mentors in our Collective */}
              {resultProfile.allyContacts.length > 0 && (
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl border border-teal-200/70 p-5 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-900 uppercase tracking-wider mb-2">
                    <Users className="w-4 h-4 text-teal-700" />
                    <span>Representantes en el Valle del Huascarán para tu Perfil</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-4">
                    Estudiantes universitarios y técnicos de nuestro colectivo que ya recorren este camino y te orientan:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {resultProfile.allyContacts.map((contact, i) => (
                      <div key={i} className="bg-white rounded-xl p-3.5 border border-teal-200/60 shadow-2xs flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900 text-xs sm:text-sm">{contact.name}</div>
                          <div className="text-[11px] text-teal-700 font-medium">{contact.career}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 font-bold text-[10px] text-slate-700">
                          {contact.institution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Action Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                
                <button
                  onClick={handleCopyResults}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar mis Resultados'}</span>
                </button>

                <button
                  onClick={onExploreSalaries}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <DollarSign className="w-4 h-4 text-teal-700" />
                  <span>Explorar Todos los Sueldos Oficiales</span>
                </button>

                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-teal-800 bg-teal-100/70 hover:bg-teal-100 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reiniciar Test</span>
                </button>

              </div>

            </div>
          )
        )}

      </main>

    </div>
  );
};

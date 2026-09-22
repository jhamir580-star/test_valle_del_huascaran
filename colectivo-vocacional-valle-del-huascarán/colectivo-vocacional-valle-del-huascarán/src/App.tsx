import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AlliesSection } from './components/AlliesSection';
import { SalariesSection } from './components/SalariesSection';
import { TestVocationalBanner } from './components/TestVocationalBanner';
import { QuizView } from './components/QuizView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz'>('home');

  // Smooth scroll helpers
  const scrollToSalaries = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('sueldos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToAllies = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('aliados');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleStartQuiz = () => {
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {currentView === 'home' ? (
        <>
          <Navbar 
            onStartQuiz={handleStartQuiz} 
            onNavigateHome={handleNavigateHome} 
            currentView={currentView} 
          />
          <main className="flex-1">
            <Hero 
              onStartQuiz={handleStartQuiz} 
              onExploreSalaries={scrollToSalaries} 
              onExploreAllies={scrollToAllies}
            />
            <AlliesSection />
            <SalariesSection />
            <TestVocationalBanner 
              onStartQuiz={handleStartQuiz} 
            />
          </main>
          <Footer 
            onStartQuiz={handleStartQuiz} 
            onNavigateHome={handleNavigateHome} 
          />
        </>
      ) : (
        <QuizView 
          onBackToHome={handleNavigateHome} 
          onExploreSalaries={scrollToSalaries} 
        />
      )}
    </div>
  );
}

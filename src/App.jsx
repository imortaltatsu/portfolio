import React, { Suspense } from 'react';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="relative min-h-screen bg-industrial-900 text-industrial-300 selection:bg-industrial-200 selection:text-industrial-900">

      {/* Dither Overlay */}
      <div className="dither-overlay"></div>

      {/* 3D Background */}
      <ThreeScene />

      {/* Content Layer */}
      <main className="relative z-10">
        <Hero />
        <BentoGrid />
      </main>

      {/* Footer / Status Bar */}
      <footer className="relative z-10 border-t border-industrial-800 bg-industrial-900/80 backdrop-blur text-center py-6 font-mono text-xs text-industrial-600">
        <p>SYSTEM ARCHITECTURE V1.0 // ADITYA BERRY // {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

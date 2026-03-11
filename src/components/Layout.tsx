import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Menu, ToggleLeft, ToggleRight, Download } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  atsMode: boolean;
  setAtsMode: (val: boolean) => void;
  booting: boolean;
}

export default function Layout({ children, atsMode, setAtsMode, booting }: LayoutProps) {
  return (
    <div className="relative min-h-screen selection:bg-primary-green selection:text-black font-sans">
      {/* Background Particle Grid */}
      {!atsMode && !booting && (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        </div>
      )}

      {/* Navbar & Recruiter Mode Toggle */}
      {!booting && (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${atsMode ? 'bg-white border-b border-gray-300' : 'bg-dark-bg/80 backdrop-blur-md border-b border-white/5'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <div className="flex items-center">
                <span className={`font-mono font-bold text-xl md:text-2xl tracking-tighter ${atsMode ? 'text-black' : 'text-primary-green'}`}>
                  {'<Kushal />'}
                </span>
              </div>
              <div className="flex items-center space-x-4 md:space-x-6">
                <button
                  onClick={() => setAtsMode(!atsMode)}
                  className={`flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all hover:scale-105 active:scale-95 ${atsMode ? 'bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black' : 'bg-primary-green/10 text-primary-green hover:bg-primary-green/20 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]'}`}
                >
                  {atsMode ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                  <span>ATS Mode</span>
                </button>
                <a href="#resume" className={`hidden md:flex items-center space-x-2 font-medium text-sm transition-colors ${atsMode ? 'text-blue-600' : 'text-white hover:text-primary-blue'}`}>
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        {children}
      </main>

      {/* Recruiter Floating Contact */}
      {!booting && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className={`fixed bottom-6 right-6 z-50 ${atsMode ? 'hidden' : 'block'}`}
        >
          <a href="#contact" className="glass-panel text-white p-3 md:p-4 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
            <Menu className="w-6 h-6 text-primary-green" />
          </a>
        </motion.div>
      )}
    </div>
  );
}

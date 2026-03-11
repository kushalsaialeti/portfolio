import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  booting: boolean;
  setBooting: (val: boolean) => void;
}

export default function Hero({ booting, setBooting }: HeroProps) {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    if (!booting) return;
    const sequence = [
      '> Initializing_Kushal_OS... [OK]',
      '> Loading_MERN_Modules... [OK]',
      '> Connecting_to_Database... [OK]',
      '> Booting_UI_Engine... [OK]',
      'SYSTEM READY.'
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev, sequence[i]]);
      i++;
      if (i === sequence.length) {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 800);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [booting, setBooting]);

  if (booting) {
    return (
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <div className="terminal-text text-left w-full max-w-2xl bg-[#050505] p-6 rounded-md border border-primary-green/20 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
          <div className="flex items-center space-x-2 mb-4 border-b border-primary-green/20 pb-2">
            <Terminal className="w-5 h-5 text-primary-green" />
            <span className="opacity-80 text-sm">bash - kushal_os - 80x24</span>
          </div>
          {lines.map((l, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-1"
            >
              {l}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2.5 h-4 bg-primary-green mt-2"
          />
        </div>
      </div>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-[85vh] flex flex-col justify-center relative pt-10"
      id="hero"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary-violet/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="glass-panel p-6 sm:p-10 md:p-16 lg:p-24 rounded-2xl md:rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-primary-green/10 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110 blur-xl" />
        
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-start gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 px-3 py-1 md:px-4 md:py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs md:text-sm font-mono border border-primary-green/20"
          >
            <Code className="w-4 h-4" />
            <span>Full Stack Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2"
          >
            Aleti Kushal <br/>
            <span className="text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] relative inline-block leading-tight">
              Sai Devi<span className="animate-glitch absolute top-0 left-0 w-full h-full text-primary-blue blur-[2px] opacity-70">Sai Devi</span>
            </span> Varaprasad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed mt-2"
          >
            Building high-performance, product-level applications. Bridging system architecture, AI, and modern UI/UX for elite software experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-5 mt-6 sm:mt-8 w-full sm:w-auto"
          >
            <a href="#projects" className="w-full sm:w-auto relative inline-flex h-12 md:h-14 overflow-hidden rounded-xl p-[2px] transition-transform hover:scale-[1.05] active:scale-95 group shadow-[0_4px_20px_rgba(138,43,226,0.3)] hover:shadow-[0_8px_30px_rgba(138,43,226,0.5)]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8A2BE2_0%,#00F0FF_50%,#8A2BE2_100%)] group-hover:opacity-100 opacity-80 transition-opacity duration-500" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-dark-card px-6 md:px-8 py-1 text-sm md:text-base font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-dark-card/80">
                View Projects
              </span>
            </a>
            
            <a href="#contact" className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 flex items-center justify-center rounded-xl border-2 border-white/10 hover:bg-white/5 transition-all text-sm md:text-base font-medium text-gray-300 hover:text-primary-green hover:border-primary-green/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:-translate-y-1 active:scale-95">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-6 mt-8"
          >
            <SocialIcon icon={Github} href="https://github.com/KushalAleti" hoverColor="hover:text-white" />
            <SocialIcon icon={Linkedin} href="https://linkedin.com/in/aletikushalsaidevivaraprasad" hoverColor="hover:text-blue-400" />
            <SocialIcon icon={Mail} href="mailto:kushalsaidevivaraprasad@gmail.com" hoverColor="hover:text-primary-green" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function SocialIcon({ icon: Icon, href, hoverColor }: { icon: any; href: string; hoverColor: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`text-gray-500 transition-colors ${hoverColor}`}>
      <Icon className="w-6 h-6" />
    </a>
  );
}

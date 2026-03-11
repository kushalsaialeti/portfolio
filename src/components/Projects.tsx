import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Smartphone, Monitor, ExternalLink, Github, ChevronDown, ChevronUp, LayoutGrid, ShieldCheck, UserCheck } from 'lucide-react';

const cloudinaryUrl = (publicId: string, width: number = 800) => 
  `https://res.cloudinary.com/demo/image/upload/w_${width},f_auto,q_auto,c_scale/v1/portfolio/${publicId}`;

const projects = [
  {
    id: 'civic-app',
    title: 'Civic Issue Reporting Mobile App',
    description: 'A React Native + MERN stack application allowing citizens to report civic issues. Features AI image classification for issue categorization, blockchain logging for tamper-proof records, and precise geolocation tagging.',
    techs: ['React Native', 'Node.js', 'Express', 'MongoDB', 'AI Vision', 'Blockchain'],
    github: 'https://github.com/KushalAleti/civic-pulse',
    demo: '#',
    image: cloudinaryUrl('city-civic-app', 800),
    architecture: {
      ui: { icon: Smartphone, label: 'React Native App' },
      api: { icon: Server, label: 'Node/Express + AI Model' },
      db: { icon: Database, label: 'MongoDB + Blockchain Ledger' },
    }
  },
  {
    id: 'navyasree-boutique',
    title: 'NavyaSree Embroidery Boutique',
    description: 'A scalable e-commerce platform with a modern UI/UX for a boutique. Uses Cloudinary for highly optimized, scalable design gallery delivery, achieving 95+ Lighthouse scores.',
    techs: ['Next.js', 'React', 'Tailwind', 'Cloudinary CDN', 'Vercel'],
    github: 'https://github.com/KushalAleti/navyasree-boutique',
    demo: '#',
    image: cloudinaryUrl('ecommerce-boutique', 800),
    architecture: {
      ui: { icon: Monitor, label: 'Next.js App Router UI' },
      api: { icon: LayoutGrid, label: 'Next.js API Routes' },
      db: { icon: Database, label: 'Cloudinary + PostgreSQL' },
    }
  },
  {
    id: 'cyber-quiz',
    title: 'Cybersecurity Quiz Platform',
    description: 'An interactive assessment platform designed to test and educate users on cybersecurity best practices. Built with session persistence and secure state management.',
    techs: ['React', 'Context API', 'LocalStorage', 'Tailwind CSS'],
    github: 'https://github.com/KushalAleti/cyber-quiz',
    demo: '#',
    image: cloudinaryUrl('cyber-security', 800),
    architecture: {
      ui: { icon: ShieldCheck, label: 'React SPA' },
      api: { icon: UserCheck, label: 'Auth & Session Guard' },
      db: { icon: Database, label: 'Encrypted Local DB' },
    }
  }
];

function ProjectCard({ project, atsMode, index }: { project: any, atsMode: boolean, index: number }) {
  const [showArch, setShowArch] = useState(false);

  return (
    <motion.div
      initial={atsMode ? {} : { opacity: 0, y: 50, filter: 'blur(5px)' }}
      whileInView={atsMode ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden group mb-10 transition-all duration-300 ${
        atsMode ? 'border border-gray-300 shadow-sm mb-6' : 'glass-panel hover:border-primary-blue/30'
      }`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Project Image placeholder representing Cloudinary resource */}
        <div className={`w-full lg:w-5/12 relative overflow-hidden bg-dark-bg ${atsMode ? 'hidden' : 'block'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent z-10 lg:bg-gradient-to-r" />
          {/* We use a realistic placeholder from images.unsplash for visual immediate feedback if cloudinarydemo is slow */}
          <img 
            src={`https://images.unsplash.com/photo-${index === 0 ? '1605810230434-7631ac76ec81' : index === 1 ? '1467043153537-a4bba41aae3d' : '1550751827-4bd374c3f58b'}?auto=format&fit=crop&q=80&w=800`}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
          />
        </div>

        {/* Content */}
        <div className={`p-6 sm:p-8 lg:p-10 w-full ${atsMode ? 'lg:w-full' : 'lg:w-7/12'} flex flex-col justify-center`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-4">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${atsMode ? 'text-black' : 'text-white'}`}>
              {project.title}
            </h3>
            <div className={`flex items-center space-x-3 ${atsMode ? 'text-gray-700' : 'text-gray-400'}`}>
              <a href={project.github} className="hover:text-primary-blue transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={project.demo} className="hover:text-primary-green transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>

          <p className={`text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed ${atsMode ? 'text-gray-700' : 'text-gray-400'}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techs.map((tech: string) => (
              <span key={tech} className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono border ${
                atsMode ? 'bg-gray-100 border-gray-300 text-gray-800' : 'bg-primary-violet/10 border-primary-violet/30 text-primary-violet shadow-[0_0_10px_rgba(138,43,226,0.1)]'
              }`}>
                {tech}
              </span>
            ))}
          </div>

          {!atsMode && (
            <button 
              onClick={() => setShowArch(!showArch)}
              className="flex items-center space-x-2 text-primary-blue hover:text-white transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm font-mono mt-auto pt-4 border-t border-white/10 w-max"
            >
              <span>{showArch ? 'Hide System Design' : 'View System Design'}</span>
              {showArch ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}

          {/* Architecture Reveal */}
          <AnimatePresence>
            {showArch && !atsMode && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-6"
              >
                <div className="p-4 sm:p-5 rounded-xl border border-primary-blue/20 bg-primary-blue/5 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                  
                  {/* UI Node */}
                  <div className="flex flex-col items-center flex-1 text-center group/node">
                    <div className="w-12 h-12 rounded-full border border-primary-blue flexItems-center justify-center bg-dark-bg mb-2 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover/node:bg-primary-blue/20 transition-colors">
                      <project.architecture.ui.icon className="w-5 h-5 text-primary-blue mx-auto mt-[14px]" />
                    </div>
                    <span className="text-xs font-mono text-gray-300">{project.architecture.ui.label}</span>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block flex-shrink-0 text-white/20">
                    <div className="w-8 h-px bg-current"></div>
                  </div>

                  {/* API Node */}
                  <div className="flex flex-col items-center flex-1 text-center group/node">
                    <div className="w-12 h-12 rounded-full border border-primary-violet flex items-center justify-center bg-dark-bg mb-2 shadow-[0_0_15px_rgba(138,43,226,0.2)] group-hover/node:bg-primary-violet/20 transition-colors">
                      <project.architecture.api.icon className="w-5 h-5 text-primary-violet mx-auto mt-[14px]" />
                    </div>
                    <span className="text-xs font-mono text-gray-300">{project.architecture.api.label}</span>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block flex-shrink-0 text-white/20">
                    <div className="w-8 h-px bg-current"></div>
                  </div>

                  {/* DB Node */}
                  <div className="flex flex-col items-center flex-1 text-center group/node">
                    <div className="w-12 h-12 rounded-full border border-primary-green flex items-center justify-center bg-dark-bg mb-2 shadow-[0_0_15px_rgba(0,255,65,0.2)] group-hover/node:bg-primary-green/20 transition-colors">
                      <project.architecture.db.icon className="w-5 h-5 text-primary-green mx-auto mt-[14px]" />
                    </div>
                    <span className="text-xs font-mono text-gray-300">{project.architecture.db.label}</span>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ atsMode }: { atsMode: boolean }) {
  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto pt-20"
    >
      <div className="flex items-center mb-8 md:mb-12 space-x-2 md:space-x-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans flex-shrink-0">
          <span className="text-primary-green font-mono text-xl sm:text-2xl md:text-3xl mr-2 md:mr-3">03.</span>
          Engineering Work
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="flex flex-col">
        {projects.map((proj, index) => (
          <ProjectCard key={proj.id} project={proj} index={index} atsMode={atsMode} />
        ))}
      </div>
    </motion.section>
  );
}

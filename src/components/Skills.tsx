import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const techStack = [
  { name: 'C', level: 'Intermediate', color: 'group-hover:border-primary-green group-hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]' },
  { name: 'Java', level: 'Advanced', color: 'group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]' },
  { name: 'JavaScript', level: 'Advanced', color: 'group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]' },
  { name: 'React', level: 'Advanced', color: 'group-hover:border-primary-blue group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]' },
  { name: 'Next.js', level: 'Advanced', color: 'group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]' },
  { name: 'React Native', level: 'Intermediate', color: 'group-hover:border-primary-blue group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]' },
  { name: 'Node.js', level: 'Advanced', color: 'group-hover:border-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]' },
  { name: 'Express', level: 'Advanced', color: 'group-hover:border-gray-400 group-hover:shadow-[0_0_20px_rgba(156,163,175,0.4)]' },
  { name: 'MongoDB', level: 'Intermediate', color: 'group-hover:border-green-600 group-hover:shadow-[0_0_20px_rgba(22,163,74,0.4)]' },
  { name: 'MySQL', level: 'Intermediate', color: 'group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]' },
  { name: 'Tailwind CSS', level: 'Advanced', color: 'group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]' },
  { name: 'Docker', level: 'Intermediate', color: 'group-hover:border-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]' },
  { name: 'Figma', level: 'Advanced', color: 'group-hover:border-red-400 group-hover:shadow-[0_0_20px_rgba(248,113,113,0.4)]' },
  { name: 'Git', level: 'Advanced', color: 'group-hover:border-orange-600 group-hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]' },
];

export default function Skills({ atsMode }: { atsMode: boolean }) {
  return (
    <motion.section
      id="skills"
      initial={atsMode ? {} : { opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={atsMode ? {} : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto pt-20"
    >
      <div className="flex items-center mb-8 md:mb-10 space-x-2 md:space-x-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans flex-shrink-0">
          <span className="text-primary-green font-mono text-xl sm:text-2xl md:text-3xl mr-2 md:mr-3">02.</span>
          Technical Arsenal
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={atsMode ? {} : { opacity: 0, y: 20 }}
            whileInView={atsMode ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group flex items-center p-3 sm:p-4 rounded-xl cursor-crosshair transition-all duration-300 relative overflow-hidden ${
              atsMode ? 'border border-gray-300 shadow-sm' : 'glass-panel border-white/10 hover:-translate-y-2'
            } ${tech.color}`}
          >
            {/* Tech Stack Orbit Particle Effect on Hover */}
            {!atsMode && (
              <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full animate-ping blur-md" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-bounce shadow-[0_0_10px_white]" />
                <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-primary-green rounded-full animate-pulse shadow-[0_0_10px_#00FF41]" />
              </div>
            )}

            <div className="relative z-10 flex flex-col justify-center w-full">
              <div className="flex justify-between items-start mb-2">
                <Terminal className={`w-5 h-5 ${atsMode ? 'text-black' : 'text-primary-blue/60 group-hover:text-white transition-colors'}`} />
              </div>
              <h3 className={`font-mono font-bold text-base sm:text-lg ${atsMode ? 'text-black' : 'text-gray-200 group-hover:text-white'}`}>
                {tech.name}
              </h3>
              <p className={`text-xs mt-1 ${atsMode ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {tech.level}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

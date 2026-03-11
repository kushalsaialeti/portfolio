import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto pt-20"
    >
      <div className="flex items-center mb-8 md:mb-10 space-x-2 md:space-x-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans">
          <span className="text-primary-green font-mono text-xl sm:text-2xl md:text-3xl mr-2 md:mr-3">01.</span>
          About Me
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl text-base sm:text-lg text-gray-300 leading-relaxed space-y-4 md:space-y-6">
        <p>
          I am a passionate <strong className="text-white font-medium">Full Stack Developer</strong> currently pursuing my B.Tech in Computer Science at SRKR Engineering College. I specialize in the MERN stack and Next.js, with a keen eye for crafting product-level applications that balance system architecture, AI integration, and beautiful modern UI/UX.
        </p>
        <p>
          My focus is on engineering scalable, high-performance systems and interactive user experiences that drive engagement and solve real-world problems. Whether I'm building a Civic Issue Reporting Mobile App with blockchain logging or a scalable Cybersecurity Quiz Platform, I approach every project with a system-thinking mindset and an unyielding commitment to excellence.
        </p>
        
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-between">
          <div className="flex-1">
            <h4 className="text-primary-blue font-mono text-[10px] sm:text-sm mb-1 sm:mb-2 tracking-wider uppercase">Education</h4>
            <p className="text-white font-medium text-sm sm:text-base">SRKR Engineering College</p>
            <p className="text-xs sm:text-sm text-gray-400">B.Tech, Computer Science</p>
          </div>
          <div className="flex-1">
            <h4 className="text-primary-violet font-mono text-[10px] sm:text-sm mb-1 sm:mb-2 tracking-wider uppercase">Leadership</h4>
            <p className="text-white font-medium text-sm sm:text-base">Core PR & Outreach Member</p>
            <p className="text-xs sm:text-sm text-gray-400">GDG OnCampus SRKR</p>
          </div>
          <div className="flex-1">
            <h4 className="text-primary-green font-mono text-[10px] sm:text-sm mb-1 sm:mb-2 tracking-wider uppercase">Interests</h4>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-400">
              <span className="bg-white/5 px-2 py-1 rounded">System Architecture</span>
              <span className="bg-white/5 px-2 py-1 rounded">AI</span>
              <span className="bg-white/5 px-2 py-1 rounded">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

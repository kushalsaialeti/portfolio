import { motion } from 'framer-motion';
import { Users, Code, Award, Sparkles } from 'lucide-react';

const events = [
  {
    role: 'Core PR & Outreach Member',
    organization: 'GDG OnCampus SRKR',
    date: '2023 - Present',
    description: 'Leading PR initiatives, engaging the student developer community, and managing outreach for large scale tech events. Directed numerous technical sessions to help students enter the Google ecosystem.',
    icon: Users,
    color: 'text-primary-blue bg-primary-blue/10 border-primary-blue/30',
  },
  {
    role: 'Participant & Developer',
    organization: 'Smart India Hackathon',
    date: 'Recent',
    description: 'Collaborated with an agile team to design and deploy a civic issue reporting solution, integrating complex AI models to resolve real-world challenges.',
    icon: Code,
    color: 'text-primary-green bg-primary-green/10 border-primary-green/30',
  },
  {
    role: 'Technical Contributor',
    organization: 'MERN Hackathon',
    date: 'Recent',
    description: 'Rapidly prototyped a full-stack platform under high pressure, demonstrating expertise in React, Express, MongoDB, and UI/UX best practices.',
    icon: Sparkles,
    color: 'text-primary-violet bg-primary-violet/10 border-primary-violet/30',
  },
  {
    role: 'Cybersecurity Certification',
    organization: 'Cisco',
    date: 'Completed',
    description: 'Acquired core competencies in network security, threat mitigation, and system vulnerabilities to ensure secure architecture designs in projects.',
    icon: Award,
    color: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  }
];

export default function Leadership() {
  return (
    <motion.section
      id="leadership"
      initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto pt-20"
    >
      <div className="flex items-center mb-10 md:mb-16 space-x-2 md:space-x-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans flex-shrink-0">
          <span className="text-primary-green font-mono text-xl sm:text-2xl md:text-3xl mr-2 md:mr-3">04.</span>
          Leadership & Impact
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 md:ml-10 space-y-8 md:space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 50 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline dot */}
            <div className={`absolute -left-3.5 top-1 w-7 h-7 rounded-full border flex items-center justify-center transition-transform group-hover:scale-125 ${event.color} shadow-[0_0_10px_currentColor]`}>
              <event.icon className="w-3.5 h-3.5" />
            </div>

            <div className="glass-panel p-5 sm:p-6 md:p-8 rounded-xl relative overflow-hidden transition-colors hover:border-white/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-primary-blue transition-colors">
                    {event.role}
                  </h3>
                  <h4 className="text-gray-400 text-base sm:text-lg">{event.organization}</h4>
                </div>
                <div className="text-primary-green font-mono text-xs sm:text-sm bg-primary-green/10 border border-primary-green/20 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                  {event.date}
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl text-sm sm:text-base">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

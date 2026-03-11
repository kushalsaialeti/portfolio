import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean, msg: string }>({ show: false, msg: '' });

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock Email Integration
    setTimeout(() => {
      setLoading(false);
      setToast({ show: true, msg: 'Message securely transmitted to Kushal_OS!' });
      
      setTimeout(() => setToast({ show: false, msg: '' }), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto pt-20"
    >
      <div className="flex items-center mb-10 md:mb-16 space-x-2 md:space-x-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans flex-shrink-0">
          <span className="text-primary-green font-mono text-xl sm:text-2xl md:text-3xl mr-2 md:mr-3">05.</span>
          Establish Connection
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center max-w-lg">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Let's build something extraordinary.</h3>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            Currently open to opportunities. Whether you have a question about my system designs or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:kushalsaidevivaraprasad@gmail.com" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-green/10 group-hover:border-primary-green/30 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary-green transition-colors"/>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">kushalsaidevivaraprasad@gmail.com</span>
            </a>
            
            <a href="https://linkedin.com/in/aletikushalsaidevivaraprasad" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-blue/10 group-hover:border-primary-blue/30 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-primary-blue transition-colors"/>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">in/aletikushalsaidevivaraprasad</span>
            </a>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-violet/10 group-hover:border-primary-violet/30 transition-colors">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-primary-violet transition-colors"/>
              </div>
              <span className="text-gray-300">Remote / India</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary-green/5 blur-[100px] pointer-events-none rounded-full min-h-[400px]" />
          <form onSubmit={handleForm} className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col space-y-5 sm:space-y-6 relative z-10 w-full hover:border-white/20 transition-colors">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-mono text-primary-green mb-2">{'<Name />'}</label>
              <input type="text" id="name" required className="bg-dark-bg/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-green focus:border-primary-green font-sans placeholder-gray-600 transition-colors" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-mono text-primary-blue mb-2">{'<Email />'}</label>
              <input type="email" id="email" required className="bg-dark-bg/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue font-sans placeholder-gray-600 transition-colors" placeholder="john@company.com" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-mono text-primary-violet mb-2">{'<Message />'}</label>
              <textarea id="message" required rows={4} className="bg-dark-bg/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-violet focus:border-primary-violet font-sans placeholder-gray-600 transition-colors resize-none" placeholder="Let's create something together..." />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full h-12 sm:h-14 bg-white text-black font-bold uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-green hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-[1.02] active:scale-95"
            >
              {loading ? (
                <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
              ) : (
                <>
                  <span>Send Request</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
            className="fixed bottom-10 right-10 z-[100] bg-dark-card border border-primary-green text-white px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.2)] flex items-center space-x-3"
          >
            <CheckCircle className="w-5 h-5 text-primary-green" />
            <span className="font-mono text-sm">{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[200] p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border)] shadow-[var(--shadow-2xl)] backdrop-blur-2xl hover:border-[var(--accent)]/30 transition-all duration-300 group touch-none"
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                {theme === 'light' ? (
                    <Moon className="w-4 h-4 text-[var(--text-primary)] group-hover:rotate-[20deg] transition-transform duration-500" />
                ) : (
                    <Sun className="w-4 h-4 text-[var(--text-primary)] group-hover:rotate-[45deg] transition-transform duration-500" />
                )}
            </div>
            
            {/* Subtle reflection effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.button>
    );
};

export default ThemeToggle;

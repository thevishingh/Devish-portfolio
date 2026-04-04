import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data/mock';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--accent-cyan)]/10 shadow-lg shadow-[var(--accent-cyan)]/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 flex items-center justify-center group-hover:bg-[var(--accent-cyan)]/20 transition-colors duration-300">
            <Code2 className="w-5 h-5 text-[var(--accent-cyan)]" />
          </div>
          <span className="font-mono font-bold text-lg text-[var(--text-primary)] tracking-tight">
            alex<span className="text-[var(--accent-cyan)]">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-4 py-2 font-mono text-sm group"
              >
                <span className={`transition-colors duration-300 ${
                  isActive ? 'text-[var(--accent-cyan)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent-cyan)] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--accent-cyan)]/30 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-[var(--accent-cyan)]" />
                ) : (
                  <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-4 h-4 text-[var(--text-primary)]" />
            ) : (
              <Menu className="w-4 h-4 text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-color)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg font-mono text-sm transition-colors duration-300 ${
                      location.pathname === link.href
                        ? 'text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

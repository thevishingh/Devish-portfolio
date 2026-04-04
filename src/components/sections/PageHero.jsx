import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ icon: Icon, badge, title, description, children }) {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-cyan)]/[0.04] via-[var(--accent-cyan)]/[0.01] to-transparent" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Animated decorative orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-[12%] w-72 h-72 rounded-full bg-[var(--accent-cyan)]/[0.03] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-[8%] w-56 h-56 rounded-full bg-[var(--accent-cyan)]/[0.04] blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent-cyan)]/[0.015] blur-3xl"
      />

      {/* Floating dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20 - i * 5, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent-cyan)]"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {children ? (
          children
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {Icon && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-6">
                <Icon className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                <span className="font-mono text-xs text-[var(--accent-cyan)]">{badge}</span>
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-[var(--text-primary)] mb-4">
              {title}<span className="text-[var(--accent-cyan)]">.</span>
            </h1>
            {description && (
              <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed">{description}</p>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </div>
  );
}

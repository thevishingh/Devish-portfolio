import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exit'

  useEffect(() => {
    // Smooth progress animation
    const duration = 2200;
    const steps = 60;
    const increment = 100 / steps;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setPhase('complete');
        // Brief pause to show 100%, then exit
        setTimeout(() => {
          setPhase('exit');
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 400);
      } else {
        // Add slight randomness for organic feel
        const jitter = Math.random() * 3;
        setProgress(Math.min(current + jitter, 99));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? null : null}
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={phase === 'exit' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
        style={{ background: 'var(--bg-primary, #0a0a12)' }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,229,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.4) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--accent-cyan, #00e5ff)', opacity: 0.06 }}
        />

        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          {/* Logo icon */}
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center"
            style={{
              background: 'rgba(0, 229, 255, 0.08)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--accent-cyan, #00e5ff)' }}
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold tracking-tight mb-1"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--text-primary, #e8eaed)',
            }}
          >
            alex<span style={{ color: 'var(--accent-cyan, #00e5ff)' }}>.dev</span>
          </motion.h1>

          {/* Tagline with typewriter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm mb-10"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--text-secondary, #8b95a5)',
            }}
          >
            Initializing portfolio...
          </motion.p>

          {/* Progress bar */}
          <div className="w-56 mx-auto">
            <div
              className="h-[2px] rounded-full overflow-hidden"
              style={{ background: 'rgba(0, 229, 255, 0.1)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'var(--accent-cyan, #00e5ff)',
                  boxShadow: '0 0 12px rgba(0, 229, 255, 0.5)',
                  transition: 'width 0.1s ease-out',
                }}
              />
            </div>

            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between mt-3"
            >
              <span
                className="text-xs"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--text-secondary, #8b95a5)',
                }}
              >
                {phase === 'complete' ? 'Ready' : 'Loading assets'}
              </span>
              <span
                className="text-xs tabular-nums"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--accent-cyan, #00e5ff)',
                }}
              >
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-3 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent-cyan, #00e5ff)' }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

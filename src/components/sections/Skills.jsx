import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Zap, Code2, Database, Wrench } from 'lucide-react';
import { skills } from '../../data/mock';
import PageHero from './PageHero';

gsap.registerPlugin(ScrollTrigger);

const categoryIcons = {
  Frontend: Code2,
  Backend: Database,
  'Database & Cloud': Zap,
  'Tools & Testing': Wrench,
};

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150"
            style={{ backgroundColor: skill.color }}
          />
          <span className="font-mono text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="font-mono text-xs text-[var(--text-secondary)]"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: `${skill.color}40` }}
        >
          <div
            className="absolute inset-0 rounded-full transition-opacity duration-300"
            style={{
              backgroundColor: skill.color,
              opacity: hovered ? 0.9 : 0.6,
              boxShadow: hovered ? `0 0 12px ${skill.color}60` : 'none',
            }}
          />
        </motion.div>
      </div>

      {/* Hover tooltip */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
        className="mt-2 font-mono text-xs text-[var(--text-secondary)] leading-relaxed"
      >
        {skill.level >= 90
          ? 'Expert level - used daily in production'
          : skill.level >= 80
          ? 'Advanced - strong proficiency'
          : skill.level >= 70
          ? 'Intermediate - comfortable in projects'
          : 'Growing - actively learning'}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-category-tab', {
        scrollTrigger: {
          trigger: '.skill-tabs-container',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen">
      <PageHero icon={Cpu} badge="Technical Skills" title="Tech Stack">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-6">
            <Cpu className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs text-[var(--accent-cyan)]">Technical Skills</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-[var(--text-primary)] mb-4">
            Tech Stack<span className="text-[var(--accent-cyan)]">.</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed mb-8">
            Technologies and tools I use daily to build fast, accessible, and beautiful web applications.
          </p>
          {/* Quick category pills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((cat, i) => {
              const CatIcon = categoryIcons[cat.category] || Code2;
              return (
                <motion.div key={cat.category} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <CatIcon className="w-4 h-4 text-[var(--accent-cyan)]" />
                  <span className="font-mono text-sm text-[var(--text-primary)]">{cat.category}</span>
                  <span className="font-mono text-xs text-[var(--text-secondary)] ml-1">{cat.items.length} skills</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 pb-24">

        {/* Category Tabs */}
        <div className="skill-tabs-container flex flex-wrap gap-3 mb-12">
          {skills.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`skill-category-tab font-mono text-sm px-5 py-2.5 rounded-lg border transition-all duration-300 ${
                activeTab === i
                  ? 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] shadow-lg shadow-[var(--accent-cyan)]/5'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/20 hover:text-[var(--text-primary)]'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
        >
          {skills[activeTab].items.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
          ))}
        </motion.div>

        {/* All Skills Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="font-mono text-lg font-semibold text-[var(--text-primary)] mb-8 text-center">
            Quick Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.flatMap((cat) => cat.items).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-colors duration-300 cursor-default"
              >
                <span className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
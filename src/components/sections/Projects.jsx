import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, FolderOpen, Users, Rocket, TrendingUp } from 'lucide-react';
import { projects } from '../../data/mock';
import { Badge } from '../../components/ui/badge';
import PageHero from './PageHero';

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section className="min-h-screen">
      <PageHero icon={FolderOpen} badge="Portfolio" title="Projects">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-6">
            <FolderOpen className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs text-[var(--accent-cyan)]">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-[var(--text-primary)] mb-4">
            Projects<span className="text-[var(--accent-cyan)]">.</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed mb-8">
            A selection of projects I&apos;ve built — from SaaS platforms to real-time dashboards and developer tools.
          </p>
          <div className="flex flex-wrap gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center"><Rocket className="w-5 h-5 text-[var(--accent-cyan)]" /></div>
              <div><span className="font-mono text-lg font-bold text-[var(--text-primary)]">{projects.length}</span><p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase">Projects</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center"><Users className="w-5 h-5 text-[var(--accent-cyan)]" /></div>
              <div><span className="font-mono text-lg font-bold text-[var(--text-primary)]">8K+</span><p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase">Total Users</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-[var(--accent-cyan)]" /></div>
              <div><span className="font-mono text-lg font-bold text-[var(--text-primary)]">99.7%</span><p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase">Avg Uptime</p></div>
            </motion.div>
          </div>
        </motion.div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filter */}
        <div className="flex gap-3 mb-10">
          {['all', 'featured'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-sm px-4 py-2 rounded-lg border capitalize transition-all duration-300 ${
                filter === f
                  ? 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)]'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/20'
              }`}
            >
              {f === 'all' ? 'All Projects' : 'Featured'}
            </button>
          ))}
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--accent-cyan)]/5"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />

                  {/* Overlay on hover */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-[var(--bg-primary)]/60 backdrop-blur-sm flex items-center justify-center gap-3"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 flex items-center justify-center hover:bg-[var(--accent-cyan)]/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 flex items-center justify-center hover:bg-[var(--accent-cyan)]/20 transition-colors">
                      <Github className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </a>
                  </motion.div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] font-mono text-[10px]">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-mono font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300 mb-0.5">{project.title}</h3>
                  <p className="font-mono text-xs text-[var(--accent-cyan)]/60 mb-2">{project.subtitle}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 3).map((tech, j) => (
                      <span key={j} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)]">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && <span className="font-mono text-[10px] px-2 py-0.5 rounded text-[var(--text-secondary)]">+{project.techStack.length - 3}</span>}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                    <div className="flex gap-3">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <span key={key} className="font-mono text-[10px] text-[var(--text-secondary)]">
                          <span className="text-[var(--text-primary)]">{value}</span> {key}
                        </span>
                      ))}
                    </div>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-0.5 font-mono text-[10px] text-[var(--accent-cyan)] hover:underline group/link">
                      View <ChevronRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

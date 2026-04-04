import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Clock, Calendar, ArrowUpRight, PenLine, Hash } from 'lucide-react';
import { blogs } from '../../data/mock';
import PageHero from './PageHero';

export default function Blog() {
  return (
    <section className="min-h-screen">
      {/* Page Hero */}
      <PageHero icon={BookOpen} badge="Hashnode Blog" title="Blog">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs text-[var(--accent-cyan)]">Hashnode Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-[var(--text-primary)] mb-4">
            Blog<span className="text-[var(--accent-cyan)]">.</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed mb-8">
            Thoughts on React, frontend architecture, and building better web experiences. Published on Hashnode.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center"><PenLine className="w-5 h-5 text-[var(--accent-cyan)]" /></div>
              <div><span className="font-mono text-lg font-bold text-[var(--text-primary)]">{blogs.length}</span><p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase">Articles</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center"><Hash className="w-5 h-5 text-[var(--accent-cyan)]" /></div>
              <div><span className="font-mono text-lg font-bold text-[var(--text-primary)]">{[...new Set(blogs.flatMap(b => b.tags))].length}</span><p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase">Topics</p></div>
            </motion.div>
          </div>
        </motion.div>
      </PageHero>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/5"
            >
              <div className="absolute top-5 right-5">
                <ArrowUpRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] transition-colors" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)]">
                  <Calendar className="w-3.5 h-3.5" />{blog.date}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)]">
                  <Clock className="w-3.5 h-3.5" />{blog.readTime}
                </span>
              </div>
              <h3 className="font-mono font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors mb-3 pr-8">{blog.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{blog.description}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, j) => (
                  <span key={j} className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)]/70 border border-[var(--accent-cyan)]/10">{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

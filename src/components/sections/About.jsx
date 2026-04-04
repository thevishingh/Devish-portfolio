import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Award, Briefcase, GraduationCap, Star, User, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo, timeline } from '../../data/mock';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
};

/* ─── About Hero with Developer Image ─── */
function AboutHero() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/[0.04] via-transparent to-[var(--accent-cyan)]/[0.02]" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.4) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Animated orbs */}
      <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-[var(--accent-cyan)]/[0.03] blur-3xl" />
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-[5%] w-60 h-60 rounded-full bg-[var(--accent-cyan)]/[0.04] blur-2xl" />

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div key={i} animate={{ y: [0, -15 - i * 4, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent-cyan)]"
            style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-6">
              <User className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
              <span className="font-mono text-xs text-[var(--accent-cyan)]">About Me</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-mono text-[var(--text-primary)] mb-4 leading-tight">
              From Intern to<br /><span className="text-[var(--accent-cyan)]">React Developer</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 max-w-lg">
              A 10-month internship ignited my passion. 2+ years later, I&apos;m building production apps that serve thousands of users with clean, performant React code.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 text-[var(--accent-cyan)]" />{personalInfo.location}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                <Briefcase className="w-4 h-4 text-[var(--accent-cyan)]" />2+ Years Experience
              </div>
              <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                <Sparkles className="w-4 h-4 text-[var(--accent-cyan)]" />15+ Projects
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-center">
                  <div className="font-mono text-xl font-bold text-[var(--accent-cyan)]">{stat.value}</div>
                  <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Developer Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--accent-cyan)]/20 via-[var(--accent-cyan)]/5 to-transparent blur-2xl" />

              {/* Image container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[var(--accent-cyan)]/20 shadow-2xl shadow-[var(--accent-cyan)]/10 group">
                <img
                  src="https://images.unsplash.com/photo-1719558027617-487090316845?w=600&h=750&fit=crop&crop=face"
                  alt="Alex Chen - React Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-[var(--accent-cyan)]/5" />

                {/* Code snippet decoration */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[var(--bg-primary)]/80 backdrop-blur-sm border border-[var(--accent-cyan)]/10">
                  <div className="font-mono text-[10px] text-[var(--accent-cyan)]/60 mb-1">// current status</div>
                  <div className="font-mono text-xs text-[var(--text-primary)]">
                    const role = <span className="text-[var(--accent-cyan)]">&quot;React Developer&quot;</span>;
                  </div>
                  <div className="font-mono text-xs text-[var(--text-primary)]">
                    const passion = <span className="text-[var(--accent-green)]">true</span>;
                  </div>
                </div>
              </div>

              {/* Floating badges around image */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--accent-cyan)]/20 shadow-lg">
                <span className="font-mono text-xs text-[var(--accent-cyan)]">React</span>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/3 -left-6 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--accent-cyan)]/20 shadow-lg">
                <span className="font-mono text-xs text-[var(--accent-cyan)]">TypeScript</span>
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
                className="absolute bottom-12 -right-4 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--accent-cyan)]/20 shadow-lg">
                <span className="font-mono text-xs text-[var(--accent-cyan)]">Next.js</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isLeft = index % 2 === 0;
  const Icon = iconMap[item.type] || Star;

  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_60px_1fr] gap-0 group">
      {/* Left content */}
      <div className={`${isLeft ? 'md:block' : 'md:block md:invisible'} hidden`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--accent-cyan)]/5 mr-4"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-xs text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5 px-2 py-0.5 rounded">{item.date}</span>
              <span className="font-mono text-xs text-[var(--text-secondary)] capitalize px-2 py-0.5 rounded bg-[var(--bg-primary)]">{item.type}</span>
            </div>
            <h3 className="font-mono font-bold text-lg text-[var(--text-primary)] mb-1">{item.title}</h3>
            <p className="text-sm text-[var(--accent-cyan)]/70 font-mono mb-3">{item.organization}</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((h, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)]/80 border border-[var(--accent-cyan)]/10">{h}</span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Center line + dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-px flex-1 bg-[var(--accent-cyan)]/15" />
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="w-12 h-12 rounded-full bg-[var(--bg-card)] border-2 border-[var(--accent-cyan)]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-cyan)] group-hover:shadow-lg group-hover:shadow-[var(--accent-cyan)]/20 transition-all duration-500 z-10"
        >
          <Icon className="w-5 h-5 text-[var(--accent-cyan)]" />
        </motion.div>
        <div className="w-px flex-1 bg-[var(--accent-cyan)]/15" />
      </div>

      {/* Right content */}
      <div className={`${!isLeft ? 'md:block' : 'md:block md:invisible'} hidden`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--accent-cyan)]/5 ml-4"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-xs text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5 px-2 py-0.5 rounded">{item.date}</span>
              <span className="font-mono text-xs text-[var(--text-secondary)] capitalize px-2 py-0.5 rounded bg-[var(--bg-primary)]">{item.type}</span>
            </div>
            <h3 className="font-mono font-bold text-lg text-[var(--text-primary)] mb-1">{item.title}</h3>
            <p className="text-sm text-[var(--accent-cyan)]/70 font-mono mb-3">{item.organization}</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((h, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)]/80 border border-[var(--accent-cyan)]/10">{h}</span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-px flex-1 bg-[var(--accent-cyan)]/15" />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] border-2 border-[var(--accent-cyan)]/30 flex items-center justify-center flex-shrink-0"
          >
            <Icon className="w-4 h-4 text-[var(--accent-cyan)]" />
          </motion.div>
          <div className="w-px flex-1 bg-[var(--accent-cyan)]/15" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] mb-4"
        >
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-xs text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5 px-2 py-0.5 rounded">{item.date}</span>
            <span className="font-mono text-xs text-[var(--text-secondary)] capitalize px-2 py-0.5 rounded bg-[var(--bg-primary)]">{item.type}</span>
          </div>
          <h3 className="font-mono font-bold text-base text-[var(--text-primary)] mb-1">{item.title}</h3>
          <p className="text-sm text-[var(--accent-cyan)]/70 font-mono mb-2">{item.organization}</p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((h, i) => (
              <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)]/80 border border-[var(--accent-cyan)]/10">{h}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-stat', {
        scrollTrigger: { trigger: '.about-stats-container', start: 'top 80%' },
        y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen">
      <AboutHero />

      {/* Bio & Stats */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">{personalInfo.bio}</p>
            <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[var(--accent-cyan)]" />{personalInfo.location}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[var(--accent-cyan)]" />2+ years experience</span>
            </div>
          </motion.div>
          <div className="lg:col-span-2 about-stats-container">
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="about-stat p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-500 group">
                  <div className="font-mono text-2xl font-bold text-[var(--accent-cyan)] group-hover:scale-105 transition-transform origin-left duration-300">{stat.value}</div>
                  <div className="font-mono text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="font-mono text-2xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Experience &amp; Education
          </h3>
          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Download, MessageCircle, Code2, Briefcase, Layers, BookOpen, Star, ExternalLink, ChevronRight } from 'lucide-react';
import { personalInfo, skills, projects, timeline, blogs, testimonials } from '../../data/mock';

/* ─── Particle Canvas ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const handleMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', handleMouse);
    const count = Math.min(100, Math.floor(window.innerWidth / 18));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.5 + 0.2,
    }));
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) { const force = (150 - dist) / 150; p.x += (dx / dist) * force * 1.5; p.y += (dy / dist) * force * 1.5; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]; const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 120) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
        }
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', handleMouse); if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />;
}

/* ─── Section Wrapper ─── */
function SectionHeader({ comment, title, action, actionLink }) {
  return (
    <div className="flex items-end justify-between mb-12">
      <div>
        <span className="font-mono text-sm text-[var(--accent-cyan)] mb-2 block">// {comment}</span>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[var(--text-primary)]">{title}</h2>
        <div className="w-16 h-0.5 bg-[var(--accent-cyan)]/50 mt-3" />
      </div>
      {action && (
        <Link to={actionLink} className="hidden sm:flex items-center gap-1.5 font-mono text-sm text-[var(--accent-cyan)] hover:underline group">
          {action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.tagline;
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => { if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++; } else clearInterval(interval); }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[var(--bg-primary)]/50 via-transparent to-[var(--bg-primary)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
            <span className="font-mono text-xs text-[var(--accent-cyan)]">Available for opportunities</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] font-mono leading-[1.1] mb-4">
            {personalInfo.name}<span className="text-[var(--accent-cyan)]">.</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-2xl sm:text-3xl font-mono text-[var(--text-secondary)] mb-6">{personalInfo.title}</motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mb-8">
            <p className="font-mono text-lg text-[var(--accent-cyan)] flex items-center"><span className="text-[var(--text-secondary)] mr-2">&gt;</span>{typedText}<span className="inline-block w-0.5 h-5 bg-[var(--accent-cyan)] ml-1 animate-pulse" /></p>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="text-[var(--text-secondary)] text-base leading-relaxed mb-10 max-w-xl">{personalInfo.shortBio}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="flex flex-wrap gap-4">
            <Link to="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] font-mono text-sm hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/10">View Projects <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /></Link>
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm hover:border-[var(--accent-cyan)]/30 transition-all duration-300"><MessageCircle className="w-4 h-4" /> Get in Touch</Link>
            <a href={personalInfo.resumeLink} className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--accent-cyan)] transition-colors duration-300"><Download className="w-4 h-4" /> Resume</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat, i) => (<div key={i} className="text-left"><div className="font-mono text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div><div className="font-mono text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-wider">{stat.label}</div></div>))}
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-[var(--text-secondary)]">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 rounded-full border border-[var(--border-color)] flex items-start justify-center p-1"><div className="w-1 h-2 rounded-full bg-[var(--accent-cyan)]" /></motion.div>
      </motion.div>
    </section>
  );
}

/* ─── About Preview ─── */
function AboutPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader comment="about me" title="Who I Am" action="Read Full Story" actionLink="/about" />
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">{personalInfo.bio}</p>
            <div className="flex flex-wrap gap-3">
              {timeline.slice(0, 2).map((t) => (
                <div key={t.id} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <Briefcase className="w-4 h-4 text-[var(--accent-cyan)]" />
                  <div><p className="font-mono text-xs text-[var(--text-primary)] font-semibold">{t.title}</p><p className="font-mono text-xs text-[var(--text-secondary)]">{t.organization}</p></div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-[var(--accent-cyan)] hover:underline group sm:hidden">Know More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-500 group">
                <div className="font-mono text-2xl font-bold text-[var(--accent-cyan)] group-hover:scale-105 transition-transform origin-left duration-300">{stat.value}</div>
                <div className="font-mono text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills Preview ─── */
function SkillsPreview() {
  const topSkills = skills[0].items.slice(0, 6);
  return (
    <section className="py-20 bg-[var(--bg-secondary)]/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader comment="skills" title="Tech I Work With" action="View All Skills" actionLink="/skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topSkills.map((skill, i) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color }} /><span className="font-mono text-sm text-[var(--text-primary)] font-medium">{skill.name}</span></div>
                <span className="font-mono text-xs text-[var(--text-secondary)]">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.08 }} className="h-full rounded-full" style={{ backgroundColor: skill.color, opacity: 0.7 }} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {skills.flatMap(c => c.items).slice(6).map((s) => (
            <span key={s.name} className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] font-mono text-xs text-[var(--text-secondary)]">{s.name}</span>
          ))}
        </div>
        <Link to="/skills" className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-[var(--accent-cyan)] hover:underline group sm:hidden">View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
      </div>
    </section>
  );
}

/* ─── Projects Preview ─── */
function ProjectsPreview() {
  const featured = projects.filter(p => p.featured).slice(0, 3);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader comment="work" title="Featured Projects" action="View All Projects" actionLink="/projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/5">
              <div className="relative h-40 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-mono font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors mb-1">{project.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((t, j) => (<span key={j} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)]">{t}</span>))}
                  {project.techStack.length > 3 && <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]">+{project.techStack.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-[var(--accent-cyan)] hover:underline group sm:hidden">All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
      </div>
    </section>
  );
}

/* ─── Blog Preview ─── */
function BlogPreview() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)]/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader comment="blog" title="Latest Articles" action="View All Posts" actionLink="/blog" />
        <div className="grid sm:grid-cols-2 gap-5">
          {blogs.slice(0, 2).map((blog, i) => (
            <motion.a key={blog.id} href={blog.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/5">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span className="font-mono text-xs text-[var(--text-secondary)]">{blog.date}</span>
                <span className="font-mono text-xs text-[var(--text-secondary)]">{blog.readTime}</span>
              </div>
              <h3 className="font-mono font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors mb-2 line-clamp-2">{blog.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">{blog.description}</p>
              <div className="flex items-center gap-2">
                {blog.tags.map((tag, j) => (<span key={j} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)]/70 border border-[var(--accent-cyan)]/10">{tag}</span>))}
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)] ml-auto group-hover:text-[var(--accent-cyan)] transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Marquee ─── */
function TestimonialsMarquee() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeader comment="testimonials" title="What Clients Say" />
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />
        <div className="flex gap-5 animate-marquee">
          {doubled.map((t, i) => (
            <div key={`${t.id}-${i}`} className="flex-shrink-0 w-[350px] p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => (<Star key={j} className="w-3.5 h-3.5 text-[var(--accent-cyan)] fill-[var(--accent-cyan)]" />))}</div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 flex items-center justify-center font-mono text-xs font-bold text-[var(--accent-cyan)]">{t.avatar}</div>
                <div><p className="font-mono text-sm text-[var(--text-primary)] font-medium">{t.name}</p><p className="font-mono text-xs text-[var(--text-secondary)]">{t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact CTA ─── */
function ContactCTA() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Code2 className="w-10 h-10 text-[var(--accent-cyan)] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[var(--text-primary)] mb-4">Let&apos;s Build Something<span className="text-[var(--accent-cyan)]"> Amazing</span></h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] font-mono text-sm hover:bg-[var(--accent-cyan)]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/10"><MessageCircle className="w-4 h-4" /> Get in Touch</Link>
            <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-sm hover:bg-[#25D366]/20 transition-all duration-300">WhatsApp <ExternalLink className="w-4 h-4" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main HomePage ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <BlogPreview />
      <TestimonialsMarquee />
      <ContactCTA />
    </>
  );
}

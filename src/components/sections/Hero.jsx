function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center overflow-visible">
  <ParticleCanvas />

  <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[var(--bg-primary)]/50 via-transparent to-[var(--bg-primary)]" />
  <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
  <div
    className="absolute inset-0 z-[1] opacity-[0.03]"
    style={{
      backgroundImage:
        'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-16 lg:pb-20 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
      <div className="max-w-3xl order-2 lg:order-1">
        {/* left content */}
      </div>

      <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-50">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl min-h-[420px]">
          <CodeEditorPreview />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowDown, Download, MessageCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { personalInfo } from '../../data/mock';

// function ParticleCanvas() {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const particlesRef = useRef([]);
//   const animFrameRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const handleMouse = (e) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener('mousemove', handleMouse);

//     // Create particles
//     const count = Math.min(120, Math.floor(window.innerWidth / 15));
//     particlesRef.current = Array.from({ length: count }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.4,
//       vy: (Math.random() - 0.5) * 0.4,
//       size: Math.random() * 2 + 0.5,
//       opacity: Math.random() * 0.5 + 0.2,
//     }));

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       const particles = particlesRef.current;
//       const mouse = mouseRef.current;

//       particles.forEach((p, i) => {
//         // Move
//         p.x += p.vx;
//         p.y += p.vy;

//         // Wrap around
//         if (p.x < 0) p.x = canvas.width;
//         if (p.x > canvas.width) p.x = 0;
//         if (p.y < 0) p.y = canvas.height;
//         if (p.y > canvas.height) p.y = 0;

//         // Mouse repulsion
//         const dx = p.x - mouse.x;
//         const dy = p.y - mouse.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < 150) {
//           const force = (150 - dist) / 150;
//           p.x += (dx / dist) * force * 1.5;
//           p.y += (dy / dist) * force * 1.5;
//         }

//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
//         ctx.fill();

//         // Connect nearby particles
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
//           if (d < 120) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - d / 120)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       });

//       animFrameRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('mousemove', handleMouse);
//       if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 z-0"
//       style={{ opacity: 0.7 }}
//     />
//   );
// }

// export default function Hero() {
//   const [typedText, setTypedText] = useState('');
//   const fullText = personalInfo.tagline;

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       if (i <= fullText.length) {
//         setTypedText(fullText.slice(0, i));
//         i++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50);
//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Particle Background */}
//       <ParticleCanvas />

//       {/* Gradient overlays */}
//       <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[var(--bg-primary)]/50 via-transparent to-[var(--bg-primary)]" />
//       <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />

//       {/* Decorative grid */}
//       <div className="absolute inset-0 z-[1] opacity-[0.03]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)`,
//           backgroundSize: '60px 60px',
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
//         <div className="max-w-3xl">
//           {/* Status badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-8"
//           >
//             <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
//             <span className="font-mono text-xs text-[var(--accent-cyan)]">
//               Available for opportunities
//             </span>
//           </motion.div>

//           {/* Name */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] font-mono leading-[1.1] mb-4"
//           >
//             {personalInfo.name}
//             <span className="text-[var(--accent-cyan)]">.</span>
//           </motion.h1>

//           {/* Title */}
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="text-2xl sm:text-3xl font-mono text-[var(--text-secondary)] mb-6"
//           >
//             {personalInfo.title}
//           </motion.h2>

//           {/* Typing tagline */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="mb-8"
//           >
//             <p className="font-mono text-lg text-[var(--accent-cyan)] flex items-center">
//               <span className="text-[var(--text-secondary)] mr-2">&gt;</span>
//               {typedText}
//               <span className="inline-block w-0.5 h-5 bg-[var(--accent-cyan)] ml-1 animate-pulse" />
//             </p>
//           </motion.div>

//           {/* Bio */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.7 }}
//             className="text-[var(--text-secondary)] text-base leading-relaxed mb-10 max-w-xl"
//           >
//             {personalInfo.shortBio}
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.8 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Link
//               to="/projects"
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] font-mono text-sm hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/10"
//             >
//               View Projects
//               <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
//             </Link>
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm hover:border-[var(--accent-cyan)]/30 transition-all duration-300"
//             >
//               <MessageCircle className="w-4 h-4" />
//               Get in Touch
//             </Link>
//             <a
//               href={personalInfo.resumeLink}
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--accent-cyan)] transition-colors duration-300"
//             >
//               <Download className="w-4 h-4" />
//               Resume
//             </a>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 1 }}
//             className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
//           >
//             {personalInfo.stats.map((stat, i) => (
//               <div key={i} className="text-left">
//                 <div className="font-mono text-2xl font-bold text-[var(--text-primary)]">
//                   {stat.value}
//                 </div>
//                 <div className="font-mono text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
//       >
//         <span className="font-mono text-xs text-[var(--text-secondary)]">scroll</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-5 h-8 rounded-full border border-[var(--border-color)] flex items-start justify-center p-1"
//         >
//           <div className="w-1 h-2 rounded-full bg-[var(--accent-cyan)]" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

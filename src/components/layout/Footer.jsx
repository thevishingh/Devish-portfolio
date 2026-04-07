import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Heart, Code2, ArrowUpRight } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/mock';

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      {/* Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[var(--accent-cyan)]" />
              </div>
              <span className="font-mono font-bold text-lg text-[var(--text-primary)]">
                Dev<span className="text-[var(--accent-cyan)]">.vish</span>
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] text-sm transition-colors duration-300 w-fit flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="font-mono text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan)]/5 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] transition-colors" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan)]/5 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] transition-colors" />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan)]/5 transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] transition-colors" />
              </a>
            </div>
            <p className="text-[var(--text-secondary)] text-sm">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-xs font-mono">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[var(--text-secondary)] text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-[var(--accent-cyan)]" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

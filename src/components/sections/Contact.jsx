import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, MapPin, Phone, CheckCircle, AlertCircle, Handshake } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import PageHero from './PageHero';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message too short (min 10 chars)';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');

    // Mock email sending (EmailJS will be integrated with backend)
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section className="min-h-screen">
      <PageHero icon={Handshake} badge="Contact" title="Get in Touch">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/20 mb-6">
            <Handshake className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs text-[var(--accent-cyan)]">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-[var(--text-primary)] mb-4">
            Get in Touch<span className="text-[var(--accent-cyan)]">.</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed mb-6">
            Have a project in mind or want to discuss opportunities? Let&apos;s connect and build something great together.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] font-mono text-sm hover:bg-[var(--accent-cyan)]/20 transition-all duration-300">
              <Mail className="w-4 h-4" />{personalInfo.email}
            </a>
            <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-sm hover:bg-[#25D366]/20 transition-all duration-300">
              <MessageSquare className="w-4 h-4" />WhatsApp
            </a>
          </div>
        </motion.div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="font-mono text-xl font-bold text-[var(--text-primary)] mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              Have a project in mind or want to discuss opportunities? I&apos;m always open to
              new ideas and collaborations. Drop me a message!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">Email</p>
                  <p className="text-sm text-[var(--text-primary)]">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">Location</p>
                  <p className="text-sm text-[var(--text-primary)]">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">Phone</p>
                  <p className="text-sm text-[var(--text-primary)]">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-sm hover:bg-[#25D366]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/10"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <Label
                    htmlFor="name"
                    className="font-mono text-sm text-[var(--text-primary)] mb-2 block"
                  >
                    Name
                  </Label>
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'name'
                        ? 'rgba(0,229,255,0.3)'
                        : errors.name
                        ? 'rgba(239,68,68,0.3)'
                        : 'transparent',
                    }}
                    className="rounded-lg border-2 transition-shadow"
                    style={{
                      boxShadow: focusedField === 'name'
                        ? '0 0 0 3px rgba(0,229,255,0.05)'
                        : 'none',
                    }}
                  >
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      className="bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400 font-mono"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="font-mono text-sm text-[var(--text-primary)] mb-2 block"
                  >
                    Email
                  </Label>
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'email'
                        ? 'rgba(0,229,255,0.3)'
                        : errors.email
                        ? 'rgba(239,68,68,0.3)'
                        : 'transparent',
                    }}
                    className="rounded-lg border-2 transition-shadow"
                    style={{
                      boxShadow: focusedField === 'email'
                        ? '0 0 0 3px rgba(0,229,255,0.05)'
                        : 'none',
                    }}
                  >
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      className="bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400 font-mono"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="message"
                    className="font-mono text-sm text-[var(--text-primary)] mb-2 block"
                  >
                    Message
                  </Label>
                  <motion.div
                    animate={{
                      borderColor: focusedField === 'message'
                        ? 'rgba(0,229,255,0.3)'
                        : errors.message
                        ? 'rgba(239,68,68,0.3)'
                        : 'transparent',
                    }}
                    className="rounded-lg border-2 transition-shadow"
                    style={{
                      boxShadow: focusedField === 'message'
                        ? '0 0 0 3px rgba(0,229,255,0.05)'
                        : 'none',
                    }}
                  >
                    <Textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project..."
                      className="bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 font-mono text-sm resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400 font-mono"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] font-mono text-sm hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/10"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[var(--accent-cyan)]/30 border-t-[var(--accent-cyan)] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success / Error */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30"
                  >
                    <CheckCircle className="w-4 h-4 text-[var(--accent-green)]" />
                    <span className="font-mono text-sm text-[var(--accent-green)]">
                      Message sent successfully! (MOCKED - EmailJS not configured)
                    </span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="font-mono text-sm text-red-400">
                      Failed to send. Please try again.
                    </span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

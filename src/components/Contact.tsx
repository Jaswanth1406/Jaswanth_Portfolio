import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useInView } from '../hooks/useInView';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const NOTIFY_ME_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_NOTIFY_ME_TEMPLATE_ID;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const autoReply = emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY);
    const notifyMe = emailjs.send(SERVICE_ID, NOTIFY_ME_TEMPLATE_ID, emailParams, PUBLIC_KEY);

    Promise.all([autoReply, notifyMe])
      .then(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: '✅ Transmission successful! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitMessage(null), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'error',
          text: '❌ Transmission failed. Please try again.',
        });
      });
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(0, 240, 255, 0.03)',
    border: '1px solid rgba(0, 240, 255, 0.12)',
    color: '#e8e8ff',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.875rem',
  };

  const inputFocusClasses = 'focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/20 focus:bg-neon-cyan/5';

  return (
    <section id="contact" className="py-20 relative" style={{ backgroundColor: '#0a0a1a' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// open_channel()</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            Have a project in mind or want to discuss potential opportunities? Open a channel!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className={`md:col-span-1 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-lg font-heading font-bold text-white mb-6">Contact Info</h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0, 240, 255, 0.1)' }}
                  >
                    <Mail className="text-neon-cyan" size={18} />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-heading text-white">Email</h4>
                    <a
                      href="mailto:jaswanthprasanna68@gmail.com"
                      className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono"
                    >
                      jaswanthprasanna68@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(191, 0, 255, 0.1)' }}
                  >
                    <MapPin className="text-neon-magenta" size={18} />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-heading text-white">Location</h4>
                    <p className="text-sm text-gray-400 font-mono">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(0, 240, 255, 0.08)' }}>
                <h4 className="text-sm font-heading text-white mb-4">Connect</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/Jaswanth1406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#a0a0cc' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 240, 255, 0.4)';
                      (e.currentTarget as HTMLElement).style.color = '#00f0ff';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      (e.currentTarget as HTMLElement).style.color = '#a0a0cc';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaswanth-prasanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#a0a0cc' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 240, 255, 0.4)';
                      (e.currentTarget as HTMLElement).style.color = '#00f0ff';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      (e.currentTarget as HTMLElement).style.color = '#a0a0cc';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`md:col-span-2 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-heading font-bold text-white mb-6">
                <span className="text-neon-green font-mono text-sm mr-2">&gt;</span>
                Send Message
              </h3>

              {submitMessage && (
                <div
                  className="p-4 mb-6 rounded-lg text-sm font-mono"
                  style={{
                    background: submitMessage.type === 'success'
                      ? 'rgba(0, 255, 136, 0.08)'
                      : 'rgba(255, 45, 149, 0.08)',
                    border: `1px solid ${submitMessage.type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 45, 149, 0.2)'}`,
                    color: submitMessage.type === 'success' ? '#00ff88' : '#ff2d95',
                  }}
                >
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-1.5">
                      name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-lg transition-all duration-300 ${inputFocusClasses}`}
                      style={inputStyle}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-1.5">
                      email <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-lg transition-all duration-300 ${inputFocusClasses}`}
                      style={inputStyle}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-500 mb-1.5">
                    subject <span className="text-neon-pink">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 rounded-lg transition-all duration-300 ${inputFocusClasses}`}
                    style={inputStyle}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-1.5">
                    message <span className="text-neon-pink">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2.5 rounded-lg transition-all duration-300 resize-none ${inputFocusClasses}`}
                    style={inputStyle}
                    placeholder="Hello, I'm interested in working with you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-btn cyber-btn-filled rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Transmitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={14} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
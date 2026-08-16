import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../../constants';
import HologramGlobe from '../3d/HologramGlobe';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com/ → add Gmail service → create template
// Then replace the 3 values below with your own IDs:
const EMAILJS_SERVICE_ID  = 'service_d7r36pj';  // e.g. service_abc123
const EMAILJS_TEMPLATE_ID = 'template_ssjdfbo'; // e.g. template_xyz789
const EMAILJS_PUBLIC_KEY  = '3Zhq5JiKddd8TaH3N'; // Public Key from Account → API Keys
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact({ playAudio }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (playAudio) playAudio();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#9d4edd', '#4facfe', '#ffffff']
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try emailing directly at tandelramtej6@gmail.com'
      });
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#00f2fe',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '10px'
          }}>
            <Mail size={14} /> Transmit Message
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '16px' }}>
            Get In <span className="gradient-text-cyan">Touch</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '15px' }}>
            Have a project in mind, an opportunity to discuss, or just want to say hi? Send me a transmission.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: 3D Hologram Globe & Direct Info */}
          <div className="glass-panel" style={{ borderRadius: '24px', padding: '32px 28px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              Global Connectivity
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>
              Available for remote work worldwide and on-site collaborations.
            </p>

            {/* 3D Rotating Globe */}
            <HologramGlobe />

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 242, 254, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={18} color="#00f2fe" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(157, 78, 221, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={18} color="#9d4edd" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Location</div>
                  <span style={{ color: '#f8fafc', fontSize: '14px', fontWeight: 600 }}>
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel" style={{ borderRadius: '24px', padding: '36px 32px' }}>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(6, 8, 19, 0.7)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.25)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(6, 8, 19, 0.7)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.25)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(6, 8, 19, 0.7)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.25)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(6, 8, 19, 0.7)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.25)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Status alerts */}
              {status.error && (
                <div style={{
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid #ef4444',
                  color: '#fca5a5',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <AlertCircle size={16} /> {status.error}
                </div>
              )}

              {status.success && (
                <div style={{
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  color: '#6ee7b7',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={16} /> Message transmitted successfully! I will reply shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="btn-cyber-primary"
                style={{ width: '100%', marginTop: '6px' }}
              >
                {status.loading ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <Send size={18} /> Transmit Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

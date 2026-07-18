import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiLoader } from 'react-icons/fi';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';

const contactInfo = [
  { Icon: FiMail, label: 'Email', value: 'moseskazmi25@gmail.com', href: 'mailto:hello@alexcarter.dev' },
  { Icon: FiPhone, label: 'Phone', value: '+91 7525818905', href: 'tel:+14155550192' },
  { Icon: FiMapPin, label: 'Location', value: 'Lucknow, India', href: null },
];

// Configure these with your EmailJS credentials to enable live sending.
const EMAILJS = {
  service: 'service_xxxxxxx',
  template: 'template_xxxxxxx',
  key: 'xxxxxxxxxxxxxxxxx',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS.key
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const field = (name, label, type = 'text') => (
    <div>
      <label htmlFor={name} className="block text-sm text-muted mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={`w-full px-4 py-3 rounded-xl glass-strong text-sm outline-none focus:ring-2 focus:ring-primary/50 transition ${
          errors[name] ? 'ring-2 ring-red-400/60' : ''
        }`}
      />
      {errors[name] && <p className="text-xs text-red-400 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Have a project in mind or just want to say hi? My inbox is open."
      />
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {contactInfo.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href || undefined}
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon className="text-white" size={20} />
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-wide">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <form onSubmit={submit} className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {field('name', 'Your Name')}
            {field('email', 'Your Email', 'email')}
          </div>
          {field('subject', 'Subject')}
          <div>
            <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl glass-strong text-sm outline-none focus:ring-2 focus:ring-primary/50 transition resize-none ${
                errors.message ? 'ring-2 ring-red-400/60' : ''
              }`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {status === 'loading' ? (
              <><FiLoader className="animate-spin" /> Sending...</>
            ) : (
              <><FiSend /> Send Message</>
            )}
          </button>
          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-sm text-green-400"
              >
                <FiCheckCircle /> Message sent! I'll reply soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-red-400 text-center"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </Section>
  );
}

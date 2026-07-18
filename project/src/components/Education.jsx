import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiBook } from 'react-icons/fi';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education, certifications } from '../data/education.js';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-7"
          >
            <FiBook className="text-accent mb-3" size={24} />
            <h3 className="text-lg font-semibold">{e.degree}</h3>
            <p className="text-muted text-sm mt-1">{e.university}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-muted">
                <FiCalendar size={14} /> {e.duration}
              </span>
              <span className="px-3 py-1 rounded-full glass-strong text-accent text-xs font-medium">
                {e.grade}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuously learning"
        subtitle="Credentials that keep my skills sharp and verified."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((c, i) => (
          <motion.a
            key={c.id}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass rounded-3xl p-6 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <FiAward className="text-white" size={22} />
            </div>
            <h3 className="font-semibold text-sm leading-snug">{c.title}</h3>
            <p className="text-muted text-xs mt-1">{c.organization}</p>
            <p className="text-accent text-xs mt-3">{c.date}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

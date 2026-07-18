import { motion } from 'framer-motion';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experiences } from '../data/experience.js';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="My Professional Journey"
        subtitle="Hands-on experience in full-stack development, building modern web applications, and continuously learning new technologies."
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-highlight md:-translate-x-1/2" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-10 md:mb-12 pl-12 md:pl-0 md:w-1/2 ${
              i % 2 === 0
                ? 'md:pr-12 md:text-right'
                : 'md:ml-auto md:pl-12'
            }`}
          >
            <span
              className="absolute left-4 md:left-auto top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 md:-left-1.5 md:top-2"
              style={
                i % 2 === 0
                  ? { right: '-6px', left: 'auto' }
                  : { left: '-6px' }
              }
            />

            <div className="glass rounded-2xl p-6">
              <span className="text-xs text-accent font-semibold tracking-wide">
                {exp.duration}
              </span>

              <h3 className="text-lg font-semibold mt-1">
                {exp.role}
              </h3>

              <p className="text-sm text-muted">
                {exp.company} • {exp.location}
              </p>

              <ul
                className={`mt-3 space-y-2 text-sm text-muted ${
                  i % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {exp.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-5 flex flex-wrap gap-2 ${
                  i % 2 === 0 ? 'md:justify-end' : ''
                }`}
              >
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full glass-strong text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
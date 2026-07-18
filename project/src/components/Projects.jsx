import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects, projectFilters } from '../data/projects.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="A mix of client engagements, products, and experiments."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10 no-scrollbar">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                : 'glass text-muted hover:text-text'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{p.description}</p>
                <ul className="text-xs text-muted mb-3 space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-full glass-strong text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl glass text-sm hover:scale-105 transition-transform"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm hover:scale-105 transition-transform"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

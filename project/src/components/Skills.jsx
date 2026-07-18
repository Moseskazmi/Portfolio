import { motion } from 'framer-motion';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="A curated toolkit refined over years of shipping production software."
      />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-xl font-semibold">{cat.title}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cat.skills.map((s, si) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.05 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="group glass-strong rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-default"
                  style={{ '--tw-color': s.color }}
                >
                  <s.icon
                    size={32}
                    style={{ color: s.color }}
                    className="transition-transform group-hover:scale-125"
                  />
                  <span className="text-sm font-medium">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

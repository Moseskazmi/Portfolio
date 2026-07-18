import { motion } from 'framer-motion';
import { FiDownload, FiCheckCircle } from 'react-icons/fi';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';

const highlights = [
  'MCA Student (2027)',
  'Full Stack Developer Intern @ Techiguru',
  'Skilled in React.js, Node.js & Express.js',
  'Passionate about building modern web applications',
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Building Modern & Scalable Web Applications"
        subtitle="A passionate Full Stack Developer focused on creating fast, responsive, and user-friendly web experiences."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

          <p className="text-muted leading-relaxed mb-4">
            I'm <strong>Moses Kazmi</strong>, an MCA student (2027) and a Full
            Stack Developer Intern at Techiguru. I enjoy turning ideas into
            modern, responsive, and scalable web applications using the latest
            technologies.
          </p>

          <p className="text-muted leading-relaxed mb-6">
            I specialize in React.js, Node.js, Express.js, MongoDB, MySQL, and
            Python. I'm continuously learning new technologies and love solving
            real-world problems through clean code and intuitive user
            experiences.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:scale-105 transition-transform"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Skills & Highlights
          </h3>

          <ul className="space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 text-accent shrink-0" />
                <span className="text-muted">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { n: '10+', l: 'Projects' },
              { n: '8+', l: 'Technologies' },
              { n: '100%', l: 'Learning' },
            ].map((s) => (
              <div
                key={s.l}
                className="glass-strong rounded-2xl py-4"
              >
                <div className="text-2xl font-bold gradient-text">
                  {s.n}
                </div>
                <div className="text-xs text-muted mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
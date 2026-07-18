import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16 text-center"
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-muted text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

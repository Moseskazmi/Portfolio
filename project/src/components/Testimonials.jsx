import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';

import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const next = useCallback(() => setI((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setI((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => setImageFailed(false), [i]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[i];
  const initials = t.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="Testimonials" title="What people say" />
      <div className="max-w-3xl mx-auto">
        <div className="relative glass-strong rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center gap-1 mb-6 text-accent">
            {Array.from({ length: 5 }).map((_, s) => (
              <FiStar key={s} fill="currentColor" />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg md:text-xl leading-relaxed italic text-text/90">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                {imageFailed ? (
                  <div
                    aria-label={`${t.name} avatar`}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/70 text-sm font-semibold text-white ring-2 ring-accent/40"
                  >
                    {initials}
                  </div>
                ) : (
                  <img
                    src={t.image}
                    alt={`${t.name} avatar`}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                    className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/40"
                  />
                )}
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.position}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              aria-label={`Go to testimonial ${d + 1}`}
              className={`h-2 rounded-full transition-all ${
                d === i ? 'w-8 bg-accent' : 'w-2 bg-muted/40'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

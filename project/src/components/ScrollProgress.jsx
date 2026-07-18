import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Top scroll-progress bar + floating scroll-to-top button.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-primary via-accent to-highlight"
        style={{ scaleX }}
      />
    </>
  );
}

export function ScrollToTopButton() {
  useEffect(() => {
    const btn = document.getElementById('scroll-top');
    const onScroll = () => {
      if (!btn) return;
      btn.style.opacity = window.scrollY > 600 ? '1' : '0';
      btn.style.pointerEvents = window.scrollY > 600 ? 'auto' : 'none';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-strong shadow-glow flex items-center justify-center transition-opacity duration-300 hover:scale-110"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

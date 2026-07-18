import { useEffect, useState } from 'react';

// Tracks scroll progress (0-1) and active section id for nav highlighting.
export function useScrollSpy(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return active;
}

// Returns true once the document has loaded.
export function useLoaded() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return loaded;
}

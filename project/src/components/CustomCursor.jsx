import { useEffect, useState } from 'react';

// Desktop-only custom cursor: a dot that follows instantly and a ring that trails.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setEnabled(true);
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let rx = 0, ry = 0, mx = 0, my = 0;

    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot) dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const grow = () => ring && (ring.style.width = ring.style.height = '56px');
    const shrink = () => ring && (ring.style.width = ring.style.height = '36px');

    let raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div id="cursor-dot" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}

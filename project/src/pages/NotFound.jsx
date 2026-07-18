import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-8xl md:text-9xl font-bold gradient-text"
      >
        404
      </motion.h1>
      <p className="mt-4 text-xl text-muted">This page wandered off the grid.</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:scale-105 transition-transform"
      >
        Back home
      </Link>
    </div>
  );
}

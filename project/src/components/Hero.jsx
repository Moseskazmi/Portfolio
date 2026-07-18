import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from "../assets/image.png";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiArrowDown,
  FiDownload,
} from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'Building Modern Web Apps',
  'Tech Enthusiast',
  'Problem Solver',
  'Open Source Learner',
  'Fast Learner',
];

function useTyping(words, typeSpeed = 90, deleteSpeed = 40, pause = 1400) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let timer;

    if (!del && text === word) {
      timer = setTimeout(() => setDel(true), pause);
    } else if (del && text === '') {
      setDel(false);
      setI((prev) => prev + 1);
    } else {
      timer = setTimeout(() => {
        setText(
          del
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        );
      }, del ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, del, i, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 pb-16"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-40 h-40 md:w-48 md:h-48 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-highlight"
        >
          <img
            src={profileImage}
            alt="Moses Kazmi"
            loading="lazy"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        {/* Intro */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block text-sm tracking-[0.3em] uppercase text-accent mb-4"
        >
          Hello, I'm Moses Kazmi
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          I'm <span className="gradient-text">{typed}</span>
          <span className="inline-block ml-1 text-primary animate-pulse">|</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-muted text-base md:text-lg leading-relaxed"
        >
          I build modern, responsive, and scalable web applications using
          React.js, Node.js, Express.js, MongoDB, and MySQL. Passionate about
          clean code, intuitive user experiences, and solving real-world
          problems through technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="contact" smooth duration={500} offset={-80}>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition-transform shadow-lg">
              Hire Me
            </button>
          </Link>

          <a
            href="/resume.pdf"
            download="Moses_Kazmi_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-5"
        >
          {[
            {
              Icon: FiGithub,
              href: 'https://github.com/Moseskazmi',
              label: 'GitHub',
            },
            {
              Icon: FiLinkedin,
              href: 'https://www.linkedin.com/in/moseskazmifullstackdev/',
              label: 'LinkedIn',
            },
            {
              Icon: FiMail,
              href: 'mailto:moseskazmi25@gmail.com',
              label: 'Email',
            },
            {
              Icon: FiInstagram,
              href: 'https://www.instagram.com/moseskazmi__/',
              label: 'Instagram',
            },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:scale-110 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase">
          Scroll Down
        </span>
        <FiArrowDown />
      </motion.div>
    </section>
  );
}
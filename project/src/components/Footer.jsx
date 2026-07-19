import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiHeart } from 'react-icons/fi';
import VisitorCounter from "./VisitorCounter";
const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

const socials = [
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
    href: 'mailto:your-email@example.com',
    label: 'Email',
  },
  {
    Icon: FiInstagram,
    href: 'https://www.instagram.com/moseskazmi__/',
    label: 'Instagram',
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 md:px-10 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div>
          <Link to="home" smooth duration={500} className="cursor-pointer text-xl font-bold">
            <span className="gradient-text">Moses</span>
            <span className="text-text">.dev</span>
          </Link>
          <p className="text-sm text-muted mt-2 max-w-xs">
           Passionate Full Stack Developer turning ideas into powerful digital experiences.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-80}
              className="text-sm text-muted hover:text-text cursor-pointer transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex md:justify-end gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-text hover:scale-110 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

     <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-sm text-muted">
  
  {/* Left */}
  <div className="text-center md:text-left">
    © {new Date().getFullYear()} Moses Kazmi. All rights reserved.
  </div>

  {/* Center */}
  <div className="flex justify-center">
    <VisitorCounter />
  </div>


</div>
    </footer>
  );
}

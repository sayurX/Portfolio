import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'work', href: '/work' },
  { label: 'about me', href: '/about' },
  { label: 'start a project', href: '/contact', isCta: true },
];

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          sayura thejan
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`navbar__link ${link.isCta ? 'navbar__link--cta' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

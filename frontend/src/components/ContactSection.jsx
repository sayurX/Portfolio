import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socials = [
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <section id="contact" className="contact" ref={ref}>
        <div className="contact__inner">
          <motion.p
            className="contact__label"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in touch
          </motion.p>

          <motion.h2
            className="contact__heading"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            let&apos;s start a project together
          </motion.h2>

          <motion.p
            className="contact__text"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Have an idea or a brand that needs a fresh look? I&apos;d love to hear
            about it. Drop me a line and let&apos;s make something great together.
          </motion.p>

          <motion.a
            href="mailto:hello@mikebennet.com"
            className="contact__btn"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          <motion.div
            className="contact__socials"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__text">
          © {new Date().getFullYear()} mike bennet. all rights reserved.
        </p>
        <button
          className="footer__back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top ↑
        </button>
      </footer>
    </>
  );
}

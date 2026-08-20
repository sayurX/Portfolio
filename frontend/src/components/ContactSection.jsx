import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <section id="contact" className="contact container" ref={ref}>
        <motion.div
          className="contact__big-text-wrap"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact__big-text">get in</span>
          <div className="contact__big-image">
            <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?w=400&h=300&fit=crop&q=80" alt="tennis ball" />
          </div>
          <span className="contact__big-text">touch</span>
        </motion.div>
      </section>

      <footer className="footer container">
        <div className="footer__left">
          <p>email: hello@sayurathejan.com</p>
          <p>based in: colombo, sri lanka</p>
          <p>available for: freelance projects & full-time</p>
        </div>
        <div className="footer__right">
          <div className="footer__col">
            <p className="footer__label">pages</p>
            <a href="#hero">home</a>
            <a href="#about">about</a>
            <a href="#work">work</a>
          </div>
          <div className="footer__col">
            <p className="footer__label">socials</p>
            <a href="#">github</a>
            <a href="#">linkedin</a>
            <a href="#">x(twitter)</a>
          </div>
        </div>
      </footer>
    </>
  );
}

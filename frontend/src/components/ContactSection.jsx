import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import getTouchImage from '../assets/gettouch.png';

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
            <img src={getTouchImage} alt="Get in touch" />
          </div>
          <span className="contact__big-text">touch</span>
        </motion.div>
      </section>
    </>
  );
}

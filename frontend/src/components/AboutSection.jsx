import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about container" ref={ref}>
      <motion.h2
        className="about__heading"
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        i'm Sayura Thejan, a full stack developer. I work with startups and businesses who want robust, scalable, and high-performance applications that deliver exceptional user experiences.
      </motion.h2>

      <div className="about__grid">
        <motion.div
          className="about__image-wrapper"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80"
            alt="Portrait"
            className="about__image"
          />
        </motion.div>

        <motion.div
          className="about__col"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about__label">why work with me</p>
          <p className="about__text">
            i believe the best applications come from deep technical understanding and collaboration. when we work together, you're getting a strategic engineering partner who takes time to understand your architecture, user needs, and business goals.
          </p>
          <button className="work-btn" style={{ marginTop: '2rem' }}>download resume</button>
        </motion.div>

        <motion.div
          className="about__col"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about__label">when i'm not coding</p>
          <p className="about__text">
            you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee. i'm always looking for inspiration in unexpected places to solve complex engineering challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

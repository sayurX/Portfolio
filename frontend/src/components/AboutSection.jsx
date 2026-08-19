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
        i'm Mike Bennet, a brand designer based in Portland, Oregon. I work with small business owners and startup founders who want a brand identity that positions them as the premium choice in their market.
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
            i believe the best brands come from true collaboration. when we work together, you're not just getting a designer, you're getting a strategic partner who takes time to understand your business, your customers, and your goals.
          </p>
          <button className="work-btn" style={{ marginTop: '2rem' }}>download resume</button>
        </motion.div>

        <motion.div
          className="about__col"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about__label">when i'm not designing</p>
          <p className="about__text">
            you'll find me exploring portland's coffee scene, hiking around mt. hood, or shooting film photography. i'm always looking for inspiration in unexpected places, whether that's vintage typography at a flea market or color combinations in nature.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

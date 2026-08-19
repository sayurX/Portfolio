import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  'Brand Identity',
  'Web Design',
  'Packaging',
  'Art Direction',
  'Typography',
  'Strategy',
  'UI/UX',
  'Motion Design',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__inner">
        <div>
          <motion.p
            className="about__label"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            About me
          </motion.p>

          <motion.h2
            className="about__heading"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            I help brands find their voice and stand out in a crowded market.
          </motion.h2>

          <motion.p
            className="about__text"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            With over 8 years of experience in brand design and creative direction,
            I&apos;ve worked with startups and established companies to create memorable
            visual identities that drive real business results.
          </motion.p>

          <motion.p
            className="about__text"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            My approach combines strategic thinking with a keen eye for aesthetics,
            ensuring every project not only looks beautiful but also serves a clear purpose.
          </motion.p>

          <motion.div
            className="about__skills"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {skills.map((skill) => (
              <span key={skill} className="about__skill-tag">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__image-wrapper"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80"
            alt="Portrait"
            className="about__image"
          />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <MatrixRain />

      {/* Gradient overlay to fade the matrix rain towards the bottom/edges */}
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <motion.h1
          className="hero__name"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          sayura thejan
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          i build scalable web applications and intuitive user interfaces that help businesses grow and engage their audience.
        </motion.p>
      </div>
    </section>
  );
}

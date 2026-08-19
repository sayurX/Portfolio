import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <article className="project" ref={ref}>
      <div className="project__header">
        <motion.h2
          className="project__title"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.title}
        </motion.h2>
        <motion.p
          className="project__category"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.category}
        </motion.p>
      </div>

      <div className="project__gallery">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={project.images[0]}
            alt={`${project.title} — main`}
            className="project__image-hero"
          />
        </motion.div>

        {project.images.length > 1 && (
          <motion.div
            className="project__image-row"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.images.slice(1, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} — detail ${i + 1}`}
                className="project__image-sm"
              />
            ))}
          </motion.div>
        )}
      </div>

      <div className="project__divider" />
    </article>
  );
}

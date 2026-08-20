import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/pf.jpeg';

const experience = [
  {
    role: 'Software Engineer',
    company: 'ideatech (Pvt) Ltd',
    period: '2025 — Present',
    description: 'Developing robust full-stack web applications, designing database architectures, and integrating intelligent data solutions to optimize software systems.',
  }
];

const skills = [
  'React', 'Node.js', 'Express', 'Python',
  'SQL', 'PostgreSQL', 'MongoDB', 'JavaScript',
  'Data Science', 'Machine Learning', 'Data Analysis', 'Pandas & NumPy',
  'Git', 'REST APIs', 'Docker', 'Tailwind CSS',
];

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '10+', label: 'Happy Clients' },
  { number: '5+', label: 'Open Source Contributions' },
];

export default function AboutSection({ simple = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const expRef = useRef(null);
  const isExpInView = useInView(expRef, { once: true, margin: '-80px' });

  const skillRef = useRef(null);
  const isSkillInView = useInView(skillRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="about container" ref={ref}>
      {/* — Intro heading — */}
      <motion.h2
        className="about__heading"
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        i'm Sayura Thejan, a full stack developer. I work with startups and businesses who want robust, scalable, and high-performance applications that deliver exceptional user experiences.
      </motion.h2>

      {/* — Top grid: photo + blurbs — */}
      <div className="about__grid">
        <motion.div
          className="about__image-wrapper"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={profileImage}
            alt="Sayura Thejan"
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

      {!simple && (
        <>
          {/* — Stats bar — */}
          <motion.div
            className="about__stats"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* — Work experience timeline — */}
          <div className="about__experience" ref={expRef}>
            <motion.h3
              className="about__section-title"
              initial={{ y: 30, opacity: 0 }}
              animate={isExpInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              work experience
            </motion.h3>

            <div className="about__timeline">
              {experience.map((job, i) => (
                <motion.div
                  className="about__timeline-item"
                  key={job.company}
                  initial={{ y: 40, opacity: 0 }}
                  animate={isExpInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="about__timeline-dot" />
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <div>
                        <h4 className="about__timeline-role">{job.role}</h4>
                        <p className="about__timeline-company">{job.company}</p>
                      </div>
                      <span className="about__timeline-period">{job.period}</span>
                    </div>
                    <p className="about__timeline-desc">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* — Skills grid — */}
          <div className="about__skills" ref={skillRef}>
            <motion.h3
              className="about__section-title"
              initial={{ y: 30, opacity: 0 }}
              animate={isSkillInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              technologies & tools
            </motion.h3>

            <div className="about__skills-grid">
              {skills.map((skill, i) => (
                <motion.span
                  className="about__skill-tag"
                  key={skill}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isSkillInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.03 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* — Education — */}
          <motion.div
            className="about__education"
            initial={{ y: 40, opacity: 0 }}
            animate={isSkillInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="about__section-title">education</h3>
        <div className="about__edu-card">
          <div className="about__edu-header">
            <div>
              <h4 className="about__edu-degree">BSc in Information Technology</h4>
              <p className="about__edu-school">Specializing in Data Science</p>
            </div>
            <span className="about__timeline-period">2023 — Present</span>
          </div>
          <p className="about__timeline-desc">
            Acquiring expertise in software engineering, database management, statistical analysis, data structures, and machine learning models.
          </p>
        </div>
          </motion.div>
        </>
      )}
    </section>
  );
}

import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function WorkSection() {
  const { cursorHoverProject, cursorReset } = useCursor();

  return (
    <section id="work" className="work-section container">
      <div className="work-grid">
        {/* Left Project */}
        <div 
          className="work-item work-item--large"
          onMouseEnter={() => cursorHoverProject('Sayura Thejan')}
          onMouseLeave={cursorReset}
        >
          <div className="work-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=1600&fit=crop&q=80" 
              alt="Code Interface" 
              className="work-image"
            />
          </div>
        </div>

        {/* Right Project */}
        <div className="work-item work-item--small">
          <div 
            className="work-image-wrapper"
            onMouseEnter={() => cursorHoverProject('Sayura Thejan')}
            onMouseLeave={cursorReset}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80" 
              alt="Data Dashboard" 
              className="work-image"
            />
          </div>
          
          <div className="work-meta">
            <div>
              <h3 className="work-title">saas dashboard</h3>
              <p className="work-category">full stack web application</p>
            </div>
            <button className="work-btn">view github</button>
          </div>
        </div>
      </div>
    </section>
  );
}

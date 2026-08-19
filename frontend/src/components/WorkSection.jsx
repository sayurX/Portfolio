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
          onMouseEnter={() => cursorHoverProject('Mike Bennet')}
          onMouseLeave={cursorReset}
        >
          <div className="work-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=1200&h=1600&fit=crop&q=80" 
              alt="Call My Barista" 
              className="work-image"
            />
          </div>
        </div>

        {/* Right Project */}
        <div className="work-item work-item--small">
          <div 
            className="work-image-wrapper"
            onMouseEnter={() => cursorHoverProject('Mike Bennet')}
            onMouseLeave={cursorReset}
          >
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop&q=80" 
              alt="lemon drop" 
              className="work-image"
            />
          </div>
          
          <div className="work-meta">
            <div>
              <h3 className="work-title">lemon drop</h3>
              <p className="work-category">brand identity & positioning</p>
            </div>
            <button className="work-btn">use for free</button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import gw1 from '../assets/GW1.png';
import bsImg from '../assets/BS.png';

export default function WorkSection() {
  const { cursorHoverProject, cursorReset } = useCursor();

  return (
    <section id="work" className="work-section container">
      <div className="work-grid">
        {/* Left Project - GreenWaves */}
        <div className="work-item work-item--large">
          <a
            href="https://greenwaves.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-image-wrapper"
            onMouseEnter={() => cursorHoverProject('GreenWaves')}
            onMouseLeave={cursorReset}
          >
            <img
              src={gw1}
              alt="GreenWaves Platform"
              className="work-image"
            />
          </a>

          <div className="work-meta">
            <div>
              <h3 className="work-title">GreenWaves</h3>
              <p className="work-category">Sustainable Tech Platform</p>
            </div>
            <a
              href="https://greenwaves.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              visit site
            </a>
          </div>
        </div>

        {/* Right Project - Boat Safari */}
        <div className="work-item work-item--small">
          <a
            href="https://boat-safari-berl.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="work-image-wrapper"
            onMouseEnter={() => cursorHoverProject('Boat Safari')}
            onMouseLeave={cursorReset}
          >
            <img
              src={bsImg}
              alt="Boat Safari"
              className="work-image"
            />
          </a>

          <div className="work-meta">
            <div>
              <h3 className="work-title">Boat Safari</h3>
              <p className="work-category">Safari Booking & Adventure</p>
            </div>
            <a
              href="https://boat-safari-berl.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              visit site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

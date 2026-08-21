import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import getTouchImage from '../assets/gettouch.png';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert("Thanks for reaching out! I'll get back to you soon.");
      } else {
        alert(data.error || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Unable to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="contact__content-grid">
          <motion.div 
            className="contact__info"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="contact__subtitle">let's build something great together.</h3>
            <p className="contact__desc">
              Whether you have a specific project in mind or just want to chat about potential opportunities, I'm always open to new connections. Drop me a message and let's explore how we can collaborate.
            </p>
            
            <div className="contact__details">
              <div className="contact__detail-item">
                <span className="contact__detail-label">email</span>
                <a href="mailto:jaksayura@gmail.com" className="contact__detail-value">jaksayura@gmail.com</a>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-label">location</span>
                <span className="contact__detail-value">Colombo, Sri Lanka</span>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-label">socials</span>
                <div className="contact__social-links">
                  <a href="https://www.linkedin.com/in/sayura-thejan" target="_blank" rel="noreferrer" className="contact__social-link">LinkedIn</a>
                  <a href="https://github.com/sayurX" target="_blank" rel="noreferrer" className="contact__social-link">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact__form-wrapper"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">what's your name?</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form__input" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__label">what's your email?</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form__input" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form__group">
                <label htmlFor="message" className="form__label">tell me about your project</label>
                <textarea 
                  id="message" 
                  className="form__input form__textarea" 
                  placeholder="Hello Sayura, I'd like to talk about..." 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="form__submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'sending...' : 'send message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

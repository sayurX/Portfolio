import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__left">
        <p>email: <a href="mailto:jaksayura@gmail.com" style={{ textDecoration: 'underline' }}>jaksayura@gmail.com</a></p>
        <p>based in: colombo, sri lanka</p>
        <p>available for: freelance projects & full-time</p>
      </div>
      <div className="footer__right">
        <div className="footer__col">
          <p className="footer__label">pages</p>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/work">work</Link>
        </div>
        <div className="footer__col">
          <p className="footer__label">socials</p>
          <a href="https://github.com/sayurX" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/sayura-thejan" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </div>
    </footer>
  );
}

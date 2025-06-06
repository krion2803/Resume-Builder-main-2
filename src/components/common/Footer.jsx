import React from "react";
import "../css/footer.css";
import logo from '../image/logox.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
    {/* 🔹 Top Section */}
    <div className="footer-top">
      <div className="footer-column footer-brand">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          Professional resume builder helping job seekers create standout
          resumes that get noticed by employers and pass ATS systems.
        </p>
        <div className="footer-icons">
          <a href="#" className="footer-icon-link">🌐</a>
          <a href="#" className="footer-icon-link">🐦</a>
          <a href="#" className="footer-icon-link">📷</a>
          <a href="#" className="footer-icon-link">🎥</a>
        </div>
      </div>

      <div className="footer-column footer-links">
        <h3 className="footer-heading">Quick Links</h3>
        <ul className="footer-list">
          <li className="footer-item"><Link to="/footer-templates" className="footer-link">Resume Templates</Link></li>
          <li className="footer-item"><Link to="/footer-price" className="footer-link">Pricing</Link></li>
          <li className="footer-item"><a href="#" className="footer-link">Resume Examples</a></li>
          <li className="footer-item"><a href="#" className="footer-link">FAQ</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-column footer-resources">
        <h3 className="footer-heading">Resources</h3>
        <ul className="footer-list">
          <li className="footer-item"><a href="#" className="footer-link">Resume Writing Guide</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Cover Letter Tips</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Interview Preparation</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Job Search Strategies</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Career Development</a></li>
          <li className="footer-item"><a href="#" className="footer-link">ATS Optimization</a></li>
        </ul>
      </div>

      <div className="footer-column footer-contact">
        <h3 className="footer-heading">Contact Us</h3>
        <p className="footer-text">📍 Bapunagar, Ahmedabad</p>
        <p className="footer-text">📞 +91 8866208079</p>
        <p className="footer-text">✉️ krish886620@gmail.com</p>
        
      </div>
    </div>

    {/* 🔹 Separator Line */}
    <div className="footer-separator"></div>

    {/* 🔹 Middle Section */}
    <div className="footer-middle">
      <div className="footer-newsletter-content">
        <div className="footer-newsletter-text-wrapper">
          <p className="footer-newsletter-text">Subscribe to Our Newsletter</p>
          <p className="footer-newsletter-subtext">
            Get weekly career tips, job search strategies, and resume trends
          </p>
        </div>
        <div className="footer-newsletter">
          <input type="email" placeholder="Your email address" className="footer-input" />
          <button className="footer-button">Subscribe</button>
        </div>
      </div>
    </div>

    {/* 🔹 Separator Line */}
    <div className="footer-separator"></div>

    {/* 🔹 Bottom Section */}
    <div className="footer-bottom">
      <p className="footer-copyright">© 2025 ResumeBuilder. All rights reserved.</p>
      <div className="footer-policy-links">
        <Link to="/terms" className="footer-policy-link">Terms of Service</Link>
        <Link to="/privacy" className="footer-policy-link">Privacy Policy</Link>
        <Link to="/cookie" className="footer-policy-link">Cookie Policy</Link>
        <Link to="/accessibility" className="footer-policy-link">Accessibility</Link>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
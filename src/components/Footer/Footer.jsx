import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/Icon_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Tagline */}
        <div className="footer-section logo-section">
          <img
            src={logo}
            alt="Westampton Solutions Logo"
            className="footer-logo"
          />
          <h3>WESTAMPTON SOLUTIONS LIMITED</h3>
          <p className="tagline">Empowering Digital Transformation</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/our-approach">Our Approach</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="/services#dfs">Digital Financial Services</a>
            </li>
            <li>
              <a href="/services#risk-advisory">IT & Cybersecurity Risk</a>
            </li>
            <li>
              <a href="/services#market-entry">Market Entry Advisory</a>
            </li>
            <li>
              <a href="/services#staff-augmentation">Staff Augmentation</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            <FaEnvelope /> info@westampton.co.ke
          </p>
          <p>
            <FaPhoneAlt /> +254 700 123 456
          </p>
          <p>
            <FaMapMarkerAlt /> Nairobi, Kenya
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Westampton Solutions Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiClock,
  FiCheck,
} from "react-icons/fi";


export default function HomiqFooter() {
  const [localTime, setLocalTime] = useState("");
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setLocalTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (inquiryText.trim()) {
      setInquirySent(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="homiq-footer">
      <div className="footer-container">
        {/* Top Floating Row */}
        <div className="footer-top-strip">
          <div className="footer-studio-badge">
            <span className="live-dot"></span>
            <span className="studio-city">SURAT FLAGSHIP ATELIER</span>
            <span className="studio-time">
              <FiClock /> {localTime || "10:15 AM IST"}
            </span>
          </div>

          <button
            type="button"
            className="back-to-crest-btn"
            onClick={scrollToTop}
            aria-label="Return to top"
          >
            <span>Back to Summit</span>
            <FiArrowUp />
          </button>
        </div>

        {/* Hero Interactive Lead Box */}
        <div className="footer-lead-bar">
          <div className="lead-text">
            <span className="lead-eyebrow">COMMISSION A SANCTUARY</span>
            <h3>Have an architectural floor plan ready for refinement?</h3>
            <p>
              Connect with our master spatial sculptors to calibrate stone,
              natural timber, and bespoke furnishings.
            </p>
          </div>

          <div className="lead-action-box">
            {inquirySent ? (
              <div className="lead-success-msg">
                <FiCheck />
                <span>Inquiry logged. Our principal architect will contact you.</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="lead-quick-form">
                <input
                  type="text"
                  required
                  placeholder="Your phone number or email"
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                />
                <button type="submit">
                  <span>Start Conversation</span>
                  <FiArrowUpRight />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Multi-Column Section */}
        <div className="footer-main-grid">
          {/* Brand & Studio Location */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">HOMIQ</div>
            <span className="footer-brand-sub">ARCHITECTURAL LIVING</span>
            <p className="brand-statement">
              Designing tactile living environments with monolithic stone,
              flamed timber joinery, and calibrated architectural acoustics.
            </p>

            <div className="studio-address-block">
              <div className="address-item">
                <FiMapPin />
                <span>VIP Road, Vesu, Surat, Gujarat 395007</span>
              </div>
              <div className="address-item">
                <FiPhone />
                <span>+91 98250 44200 (Atelier Desk)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Curation */}
          <div className="footer-col">
            <span className="col-heading">INTERIOR SPACES</span>
            <ul className="footer-links">
              <li><a href="#living">Monolithic Living Room</a></li>
              <li><a href="#dining">Travertine Dining Pavilion</a></li>
              <li><a href="#bedroom">Acoustic Rest Chamber</a></li>
              <li><a href="#study">Executive Timber Study</a></li>
              <li><a href="#materials">Tactile Geological Vault</a></li>
            </ul>
          </div>

          {/* Column 3: The Atelier */}
          <div className="footer-col">
            <span className="col-heading">THE ATELIER</span>
            <ul className="footer-links">
              <li><a href="#philosophy">Spatial Philosophy</a></li>
              <li><a href="#cad">CAD Blueprint Engine</a></li>
              <li><a href="#warranty">10-Year Craft Assurance</a></li>
              <li><a href="#gazette">The Homiq Gazette</a></li>
              <li><a href="#careers">Atelier Apprenticeship</a></li>
            </ul>
          </div>

          {/* Column 4: Private Correspondence */}
          <div className="footer-col contact-col">
            <span className="col-heading">DIRECT DIALOGUE</span>
            <p className="inquire-line">
              For luxury private residential inquiries & architectural partnerships:
            </p>
            <a href="mailto:concierge@homiq.living" className="footer-mail-pill">
              <span>concierge@homiq.living</span>
              <FiArrowUpRight />
            </a>

            <div className="social-capsules">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FiInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Large Monolith Watermark */}
        {/* ૧. ફક્ત નાની સ્ક્રીન (Small Device) માટે - ફૂલ ડાર્ક */}
        <div
          className="footer-watermark-row d-block d-md-none"
          aria-hidden="true"
          style={{ opacity: 1 }}
        >
          <span style={{ color: "#141311", opacity: 0.55, fontWeight: 700 }}>
            HOMIQ
          </span>
        </div>

        {/* ૨. ફક્ત મોટી સ્ક્રીન (Big Device) માટે - જેવું પહેલા આછું હતું એવું જ */}
        <div
          className="footer-watermark-row d-none d-md-block"
          aria-hidden="true"
        >
          <span>HOMIQ</span>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 HOMIQ LIVING ATELIER. CRAFTED WITH ARCHITECTURAL DISCIPLINE.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Protocol</a>
            <a href="#cad-terms">Blueprint Licensing</a>
            <a href="#structural">Certified Specifications</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
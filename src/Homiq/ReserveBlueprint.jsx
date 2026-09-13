import React, { useState } from 'react';
import { 
  FiArrowLeft, 
  FiCheckCircle, 
  FiCalendar, 
  FiUser, 
  FiPhone, 
  FiMail, 
  FiShield, 
  FiCompass,
  FiSun,
  FiMoon
} from 'react-icons/fi';


export default function ReserveBlueprint({ zoneData, onBack }) {
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains('dark-theme')
  );

  const confirmedData = zoneData || {
    zoneName: 'Monolithic Great Room',
    zoneCode: 'ZONE 01',
    sqFt: 650,
    estimate: '1,43,000',
    finish: 'Unhoned Roman Travertine + Flamed Oak',
    acoustic: '42 dB (Studio Dampened)'
  };

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    siteCity: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    document.body.classList.toggle('dark-theme', nextMode);
  };

  return (
    <section className="reserve-page-section">
      <div className="reserve-container">
        
        {/* Top Control Bar */}
        <div className="reserve-top-nav">
          <button type="button" className="reserve-back-btn" onClick={onBack}>
            <FiArrowLeft />
            <span>Back to Spatial Studio</span>
          </button>

       
        </div>

        <div className="reserve-grid">
          
          {/* Left: Selected Blueprint Specs Summary */}
          <div className="reserve-summary-card">
            <div className="summary-badge">
              <FiCompass />
              <span>CONFIRMED SPECIFICATION</span>
            </div>

            <span className="summary-code">{confirmedData.zoneCode}</span>
            <h2 className="summary-title">{confirmedData.zoneName}</h2>

            <div className="summary-data-table">
              <div className="summary-row">
                <span>Calibrated Dimension:</span>
                <strong>{confirmedData.sqFt} SQ. FT</strong>
              </div>
              <div className="summary-row">
                <span>Material Formulation:</span>
                <strong>{confirmedData.finish}</strong>
              </div>
              <div className="summary-row">
                <span>Acoustic Isolation:</span>
                <strong>{confirmedData.acoustic}</strong>
              </div>
            </div>

            <div className="summary-price-box">
              <span className="price-tag-label">ARCHITECTURAL BUDGET ESTIMATE</span>
              <h3 className="price-tag-val">₹{confirmedData.estimate}*</h3>
              <small>Includes structural execution, material cutting & on-site acoustic isolation</small>
            </div>
          </div>

          {/* Right: Reservation Consultation Form */}
          <div className="reserve-form-card">
            {submitted ? (
              <div className="reserve-success-state">
                <FiCheckCircle className="success-icon" />
                <h3>Blueprint Reserved</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. An architectural consultant has been assigned to your <strong>{confirmedData.zoneCode}</strong> dossier. We will reach out within 24 hours.
                </p>
                <button type="button" className="return-home-btn" onClick={onBack}>
                  Return to Homepage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reserve-form">
                <div className="form-header">
                  <h3>Consultation Dossier</h3>
                  <p>Provide your details to receive the certified architectural CAD prints and structural schematics.</p>
                </div>

                <div className="input-group-custom">
                  <label><FiUser /> Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Aarav Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="input-row-split">
                  <div className="input-group-custom">
                    <label><FiPhone /> Contact Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="input-group-custom">
                    <label><FiMail /> Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="patel@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-row-split">
                  <div className="input-group-custom">
                    <label><FiCalendar /> Preferred Review Date</label>
                    <input 
                      type="date" 
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div className="input-group-custom">
                    <label>Project Location / City</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Surat, Gujarat"
                      value={formData.siteCity}
                      onChange={(e) => setFormData({ ...formData, siteCity: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="confirm-reserve-btn">
                  <span>Confirm Dossier & Request CAD</span>
                  <FiShield />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
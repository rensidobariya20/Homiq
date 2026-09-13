import React, { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiHome, FiAward, FiTruck, FiPenTool } from 'react-icons/fi';



const STATS = [
  {
    icon: <FiHome />,
    value: '450+',
    label: 'Homes Curated',
    detail: 'Across Gujarat & Mumbai'
  },
  {
    icon: <FiPenTool />,
    value: '100%',
    label: 'Solid Natural Timber',
    detail: 'Teak, Oak & Walnut joinery'
  },
  {
    icon: <FiAward />,
    value: '10 Yrs',
    label: 'Craft Warranty',
    detail: 'On structural frames & stone'
  },
  {
    icon: <FiTruck />,
    value: 'White Glove',
    label: 'Site Installation',
    detail: 'Delivered & assembled by artisans'
  }
];

export default function SpatialConcierge() {
  const [requested, setRequested] = useState(false);
  const [email, setEmail] = useState('');

  const handleRequest = (e) => {
    e.preventDefault();
    if (email) setRequested(true);
  };

  return (
    <section className="manifesto-section">
      <div className="manifesto-container">
        
        {/* Main Interior Statement */}
        <div className="manifesto-statement-box">
          <div className="manifesto-kicker">HOMIQ INTERIOR LIVING</div>
          <blockquote className="manifesto-quote">
            "We do not merely fill rooms with furniture; we create warm, timeless spaces where life unfolds gracefully."
          </blockquote>
          <span className="manifesto-author">— Homiq Philosophy of Warm Minimal Living</span>
        </div>

        {/* 4 Pure Home Interior Cards */}
        <div className="manifesto-stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Home Lookbook Action Bar */}
        <div className="manifesto-action-bar">
          <div className="action-text">
            <h4>Download the 2026 Interior Lookbook</h4>
            <p>Get our complete 64-page furniture catalog featuring bespoke dining, lounge seating, and curated finishes.</p>
          </div>

          <div className="action-interaction">
            {requested ? (
              <div className="action-success">
                <FiCheck />
                <span>Lookbook catalog sent to your email.</span>
              </div>
            ) : (
              <form onSubmit={handleRequest} className="monograph-form">
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                  <span>Get Catalog</span>
                  <FiArrowUpRight />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { FiCheck, FiMousePointer, FiMaximize2, FiDroplet } from 'react-icons/fi';

import creamImg from './Images/cream.png';
import greenImg from './Images/green.png';
import yellowImg from './Images/yellow.png';
import orangeImg from './Images/orange.png';
import greayImg from './Images/greay.png';

const CURATED_WALL_STUDIES = [
  {
    id: 'sage',
    name: 'Nordic Sage Mineral',
    hex: '#647764',
    collection: 'BIOPHILIC BOTANICAL',
    sheen: 'Chalky Mineral Lime-Wash',
    lrv: '44% Soft Daylight Diffusion',
    woodwork: 'Bleached Flamed Ash',
    roomImage: greenImg,
    description: 'Calibrated to soothe ocular strain while balancing natural daylight through structural embrasures.'
  },
  {
    id: 'terracotta',
    name: 'Tuscan Sienna Earth',
    hex: '#b35d45',
    collection: 'MEDITERRANEAN WARMTH',
    sheen: 'Hand-Troweled Venetian Stucco',
    lrv: '32% Warm Intimacy',
    woodwork: 'Aged French Walnut',
   roomImage: orangeImg,
    description: 'Infused with natural volcanic earth minerals to provide cozy evening depth and acoustic comfort.'
  },

  {
    id: 'charcoal',
    name: 'Nocturne Slate Charcoal',
    hex: '#313742',
    collection: 'MONOLITHIC SHADOW',
    sheen: 'Acoustic Velvet Mineral',
    lrv: '14% Deep Absorptive',
    woodwork: 'Charred Yakisugi Cedar',
   roomImage: greayImg,
    description: 'A deep light-trapping surface designed to anchor minimalist artwork and emphasize sculptural furniture.'
  },
  {
    id: 'travertine',
    name: 'Roman Cream Travertine',
    hex: '#c9bca9',
    collection: 'MINIMAL ARCHIVE',
    sheen: 'Porous Calcite Stucco Lustro',
    lrv: '68% Airy Luminance',
    woodwork: 'Smoked European Oak',
   roomImage: creamImg,
    description: 'Naturally reflects diffused morning zenith light, maximizing perceived vertical ceiling height.'
  },
  {
    id: 'ochre',
    name: 'Raw Ochre Sandstone',
    hex: '#b8854b',
    collection: 'DESERT SOLARIS',
    sheen: 'Warm Matte Clay Wash',
    lrv: '48% Radiant Glow',
    woodwork: 'Natural Oiled Teak',
    // આ ઇમેજમાં ગરમ સેન્ડસ્ટોન રંગની અસલી દીવાલ છે
    roomImage: yellowImg,
    description: 'Golden mineral pigment engineered to replicate late-afternoon natural ambient golden hour reflections.'
  }
];

export default function ArchitecturalShowcase() {
  const [activeWall, setActiveWall] = useState(CURATED_WALL_STUDIES[0]);
  const [isFading, setIsFading] = useState(false);

  const handleSelect = (item) => {
    if (item.id === activeWall.id) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveWall(item);
      setIsFading(false);
    }, 180);
  };

  return (
    <section className="wall-real-section">
      <div className="wall-real-shell">
        
        {/* Header */}
        <header className="wall-real-head">
          <div className="wall-real-badge">
            <FiDroplet />
            <span>ARCHITECTURAL PIGMENT LAB • 2026</span>
          </div>
          <h2 className="wall-real-title">Living Architecture Wall Visualizer</h2>
          <p className="wall-real-lead">
            Select a curated shade below to inspect authentic mineral lime-washes across realized living sanctuaries. Preserves genuine room lighting, plant foliage, and furniture textures.
          </p>
        </header>

        {/* Console Deck */}
        <div className="wall-real-console">
          
          {/* Controls Left Column */}
          <div className="wall-real-controls">
            <div className="real-meta-block">
              <span className="real-kicker">{activeWall.collection}</span>
              <h3 className="real-active-title">{activeWall.name}</h3>
              <span className="real-spec-chip" style={{ color: activeWall.hex }}>
                PIGMENT SPEC: {activeWall.hex.toUpperCase()}
              </span>
            </div>

            {/* Tap Guideline */}
            <div className="real-guide-badge">
              <FiMousePointer className="guide-bounce-ic" />
              <span>Tap any shade to switch room wall paint</span>
            </div>

            {/* 5 Fixed Preset Buttons */}
            <div className="real-presets-grid">
              {CURATED_WALL_STUDIES.map((item) => {
                const isSelected = activeWall.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`real-preset-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelect(item)}
                  >
                    <span 
                      className="real-swatch-bubble" 
                      style={{ backgroundColor: item.hex }}
                    >
                      {isSelected && <FiCheck className="bubble-check-ic" />}
                      <span className="swatch-ambient-ring" />
                    </span>
                    <span className="real-swatch-txt">{item.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Specifications */}
            <div className="real-specs-table">
              <div className="real-spec-row">
                <span className="spec-label">SURFACE TEXTURE</span>
                <span className="spec-val">{activeWall.sheen}</span>
              </div>
              <div className="real-spec-row">
                <span className="spec-label">LIGHT REFLECTANCE</span>
                <span className="spec-val">{activeWall.lrv}</span>
              </div>
              <div className="real-spec-row">
                <span className="spec-label">HARMONIC MILLWORK</span>
                <span className="spec-val timber-val">{activeWall.woodwork}</span>
              </div>
            </div>

            <p className="real-narrative-desc text-center">"{activeWall.description}"</p>
          </div>

          {/* Interactive Room Viewport (Photographic Switcher) */}
          <div className="wall-real-stage">
            <img 
              src={activeWall.roomImage} 
              alt={activeWall.name} 
              className={`real-stage-photo ${isFading ? 'fade-out' : 'fade-in'}`} 
            />

            <div className="stage-vignette-layer" />

            {/* Live Status HUD */}
            <div className="real-live-hud">
              <span className="hud-orb-pulse" style={{ backgroundColor: activeWall.hex }} />
              <span>ACTIVE PIGMENT: {activeWall.name.toUpperCase()}</span>
            </div>

            {/* Bottom Floating Bar */}
            <div className="real-floating-tray">
              <div>
                <span className="tray-kicker">TEXTURE FORMULATION</span>
                <h4 className="tray-title">{activeWall.name}</h4>
              </div>
              <button type="button" className="tray-action-btn">
                <span>Request Swatch Sample</span>
                <FiMaximize2 />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
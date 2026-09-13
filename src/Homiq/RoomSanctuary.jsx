import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FiSun, FiMoon, FiSliders, FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';


const sanctuaryData = [
  {
    id: 'living',
    tabName: 'Living Area',
    title: 'Minimalist Lounge & Travertine Plinth',
    era: 'Space 01',
    dayImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    nightImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Witness natural solar rays shift into sculptural 2400K indirect twilight warmth.',
    hotspots: [
      { x: '35%', y: '68%', title: 'Hand-Hewn Travertine Plinth', tag: 'Unhoned Stone', detail: 'Zero chemical sealants' },
      { x: '68%', y: '52%', title: 'Low-Slung Bouclé Daybed', tag: 'Organic Wool', detail: 'Acoustic thermal comfort' },
      { x: '82%', y: '28%', title: 'Minimalist Linear Sconce', tag: 'Architectural Brass', detail: 'Dimmable warm amber spectrum' }
    ],
    specs: [
      { label: 'Morning Character', val: 'Crisp Natural Sunbeams & Shadow' },
      { label: 'Evening Character', val: 'Indirect Ambient Golden Calm' },
      { label: 'Acoustic Tone', val: '42 dB Echo-Damped' }
    ]
  },
  {
    id: 'dining',
    tabName: 'Dining Area',
    title: 'Artisanal Oak & Stoneware Pavilion',
    era: 'Space 02',
    dayImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85',
    nightImage: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Solid wood grains illuminated by morning radiance, softening into candlelit gathering moods.',
    hotspots: [
      { x: '48%', y: '60%', title: 'European Oak Dining Table', tag: '100% Solid Timber', detail: 'Slow mortise & tenon joinery' },
      { x: '25%', y: '42%', title: 'Hand-Thrown Terracotta Urn', tag: 'Natural Ash Mottling', detail: 'Wood-fired organic clay' }
    ],
    specs: [
      { label: 'Morning Character', val: 'Diffused Horizon Light' },
      { label: 'Evening Character', val: 'Intimate Candlelit Atmosphere' },
      { label: 'Surface Finish', val: 'Organic Cold-Pressed Beeswax' }
    ]
  },
  {
    id: 'bedroom',
    tabName: 'Master Bedroom',
    title: 'Slumber Suite & Loom Linens',
    era: 'Space 03',
    dayImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    nightImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    tagline: 'From soft daylight morning rituals to a circadian-supportive evening sleep cocoon.',
    hotspots: [
      { x: '52%', y: '65%', title: 'Low Platform Walnut Bed', tag: 'European Hardwood', detail: 'Zero mechanical vibration' },
      { x: '30%', y: '38%', title: 'Shuttle-Loom Flax Drapes', tag: 'Belgian Linen', detail: 'Breathable light filtration' }
    ],
    specs: [
      { label: 'Morning Character', val: 'Invigorating Soft Sun Rays' },
      { label: 'Evening Character', val: 'Low-Melatonin Sleep Shield' },
      { label: 'Textile Origin', val: '100% Bio-Organic Weaves' }
    ]
  }
];

const SanctuarySpaces = () => {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const current = sanctuaryData[activeSpaceIdx];

  const handleSliderMove = (e) => {
    setHasInteracted(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(percentage);
  };

  const setDayMode = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    setSliderPos(100);
  };

  const setNightMode = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    setSliderPos(0);
  };

  return (
    <section className="spa-sanctuary-section">
      <div className="spa-ambient-light-glow" />

      <Container>
        {/* Top Header Bar */}
        <div className="spa-header-bar">
          <div className="spa-title-area">
            <div className="spa-tag-chip">
              <FiSliders className="me-2" />
              <span>Interactive Lighting Simulation &bull; 2026</span>
            </div>
            <h2 className="spa-headline">Daylight to Nightfall</h2>
            <p className="spa-sub-intro">
              Slide or tap the center bar to experience how natural sunlight shifts into tranquil evening ambiance.
            </p>
          </div>

          {/* Room Selection Switcher */}
          <div className="spa-nav-switcher">
            {sanctuaryData.map((item, idx) => (
              <button
                key={item.id}
                className={`spa-nav-btn ${activeSpaceIdx === idx ? 'active' : ''}`}
                onClick={() => {
                  setActiveSpaceIdx(idx);
                  setSliderPos(50);
                }}
              >
                <span className="spa-idx">0{idx + 1}</span>
                <span>{item.tabName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Master Spatial Stage */}
        <div className="spa-stage-box">
          {/* Interactive Day/Night Comparison Canvas */}
          <div
            className={`spa-canvas-viewport ${!hasInteracted ? 'auto-wiggle-hint' : ''}`}
            onMouseMove={(e) => (e.buttons === 1 ? handleSliderMove(e) : null)}
            onClick={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* Night Backdrop Image (Right Side) */}
            <img
              src={current.nightImage}
              alt={`${current.title} Evening Ambiance`}
              className="spa-img-layer spa-night-layer"
            />

            {/* Day Top Layer (Left Side, clipped precisely by slider) */}
            <div
              className="spa-day-wrapper"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={current.dayImage}
                alt={`${current.title} Morning Ambiance`}
                className="spa-img-layer"
              />
            </div>

            {/* Draggable Sun/Moon Knob & Divider Bar */}
            <div className="spa-divider-bar" style={{ left: `${sliderPos}%` }}>
              <div className="spa-handle-knob">
                <FiChevronLeft className="knob-arrow-left" />
                <div className="knob-icons-core">
                  <FiSun className="knob-icon sun" />
                  <FiMoon className="knob-icon moon" />
                </div>
                <FiChevronRight className="knob-arrow-right" />
              </div>
              <div className="spa-drag-label">DRAG TO COMPARE</div>
            </div>

            {/* Explicit Side Labels: Day vs Night Guidance */}
            <div className="spa-side-labels">
              <button
                className={`spa-mode-chip day-chip ${sliderPos > 70 ? 'highlighted' : ''}`}
                onClick={setDayMode}
              >
                <FiSun className="chip-icon sun" />
                <span>Morning Sunlight</span>
              </button>
              <button
                className={`spa-mode-chip night-chip ${sliderPos < 30 ? 'highlighted' : ''}`}
                onClick={setNightMode}
              >
                <FiMoon className="chip-icon moon" />
                <span>Night Ambiance</span>
              </button>
            </div>

            {/* Interactive Material Hotspots */}
            {current.hotspots.map((pin, pIdx) => (
              <div
                key={pIdx}
                className="spa-hotspot-pin"
                style={{ left: pin.x, top: pin.y }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="pin-pulse" />
                <div className="pin-core">+</div>

                <div className="pin-glass-card">
                  <span className="pin-tag">{pin.tag}</span>
                  <h6 className="pin-title">{pin.title}</h6>
                  <span className="pin-detail">{pin.detail}</span>
                </div>
              </div>
            ))}

            {/* Animated User Guidance Tooltip */}
            <div className="spa-drag-hint">
              <span className="hint-pulse-dot" />
              <span>Drag the center divider or click the buttons above to compare day & night</span>
            </div>
          </div>

          {/* Bottom Architectural Dossier & Specs */}
          <div className="spa-bottom-dossier">
            <div className="spa-dossier-left">
              <span className="spa-dossier-sub">{current.tabName}</span>
              <h3 className="spa-dossier-title">{current.title}</h3>
              <p className="spa-dossier-quote">"{current.tagline}"</p>
            </div>

            <div className="spa-specs-row">
              {current.specs.map((sp, sIdx) => (
                <div key={sIdx} className="spa-spec-card">
                  <span className="spec-label">{sp.label}</span>
                  <span className="spec-value">{sp.val}</span>
                </div>
              ))}
            </div>

            <div className="spa-action-wrap">
              <button className="spa-action-cta">
                <span>Inquire Custom Build</span>
                <FiArrowUpRight className="arr-icon" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SanctuarySpaces;
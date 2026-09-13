import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiCompass, FiLayers } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';


const moodboardPillars = [
  {
    id: '01',
    material: 'Raw Travertine',
    role: 'Foundation & Mass',
    origin: 'Tivoli Quarries, Italy',
    statement: 'Porosity as a design language.',
    desc: 'Unpolished and left in its natural matte state, travertine carries the cooling weight of subterranean history into quiet rooms.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    posClass: 'pos-center-main'
  },
  {
    id: '02',
    material: 'Smoked European Oak',
    role: 'Warmth & Joinery',
    origin: 'FSC Certified Forest',
    statement: 'Generational grain that breathes.',
    desc: 'Treated solely with natural plant oils, allowing the raw grain to oxidize and deepen into honey-amber over decades.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    posClass: 'pos-top-left'
  },
  {
    id: '03',
    material: 'Unbleached Flax Linen',
    role: 'Tactile Comfort',
    origin: 'Artisanal Loom Weave',
    statement: 'Sensory acoustic softness.',
    desc: 'Woven on slow wooden shuttle looms, delivering heavy textured drape that softens and drapes more gracefully with every wash.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    posClass: 'pos-top-right'
  },
  {
    id: '04',
    material: 'Wood-Fired Stoneware',
    role: 'Earthy Accent',
    origin: 'Artisan Coiled Clay',
    statement: 'Deliberate human contouring.',
    desc: 'Formed by hand without mechanized molds, each ceramic vessel carries natural ash pitting and asymmetrical warmth.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    posClass: 'pos-bottom-left'
  },
  {
    id: '05',
    material: 'Negative Spatial Void',
    role: 'Architectural Silence',
    origin: 'Wabi-Sabi Discipline',
    statement: 'What remains unplaced defines the soul.',
    desc: 'Low-slung seating and intentional empty space, dissolving visual clutter so natural sunlight becomes the principal artwork.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    posClass: 'pos-bottom-right'
  }
];

const DesignPhilosophy = () => {
  const [selectedItem, setSelectedItem] = useState(moodboardPillars[0]);

  // Seamless infinite loop on mobile using duplicated items
  const displayItems = [...moodboardPillars, ...moodboardPillars];

  return (
    <section className="mb-philosophy-section">
      <Container>
        {/* Top Header */}
        <div className="mb-header text-center">
          <div className="mb-tag">
            <FiCompass className="me-2" />
            <span>Tactile Material Archive &bull; 2026</span>
          </div>
          <h2 className="mb-title">The Anatomy of Our Philosophy</h2>
          <p className="mb-subtitle">
            An interactive curatorial board. Inspect our raw elements to uncover their origin, purpose, and architectural role.
          </p>
        </div>

        {/* Spatial Moodboard Grid */}
        <Row className="g-4 align-items-center mb-canvas-row">
          {/* Left: Interactive Sample Board */}
          <Col lg={7}>
            <div className="mb-board-surface">
              {displayItems.map((item, index) => {
                const isCurrent = selectedItem.id === item.id;
                return (
                  <div
                    key={`${item.id}-${index}`}
                    className={`mb-sample-card ${item.posClass} ${isCurrent ? 'is-active-card' : ''}`}
                    onMouseEnter={() => setSelectedItem(item)}
                    onClick={() => setSelectedItem(item)}
                  >
                    <img src={item.image} alt={item.material} className="mb-sample-img" loading="lazy" />
                    <div className="mb-sample-overlay" />
                    <span className="mb-sample-tag">{item.material}</span>
                    <span className="mb-sample-num">{item.id}</span>
                  </div>
                );
              })}
            </div>
          </Col>

          {/* Right: Architectural Material Dossier Card */}
          <Col lg={5}>
            <div className="mb-dossier-panel">
              <div className="dossier-meta">
                <span className="dossier-step">Pillar {selectedItem.id}</span>
                <span className="dossier-role">{selectedItem.role}</span>
              </div>

              <h3 className="dossier-title">{selectedItem.material}</h3>
              <p className="dossier-statement">"{selectedItem.statement}"</p>
              <p className="dossier-desc">{selectedItem.desc}</p>

              <div className="dossier-specs-box">
                <div className="spec-line">
                  <span className="spec-label">Provenance</span>
                  <span className="spec-val">{selectedItem.origin}</span>
                </div>
                <div className="spec-line">
                  <span className="spec-label">Sustainability</span>
                  <span className="spec-val">100% Biodegradable / Zero VOC</span>
                </div>
                <div className="spec-line">
                  <span className="spec-label">Architectural Finish</span>
                  <span className="spec-val">Unhoned Raw Tactility</span>
                </div>
              </div>

              <div className="dossier-hint">
                <FiLayers className="me-2" />
                <span>Hover or tap any material swatch to update details</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignPhilosophy;
import React, { useState } from 'react';
import {
    FiGrid,
    FiMaximize2,
    FiCompass,
    FiActivity,
    FiArrowUpRight,
    FiSun,
    FiMoon,
    FiSliders,
    FiMousePointer,
    FiCheckCircle,
    FiLayers
} from 'react-icons/fi';


const BLUEPRINT_ZONES = [
    {
        id: 'zone-1',
        code: 'ZONE 01',
        name: 'Monolithic Great Room',
        subtitle: 'Living & Conversation Hearth',
        areaSqFt: 650,
        ceilingHeight: '11.5 ft Flush Reveal',
        acousticRating: '42 dB (Studio Dampened)',
        finishSpec: 'Unhoned Roman Travertine + Flamed Oak',
        baseRatePerSqFt: 220,
        accentCoords: { x: '35%', y: '48%' },
        photo: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        statement: 'Continuous sightlines linking conversation hearth with expansive natural glass embrasures.',
        // ZONE 1: ઓપન લિવિંગ રૂમ - સોફા, રાઉન્ડ ટેબલ અને મોટો હોલ
        renderStructure: (
            <g className="cad-structure-group zone-1-active">
                {/* Exterior Shell */}
                <rect x="50" y="50" width="700" height="400" stroke="currentColor" strokeWidth="2.5" opacity="0.8" rx="8" />
                {/* Main Partitions */}
                <line x1="500" y1="50" x2="500" y2="450" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                <line x1="50" y1="280" x2="300" y2="280" stroke="currentColor" strokeWidth="2" opacity="0.5" />

                {/* Living Section Furniture (L-Sofa & Center Plinth) */}
                <rect x="120" y="110" width="220" height="70" rx="12" stroke="currentColor" strokeWidth="1.8" fill="rgba(147, 120, 93, 0.12)" />
                <rect x="120" y="180" width="70" height="110" rx="12" stroke="currentColor" strokeWidth="1.8" fill="rgba(147, 120, 93, 0.12)" />
                <circle cx="270" cy="220" r="38" stroke="currentColor" strokeWidth="1.8" fill="rgba(147, 120, 93, 0.08)" />
                <text x="235" y="224" className="cad-svg-subtext">COFFEE PLINTH</text>

                {/* TV Console & Fireplace Wall */}
                <line x1="120" y1="75" x2="360" y2="75" stroke="currentColor" strokeWidth="4" />
                <text x="175" y="68" className="cad-svg-subtext">HEARTH & MEDIA MONOLITH</text>

                <text x="75" y="425" className="cad-svg-label">LAYOUT: OPEN-CONCEPT CONVERSATION HEARTH</text>
            </g>
        )
    },
    {
        id: 'zone-2',
        code: 'ZONE 02',
        name: 'Master Sanctuary Suite',
        subtitle: 'Acoustic Sleeping Cocoon',
        areaSqFt: 480,
        ceilingHeight: '10.0 ft Acoustic Coffered',
        acousticRating: '34 dB (Deep Sleep Shield)',
        finishSpec: 'Belgian Loomed Linen + Smoked Walnut',
        baseRatePerSqFt: 260,
        accentCoords: { x: '52%', y: '45%' },
        photo: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
        statement: 'Low-lux circadian acoustic cocoon tuned for zero mechanical resonance and restorative quietude.',
        // ZONE 2: બેડરૂમ સ્ટ્રક્ચર - કિંગ સાઈઝ બેડ, સાઇડ ટેબલ્સ, ડ્રેસિંગ વોક-ઇન
        renderStructure: (
            <g className="cad-structure-group zone-2-active">
                {/* Master Bedroom Outer Perimeter */}
                <rect x="50" y="50" width="700" height="400" stroke="currentColor" strokeWidth="2.5" opacity="0.8" rx="8" />
                {/* Walk-in Closet & Ensuite Partition */}
                <line x1="260" y1="50" x2="260" y2="450" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                <line x1="260" y1="260" x2="50" y2="260" stroke="currentColor" strokeWidth="2" opacity="0.7" />

                {/* King Size Floating Bed Platform */}
                <rect x="360" y="110" width="220" height="230" rx="14" stroke="currentColor" strokeWidth="2" fill="rgba(147, 120, 93, 0.14)" />
                {/* Headboard Wall Panel */}
                <line x1="330" y1="110" x2="610" y2="110" stroke="currentColor" strokeWidth="5" />
                {/* Dual Nightstands */}
                <rect x="300" y="125" width="45" height="45" rx="6" stroke="currentColor" strokeWidth="1.5" />
                <rect x="595" y="125" width="45" height="45" rx="6" stroke="currentColor" strokeWidth="1.5" />

                {/* Acoustic Rug Perimeter */}
                <rect x="330" y="150" width="280" height="230" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.6" />

                <text x="410" y="235" className="cad-svg-subtext">KING BED PLATFORM</text>
                <text x="80" y="155" className="cad-svg-subtext">WALK-IN ROBE</text>
                <text x="85" y="360" className="cad-svg-subtext">SPA ENSUITE</text>
                <text x="75" y="425" className="cad-svg-label">LAYOUT: ACOUSTIC MASTER SUITE & PRIVATE WING</text>
            </g>
        )
    },
    {
        id: 'zone-3',
        code: 'ZONE 03',
        name: 'Artisan Culinary Atelier',
        subtitle: 'Dining Pavilion & Chef Island',
        areaSqFt: 380,
        ceilingHeight: '11.0 ft Linear Baffle',
        acousticRating: '46 dB (Low Flutter)',
        finishSpec: 'Calacatta Viola Marble + Fluted Brass',
        baseRatePerSqFt: 310,
        accentCoords: { x: '42%', y: '52%' },
        photo: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
        statement: 'Precision stone prep monolithic slab framed by patinated Nordic architectural metals.',
        // ZONE 3: કિચન અને ડાઇનિંગ - મોટું આઇલેન્ડ ટેબલ, સ્ટોવ રિવિલ અને ૬-સીટર ટેબલ
        renderStructure: (
            <g className="cad-structure-group zone-3-active">
                {/* Outer Shell */}
                <rect x="50" y="50" width="700" height="400" stroke="currentColor" strokeWidth="2.5" opacity="0.8" rx="8" />
                {/* Pantry Enclosure */}
                <line x1="560" y1="50" x2="560" y2="450" stroke="currentColor" strokeWidth="2" opacity="0.7" />

                {/* Monolithic Marble Kitchen Island */}
                <rect x="130" y="110" width="360" height="100" rx="10" stroke="currentColor" strokeWidth="2" fill="rgba(147, 120, 93, 0.15)" />
                <circle cx="210" cy="160" r="14" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="260" cy="160" r="14" stroke="currentColor" strokeWidth="1.2" />
                <text x="320" y="165" className="cad-svg-subtext">PREP MONOLITH</text>

                {/* 6-Seater Formal Dining Table Setup */}
                <rect x="180" y="270" width="260" height="110" rx="20" stroke="currentColor" strokeWidth="1.8" />
                {/* Chairs */}
                <rect x="210" y="245" width="40" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
                <rect x="290" y="245" width="40" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
                <rect x="370" y="245" width="40" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
                <rect x="210" y="390" width="40" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
                <rect x="290" y="390" width="40" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
                <rect x="370" y="390" width="40" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />

                <text x="245" y="330" className="cad-svg-subtext">FORMAL DINING TABLE</text>
                <text x="600" y="250" className="cad-svg-subtext">WINE CELLAR</text>
                <text x="75" y="425" className="cad-svg-label">LAYOUT: MONOLITHIC MARBLE ISLAND & DINING</text>
            </g>
        )
    }
];

export default function TactileAtelier({ onReserveClick }) {
    const [selectedZone, setSelectedZone] = useState(BLUEPRINT_ZONES[0]);
    const [customSqFt, setCustomSqFt] = useState(selectedZone.areaSqFt);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    const handleZoneChange = (zone) => {
        if (zone.id === selectedZone.id) return;
        setIsChanging(true);
        setTimeout(() => {
            setSelectedZone(zone);
            setCustomSqFt(zone.areaSqFt);
            setIsChanging(false);
        }, 150);
    };

    const estimatedInvestment = (customSqFt * selectedZone.baseRatePerSqFt).toLocaleString('en-IN');

    return (
        <section className= "blueprint-atelier-section">
            <div className="blueprint-shell">

                {/* Top Control Bar */}
                <div className="blueprint-top-bar">
                    <div className="blueprint-badge">
                        <FiGrid className="bp-spin-ic" />
                        <span>ARCHITECTURAL CAD BLUEPRINT ENGINE • 2026</span>
                    </div>


                </div>

                {/* Section Header */}
                <header className="blueprint-head">
                    <span className="blueprint-kicker">REAL-TIME SPATIAL RE-CONFIGURATION</span>
                    <h2 className="blueprint-title">Interactive Architectural Blueprint</h2>
                    <p className="blueprint-lead">
                        Click on any Zone below to rebuild the structural CAD floorplan in real time. Adjust the dimension slider to recalculate custom execution estimates.
                    </p>
                </header>

                {/* Dynamic Zone Selector Buttons with Explicit Guidance */}
                <div className="zone-switcher-command-bar">
                    <div className="command-bar-hint">
                        <FiMousePointer className="pointer-anim" />
                        <span>SELECT ZONE TO SWITCH CAD STRUCTURE:</span>
                    </div>

                    <div className="zone-buttons-cluster">
                        {BLUEPRINT_ZONES.map((zone) => {
                            const isSelected = selectedZone.id === zone.id;
                            return (
                                <button
                                    key={zone.id}
                                    type="button"
                                    className={`zone-nav-btn ${isSelected ? 'active-zone' : ''}`}
                                    onClick={() => handleZoneChange(zone)}
                                >
                                    <div className="btn-left-indicator">
                                        <span className="dot" />
                                        <strong>{zone.code}</strong>
                                    </div>
                                    <div className="btn-right-title">
                                        <span>{zone.name}</span>
                                        <small>{isSelected ? '✓ Currently Displayed' : 'Click to Load CAD'}</small>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Master CAD Viewport & Telemetry Grid */}
                <div className="blueprint-console-grid">

                    {/* Left: Dynamic CAD SVG Canvas */}
                    <div className="blueprint-cad-viewport">
                        <div className="cad-technical-grid" />

                        {/* Live Indicator on Top */}
                        <div className="cad-top-hud">
                            <span className="hud-pulse-ring" />
                            <span>ACTIVE CAD STRUCTURE: <strong>{selectedZone.name.toUpperCase()}</strong></span>
                        </div>

                        {/* Compass */}
                        <div className="cad-north-indicator">
                            <span className="north-arrow">▲</span>
                            <span>N 38° 53'</span>
                        </div>

                        {/* The Dynamic Changing Blueprint SVG */}
                        <svg
                            className={`cad-vector-svg ${isChanging ? 'fading-cad' : 'visible-cad'}`}
                            viewBox="0 0 800 480"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {selectedZone.renderStructure}
                        </svg>

                        {/* Pin Pointer on the Plan */}
                        <div
                            className="cad-current-pin"
                            style={{ left: selectedZone.accentCoords.x, top: selectedZone.accentCoords.y }}
                        >
                            <span className="pin-radar" />
                            <span className="pin-core-dot" />
                            <div className="pin-live-tag">
                                <strong>{selectedZone.code}</strong>
                                <span>{selectedZone.subtitle}</span>
                            </div>
                        </div>

                        {/* Lower Preview Card showing Real Finished Room Photo */}
                        <div className="cad-rendered-preview">
                            <img
                                src={selectedZone.photo}
                                alt={selectedZone.name}
                                className={`preview-photo ${isChanging ? 'fade-out' : 'fade-in'}`}
                            />
                            <div className="preview-caption">
                                <span className="preview-label">
                                    <FiCheckCircle /> FINISHED PERSPECTIVE
                                </span>
                                <strong>{selectedZone.name}</strong>
                            </div>
                        </div>
                    </div>

                    {/* Right: Architectural Dossier & Custom Sq.Ft Calculator */}
                    <div className="blueprint-telemetry-panel">

                        <div className="bp-dossier-meta">
                            <div className="meta-tag-strip">
                                <span className="bp-sub-kicker">{selectedZone.code} • SPATIAL PROFILE</span>
                                <span className="bp-acoustic-chip">
                                    <FiActivity /> {selectedZone.acousticRating}
                                </span>
                            </div>
                            <h3 className="bp-dossier-title">{selectedZone.name}</h3>
                            <p className="bp-dossier-desc">"{selectedZone.statement}"</p>
                        </div>

                        {/* Interactive Dimension Scrubber */}
                        <div className="bp-scale-scrubber-card">
                            <div className="scrubber-head">
                                <span className="scrubber-label">
                                    <FiSliders /> CALIBRATE ROOM DIMENSION:
                                </span>
                                <span className="scrubber-val">{customSqFt} SQ. FT</span>
                            </div>

                            <input
                                type="range"
                                min="200"
                                max="1200"
                                step="10"
                                value={customSqFt}
                                onChange={(e) => setCustomSqFt(Number(e.target.value))}
                                className="bp-range-slider"
                            />

                            <div className="scrubber-scale-notches">
                                <span>Compact (200 sq.ft)</span>
                                <span>Standard (600 sq.ft)</span>
                                <span>Palatial (1,200 sq.ft)</span>
                            </div>
                        </div>

                        {/* Material Specifications */}
                        <div className="bp-specs-list">
                            <div className="bp-spec-line">
                                <span className="spec-name"><FiMaximize2 /> CEILING HEIGHT</span>
                                <span className="spec-data">{selectedZone.ceilingHeight}</span>
                            </div>

                            <div className="bp-spec-line">
                                <span className="spec-name"><FiCompass /> PRIMARY MATERIAL</span>
                                <span className="spec-data">{selectedZone.finishSpec}</span>
                            </div>

                            <div className="bp-spec-line">
                                <span className="spec-name"><FiLayers /> STRUCTURAL TYPE</span>
                                <span className="spec-data">{selectedZone.subtitle}</span>
                            </div>
                        </div>

                        {/* Live Investment Summary */}
                        <div className="bp-estimate-summary">
                            <div className="estimate-text">
                                <span className="estimate-lead">LIVE ESTIMATE (₹{selectedZone.baseRatePerSqFt}/SQ.FT)</span>
                                <h4 className="estimate-cost">₹{estimatedInvestment}*</h4>
                                <small className="estimate-sub">Dynamically calculated based on calibrated {customSqFt} sq.ft</small>
                            </div>

                            <button
                                type="button"
                                className="bp-inquire-btn"
                                onClick={() => {
                                    if (onReserveClick) {
                                        onReserveClick({
                                            zoneName: selectedZone.name,
                                            zoneCode: selectedZone.code,
                                            sqFt: customSqFt,
                                            estimate: estimatedInvestment,
                                            finish: selectedZone.finishSpec,
                                            acoustic: selectedZone.acousticRating
                                        });
                                    }
                                }}
                            >
                                <span>Reserve Blueprint</span>
                                <FiArrowUpRight />
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
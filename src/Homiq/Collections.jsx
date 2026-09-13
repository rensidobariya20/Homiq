import React from "react";
import { FiArrowUpRight } from "react-icons/fi";


const Collections = () => {
  return (
    <section id="collections" className="homiq-collection-section">

      {/* HEADER */}
      {/* HEADER */}
      <div
        className="homiq-collection-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          position: "relative"
        }}
      >

        <div
          className="homiq-collection-label"
          style={{ margin: "0 auto 15px auto", textAlign: "center" }}
        >
          <span></span>
          HOMIQ COLLECTIONS
        </div>

        <div
          className="homiq-collection-heading"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            margin: "0 auto"
          }}
        >
          <h2 style={{ textAlign: "center", margin: "0 auto" }}>
            Designed for <i>living.</i>
          </h2>

          <p style={{ textAlign: "center", margin: "12px auto 0 auto", maxWidth: "600px" }}>
            Thoughtfully selected furniture and decor that bring character to every space.
          </p>
        </div>

        {/* કાઉન્ટર જો જમણી બાજુ ખૂણામાં રાખવું હોય તો */}
        <div
          className="homiq-collection-counter"
          style={{ position: "absolute", right: "20px", top: "0" }}
        >
          01 — 04
        </div>

      </div>

      {/* MAIN SHOWCASE */}
      <div className="homiq-collection-showcase">

        {/* LEFT IMAGE */}
        <div className="homiq-collection-image homiq-collection-main-image">

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="HOMIQ Living Collection"
          />

          <div className="homiq-collection-overlay"></div>

          <div className="homiq-collection-number">
            01
          </div>

          <div className="homiq-collection-image-label">
            LIVING
          </div>

          <div className="homiq-collection-arrow">
            <FiArrowUpRight />
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="homiq-collection-side">

          <div className="homiq-collection-intro">

            <span>01 / SIGNATURE SPACE</span>

            <h3>
              Warm
              <br />
              <em>Minimal</em>
            </h3>

            <p>
              Soft forms, natural materials and quiet
              tones come together to create a space
              that feels effortlessly refined.
            </p>

            <a href="#living">
              EXPLORE SPACE
              <FiArrowUpRight />
            </a>

          </div>


          {/* SMALL IMAGE */}
          <div className="homiq-collection-image homiq-collection-small-image">

            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"
              alt="HOMIQ Interior"
            />

            <div className="homiq-collection-small-label">
              BEDROOM EDIT
            </div>

          </div>

        </div>

      </div>


      {/* NEW BOTTOM STYLE LIST */}
      <div className="homiq-collection-edit">

        <div className="homiq-edit-intro">
          <span className="homiq-edit-label">
            THE HOMIQ EDIT
          </span>

          <h3>
            A space should
            <em>feel like you.</em>
          </h3>

          <p>
            Discover interiors shaped by mood,
            material and the little details that
            make a house feel personal.
          </p>

          <div className="homiq-edit-mark">
            ✦
          </div>
        </div>


        <div className="homiq-edit-list">

          <a href="#calm" className="homiq-edit-item">
            <span className="homiq-edit-number">01</span>

            <div className="homiq-edit-content">
              <strong>Quiet Living</strong>
              <small>Natural · Soft · Serene</small>
            </div>

            <span className="homiq-edit-arrow">
              ↗
            </span>
          </a>


          <a href="#modern" className="homiq-edit-item">
            <span className="homiq-edit-number">02</span>

            <div className="homiq-edit-content">
              <strong>Modern Form</strong>
              <small>Clean · Refined · Balanced</small>
            </div>

            <span className="homiq-edit-arrow">
              ↗
            </span>
          </a>


          <a href="#warm" className="homiq-edit-item">
            <span className="homiq-edit-number">03</span>

            <div className="homiq-edit-content">
              <strong>Warm Layers</strong>
              <small>Texture · Comfort · Tone</small>
            </div>

            <span className="homiq-edit-arrow">
              ↗
            </span>
          </a>


          <a href="#artistic" className="homiq-edit-item">
            <span className="homiq-edit-number">04</span>

            <div className="homiq-edit-content">
              <strong>Artful Details</strong>
              <small>Bold · Expressive · Unique</small>
            </div>

            <span className="homiq-edit-arrow">
              ↗
            </span>
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="homiq-collection-bottom">

        <span>
          CURATED INTERIORS
        </span>

        <div className="homiq-collection-bottom-brand">
          ✦ HOMIQ ✦
        </div>

        <span>
          INTERIOR LIVING
        </span>

      </div>

    </section>
  );
};

export default Collections;
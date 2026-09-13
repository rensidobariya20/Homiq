import React from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";


const LivingExperience = () => {
  return (
    <section className="homiq-editorial">

      {/* BACKGROUND IMAGE */}
      <div className="editorial-bg">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury Home Interior"
        />
      </div>

      <div className="editorial-overlay"></div>

      {/* TOP BAR */}
      <div className="editorial-top">
        <span>04 — 04</span>
        <span>HOMIQ / INTERIOR STORIES</span>
      </div>

      {/* VERTICAL TEXT */}
      <div className="editorial-vertical">
        INTERIOR LIVING
      </div>

      {/* BIG NUMBER */}
      <div className="editorial-number">
        04
      </div>

      {/* MAIN CONTENT */}
      <div className="editorial-content">

        <div className="editorial-left">

          <span className="editorial-kicker">
            THE LIVING EDIT
          </span>

          <h2>
            Rooms
            <br />
            with
            <br />
            <em>meaning.</em>
          </h2>

          <p>
            We believe the most beautiful spaces are
            the ones that quietly reflect the people
            who live in them.
          </p>

          <a href="#collections" className="editorial-link">
            DISCOVER THE EDIT
            <FiArrowUpRight />
          </a>

        </div>

        {/* FLOATING DETAIL */}
        <div className="editorial-detail">

          <div className="detail-head">
            <span>CURATED 04</span>

            <button>
              <FiPlus />
            </button>
          </div>

          <div className="detail-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"
              alt="HOMIQ Interior Detail"
            />
          </div>

          <div className="detail-info">

            <div>
              <span>SPACE 04</span>
              <h3>Soft<br />Architecture</h3>
            </div>

            <div className="detail-arrow">
              <FiArrowUpRight />
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM MARQUEE */}
      <div className="editorial-bottom">

        <div className="editorial-word">
          LIVE BEAUTIFULLY
        </div>

        <div className="editorial-tags">
          <span>FORM</span>
          <i>✦</i>
          <span>TEXTURE</span>
          <i>✦</i>
          <span>LIGHT</span>
          <i>✦</i>
          <span>SPACE</span>
        </div>

      </div>

    </section>
  );
};

export default LivingExperience;
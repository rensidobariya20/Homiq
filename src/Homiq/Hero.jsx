import React from "react";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiPlus,
} from "react-icons/fi";


const Hero = () => {
  return (
    <section className="homiq-premium-hero">

   
      <div className="hero-bg-word">HOME</div>

      <div className="hero-container">

  
        <div className="hero-left">

          <div className="hero-kicker">
            <span></span>
            HOME DECOR · 2026
          </div>

          <h1>
            Make
            <em>Space</em>
            <strong>Feel.</strong>
          </h1>

          <p className="hero-intro">
            Curated furniture, refined decor and timeless
            pieces designed to make every corner feel
            beautifully yours.
          </p>

          <button className="hero-explore-btn">
            <span>Explore Collection</span>
            <FiArrowUpRight />
          </button>

          <div className="hero-scroll">
            <div className="scroll-icon">
              <FiArrowDown />
            </div>

            <span>SCROLL TO DISCOVER</span>
          </div>

        </div>


        {/* CENTER IMAGE */}
        <div className="hero-center">

          <div className="hero-image-wrap">

            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/47d72b248364843.69efffe70eb86.jpg"
              alt="HOMIQ Home Decor"
            />

            <div className="image-gradient"></div>

            <div className="image-number">
              01
            </div>

            <div className="image-caption">
              <span>THE LIVING EDIT</span>
              <h2>Warm<br />Minimalism</h2>
            </div>

          </div>

          {/* IMAGE FLOATING LABEL */}
          <div className="image-label">
            <span>CURATED</span>
            <strong>FOR LIVING</strong>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-right">

          <div className="hero-category-card">

            <div className="category-top">
              <span>01 / 04</span>

              <button>
                <FiPlus />
              </button>
            </div>

            <div className="category-line"></div>

            <span className="category-small">
              OUR COLLECTION
            </span>

            <h3>
              Living
              <br />
              Room
            </h3>

            <p>
              Pieces that turn everyday
              moments into beautiful ones.
            </p>

            <a href="#collections">
              VIEW COLLECTION
              <FiArrowUpRight />
            </a>

          </div>


          {/* MINI CATEGORIES */}
          <div className="hero-mini-list">

            <div className="mini-item active">
              <span>01</span>
              <strong>Living</strong>
              <FiArrowUpRight />
            </div>

            <div className="mini-item">
              <span>02</span>
              <strong>Dining</strong>
              <FiArrowUpRight />
            </div>

            <div className="mini-item">
              <span>03</span>
              <strong>Bedroom</strong>
              <FiArrowUpRight />
            </div>

            <div className="mini-item">
              <span>04</span>
              <strong>Decor</strong>
              <FiArrowUpRight />
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM BRAND STRIP */}
      <div className="hero-bottom-strip">

        <span>FURNITURE</span>
        <i>✦</i>

        <span>LIGHTING</span>
        <i>✦</i>

        <span>DECOR</span>
        <i>✦</i>

        <span>TEXTILES</span>
        <i>✦</i>

        <span>ART & OBJECTS</span>

      </div>

    </section>
  );
};

export default Hero;
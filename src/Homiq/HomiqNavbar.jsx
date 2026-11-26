
import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Offcanvas,
} from "react-bootstrap";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiSun,
  FiMoon,
  FiChevronDown,
  FiX,
  FiArrowRight,
  FiUser,
} from "react-icons/fi";
import "../App.css";

const HomiqNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const navbarRef = useRef(null);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= DARK MODE ================= */
  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setNavExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  /* ================= DROPDOWN FUNCTIONS ================= */
const handleDropdownHover = (name) => {};

  const handleDropdownLeave = () => {};

  const handleDropdownToggle = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleDropdownLinkClick = () => {
    setOpenDropdown(null);
    setNavExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={navExpanded}
        onToggle={(expanded) => setNavExpanded(expanded)}
        ref={navbarRef}
        className={`homiq-navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container fluid className="homiq-container">
          {/* ================= LOGO ================= */}
          <Navbar.Brand href="#home" className="homiq-logo">
            <div className="homiq-home-logo">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 29L32 10L54 29V53H10V29Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 53V38H37V53"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M18 32H24V38H18V32Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M46 42C46 38 49 36 52 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M46 42C43 39 42 36 43 33"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="logo-content">
              <span className="logo-name">HOMIQ</span>
              <span className="logo-subtitle">INTERIOR LIVING</span>
            </span>
          </Navbar.Brand>

          {/* ================= MOBILE TOGGLE ================= */}
          <Navbar.Toggle
            aria-controls="homiq-navbar-nav"
            onClick={() => {
              setNavExpanded((prev) => !prev);
              setOpenDropdown(null);
            }}
          />

          <Navbar.Collapse id="homiq-navbar-nav">
            {/* ================= MOBILE SEARCH ================= */}
            <div className="mobile-search">
              <Form className="search-box" onSubmit={(e) => e.preventDefault()}>
                <FiSearch />
                <Form.Control
                  type="search"
                  placeholder="Search furniture, decor, rooms..."
                />
              </Form>
            </div>

            {/* ================= NAVIGATION ================= */}
            <Nav className="homiq-nav mx-auto">
              {/* HOME */}
              <Nav.Link
                href="#home"
                className="nav-link-custom"
                onClick={() => {
                  setNavExpanded(false);
                  setOpenDropdown(null);
                }}
              >
                Home
              </Nav.Link>

              {/* ROOMS */}
              <div
                className={`custom-dropdown nav-dropdown ${openDropdown === "rooms" ? "dropdown-open" : ""
                  }`}
                onMouseEnter={() => handleDropdownHover("rooms")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className="nav-link-custom dropdown-trigger"
                  onClick={(e) => handleDropdownToggle(e, "rooms")}
                >
                  Rooms
                  <FiChevronDown className="dropdown-arrow" />
                </button>

                <div
                  className="custom-dropdown-menu rooms-menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mega-title">
                    <span>EXPLORE ROOMS</span>
                    <small>Find the perfect look for every space</small>
                  </div>

                  <div className="rooms-grid">
                    {/* LIVING ROOM */}
                    <div className="room-column">
                      <div className="room-icon">01</div>
                      <h6>Living Room</h6>
                      <a href="#sofas" onClick={handleDropdownLinkClick}>
                        Sofas
                      </a>
                      <a href="#tables" onClick={handleDropdownLinkClick}>
                        Coffee Tables
                      </a>
                      <a href="#lighting" onClick={handleDropdownLinkClick}>
                        Lighting
                      </a>
                      <a href="#decor" onClick={handleDropdownLinkClick}>
                        Decor
                      </a>
                    </div>

                    {/* BEDROOM */}
                    <div className="room-column">
                      <div className="room-icon">02</div>
                      <h6>Bedroom</h6>
                      <a href="#beds" onClick={handleDropdownLinkClick}>
                        Beds
                      </a>
                      <a href="#nightstands" onClick={handleDropdownLinkClick}>
                        Nightstands
                      </a>
                      <a href="#lamps" onClick={handleDropdownLinkClick}>
                        Bedside Lamps
                      </a>
                      <a href="#storage" onClick={handleDropdownLinkClick}>
                        Storage
                      </a>
                    </div>

                    {/* DINING */}
                    <div className="room-column">
                      <div className="room-icon">03</div>
                      <h6>Dining</h6>
                      <a href="#dining-tables" onClick={handleDropdownLinkClick}>
                        Dining Tables
                      </a>
                      <a href="#chairs" onClick={handleDropdownLinkClick}>
                        Chairs
                      </a>
                      <a href="#serveware" onClick={handleDropdownLinkClick}>
                        Serveware
                      </a>
                      <a href="#dining-decor" onClick={handleDropdownLinkClick}>
                        Decor
                      </a>
                    </div>

                    {/* WORKSPACE */}
                    <div className="room-column">
                      <div className="room-icon">04</div>
                      <h6>Workspace</h6>
                      <a href="#desks" onClick={handleDropdownLinkClick}>
                        Desks
                      </a>
                      <a href="#office-chairs" onClick={handleDropdownLinkClick}>
                        Office Chairs
                      </a>
                      <a href="#organizers" onClick={handleDropdownLinkClick}>
                        Organizers
                      </a>
                      <a href="#workspace-lighting" onClick={handleDropdownLinkClick}>
                        Lighting
                      </a>
                    </div>
                  </div>

                  <div className="mega-footer">
                    <span>Curated spaces, thoughtfully designed.</span>
                    <a href="#allrooms" onClick={handleDropdownLinkClick}>
                      Explore all rooms
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              {/* COLLECTIONS */}
              <div
                className={`custom-dropdown nav-dropdown ${openDropdown === "collections" ? "dropdown-open" : ""
                  }`}
                onMouseEnter={() => handleDropdownHover("collections")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className="nav-link-custom dropdown-trigger"
                  onClick={(e) => handleDropdownToggle(e, "collections")}
                >
                  Collections
                  <FiChevronDown className="dropdown-arrow" />
                </button>

                <div
                  className="custom-dropdown-menu collections-menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="collection-heading">COLLECTIONS</div>

                  <div className="collection-grid">
                    <a href="#new" onClick={handleDropdownLinkClick}>
                      <span>New Arrivals</span>
                      <FiArrowRight />
                    </a>
                    <a href="#bestsellers" onClick={handleDropdownLinkClick}>
                      <span>Best Sellers</span>
                      <FiArrowRight />
                    </a>
                    <a href="#minimal" onClick={handleDropdownLinkClick}>
                      <span>Minimal Living</span>
                      <FiArrowRight />
                    </a>
                    <a href="#neutral" onClick={handleDropdownLinkClick}>
                      <span>Warm Neutrals</span>
                      <FiArrowRight />
                    </a>
                    <a href="#modern" onClick={handleDropdownLinkClick}>
                      <span>Modern Classics</span>
                      <FiArrowRight />
                    </a>
                    <a href="#seasonal" onClick={handleDropdownLinkClick}>
                      <span>Seasonal Edit</span>
                      <FiArrowRight />
                    </a>  
                  </div>

                 <div className="collection-footer">
  <a 
    href="#collections" 
    style={{ cursor: "pointer" }}
    onClick={(e) => {
      e.preventDefault();
      if (handleDropdownLinkClick) handleDropdownLinkClick();
    }}
  >
    View all collections
    <FiArrowRight />
  </a>
</div>
                </div>
              </div>

              {/* JOURNAL */}
              <div
                className={`custom-dropdown nav-dropdown ${openDropdown === "journal" ? "dropdown-open" : ""
                  }`}
                onMouseEnter={() => handleDropdownHover("journal")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className="nav-link-custom dropdown-trigger"
                  onClick={(e) => handleDropdownToggle(e, "journal")}
                >
                  Journal
                  <FiChevronDown className="dropdown-arrow" />
                </button>

                <div
                  className="custom-dropdown-menu journal-menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="journal-title">THE JOURNAL</div>

                  <div className="journal-item">
                    <span className="journal-number">01</span>
                    <div>
                      <h6>Small Living Room Ideas</h6>
                      <p>Smart ways to style a smaller space.</p>
                    </div>
                  </div>

                  <div className="journal-item">
                    <span className="journal-number">02</span>
                    <div>
                      <h6>Creating a Warm Home</h6>
                      <p>Build a calm and welcoming atmosphere.</p>
                    </div>
                  </div>

                  <div className="journal-item">
                    <span className="journal-number">03</span>
                    <div>
                      <h6>Modern Decor Trends</h6>
                      <p>Timeless ideas for modern interiors.</p>
                    </div>
                  </div>

                  <div className="journal-footer">
                    <a href="#journal" onClick={handleDropdownLinkClick}>
                      Read the journal
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </Nav>

            {/* ================= RIGHT ACTIONS ================= */}
            <div className="navbar-actions">
              {/* SEARCH */}
              <button
                className="icon-action"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                {searchOpen ? <FiX /> : <FiSearch />}
              </button>

              {/* WISHLIST */}
              <button
                className="icon-action"
                onClick={() => setWishlistOpen(true)}
                aria-label="Wishlist"
              >
                <FiHeart />
                <span className="badge-count">2</span>
              </button>

              {/* CART */}
              <button
                className="icon-action"
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
              >
                <FiShoppingBag />
                <span className="badge-count">2</span>
              </button>

              {/* THEME */}
              <button
                className="theme-action"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>

              {/* MY SPACE (CUSTOM STATE-DRIVEN TOGGLE) */}
              <div className="my-space-dropdown position-relative">
                {/* MY SPACE (CUSTOM STATE-DRIVEN TOGGLE) */}
                <div className="my-space-dropdown position-relative">
                  <Button
                    className={`my-space-btn ${openDropdown === "myspace" ? "active" : ""}`}
                    onClick={(e) => handleDropdownToggle(e, "myspace")}
                  >
                    <FiUser />
                    <span>My Space</span>
                    <FiChevronDown className="my-space-arrow" />
                  </Button>

                  {openDropdown === "myspace" && (
                    <div
                      className="my-space-menu"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="space-heading">MY SPACE</div>

                      <a
                        href="#saved"
                        className="dropdown-item"
                        onClick={handleDropdownLinkClick}
                      >
                        <FiHeart />
                        <span>Saved Items</span>
                      </a>

                      <a
                        href="#moodboards"
                        className="dropdown-item"
                        onClick={handleDropdownLinkClick}
                      >
                        <span className="space-icon">✦</span>
                        <span>My Moodboards</span>
                      </a>

                      <a
                        href="#myrooms"
                        className="dropdown-item"
                        onClick={handleDropdownLinkClick}
                      >
                        <span className="space-icon">◇</span>
                        <span>My Rooms</span>
                      </a>

                      <a
                        href="#recent"
                        className="dropdown-item"
                        onClick={handleDropdownLinkClick}
                      >
                        <span className="space-icon">◷</span>
                        <span>Recently Viewed</span>
                      </a>
                    </div>
                  )}
                </div>

                {openDropdown === "myspace" && (
                  <div
                    className="my-space-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="space-heading">MY SPACE</div>

                    <a
                      href="#saved"
                      className="dropdown-item"
                      onClick={handleDropdownLinkClick}
                    >
                      <FiHeart />
                      <span>Saved Items</span>
                    </a>

                    <a
                      href="#moodboards"
                      className="dropdown-item"
                      onClick={handleDropdownLinkClick}
                    >
                      <span className="space-icon">✦</span>
                      <span>My Moodboards</span>
                    </a>

                    <a
                      href="#myrooms"
                      className="dropdown-item"
                      onClick={handleDropdownLinkClick}
                    >
                      <span className="space-icon">◇</span>
                      <span>My Rooms</span>
                    </a>

                    <a
                      href="#recent"
                      className="dropdown-item"
                      onClick={handleDropdownLinkClick}
                    >
                      <span className="space-icon">◷</span>
                      <span>Recently Viewed</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ================= SEARCH OVERLAY ================= */}
      <div className={`search-overlay ${searchOpen ? "search-overlay-show" : ""}`}>
        <Container>
          <Form className="large-search" onSubmit={(e) => e.preventDefault()}>
            <FiSearch />
            <Form.Control
              autoFocus={searchOpen}
              type="search"
              placeholder="Search furniture, decor, rooms..."
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
            >
              <FiX />
            </button>
          </Form>

          <div className="search-suggestions">
            <span>Popular:</span>
            <a href="#sofas" onClick={() => setSearchOpen(false)}>Sofas</a>
            <a href="#lamps" onClick={() => setSearchOpen(false)}>Lamps</a>
            <a href="#chairs" onClick={() => setSearchOpen(false)}>Chairs</a>
            <a href="#wallart" onClick={() => setSearchOpen(false)}>Wall Art</a>
          </div>
        </Container>
      </div>

      {/* ================= WISHLIST ================= */}
      <Offcanvas
        show={wishlistOpen}
        onHide={() => setWishlistOpen(false)}
        placement="end"
        className="homiq-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>YOUR SAVED SPACE</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="empty-message">
            <FiHeart />
            <h5>2 saved pieces</h5>
            <p>Your favorite pieces will appear here.</p>
            <Button className="offcanvas-btn">View Wishlist</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* ================= CART ================= */}
      <Offcanvas
        show={cartOpen}
        onHide={() => setCartOpen(false)}
        placement="end"
        className="homiq-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>YOUR CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart-item">
            <div className="cart-placeholder">01</div>
            <div>
              <h6>Linen Lounge Chair</h6>
              <span>₹12,499</span>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-placeholder">02</div>
            <div>
              <h6>Ceramic Table Lamp</h6>
              <span>₹2,499</span>
            </div>
          </div>
          <div className="cart-total">
            <span>Subtotal</span>
            <strong>₹14,998</strong>
          </div>
          <Button className="checkout-btn">
            View Cart
            <FiArrowRight />
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomiqNavbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo_gris.png";
import { BannerTop } from "../home/BannerTop";
import { Banner } from "../home/Banner";

export const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // handler Event
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <BannerTop />
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to={"/signup"} className="lab-btn me-3">
              <span>Crear Cuenta</span>
            </Link>
            <Link to={"/login"}>
              <span>
                <i className="icofont-user-alt-7"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to={"/home"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                </ul>
              </div>
              {/* singin login */}
              <Link to={"/sign-up"} className="lab-btn me-1 d-none d-md-block">
                Crear Cuenta
              </Link>
              <Link to={"/login"} className="d-none d-md-block">
                <i className="icofont-user-alt-7"></i>
              </Link>

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                onClick={() => setSocialToggle(!socialToggle)}
                className="ellepsis-bar d-md-none"
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from "react";
import "./Header.css";
export default function Header() {
  // When Scroll header is at  Top
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  // toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="navLink">
            {/* <ul className="link f_flex uppercase"> */}
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#protfolio">Protfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#clients">clients</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">HIRE NOW</button>
              </li>
            </ul>

            <button className="toogle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open "></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

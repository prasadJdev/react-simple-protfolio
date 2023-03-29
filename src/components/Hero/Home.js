import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import banner1 from "../../assets/P19.jpg";
import logo from "../../assets/logo.png";
export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome to My Site</h3>
            <h1>
              Hi, I'm <span>Prasad</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder", " Developer"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </span>
            </h2>
            <p>Ambitious quick learner </p>
            <div className="hero_btn">
              <div className="col_1">
                <h4>FIND ME </h4>
                <div className="button d_flex" >
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4> BEST SKILL ON</h4>
                <div className="d_flex">
                <button className="btn_shadow">
                  <img src={logo} alt="Skill" />
                </button>
                <button className="btn_shadow">
                  <img src={logo} alt="Skill" />
                </button>
                <button className="btn_shadow">
                  <img src={logo} alt="Skill" />
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right ">
            <div className="rign_img">
              <img src={banner1} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

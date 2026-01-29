import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter padding innerwidth hero-container">
        {/* left side */}
        <div className="flexColstart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColstart hero-des">
            <span className="secondaryText">
              Find your dream home with our expertly curated properties.
            </span>
            <br />
            <span className="secondaryText">Forget all diggicults in finding a residence, we will</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

    <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

<div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award winning</span>
            </div>

          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right"></div>
        <div className="image-container">
          <img src="./hero-image.png" alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerwidth hero-container flexCenter">
     
     
        <div className="hero-left">
            left section
        </div>
      
        <div className="flexCenter hero-right"></div>
  <div className="image-container">
    <img src="./hero-image.png" alt="hero-image" />
  </div>
      </div>
    </section>
  );
};

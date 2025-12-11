import React from 'react';
import '../assets/styles.css';
import Typewriter from 'typewriter-effect';

const profileImage = '/me.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Naveen Kumar</span></h1>

          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'React & Node.js Enthusiast',
                  'Quick Learner & Problem Solver'
                ],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
          <p>I approach software engineering with curiosity, dedication, and a problem-solving mindset.
            My ability to work across various programming languages and handle complex tasks enables me to contribute effectively to i
            mpactful and high-quality software solutions.</p>

          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <div className="hero-image">
          <img src={"/me1.png"} alt="Naveen Kumar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="image-wrapper">
            <img src={about_img} alt="Campus" className="about-img" />
            <img
              src={play_icon}
              alt="Play"
              className="play-icon"
              onClick={() => setPlayState(true)}
            />
          </div>
        </div>
        <div className="about-right">
          <h3 className="subtitle">About University</h3>
          <h2 className="title">Nurturing Tomorrow's Leaders Today</h2>
          <div className="about-text">
            <p>
              At our university, we are dedicated to providing an exceptional education that prepares students to thrive in a rapidly evolving world. Our diverse and inclusive community encourages intellectual growth, innovation, and critical thinking.
            </p>
            <p>
              We offer a variety of undergraduate and graduate programs, designed to help students build a solid foundation in their chosen field. Our curriculum is continuously updated to reflect the latest advancements in research and industry trends.
            </p>
            <p>
              Our vibrant campus is home to a range of student organizations, cultural clubs, athletic teams, and volunteer opportunities. With state-of-the-art facilities and a welcoming atmosphere, students can thrive academically, socially, and personally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

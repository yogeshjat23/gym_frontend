
import React from 'react';

import './About.css'; 
import profileImage from "../assets/progile.jpg";  
import { FaInstagram, FaLinkedin } from "react-icons/fa"; 
const About = () => {
  return (
    <div className="about-container">
  
       <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h2>Yogesh Jat</h2>
        <p className="profile-role">Founder of Athletink</p>
        <p>
          Passionate about sports and technology, I built Athletink to make it 
          easier for people to connect and play together. Join us in creating a 
          more active and engaging sports community!
        </p> 
        <div className="social-links">
          <a href="https://www.instagram.com/yogesh_jat_rj?igsh=MWM3OG44bmUwZnVidw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://www.linkedin.com/in/yogesh-jat-5b0898257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;

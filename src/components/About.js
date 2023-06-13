import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

const About = () => {
 
  return (
    <div className="container_about">
    <div class="about_us">
      <div class="about_us_center">
          <h1>About Us</h1>
      </div>
    </div>
    <div className="team">
        <h1>Our Team</h1>
        <p>We are comprised of experienced individuals with a passion for technology and commitment to customer satisfaction.</p>
        <div className="team-member">
          <h2>Harvey Spector</h2>
          <p>Founder - CEO</p>
        </div>
        <div className="team-member">
          <h2>Jessica Pearson</h2>
          <p>COO</p>
        </div>
        <div className="team-member">
          <h2>Rachel Zain</h2>
          <p>Marketing Head</p>
        </div>
        <div className="team-member">
          <h2>Luise Litt</h2>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <h2>Katrina Bennett</h2>
          <p>Intern Designer</p>
        </div>
        <div className="team-member">
          <h2>Mike Ross</h2>
          <p>Intern Designer</p>
        </div>
      </div>
    </div>
    );
};

export default About;
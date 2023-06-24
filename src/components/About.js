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
      <div className="container our_team">
        <h1>Our Team</h1>
        <p>We are comprised of experienced individuals with a passion for technology and commitment to customer satisfaction.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Harvey Spector</h2>
                <p className="card-text">Founder - CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Jessica Pearson</h2>
                <p className="card-text">COO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Rachel Zain</h2>
                <p className="card-text">Marketing Head</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Luise Litt</h2>
                <p className="card-text">Lead Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Katrina Bennett</h2>
                <p className="card-text">Intern Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Mike Ross</h2>
                <p className="card-text">Intern Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
};

export default About;
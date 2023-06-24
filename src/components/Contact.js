import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

const Contact = () => {
 
  return (
    <div className="container_about">
      <div class="about_us">
        <div class="about_us_center">
            <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container why_chooose">
        <h1>We're here to help you</h1>
        <div className="row sections">
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Sales</h2>
                <p className="card-text">Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Complaints</h2>
                <p className="card-text">We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Returns</h2>
                <p className="card-text">Hassle-free returns and exchanges. We understand that sometimes products just don't work out.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Marketing</h2>
                <p className="card-text">Our marketing team works collaboratively with businesses to help them grow and succeed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    );
};

export default Contact;
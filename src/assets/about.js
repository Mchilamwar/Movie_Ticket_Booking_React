import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from "react";
import logo from "./logo.png";
import aboutImage from "./about.png";


function About() {
  return (
    <div>
      {/* Navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-3">
          <div className="container-fluid">
          <Link to="/home" className="navbar-brand" >
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '35px' }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" >Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" >Movies</Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link" >Reviews</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link"><b>Contact us</b></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* About */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 mt-5">
          <strong>
            <b>
              <h1>About us</h1>
            </b>
          </strong>

          <p>Welcome to Book My Show!</p>
          <p>
      

At Book my show, we believe in the magic of entertainment. We are passionate about bringing people closer to their favorite movies, shows, concerts, and events, all at their fingertips. Our mission is to create a seamless and delightful experience for every user, enabling them to discover, book, and enjoy unforgettable moments.

What sets us apart?

Wide Selection: We curate a vast collection of movies, plays, concerts, sports events, and more, catering to a diverse range of interests and preferences. From the latest blockbusters to critically acclaimed theater performances, we ensure there's something for everyone.

Simple and Secure Booking: We understand the value of your time and the importance of hassle-free transactions. Our user-friendly interface allows you to effortlessly browse through various events and secure your tickets with just a few taps. With our robust security measures, you can book with confidence, knowing that your information is protected.

Personalized Recommendations: Discovering new experiences is part of the joy of entertainment. Our smart recommendation engine analyzes your preferences, past bookings, and interests to suggest tailored shows and events that align with your taste. Stay up-to-date with your favorite artists and explore exciting new discoveries effortlessly.

Seamless Access: Say goodbye to the hassle of physical tickets! Our digital ticketing system ensures easy access to your booked events. Simply display your e-ticket on your smartphone, and you're ready to immerse yourself in the world of entertainment.




          </p>
        </div>
      </div>

      {/* Image */}
      <div className="col-md-4 ml-20 mr-5 align-item :center">
        <img src={aboutImage} alt="" className="img-fluid ml-20" />
      </div>
    </div>
  );
}

export default About;

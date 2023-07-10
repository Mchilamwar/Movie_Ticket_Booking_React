import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import './contact.css';
import logo from "./logo.png";
const Contact = () => {
  return (
    <>
      {/* nav */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
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

      {/* contact section */}
      <section id="contact">
        <div className="contact">
          <div className="container">
            <div className="mb-5 mt-5 text-center">
              <h5>Let's Start a Conversation</h5>
              <h2 className="fw-bold">Contact Us</h2>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-5">
                <h4 className="fw-bold">Contact Info</h4>
                <ul className="info list-unstyled">
                  <li className="d-flex align-items-center">
                    <span className="pe-3 ti-location-pin fs-5"></span>
                    <p>
                      <a href="" className="text-info text-black">
                        Anytime ! feel free to contact us!!!
                      </a>
                    </p>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pe-3 ti-mobile fs-5"></span>
                    <p>
                      <a href="" className="text-info text-black">
                        +91 999-999-9999
                      </a>
                    </p>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="pe-3 ti-envelope fs-5"></span>
                    <p>
                      <a href="" className="text-info text-black">
                        Info.book.show@in
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="    Your name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="   Enter address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="textarea"
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-danger">
                        <span className="ti-rocket pe-2 fs-5"></span>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="p-3 mt-5 copyright">
          <div className="container mt-4">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start">
                <p className="my-0">
                  Copyright © 2023
                  <a href="#">book my show</a> All Rights Reserved
                </p>
              </div>
              <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end">
                <p>
                  Designed by <a href="#" target="_blank">Team39</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;

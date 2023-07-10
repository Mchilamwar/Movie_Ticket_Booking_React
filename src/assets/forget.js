import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';
import title from './title.png';
import './login.css';

function ForgetPassword() {
  const validateForm = (event) => {
    event.preventDefault(); // Prevents the form from submitting automatically

    const email = event.target.elements.email.value;
    const mobile = event.target.elements.mobile.value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Mobile number validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    // All validations passed
    alert('Form submitted successfully!');
  };

  return (
    <div>
      {/* navigation */}
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
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    <b>Contact us</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* forget password */}
      <div className="container mt-5 shadow-lg shadow-glow">
        <div className="row" style={{ marginTop: '200px' }}>
          <div className="col-md-6 offset-md-3 p-5">
            <div className="email-header">
              <img
                src={title}
                className="rounded"
                alt="forgot password"
                width="50px"
                height="30px"
                style={{ marginRight: 'px' }}
              />
              Forgot Password
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <form onSubmit={validateForm}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-primary">
                      Reset Password
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <span>Remember your password?</span>
                  <Link to="/login" >Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;

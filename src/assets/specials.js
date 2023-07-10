import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';
//import './1.css';
import lj from './vintage/lj.jpg';
import sj1 from './vintage/sj1.jpg';
import sj2 from './vintage/sj2.jpg';
import vitara from './vintage/vitara.jpg';


function Specials() {
  return (
    <div>ss
      {/* Navigation */}
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
                  <Link to="/products" className="nav-link" >Products</Link>
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

      {/* Specials */}
      <div className="text-center container py-5 mt-3">
        <h3>
          <strong>Blockbuster's</strong>
        </h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card" >
              <img src={lj} className="card-img-top" alt="lj" />
              <div className="card-body">
                <h5 className="card-title">Sooryavansham</h5>
                <p className="card-text">
                 The highest grossed movie!!!!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={sj1} className="card-img-top" alt="sj1" />
              <div className="card-body">
                <h5 className="card-title">3 Idiots</h5>
                <p className="card-text">
                Worldwide collection of 100cr!!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={sj2} className="card-img-top" alt="sj2" />
              <div className="card-body">
                <h5 className="card-title">Welcome</h5>
                <p className="card-text">The funniest movie in our records so far.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={vitara} className="card-img-top" alt="vitara" />
              <div className="card-body">
                <h5 className="card-title">Kabhi khushi kabhi Gham</h5>
                <p className="card-text">
Most loved movie!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="my-5">
        <section>
          <footer className="text-center text-white" style={{ backgroundColor: 'rgb(64, 64, 64)' }}>
            <div className="container p-4 pb-0">
              <section>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register now</span>
                  <Link to="/registration">
                    <button type="button" className="btn btn-outline-light btn-rounded">
                      Register
                    </button>
                  </Link>
                </p>
              </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'pink' }}>
Book My Show            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Specials;

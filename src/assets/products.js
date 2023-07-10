import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import logo from './logo.png';
import background from "./bg.jpg";
//import React from "react";
//import logo from "./logo.png";
import alto800 from "./alto800.jpg";
import baleno from './baleno.jpg';
import dzire from './dzire.jpg';
import ecco from './ecco.jpg';
import ertiga from './ertiga.jpg';
import grandVitara from "./grand vitara.jpg";
import './home.css';


export default function Products() {
  return (
    <div>
      
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1" style={{ backgroundImage: `url(${background})` }}>
          <div className="container-fluid">
          <Link to="/home" className="navbar-brand" >
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ width: "100px" , height:"50px",marginLeft:"40px" }}
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
                

                {localStorage.getItem('uid') ? (
                  <li className="nav-item">
  <Link to="/user" className="nav-link active" aria-current="page">Home</Link></li>
) : (<>
  <li className="nav-item">
  <Link to="/user" className="nav-link active" aria-current="page">Home</Link></li>
   <li className="nav-item">
   <Link to="/login" className="nav-link" >Login</Link>
 </li></>
)}

               

               
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

      {/* carousel */}
            <div>
      <section >
        <div className="text-center container py-5">
          <h4 className="mt-5 mb-5">
            <strong>Select Ongoing Shows !  </strong>
          </h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              {/* alto */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={alto800} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "pink" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Avatar</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Hindi</p>
                  </a>
                  <h6 className="mb-3">Rs.120/seat</h6>
                  <Link to ="/bookmovie" class="btn btn-danger">Book Now!</Link>
                </div>
              </div>
            </div>

             {/* baleno */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={baleno} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-success ms-2">Superhit</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Jumanji</h5>
            </a>
            <a href="" className="text-reset">
              <p>Hindi</p>
            </a>
            <h6 className="mb-3">Rs.150/seat</h6>
            <Link to ="/bookmovie" class="btn btn-danger">Book Now!</Link>
          </div>
        </div>
      </div>

      {/* dzire */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={dzire} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-danger ms-2">off 10%</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Star wars</h5>
            </a>
            <a href="" className="text-reset">
              <p>English</p>
            </a>
            <h6 className="mb-3">
              <s>Rs.150/seat</s>
              <strong className="ms-2 text-danger">Rs.135/seat</strong>
            </h6>
            <Link to ="/bookmovie" class="btn btn-danger">Book Now!</Link>
          </div>
        </div>
      </div>

      {/* ecco */}
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={ecco} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-success ms-2">New</span>
                    <span className="badge bg-danger ms-2">off 10%</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">I still Believe</h5>
            </a>
            <a href="" className="text-reset">
              <p>English</p>
            </a>
            <h6 className="mb-3">
              <s>Rs.150/seat</s>
              <strong className="ms-2 text-danger">Rs.135/seat</strong>
            </h6>
            <Link to ="/bookmovie" class="btn btn-danger">Book Now!</Link>
          </div>
        </div>
      </div>

      {/* ertiga */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={ertiga} className="w-100" alt="" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-primary ms-2">New</span>
                    <span className="badge bg-success ms-2">Superhit</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">StarWars</h5>
            </a>
            <a href="" className="text-reset">
              <p>Hindi</p>
            </a>
            <h6 className="mb-3">Rs. 150/seat</h6>
            <Link to ="/bookmovie" class="btn btn-danger">Book Now!</Link>
          </div>
        </div>
      </div>

            {/* vitara */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image " data-mdb-ripple-color="light">
                  <img src={grandVitara} className="w-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                          <span className="badge bg-success ms-2">superhit</span>
                          <span className="badge bg-danger ms-2">off 10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Hobbit</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>English</p>
                  </a>
                  <h6 className="mb-3">
                    <s>Rs.150/seat</s>
                    <strong className="ms-2 text-danger">Rs. 135/seat</strong>
                  </h6>
                  <Link to ="/bookmovie" class="btn btn-danger">Book Now!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      

      {/* footer */}
      <div className="">
        <section>
          <footer
            className="text-center text-white"
            style={{ backgroundColor: 'rgb(64, 64, 64)' }}
          >
            <div className="container p-4 pb-0">
              <section>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">To know more About Us</span>
                  <Link to="/about">
                    <button type="button" className="btn btn-outline-light btn-rounded">
                      Click here
                    </button>
                  </Link>
                </p>
              </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgb(64, 64, 64)' }}>
              © 2023 BOOKmyShow.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}


import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.png';
import img1 from './img1.jpg';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.jpeg';
import img5 from './img5.jpg';
import img6 from './img6.jpeg';
import './review.css';

function Review() {
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
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* review section starts */}
      <section>
        <div className="review container">
          <div className="content">
            <h3>
              <strong>What Customers Says About Us....</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <p>
                A user-friendly interface is crucial for a successful movie booking app. Apps that are easy to navigate, provide clear information about movies and showtimes.
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Sapna</h6>
                <img src={img1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                Users have praised the app for offering a wide variety of events and activities, including movies, plays, stand-up comedy shows, sports events, and concerts.


                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Kala</h6>
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                The ability to choose preferred seats during the booking process is often highlighted as a positive feature, as it provides users with control over their seating arrangements.
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Shubham</h6>
                <img src={img3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                Users have mentioned the availability of discounts, cashback offers, and loyalty programs as a significant advantage of using the BookMyShow app.


                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Pratik</h6>
                <img src={img4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                Integration with additional services like food ordering or seat upgrades can enhance the overall movie-going experience for users.                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Sayali</h6>
                <img src={img5} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                Loyalty programs or reward systems are also well-received by users.
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Shubhangi</h6>
                <img src={img6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;

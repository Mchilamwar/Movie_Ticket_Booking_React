import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './logo.png'



const Bookmovie = () => {
  const [formData, setFormData] = useState({
    movieId: localStorage.getItem('movieid'),
    userId: localStorage.getItem('uid'),
    quantity: 0,
    quota: 'SILVER',
    amount: 0,
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let amount = 0;
  
    if (name === 'quota') {
      const quantity = formData.quantity || 0;
      if (value === 'SILVER') {
        amount = 100 * quantity;
      } else if (value === 'GOLD') {
        amount = 150 * quantity;
      } else if (value === 'PLATINUM') {
        amount = 200 * quantity;
      }
    }
  
    setFormData({
      ...formData,
      [name]: value,
      
      amount: amount,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8282/addBooking', formData)
      .then((response) => {

        if (response.status === 200) {
        window.alert("Booking created successfully")
        // Reset form
        setFormData({
          movieId:0,
          userId: 0,
          quantity: 0,
          quota: 'SILVER',
          amount: 0,
          date: '',
          }
          );
      }})
      .catch((error) => {
        console.error('Error creating booking:', error);
      }).finally(setFormData({
        movieId: 0,
        userId: 0,
        quantity: 0,
        quota: 'SILVER',
        amount: 0,
        date: '',
        }
        ));
  };

  return (
    <>

<section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-1" >
          <div className="container-fluid">
          <Link to="/user" className="navbar-brand" >
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
                <li className="nav-item">
                  <Link to="/user" className="nav-link active" aria-current="page" >Home</Link>
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
<div className="my-4"></div> 
      <div className="d-flex justify-content-center my-2">
      <form className="col-6" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="movieId" className="form-label" >Movie ID:</label>
          <input type="number" className="form-control" id="movieId" name="movieId" value={formData.movieId} onChange={handleChange} required disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User ID:</label>
          <input type="number" className="form-control" id="userId" name="userId" value={formData.userId} onChange={handleChange} required disabled/>
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="quota" className="form-label">Quota:</label>
          <select className="form-control" id="quota" name="quota" value={formData.quota} onChange={handleChange} required>
            <option value="SILVER">Silver</option>
            <option value="GOLD">Gold</option>
            <option value="PLATINUM">Platinum</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input type="number" className="form-control" id="amount" name="amount" value={formData.amount} onChange={handleChange} required readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Booking</button>
      </form>
    </div>

    <div className="my-5 " >
            <section>
              <footer
                className="text-center text-white"
                style={{ backgroundColor: 'rgb(64, 64, 64)',marginBottom:0 }}
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
    
                <div className="text-center p-3"      style={{ backgroundColor: 'rgb(64, 64, 64)',marginBottom:0 }}>
                  © 2023 BOOKmyShow.in
                </div>
              </footer>
            </section>
          </div>
    </>
  );
};

export default Bookmovie;

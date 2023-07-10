import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter,Link,useNavigate, Route, Routes } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap';
import logo from './logo.png';

const MovieForm = () => {

    const navigate=useNavigate();
    let [isSuccess, setIsSuccess] = useState(false);


    let logout=()=>{

      localStorage.removeItem('loginStatus');
      localStorage.removeItem('userRole');

      navigate("/");
      
    };



  const [formData, setFormData] = useState({
    name: '',
    description: '',
    language: '',
    genre: '',
    link: '',
    priceSilver: 0,
    priceGold: 0,
    pricePlatinum: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8282/addMovie', formData, {
  headers: {
    'Content-Type': 'application/json',
  },
})
      .then((response) => {
        console.log('Movie added successfully!', response.data);
        // Reset form
        setFormData({
          name: '',
          description: '',
          language: '',
          genre: '',
          link: '',
          priceSilver: 0,
          priceGold: 0,
          pricePlatinum: 0,
        });
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  return (

<>
<div>
          
          {/* navigation */}
          <section id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-1" >
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
                    <li className="nav-item">
                      <Link to="/admin" className="nav-link active" aria-current="page" >Home</Link>
                    </li> 
                    <button style={{height:40,width:100}}
            className="btn btn-danger mx-5"
            onClick={logout}
          >Logout</button>                    
                    
                  </ul>
                </div>
              </div>
            </nav>
          </section>
    </div>
    

    <div className="d-flex justify-content-center">
      <form className="col-6" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">Language:</label>
          <input type="text" className="form-control" id="language" name="language" value={formData.language} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre:</label>
          <input type="text" className="form-control" id="genre" name="genre" value={formData.genre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Link:</label>
          <input type="text" className="form-control" id="link" name="link" value={formData.link} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="priceSilver" className="form-label">Price (Silver):</label>
          <input type="number" className="form-control" id="priceSilver" name="priceSilver" value={formData.priceSilver} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="priceGold" className="form-label">Price (Gold):</label>
          <input type="number" className="form-control" id="priceGold" name="priceGold" value={formData.priceGold} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="pricePlatinum" className="form-label">Price (Platinum):</label>
          <input type="number" className="form-control" id="pricePlatinum" name="pricePlatinum" value={formData.pricePlatinum} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
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

export default MovieForm;

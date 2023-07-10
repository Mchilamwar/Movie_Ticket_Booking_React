import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import title from "./title.png";
import { Link } from "react-router-dom";
import React from "react";
import MyRegistration from "./registration";
import axios from "axios";



export default function Login() {

  const navigate=useNavigate();

  const [loginData, setLoginData] = useState({email : '', password : ''})

  function handleInput(event) {
      setLoginData((prevValues) => {
          return {
              ...prevValues,
              [event.target.name] : event.target.value
          }
      })
  }

  function sendData(event) {
      event.preventDefault();
      console.log(loginData);
      let url = 'http://localhost:8282/login';
      axios.post(url, loginData).then((response) => {
        if (response.status === 200) {
          
          localStorage.setItem('loginStatus', 'true');
          localStorage.setItem('userRole', 'user');
          localStorage.setItem('uid',response.data)
          navigate("/user"); // Redirect to the "user" page
        } 
      }).catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("Invalid User");
        } else {
          console.log(error);
        }
      }).finally(() => {
        setLoginData({ email: "", password: "" }); // Reset the input values
      });
  }





  return (
    <>
      {/* navigatn */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
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
                  <Link
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    <b>Contact us</b>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </section>



      <div className="row justify-content-center " style={{ marginTop: "100px" }}>
        <div className="col-sm-12 col-md-6">
          <div className="fs-2">Login Form</div>

          <form onSubmit={sendData} className="needs-validation">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={loginData.email}
              name="email"
              onChange={handleInput}
              required
            />

            <input
              type="password"
              name="password"
              id="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              value={loginData.password}
              onChange={handleInput}
              required
            />

            <button
              type="submit"
              value="Login"
              className=" w-100 btn btn-lg btn-primary"
            >Login </button>
            </form>
            <div className="mt-3">Don't have an account? Click on Register</div>
            <Link to="/registration">
              <button type="button" className="btn btn-outline-primary btn-rounded p-2 mt-2 form-control">
                Register
              </button>
            </Link>
        
          <Link to="/adminlogin">
              <button type="button" className="btn btn-outline-danger btn-rounded p-2 mt-2 form-control">
                Admin Login 
              </button>
            </Link>

          {/* {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>} */}
        </div>
      </div>
    </>
  );
}



import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.png";
import "./login.css";
import axios from "axios";

export default function MyRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    mobno: ""
  });

  function handleInput(event) {
    setRegisterData((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value
      };
    });
  }

  function sendData(event) {
    event.preventDefault();

    // Manual form validation
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.mobno) {
      window.alert("Please fill in all the fields.");
      return;
    }

    formRef.current.classList.add("was-validated");

    let url = "http://localhost:8282/addUser";
    axios
      .post(url, registerData)
      .then((response) => {
        if (response.status === 200) {
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("Error Registering user");
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setRegisterData({
          name: "",
          email: "",
          password: "",
          mobno: ""
        });
        formRef.current.classList.remove("was-validated");
      });
  }

  return (
    <>
      {/* navigation */}
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
                  <Link to="/home" className="nav-link active" aria-current="page">
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

      {/* registration */}
      {isSuccess ? (
      <div className="row justify-content-center mt-10" style={{ marginTop: "100px" }}>
        <div className="col-sm-12 col-md-6">
          <p style={{ color: "green", textAlign: "center",fontWeight:"bold" }}>
            Registration successful! You can now login.
          </p>
        </div>
      </div>
    ) : (
        <div className="row justify-content-center mt-10" style={{ marginTop: "100px" }}>
          <div className="col-sm-12 col-md-6 ">
            <div className="fs-2" style={{ textAlign: "center" }}>
              Registration Form
            </div>

            <form onSubmit={sendData} ref={formRef} className="needs-validation">
              <input
                type="text"
                className="form-control form-control-lg mb-2 mt-1"
                placeholder="Enter username"
                name="name"
                value={registerData.name}
                onChange={handleInput}
                required
              />
              <input
                type="password"
                className="form-control form-control-lg mb-2"
                placeholder="Enter password"
                name="password"
                value={registerData.password}
                onChange={handleInput}
                minLength={6}
                title="Password must be at least 6 characters long and contain at least one letter and one number."
                required
              />
              <input
                type="email"
                className="form-control form-control-lg mb-2"
                placeholder="Enter Email"
                name="email"
                value={registerData.email}
                onChange={handleInput}
                required
              />
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                placeholder="Enter mobile"
                name="mobno"
                value={registerData.mobno}
                onChange={handleInput}
                pattern="[0-9]{10}"
                title="Mobile number must be 10 digits."
                required
              />
              <button type="submit" className="w-100 btn btn-lg btn-danger">
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

import { useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.png";
import title from "./title.png";
import "./login.css";

function EnquireNow() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    contact: "",
    email: "",
    address: "",
  });

  let handlerContactAction = (e) => {
    let newuser = { ...user, contact: e.target.value };
    setUser(newuser);
  };
  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handlerAddressAction = (e) => {
    let newuser = { ...user, address: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // backend
      let url = `http://localhost:4000/adduser1?contact=${user.contact}&email=${user.email}&address=${user.address}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        contact: "",
        email: "",
        address: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

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
                style={{ maxHeight: "35px" }}
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
                <li className="nav-item">
                  <Link to="/show" className="nav-link">
                    <b>My enquiries</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* enquire */}

      <div
        className="row justify-content-center mt-10"
        style={{ marginTop: "100px" }}
      >
        <div className="col-sm-12 col-md-6 ">
          <div className="fs-2" style={{ textAlign: "center" }}>
            Enquire Now
          </div>

          <form ref={formRef} className="needs-validation">
            <input
              type="text"
              className="form-control form-control-lg mb-2 mt-1"
              placeholder="Enter Contact"
              value={user.contact}
              onChange={handlerContactAction}
              pattern="[0-9]{10}"
              title="Contact number must be 10 digits."
              required
            />
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Invalid email address."
              required
            />
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter address"
              value={user.address}
              onChange={handlerAddressAction}
              pattern="^[a-zA-Z0-9\s]*$"
              title="Address should not contain any symbols."
              required
            />
            <input
              type="button"
              value="Enquire"
              className="w-100 btn btn-lg btn-secondary"
              onClick={registerAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default EnquireNow;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./login.css";

function Enquireshow() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = `http://localhost:4000/enquiryshow`;
    let res = await fetch(url);
    let list = await res.json();

    setUserList([...list]);
  };

  const deleteHandler = async (enqEmail) => {
    try {
      let url = `http://127.0.0.1:4000/deletEnquiry/${enqEmail}`;
      let res = await fetch(url);
        
    //   console.log(res);
    if(res) {
        window.location.reload();
    }
    } catch (error) {
      console.error('Delete failed with error:', error.message);
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
                    Products
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
                  <Link to="" className="nav-link">
                    <b>My enquiries</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <h1>User List</h1>

      <table className="table">
        <thead>
          <tr>
          <th scope="col">id</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => (
            <tr key={index}>
                <td>{item._id}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td> <button className="btn btn-primary" onClick={()=>deleteHandler(item.email)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Enquireshow;

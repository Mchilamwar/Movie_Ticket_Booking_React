
import React from "react"
import { BrowserRouter,Link,useNavigate, Route, Routes } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap';
import logo from './logo.png';



export default function Admin(){
    const navigate=useNavigate();

    let logout=()=>{

      localStorage.removeItem('loginStatus');
      localStorage.removeItem('userRole');

      navigate("/");
      
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
                    {/* <li className="nav-item">
                      <Link to="/home" className="nav-link active" aria-current="page" style={{color:"red", fontSize:"large",fontWeight:"bold"}}>logout</Link>
                    </li> */}
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
       {/* Admin Resources */}
        <AdminResources/>
         
          
          
          
    
          {/* footer */}
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


}


export const AdminResources = () => {

   
   
    return (
        <>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 my-5">
       <div className="col">
       

          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url()",backgroundSize: "cover",
              backgroundPosition: "center" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> <Nav.Link as={Link} to={"/movieform"} >
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: 'rgb(219, 30, 30)' }}>Add Movies</h2></Nav.Link>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url()",backgroundSize: "cover",
              backgroundPosition: "center" }}>
            <div className="d-flex flex-column h-150 p-5 pb-3 text-white text-shadow-1"> <Nav.Link as={Link} to={"/showbookings"} >
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: 'rgb(215, 41, 41)' }}>Show Bookings</h2></Nav.Link>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url()",backgroundSize: "cover",
              backgroundPosition: "center" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"> <Nav.Link as={Link} to={"/showUsers"} >
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: 'rgb(236, 36, 36)' }}>Show Users</h2></Nav.Link>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div></>
    );
  };
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.png";
import title from "./title.png";
import "./login.css";

const centerContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", 
  fontWeight: "bold",
};

function Logout() {
  return (
    <div style={centerContainerStyle}>
      <div>Logged Out Successfully</div>
      <Link to="/login">
        <button type="button" className="btn btn-outline-primary btn-rounded mt-2">
          Click here to Login Again
        </button>
      </Link>
    </div>
  );
}

export default Logout;

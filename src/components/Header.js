import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <div className="Heading">
      <div
        className="links"
        style={{
          textAlign: "center",
          paddingTop: 4,
          color: "black",
        }}
      >
        <Link to="/">
          <h1>Contact Manager</h1>
        </Link>
        <br></br>
        <Link to="/api1">
          <h3>API1</h3>
        </Link>
        <br></br>
        <Link to="/api2">
          <h3>API2</h3>
        </Link>
        <br></br>
        <Link to="/api3">
          <h3>API3</h3>
        </Link>
        <br></br>
        {/* <hr style={{ marginLeft: 50, marginRight: 50 }}></hr> */}
      </div>
    </div>
  );
};

export default Header;

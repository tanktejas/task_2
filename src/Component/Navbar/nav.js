import React from "react";
import url from "../images/websitelogo.png";
import "./nav.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="top">
          <img src={url}></img>
        </div>
        <div className="midd">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/journey">Journey </Link>
            </li>
            <li>
              {" "}
              <Link to="/team">Team</Link>
            </li>
            <li>
              {" "}
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="last">
          <p>Gagan</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;

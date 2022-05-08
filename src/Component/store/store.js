import React from "react";
import { useState } from "react";
import shoe from "../images/shoe.jpg";
import "./store.css";

function Navbar() {
  const [shoestotal, setshoe] = useState([]);
  const br = {
    name: "KSL",
    picture: "../images/shoe.jpg",
    rs: "2000/-",
  };
  function click() {
    let aaa = shoestotal;
    aaa.push(br);
    setshoe(aaa);
    console.log(shoestotal);
  }
  return (
    <>
      <div className="mains">
        <div className="left">
          <div className="leff">
            <img src={shoe}></img>
          </div>
          <div className="rigg">
            <div className="three">
              <img src={shoe}></img>
              <img src={shoe}></img>
              <img src={shoe}></img>
            </div>
            <div className="ksl">
              <div>
                <h3>KSL 01</h3>
                <p>bu kicksup</p>
              </div>
              <div>
                <p>80 views</p>
                <p>RS. 2000/-</p>
              </div>
              <p>Get exclusive 20% off</p>
              <div className="font">
                <p>Font</p>
                <p>coloe</p>
                <p>coloe</p>
                <p>coloe</p>
              </div>
              <div className="font">
                <p>Font</p>
                <p>coloe</p>
                <p>coloe</p>
                <p>coloe</p>
              </div>
              <div className="font">
                <p>Font</p>
                <p>coloe</p>
                <p>coloe</p>
                <p>coloe</p>
              </div>
              <div className="font">
                <p>Font</p>
                <p>coloe</p>
                <p>coloe</p>
                <p>coloe</p>
              </div>
              <div className="butt">
                <button
                  onClick={() => {
                    click();
                  }}
                >
                  Add
                </button>
                <button>Share</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <h3>Cart</h3>
            <div className="mainc">
              {shoestotal.map((item) => {
                return (
                  <div className="item">
                    <div className="lit">
                      <img src={shoe}></img>
                    </div>
                    <div className="">
                      <h3>{item.name}</h3>
                      <p>{item.rs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Header.css";
import logo from "./images/Zomato-Logo.png";
import location from "./images/location-dot-solid.svg";
import menu from "./images/bars-solid.svg";
import cross from "./images/xmark-solid.svg";
import blackLogo from "./images/blackLogo.webp";

function Header({locat,setLocation}) {
 
  const [click, setClick] = useState(false);

  const locations = ["Erode", "Namakkal", "Coimbatore", "Chennai", "Salem"];
  const hanldlelocation = (e) => {
    setLocation(e.target.value);
  };

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      {/* menu bar */}
      <div className="menu">
        <img src={menu} style={{ width: "15%" }} onClick={handleClick} id="cross"/>
      </div>

      {click && (
        <>
          <div className="nav-menu">
            <div className="row-1">
              <img src={cross} style={{ width: "5%" }} onClick={handleClick} id="cross"/>
              <img src={blackLogo} />
            </div>

            <div className="row-2" style={{color:"black"}}>
              <p>Investor Relations</p>
              <p>Add Restaurant</p>
              <p>Login</p>
              <p>Sign Up</p>
            </div>
          </div>
        </>
      )}

      <div className="nav">
        <div className="left">
          <h5>Get the App</h5>
        </div>
        <div className="right">
          <p>Investor Relations</p>
          <p>Add Restaurant</p>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </div>

      <div className="banner">
        <img src={logo} style={{ width: "20%" }} />
        <h1 style={{ fontWeight: "400" }}>
          Discover the best food & drinks in {locat}
        </h1>
        <div className="location">
          <img src={location} className="loc" />
          <select onChange={(e) => hanldlelocation(e)}>
            {locations.map((m) => {
              return (
                <option value={m} key={m}>
                  {m}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            placeholder="Search for restaurant,cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

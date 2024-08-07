import React, { useState } from "react";
import "./GetApp.css";
import phone from "./images/Iphone.png";
import playstore from "./images/Google-Play.png";
import appstore from "./images/App-Store.png";

function GetApp() {
  const [select, setSelect] = useState("email");

  const handleRadio=(m)=>{
    console.log(m);
    
  }

  return (
    <div className="getApp">
      <div className="left">
        <img src={phone} style={{ width: "200px" }} />
      </div>
      <div className="right">
        <h1>Get the Zomato app</h1>
        <p style={{fontWeight:"200"}}>
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="c-tytpe">
          <>
            <input type="radio" name="email" onSelect={()=>handleRadio("email")} />
            <label>Email</label>
          </>
          <>
            <input type="radio" name="phone" onSelect={()=>handleRadio("phone")}/>
            <label>Phone</label>
          </>
        </div>

        {select === "email" ? (
          <div className="input">
            <input type="email" placeholder="Email" />
            <button>Share App Link</button>
          </div>
        ) : (
          <div className="input">
            <input type="number" placeholder="type here..." />
            <button>Share App Link</button>
          </div>
        )}
        <p style={{fontWeight:"150"}}>Download app from</p>
        <div className="store">
          <img src={playstore} style={{ width: "150px" }} />
          <img src={appstore} style={{ width: "150px" }} />
        </div>
      </div>
    </div>
  );
}

export default GetApp;

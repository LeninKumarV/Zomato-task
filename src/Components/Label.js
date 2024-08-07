import React from "react";
import "./Label.css";
import arrow from './images/arrow-right-solid.svg';

function Label({locat}) {
  return (
    <div className="label">
      <div className="label-container">
            <h1 style={{fontWeight:"200"}}>Popular localities in and around {locat}</h1>

            <div class="label-form">
                <div className="left">
                    <h5 style={{fontWeight:"300"}}>{locat} Locality</h5>
                    <p style={{fontWeight:"200"}}>143 Places</p>
                </div>
                <div className="right" style={{width:"3%"}}>
                    <img src={arrow} />
                </div>
            </div>
      </div>
    </div>
  );
}

export default Label;

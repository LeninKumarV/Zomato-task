import React from "react";
import card from "./images/Night-Life.png";
import "./Card.css";

function Card() {
  return (
    <div className="container">
      <div className="card-container">
            <div className="card">
                <div className="card-img"></div>
                <div className="content">
                    <h4>Order Online</h4>
                    <p>
                        Stay home and order to your doorstep
                    </p>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "./Footer.css";
import blackLogo from "./images/blackLogo.webp";
import playstore from "./images/Google-Play.png";
import appstore from "./images/App-Store.png";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <img src={blackLogo} style={{ width: "10%" }} />
        <div>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h5 style={{ fontWeight: "300", color: "black" }}>About Zomato</h5>
          <a href="#">Who we Are</a>
          <a href="#">Blog</a>
          <a href="#">Work with Us</a>
          <a href="#">Investor Relations</a>
          <a href="#">Report Fraud</a>
          <a href="#">Press Kit</a>
          <a href="#">Contact Us</a>
        </div>

        <div>
          <h5 style={{ fontWeight: "300", color: "black" }}>Zomoverse</h5>
          <a href="#">Zomato</a>
          <a href="#">Blinkit</a>
          <a href="#">Feeding Indi</a>
          <a href="#">Hyperpure</a>
          <a href="#">Zomato live</a>
          <a href="#">Zomaland</a>
          <a href="#">Weather Union</a>
        </div>

        <div>
          <h5 style={{ fontWeight: "300", color: "black" }}>For Restaurants</h5>
          <a href="#">Partner with Us</a>
          <a href="#">App's For You</a>
        </div>

        <div>
          <h5 style={{ fontWeight: "300", color: "black" }}>Learn More</h5>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>

        <div>
          <h5 style={{ fontWeight: "300", color: "black" }}>Socail Links</h5>
          <i class="fas fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin"></i>
          <div className="store">
            <img src={playstore} style={{ width: "150px" }} />
            <img src={appstore} style={{ width: "150px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

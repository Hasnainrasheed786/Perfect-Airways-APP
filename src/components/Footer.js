import React from "react";
import "./footer.css";
import Logo from "../Assets/loc.png";
import Logo1 from "../Assets/loc1.png";
import Logo2 from "../Assets/loc2.png";

const Footer = () => {
  return (
    <footer className="row least">
      <div className="row foot">
        <div className="col side1">
          <div className="head">
            <h5>
              <strong>Perfect Aairways</strong>
            </h5>
            <br />
            <h6>
              <img src={Logo} width="20px"></img> House 195, Phase 1, DHA Lahore
            </h6>
            <h6><img src={Logo1} width="25px"></img> +92-42-37196423</h6>
            <h6><img src={Logo2} width="22px"></img>  internationalperfectairways@gmail.com</h6>
          </div>
        </div>
        <div className="col side2 ">
          <div className="head">
            <h5>
              <b>Get in Touch</b>
            </h5>
            <br />
            <input type="text" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          
          </div>
        </div>
      </div>
    
      <span>@2022 PERFECT AIRWAYS</span>
    </footer>
  );
};
export default Footer;

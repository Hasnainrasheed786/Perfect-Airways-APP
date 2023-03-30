import React from "react";
import "./navbar.css";
import Img13 from "../Assets/Img13.png";
const Header = () => {
  
  return (
    <div>
      <div className="row header">
        <nav class="navbar head-nav navbar-expand-lg">
          <div class="container-fluid ">
            <img src={Img13} width="60px" />
            {/* <a class="navbar-brand" href="#"></a> */}
            <button
              class="navbar-toggler bg-light "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>

                <li class="nav-item">
                  <button className="btn btn-primary  btn-sm btn-1">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   
      </div>
  
    </div>
  );
};
export default Header;

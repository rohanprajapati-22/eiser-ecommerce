
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area">
      <div className="top_menu">
        <div className="container">
          <div className="row">

            <div className="col-lg-7">
              <div className="float-left">
                <p>Phone: +01 256 25 235</p>
                <p>email: info@eiser.com</p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="float-right">
                <ul className="right_side">
                  <li><Link to="/cart">Gift Card</Link></li>
                  <li><Link to="/tracking">Track Order</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

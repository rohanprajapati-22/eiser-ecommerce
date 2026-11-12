
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main_menu">
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light w-100">

          {/* Logo */}
          <Link className="navbar-brand logo_h" to="/">
            <img src="/img/logo.png" alt="Eiser Logo" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse offset w-100"
            id="navbarSupportedContent"
          >
            <div className="row w-100 mr-0">

              <div className="col-lg-7 pr-0">
                <ul className="nav navbar-nav center_nav pull-right">

                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>

                  <li className="nav-item submenu dropdown">
                    <Link className="nav-link dropdown-toggle" to="/shop">
                      Shop
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/shop">
                          Shop Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/product-details">
                          Product Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/checkout">
                          Product Checkout
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                          Shopping Cart
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item submenu dropdown">
                    <Link className="nav-link dropdown-toggle" to="/blog">
                      Blog
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog-details">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item submenu dropdown">
                    <Link className="nav-link dropdown-toggle" to="/tracking">
                      Pages
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/tracking">
                          Tracking
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/elements">
                          Elements
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Right Icons */}
              <div className="col-lg-5 pr-0">
                <ul className="nav navbar-nav navbar-right right_nav pull-right">

                  <li className="nav-item">
                    <Link to="/search" className="icons">
                      <i className="ti-search" aria-hidden="true"></i>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/cart" className="icons">
                      <i className="ti-shopping-cart"></i>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/login" className="icons">
                      <i className="ti-user" aria-hidden="true"></i>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/wishlist" className="icons">
                      <i className="ti-heart" aria-hidden="true"></i>
                    </Link>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const { cartItems } = useCart();
    const { customer, isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const cartCount = cartItems.length;

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

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
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>

                                    <li className="nav-item submenu dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#">
                                            Shop
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/shop">
                                                    Shop Category
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

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/my-orders">
                                            My Orders
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            {/* Right Icons */}
                            <div className="col-lg-5 pr-0">
                                <ul className="nav navbar-nav navbar-right right_nav pull-right">

                                    {/* Cart Icon */}
                                    <li className="nav-item">
                                        <Link className="icons cart-icon" to="/cart">
                                            <i className="ti-shopping-cart"></i>

                                            {cartCount > 0 && (
                                                <span className="cart-count">
                                                    {cartCount}
                                                </span>
                                            )}
                                        </Link>
                                    </li>

                                    {/* Login / Logout */}
                                    {isLoggedIn ? (
                                        <>
                                            <li className="nav-item" style={{ paddingLeft: 20 }}>
                                                <span className="nav-link">
                                                    Welcome, {customer?.fullName}
                                                </span>
                                            </li>

                                            <li className="nav-item">
                                                <button
                                                    className="icons"
                                                    onClick={handleLogout}
                                                    title="Logout"
                                                    style={{
                                                        border: "none",
                                                        background: "none",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <i className="ti-power-off"></i>
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="nav-item">
                                            <Link
                                                to="/login"
                                                className="icons"
                                                title="Login"
                                            >
                                                <i className="ti-user"></i>
                                            </Link>
                                        </li>
                                    )}

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

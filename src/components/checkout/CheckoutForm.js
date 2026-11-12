
import React from "react";

const CheckoutForm = ({ children }) => {
  return (
    <>
      {/* Returning Customer */}
      <div className="returning_customer">
        <div className="check_title">
          <h2>
            Returning Customer?
            <a href="#login"> Click here to login</a>
          </h2>
        </div>

        <p>
          If you have shopped with us before, please enter your details in the
          boxes below. If you are a new customer, please proceed to the
          Billing &amp; Shipping section.
        </p>

        <form className="row contact_form">
          <div className="col-md-6 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Username or Email"
            />
          </div>

          <div className="col-md-6 form-group p_star">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="col-md-12 form-group">
            <button type="button" className="btn submit_btn">
              Send Message
            </button>

            <div className="creat_account">
              <input type="checkbox" id="f-option" name="selector" />
              <label htmlFor="f-option">Remember me</label>
            </div>

            <a className="lost_pass" href="#forgot-password">
              Lost your password?
            </a>
          </div>
        </form>
      </div>

      {/* Coupon Area */}
      <div className="cupon_area">
        <div className="check_title">
          <h2>
            Have a coupon?
            <a href="#coupon"> Click here to enter your code</a>
          </h2>
        </div>

        <input type="text" placeholder="Enter coupon code" />

        <a className="tp_btn" href="#apply-coupon">
          Apply Coupon
        </a>
      </div>

      {/* Billing Details and Your Order */}
      <div className="billing_details">
        <div className="row">

          {/* Left Column: Billing Details */}
          <div className="col-lg-8">
            <h3>Billing Details</h3>

            <form className="row contact_form">
              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="first"
                  name="firstName"
                  placeholder="First name"
                />
              </div>

              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="last"
                  name="lastName"
                  placeholder="Last name"
                />
              </div>

              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                  placeholder="Company name"
                />
              </div>

              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  name="number"
                  placeholder="Phone number"
                />
              </div>

              <div className="col-md-6 form-group p_star">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="col-md-12 form-group p_star">
                <select className="country_select" defaultValue="1">
                  <option value="1">Country</option>
                  <option value="2">Country</option>
                  <option value="4">Country</option>
                </select>
              </div>

              <div className="col-md-12 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="add1"
                  name="add1"
                  placeholder="Address line 01"
                />
              </div>

              <div className="col-md-12 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="add2"
                  name="add2"
                  placeholder="Address line 02"
                />
              </div>

              <div className="col-md-12 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="Town/City"
                />
              </div>

              <div className="col-md-12 form-group p_star">
                <select className="country_select" defaultValue="1">
                  <option value="1">District</option>
                  <option value="2">District</option>
                  <option value="4">District</option>
                </select>
              </div>

              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  placeholder="Postcode/ZIP"
                />
              </div>

              {/* Create Account */}
              <div className="col-md-12 form-group">
                <div className="creat_account">
                  <input
                    type="checkbox"
                    id="f-option2"
                    name="selector"
                  />
                  <label htmlFor="f-option2">
                    Create an account?
                  </label>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="col-md-12 form-group">
                <div className="creat_account">
                  <h3>Shipping Details</h3>

                  <input
                    type="checkbox"
                    id="f-option3"
                    name="selector"
                  />

                  <label htmlFor="f-option3">
                    Ship to a different address?
                  </label>
                </div>

                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Order Notes"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Right Column: Your Order */}
          {children}

        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

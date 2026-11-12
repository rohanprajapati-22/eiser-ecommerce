
import React from "react";

const OrderSummary = () => {
  return (
    <div className="col-lg-4">
      <div className="order_box">

        <h2>Your Order</h2>

        {/* Product List */}
        <ul className="list">
          <li>
            <a href="#product">
              Product
              <span>Total</span>
            </a>
          </li>

          <li>
            <a href="#blackberry">
              Fresh Blackberry
              <span className="middle">x 02</span>
              <span className="last">$720.00</span>
            </a>
          </li>

          <li>
            <a href="#tomatoes">
              Fresh Tomatoes
              <span className="middle">x 02</span>
              <span className="last">$720.00</span>
            </a>
          </li>

          <li>
            <a href="#brocoli">
              Fresh Brocoli
              <span className="middle">x 02</span>
              <span className="last">$720.00</span>
            </a>
          </li>
        </ul>

        {/* Price Details */}
        <ul className="list list_2">
          <li>
            <a href="#subtotal">
              Subtotal
              <span>$2160.00</span>
            </a>
          </li>

          <li>
            <a href="#shipping">
              Shipping
              <span>Flat rate: $50.00</span>
            </a>
          </li>

          <li>
            <a href="#total">
              Total
              <span>$2210.00</span>
            </a>
          </li>
        </ul>

        {/* Check Payment */}
        <div className="payment_item">
          <div className="radion_btn">
            <input
              type="radio"
              id="f-option5"
              name="payment"
            />

            <label htmlFor="f-option5">
              Check payments
            </label>

            <div className="check"></div>
          </div>

          <p>
            Please send a check to Store Name, Store Street, Store Town,
            Store State / County, Store Postcode.
          </p>
        </div>

        {/* PayPal Payment */}
        <div className="payment_item active">
          <div className="radion_btn">
            <input
              type="radio"
              id="f-option6"
              name="payment"
              defaultChecked
            />

            <label htmlFor="f-option6">
              Paypal
            </label>

            <img
              src="/img/product/single-product/card.jpg"
              alt="Payment cards"
            />

            <div className="check"></div>
          </div>

          <p>
            Please send a check to Store Name, Store Street, Store Town,
            Store State / County, Store Postcode.
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="creat_account">
          <input
            type="checkbox"
            id="f-option4"
            name="terms"
          />

          <label htmlFor="f-option4">
            I’ve read and accept the
          </label>

          <a href="#terms">
            {" "}terms &amp; conditions*
          </a>
        </div>

        {/* Place Order */}
        <a className="main_btn" href="#paypal">
          Proceed to Paypal
        </a>

      </div>
    </div>
  );
};

export default OrderSummary;


import React from "react";
import { useCart } from "../../context/CartContext";

const OrderSummary = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="col-lg-4">
        <div className="order_box">
          <h2>Your Order</h2>
          <p>Your cart is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-4">
      <div className="order_box">
        <h2>Your Order</h2>

        <ul className="list">
          <li>
            <a href="#!">
              Product
              <span>Total</span>
            </a>
          </li>

          {cartItems.map((item) => (
            <li key={item.id}>
              <a href="#!">
                {item.name}
                <span className="middle">
                  x {String(item.quantity).padStart(2, "0")}
                </span>
                <span className="last">
                  ${(Number(item.price) * item.quantity).toFixed(2)}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="list list_2">
          <li>
            <a href="#!">
              Subtotal
              <span>${subtotal.toFixed(2)}</span>
            </a>
          </li>

          <li>
            <a href="#!">
              Shipping
              <span>Flat rate: ${shipping.toFixed(2)}</span>
            </a>
          </li>

          <li>
            <a href="#!">
              Total
              <span>${total.toFixed(2)}</span>
            </a>
          </li>
        </ul>

        <div className="payment_item">
          <div className="radion_btn">
            <input type="radio" id="payment-check" name="payment" />
            <label htmlFor="payment-check">Check payments</label>
            <div className="check"></div>
          </div>
          <p>
            Please send a check to Store Name, Store Street,
            Store Town, Store State / County, Store Postcode.
          </p>
        </div>

        <div className="payment_item active">
          <div className="radion_btn">
            <input
              type="radio"
              id="payment-paypal"
              name="payment"
              defaultChecked
            />
            <label htmlFor="payment-paypal">Paypal</label>
            <img
              src="/img/product/single-product/card.jpg"
              alt="Payment methods"
            />
            <div className="check"></div>
          </div>
          <p>
            Please send a check to Store Name, Store Street,
            Store Town, Store State / County, Store Postcode.
          </p>
        </div>

        <div className="creat_account">
          <input type="checkbox" id="accept-terms" />
          <label htmlFor="accept-terms">
            I've read and accept the
          </label>
          <a href="#!"> terms &amp; conditions*</a>
        </div>

        <button type="button" className="main_btn">
          Proceed to Paypal
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;

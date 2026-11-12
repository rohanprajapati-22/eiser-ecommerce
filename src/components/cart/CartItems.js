
import React from "react";
import { Link } from "react-router-dom";

const CartItems = () => {
  return (
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="/img/product/single-product/cart-1.jpg"
                          alt="Minimalistic Product"
                        />
                      </div>
                      <div className="media-body">
                        <p>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <h5>$360.00</h5>
                  </td>

                  <td>
                    <div className="product_count">
                      <input
                        type="text"
                        value="1"
                        readOnly
                        className="input-text qty"
                      />
                    </div>
                  </td>

                  <td>
                    <h5>$360.00</h5>
                  </td>
                </tr>

                <tr>
                  <td colSpan="4">
                    <div className="checkout_btn_inner d-flex align-items-center justify-content-end">
                      <Link className="gray_btn" to="/shop">
                        Continue Shopping
                      </Link>
                    </div>
                  </td>
                </tr>

                <tr className="bottom_button">
                  <td colSpan="4">
                    <div className="cupon_text d-flex align-items-center">
                      <input type="text" placeholder="Coupon Code" />
                      <Link className="main_btn" to="/cart">
                        Apply
                      </Link>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>$360.00</h5>
                  </td>
                </tr>

                <tr className="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="checkout_btn_inner d-flex align-items-center">
                      <Link className="gray_btn" to="/shop">
                        Continue Shopping
                      </Link>
                      <Link className="main_btn" to="/checkout">
                        Proceed to checkout
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(0, previous - 1));
  };

  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="s_product_text">
        <h3>Faded SkyBlu Denim Jeans</h3>

        <h2>$149.99</h2>

        <ul className="list">
          <li>
            <Link className="active" to="/shop">
              <span>Category</span> : Household
            </Link>
          </li>

          <li>
            <Link to="/shop">
              <span>Availibility</span> : In Stock
            </Link>
          </li>
        </ul>

        <p>
          Mill Oil is an innovative oil filled radiator with the most
          modern technology. If you are looking for something that can
          make your interior look awesome, and at the same time give you
          the pleasant warm feeling during the winter.
        </p>

        <div className="product_count">
          <label htmlFor="sst">Quantity:</label>

          <input
            type="text"
            name="qty"
            id="sst"
            maxLength="12"
            value={quantity}
            title="Quantity:"
            className="input-text qty"
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*$/.test(value)) {
                setQuantity(value === "" ? "" : Number(value));
              }
            }}
          />

          <button
            onClick={increaseQuantity}
            className="increase items-count"
            type="button"
          >
            <i className="lnr lnr-chevron-up"></i>
          </button>

          <button
            onClick={decreaseQuantity}
            className="reduced items-count"
            type="button"
          >
            <i className="lnr lnr-chevron-down"></i>
          </button>
        </div>

        <div className="card_area">
          <Link className="main_btn" to="/cart">
            Add to Cart
          </Link>

          <Link className="icon_btn" to="/compare">
            <i className="lnr lnr-diamond"></i>
          </Link>

          <Link className="icon_btn" to="/wishlist">
            <i className="lnr lnr-heart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

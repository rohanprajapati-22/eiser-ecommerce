import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState("1");

  const { addToCart } = useCart();

  const maxQuantity = Number(product.stockQuantity);

  const increaseQuantity = () => {
    const currentQuantity = Number(quantity) || 1;

    if (currentQuantity < maxQuantity) {
      setQuantity(String(currentQuantity + 1));
    }
  };

  const decreaseQuantity = () => {
    const currentQuantity = Number(quantity) || 1;

    if (currentQuantity > 1) {
      setQuantity(String(currentQuantity - 1));
    }
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    // Allow empty input while editing
    if (value === "") {
      setQuantity("");
      return;
    }

    // Allow only whole numbers
    if (/^\d+$/.test(value)) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const selectedQuantity = Number(quantity);

    if (
      !Number.isInteger(selectedQuantity) ||
      selectedQuantity < 1 ||
      selectedQuantity > maxQuantity
    ) {
      toast.error("Please select a valid quantity");
      return;
    }

    addToCart(product, selectedQuantity);
    toast.success("Product added to cart!");
    setQuantity("1");
  };

  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="s_product_text">
        <h3>{product.name}</h3>

        <h2>${Number(product.price).toFixed(2)}</h2>

        <ul className="list">
          <li>
            <Link className="active" to="/shop">
              <span>Category</span> : {product.category?.name || "General"}
            </Link>
          </li>

          <li>
            <span>Availability</span> :{" "}
            {maxQuantity > 0 ? "In Stock" : "Out of Stock"}
          </li>
        </ul>

        <p>{product.description}</p>

        <p>Available Quantity: {maxQuantity}</p>

        <div className="product_count">
          <label htmlFor="sst">Quantity:</label>

          <input
            type="number"
            id="sst"
            value={quantity}
            min="1"
            max={maxQuantity}
            className="input-text qty"
            onChange={handleQuantityChange}
            onBlur={() => {
              const value = Number(quantity);

              if (!quantity || value < 1) {
                setQuantity("1");
              } else if (value > maxQuantity) {
                setQuantity(String(maxQuantity));
              }
            }}
          />

          <button
            className="increase items-count"
            type="button"
            onClick={increaseQuantity}
            disabled={Number(quantity) >= maxQuantity}
          >
            <i className="lnr lnr-chevron-up"></i>
          </button>

          <button
            className="reduced items-count"
            type="button"
            onClick={decreaseQuantity}
            disabled={Number(quantity) <= 1}
          >
            <i className="lnr lnr-chevron-down"></i>
          </button>
        </div>

        <div className="card_area">
          <button
            className="main_btn"
            type="button"
            onClick={handleAddToCart}
            disabled={maxQuantity <= 0}
          >
            Add to Cart
          </button>

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

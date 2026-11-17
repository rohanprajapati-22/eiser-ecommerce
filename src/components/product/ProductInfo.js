import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState("1");
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const maxQuantity = Number(product.stockQuantity);

  // Validate selected quantity
  const selectedQuantity = Number(quantity);

  const quantityError =
    quantity === ""
      ? "Please enter a quantity."
      : !Number.isInteger(selectedQuantity) || selectedQuantity < 1
      ? "Quantity must be at least 1."
      : selectedQuantity > maxQuantity
      ? `Only ${maxQuantity} items are available in stock.`
      : "";

  const isQuantityInvalid = Boolean(quantityError);

  const increaseQuantity = () => {
    const currentQuantity = Number(quantity) || 0;

    if (currentQuantity < maxQuantity) {
      setQuantity(String(currentQuantity + 1));
    }
  };

  const decreaseQuantity = () => {
    const currentQuantity = Number(quantity) || 0;

    if (currentQuantity > 1) {
      setQuantity(String(currentQuantity - 1));
    }
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d+$/.test(value)) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (isQuantityInvalid || maxQuantity <= 0) {
      toast.error(quantityError || "Product is out of stock.");
      return;
    }

    addToCart(product, selectedQuantity);

    toast.success("Product added to cart!");

    setQuantity("1");
    navigate("/shop");
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
            aria-invalid={isQuantityInvalid}
          />

          <button
            className="increase items-count"
            type="button"
            onClick={increaseQuantity}
            disabled={
              maxQuantity <= 0 ||
              selectedQuantity >= maxQuantity
            }
          >
            <i className="lnr lnr-chevron-up"></i>
          </button>

          <button
            className="reduced items-count"
            type="button"
            onClick={decreaseQuantity}
            disabled={selectedQuantity <= 1}
          >
            <i className="lnr lnr-chevron-down"></i>
          </button>
        </div>

        {/* Quantity Validation Message */}
        {quantityError && (
          <p className="quantity-error">
            {quantityError}
          </p>
        )}

        <div className="card_area">
          <button
            className="main_btn"
            type="button"
            onClick={handleAddToCart}
            disabled={maxQuantity <= 0 || isQuantityInvalid}
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

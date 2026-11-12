
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    return (
        <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">

                <h3>{product.name}</h3>

                <h2>${Number(product.price).toFixed(2)}</h2>

                <ul className="list">
                    <li>
                        <Link className="active" to="/shop">
                            <span>Category</span> :{" "}
                            {product.category?.name || "General"}
                        </Link>
                    </li>

                    <li>
                        <span>Availability</span> :{" "}
                        {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
                    </li>
                </ul>

                <p>{product.description}</p>

                <p>
                    Available Quantity: {product.stockQuantity}
                </p>

                <div className="product_count">
                    <label htmlFor="sst">Quantity:</label>

                    <input
                        type="number"
                        id="sst"
                        value={quantity}
                        min="1"
                        max={product.stockQuantity}
                        className="input-text qty"
                        onChange={(e) => {
                            const value = Number(e.target.value);

                            if (
                                value >= 1 &&
                                value <= product.stockQuantity
                            ) {
                                setQuantity(value);
                            }
                        }}
                    />

                    <button
                        className="increase items-count"
                        type="button"
                        onClick={increaseQuantity}
                        disabled={quantity >= product.stockQuantity}
                    >
                        <i className="lnr lnr-chevron-up"></i>
                    </button>

                    <button
                        className="reduced items-count"
                        type="button"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const CartItems = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity
    } = useCart();

    const [quantities, setQuantities] = useState({});

    const subtotal = cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    const getQuantity = (item) => {
        return quantities[item.id] ?? String(item.quantity);
    };

    const handleQuantityChange = (item, value) => {
        // Allow empty input while editing
        if (value === "" || /^\d+$/.test(value)) {
            setQuantities(prev => ({
                ...prev,
                [item.id]: value
            }));
        }
    };

    const handleQuantityBlur = (item) => {
        const value = quantities[item.id];

        // No change in input
        if (value === undefined) return;

        const quantity = Number(value);

        if (!Number.isInteger(quantity) || quantity < 1) {
            toast.error("Please enter a valid quantity.");

            setQuantities(prev => ({
                ...prev,
                [item.id]: String(item.quantity)
            }));

            return;
        }

        if (quantity > Number(item.stockQuantity)) {
            toast.error(
                `Only ${item.stockQuantity} items are available in stock.`
            );

            setQuantities(prev => ({
                ...prev,
                [item.id]: String(item.quantity)
            }));

            return;
        }

        updateQuantity(item.id, quantity);

        setQuantities(prev => {
            const updated = { ...prev };
            delete updated[item.id];
            return updated;
        });
    };

    if (cartItems.length === 0) {
        return (
            <section className="cart_area">
                <div className="container text-center section_gap">
                    <h3>Your cart is empty!</h3>
                    <p>Add some products to continue shopping.</p>

                    <Link to="/shop" className="main_btn">
                        Continue Shopping
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="cart_area">
            <div className="container">
                <div className="cart_inner">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.name}
                                                        style={{
                                                            width: "100px",
                                                            height: "100px",
                                                            objectFit: "contain"
                                                        }}
                                                    />
                                                </div>

                                                <div className="media-body">
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            ${Number(item.price).toFixed(2)}
                                        </td>

                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                max={item.stockQuantity}
                                                value={getQuantity(item)}
                                                className="form-control"
                                                style={{ width: "80px" }}
                                                onChange={e =>
                                                    handleQuantityChange(
                                                        item,
                                                        e.target.value
                                                    )
                                                }
                                                onBlur={() =>
                                                    handleQuantityBlur(item)
                                                }
                                                onKeyDown={e => {
                                                    if (e.key === "Enter") {
                                                        e.currentTarget.blur();
                                                    }
                                                }}
                                            />

                                            <small>
                                                Available: {item.stockQuantity}
                                            </small>
                                        </td>

                                        <td>
                                            $
                                            {(
                                                Number(item.price) *
                                                item.quantity
                                            ).toFixed(2)}
                                        </td>

                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    removeFromCart(item.id);

                                                    toast.success(
                                                        "Product removed from cart"
                                                    );
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td colSpan="3">
                                        <h4>Subtotal</h4>
                                    </td>

                                    <td colSpan="2">
                                        <h4>${subtotal.toFixed(2)}</h4>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="5">
                                        <Link
                                            to="/shop"
                                            className="gray_btn"
                                        >
                                            Continue Shopping
                                        </Link>

                                        <Link
                                            to="/checkout"
                                            className="main_btn"
                                        >
                                            Proceed to Checkout
                                        </Link>
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

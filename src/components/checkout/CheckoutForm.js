import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ children }) => {
  const { cartItems, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const formData = new FormData(formElement);

    const customerName = [formData.get("firstName"), formData.get("lastName")]
      .map((value) => value.trim())
      .filter(Boolean)
      .join(" ");

    const address = [formData.get("add1"), formData.get("add2")]
      .map((value) => value.trim())
      .filter(Boolean)
      .join(", ");

    const orderData = {
      customerName,
      email: formData.get("email"),
      phone: formData.get("number"),
      address,
      city: formData.get("city"),
      postalCode: formData.get("zip"),
      items: cartItems.map((item) => ({
        productId: Number(item.productId ?? item.id),
        quantity: Number(item.quantity),
      })),
    };

    try {
      setSubmitting(true);

      const response = await createOrder(orderData);

      navigate("/order-confirmation", {
        state: {
          order: response,
          customer: orderData,
          items: cartItems,
        },
      });

      clearCart();
      formElement.reset();
    } catch (error) {
      console.error("Order placement error:", error);

      toast.error(
        error.response?.data?.message ||
          error.response?.data ||
          "Unable to place your order. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="billing_details">
      <form className="row" onSubmit={handlePlaceOrder}>       
        <div className="col-lg-8">
          <h3>Billing Details</h3>

          <div className="row contact_form">
            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First name"
                required
              />
            </div>

            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>

            <div className="col-md-12 form-group">
              <input
                type="text"
                className="form-control"
                name="company"
                placeholder="Company name (Optional)"
              />
            </div>

            <div className="col-md-6 form-group p_star">
              <input
                type="tel"
                className="form-control"
                name="number"
                placeholder="Phone number"
                required
              />
            </div>

            <div className="col-md-6 form-group p_star">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                name="add1"
                placeholder="Address line 01"
                required
              />
            </div>

            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                name="add2"
                placeholder="Address line 02 (Optional)"
              />
            </div>

            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="Town/City"
                required
              />
            </div>

            <div className="col-md-12 form-group">
              <input
                type="text"
                className="form-control"
                name="zip"
                placeholder="Postcode/ZIP"
                required
              />
            </div>

            {/* Order Notes */}
            <div className="col-md-12 form-group">
              <h3>Additional Information</h3>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                placeholder="Order Notes (Optional)"
              />
            </div>
          </div>
        </div>

        {React.cloneElement(children, { submitting })}
      </form>
    </div>
  );
};

export default CheckoutForm;

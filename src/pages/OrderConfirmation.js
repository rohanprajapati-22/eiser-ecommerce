import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();

  const { order, customer, items } = location.state || {};

  // Redirect if order information is missing
  if (!order || !customer || !items) {
    return <Navigate to="/" replace />;
  }

  const subtotal = items.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0,
  );

  const total = Number(order.totalAmount);
  const shipping = total - subtotal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="order_confirmation_area section_gap">
      <div className="container">
        {/* Success Message */}
        <div className="confirmation_header text-center">
          <div className="confirmation_check">
            <i className="ti-check"></i>
          </div>

          <h2>Order Placed Successfully!</h2>

          <p>
            Thank you for shopping with Eiser. Your order has been received
            successfully.
          </p>

          <h4>Order #{order.orderId}</h4>

          <span className="order_status">{order.orderStatus}</span>
        </div>

        {/* Order Information */}
        <div className="confirmation_box">
          <h3>Order Information</h3>

          <div className="row">
            <div className="col-lg-6">
              <p>
                <strong>Order ID:</strong> #{order.orderId}
              </p>

              <p>
                <strong>Order Status:</strong> {order.orderStatus}
              </p>
            </div>

            <div className="col-lg-6">
              <p>
                <strong>Customer:</strong> {customer.customerName}
              </p>

              <p>
                <strong>Email:</strong> {customer.email}
              </p>

              <p>
                <strong>Phone:</strong> {customer.phone}
              </p>
            </div>
          </div>

          <hr />

          {/* Shipping Address */}
          <h3>Shipping Address</h3>

          <p>{customer.customerName}</p>
          <p>{customer.address}</p>
          <p>
            {customer.city} - {customer.postalCode}
          </p>

          <hr />

          {/* Ordered Products */}
          <h3>Ordered Products</h3>

          <div className="table-responsive">
            <table className="table confirmation_table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item, index) => {
                  const image =
                    item.imageUrl ||
                    item.image ||
                    item.img ||
                    "/img/product/single-product/s-product-1.jpg";

                  return (
                    <tr key={`${item.id}-${index}`}>
                      <td>
                        <div className="confirmation_product">
                          <img
                            src={image}
                            alt={item.name}
                            onError={(e) => {
                              e.currentTarget.src =
                                "/img/product/single-product/s-product-1.jpg";
                            }}
                          />

                          <span>{item.name}</span>
                        </div>
                      </td>

                      <td>${Number(item.price).toFixed(2)}</td>

                      <td>{item.quantity}</td>

                      <td>
                        $
                        {(Number(item.price) * Number(item.quantity)).toFixed(
                          2,
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Price Summary */}
          <div className="confirmation_total">
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="grand_total">
              <strong>Grand Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          {/* Buttons */}
          <div className="confirmation_buttons">
            <Link to="/shop" className="main_btn">
              Continue Shopping
            </Link>

            <button type="button" className="print_btn" onClick={handlePrint}>
              <i className="ti-printer"></i> Print Invoice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;

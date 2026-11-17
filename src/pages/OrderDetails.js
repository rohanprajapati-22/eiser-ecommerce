
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrderById } from "../services/orderService";

const OrderDetails = () => {
    const { id } = useParams();

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const data = await getOrderById(id);
                setOrder(data);
            } catch (error) {
                console.error("Error fetching order:", error);
                setError("Unable to load order details.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);

    if (loading) {
        return <div className="container section_gap text-center">
            <h4>Loading order details...</h4>
        </div>;
    }

    if (error || !order) {
        return <div className="container section_gap text-center">
            <h4>{error || "Order not found."}</h4>
            <Link to="/my-orders" className="main_btn">
                Back to My Orders
            </Link>
        </div>;
    }

    const subtotal = order.items.reduce(
        (total, item) => total + Number(item.subTotal),
        0
    );

    const shipping = Number(order.totalAmount) - subtotal;

    return (
        <section className="section_gap">
            <div className="container">

                <div className="mb-4">
                    <h2>Order Details</h2>
                    <p>Order #{order.id}</p>
                    <span className="badge bg-success">
                        {order.orderStatus}
                    </span>
                </div>

                <div className="row mb-4">

                    <div className="col-lg-6">
                        <h4>Customer Information</h4>
                        <p><strong>Name:</strong> {order.customerName}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Phone:</strong> {order.phone}</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Shipping Address</h4>
                        <p>{order.customerName}</p>
                        <p>{order.address}</p>
                        <p>{order.city} - {order.postalCode}</p>
                        <p>
                            <strong>Order Date:</strong>{" "}
                            {new Date(order.orderDate).toLocaleString()}
                        </p>
                    </div>

                </div>

                <h4 className="mb-3">Ordered Products</h4>

                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>

                        <tbody>
                            {order.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.productName}</td>
                                    <td>${Number(item.price).toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${Number(item.subTotal).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="row justify-content-end">
                    <div className="col-lg-4">
                        <div className="p-3 border">
                            <p className="d-flex justify-content-between">
                                <strong>Subtotal:</strong>
                                <span>${subtotal.toFixed(2)}</span>
                            </p>

                            <p className="d-flex justify-content-between">
                                <strong>Shipping:</strong>
                                <span>${shipping.toFixed(2)}</span>
                            </p>

                            <hr />

                            <h4 className="d-flex justify-content-between">
                                <strong>Grand Total:</strong>
                                <strong>
                                    ${Number(order.totalAmount).toFixed(2)}
                                </strong>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <Link to="/my-orders" className="main_btn">
                        Back to My Orders
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default OrderDetails;

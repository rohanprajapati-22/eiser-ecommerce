import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../services/orderService";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Unable to load orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container section_gap text-center">
        <h4>Loading orders...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section_gap text-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="section_gap">
      <div className="container">
        <h2 className="mb-4">My Orders</h2>

        {orders.length === 0 ? (
          <div className="text-center">
            <h4>No orders found!</h4>
            <Link to="/shop" className="main_btn mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Products</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>{order.items.length} items</td>
                    <td>${Number(order.totalAmount).toFixed(2)}</td>
                    <td>{order.orderStatus}</td>
                    <td>
                      <Link
                        to={`/order-details/${order.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyOrders;

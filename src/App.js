import logo from "./logo.svg";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/layout/Header";
// import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
              path="/order-confirmation"
              element={<OrderConfirmation />}
            />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/order-details/:id" element={<OrderDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
         <ToastContainer
                    position="top-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    pauseOnHover
                    draggable
                    theme="colored"
                />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

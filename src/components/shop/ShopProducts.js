import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/productService";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className="col-lg-9">Loading products...</div>;
  }

  if (error) {
    return <div className="col-lg-9">{error}</div>;
  }

  return (
    <div className="col-lg-12">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6" key={product.id}>
            <div className="single-product">
              <div className="product-img">
                <img
                  className="img-fluid w-100"
                  src={product.imageUrl}
                  alt={product.name}
                />

                <div className="p_icon">
                  <Link to={`/product-details/${product.id}`}>
                    <i className="ti-eye"></i>
                  </Link>
                  <Link to="/wishlist">
                    <i className="ti-heart"></i>
                  </Link>
                  <Link to="/cart">
                    <i className="ti-shopping-cart"></i>
                  </Link>
                </div>
              </div>

              <div className="product-btm">
                <Link to={`/product-details/${product.id}`} className="d-block">
                  <h4>{product.name}</h4>
                </Link>

                <div className="mt-3">
                  <span className="mr-4">
                    ${Number(product.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;

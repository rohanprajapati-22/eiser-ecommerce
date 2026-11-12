
import React from "react";
import { Link } from "react-router-dom";

const ProductBanner = () => {
  return (
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content d-md-flex justify-content-between align-items-center">

            <div className="mb-3 mb-md-0">
              <h2>Product Details</h2>
              <p>Very us move be blessed multiply night</p>
            </div>

            <div className="page_link">
              <Link to="/">Home</Link>
              <Link to="/product-details/1">Product Details</Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;

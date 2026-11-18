import React from "react";
import { Link } from "react-router-dom";


const InspiredProducts = ({ products }) => {
  return (
    <section className="inspired_product_area section_gap_bottom_custom">
      <div className="container">

        <div className="main_title">
          <h2>Inspired Products</h2>
          <p>Products selected for your inspiration.</p>
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6" key={product.id}>
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
                    {/* <Link to="/wishlist">
                      <i className="ti-heart"></i>
                    </Link> */}
                    <Link to="/cart">
                      <i className="ti-shopping-cart"></i>
                    </Link>
                  </div>
                </div>

                <div className="product-btm">
                  <Link to={`/product-details/${product.id}`}>
                    <h4>{product.name}</h4>
                  </Link>
                  <div className="mt-3">
                    <h5>${product.price}</h5>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InspiredProducts;

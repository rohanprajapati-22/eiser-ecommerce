
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Latest Fashion Shoes",
    price: "$120.00",
    oldPrice: "$150.00",
    image: "/img/product/feature-product/f-p-1.jpg",
  },
  {
    id: 2,
    name: "Classic Fashion Bag",
    price: "$85.00",
    oldPrice: "$100.00",
    image: "/img/product/feature-product/f-p-2.jpg",
  },
  {
    id: 3,
    name: "Stylish Men's Watch",
    price: "$95.00",
    oldPrice: "$120.00",
    image: "/img/product/feature-product/f-p-3.jpg",
  },

];

const FeaturedProducts = () => {
  return (
    <section className="feature_product_area section_gap_bottom_custom">
      <div className="container">

        <div className="main_title">
          <h2>Featured Products</h2>
          <p>Discover our latest collection of fashion products.</p>
        </div>

        <div className="row">

          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <div className="single-product">

                <div className="product-img">
                  <img
                    className="img-fluid w-100"
                    src={product.image}
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
                  <Link
                    to={`/product-details/${product.id}`}
                    className="d-block"
                  >
                    <h4>{product.name}</h4>
                  </Link>

                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5>{product.price}</h5>
                        <del>{product.oldPrice}</del>
                      </div>
                    </div>
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

export default FeaturedProducts;

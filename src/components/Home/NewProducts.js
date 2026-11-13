
import React from "react";
import { Link } from "react-router-dom";

// Featured product on the left side
const featuredProduct = {
  name: "Men’s summer t-shirt",
  collection: "Collection of 2019",
  price: "$120.70",
  image: "/img/product/new-product/new-product1.png",
};

// Four products on the right side
const products = [
  {
    id: 1,
    name: "Nike latest sneaker",
    price: "$25.00",
    oldPrice: "$35.00",
    image: "/img/product/new-product/n1.jpg",
  },
  {
    id: 2,
    name: "Men’s denim jeans",
    price: "$25.00",
    oldPrice: "$35.00",
    image: "/img/product/new-product/n2.jpg",
  },
  {
    id: 3,
    name: "Quartz hand watch",
    price: "$25.00",
    oldPrice: "$35.00",
    image: "/img/product/new-product/n3.jpg",
  },
  {
    id: 4,
    name: "Adidas sport shoe",
    price: "$25.00",
    oldPrice: "$35.00",
    image: "/img/product/new-product/n4.jpg",
  },
];

const NewProducts = ({ products }) => {
  return (
    <section className="new_product_area  section_gap_bottom_custom">
      <div className="container">

        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="main_title">
              <h2>
                <span>New Products</span>
              </h2>
              <p>
                Bring called seed first of third give itself now ment
              </p>
            </div>
          </div>
        </div>

        <div className="row">

          {/* Left Side - Featured Product */}
          <div className="col-lg-6">
            <div className="new_product">

              <h5 className="text-uppercase">
                {featuredProduct.collection}
              </h5>

              <h3 className="text-uppercase">
                {featuredProduct.name}
              </h3>

              <div className="product-img">
                <img
                  className="img-fluid"
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                />
              </div>

              <h4>${featuredProduct.price}</h4>

              <Link to="/cart" className="main_btn">
                Add to cart
              </Link>

            </div>
          </div>

          {/* Right Side - Four Products */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="row">

              {products.map((product) => (
                <div
                  className="col-lg-6 col-md-6"
                  key={product.id}
                >
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

                      <Link
                        to={`/product-details/${product.id}`}
                        className="d-block"
                      >
                        <h4>{product.name}</h4>
                      </Link>

                      <div className="mt-3">
                        <span className="mr-4">
                          ${product.price}
                        </span>

                        <del>{product.oldPrice}</del>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewProducts;

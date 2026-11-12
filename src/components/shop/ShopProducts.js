
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i1.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 2,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i2.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 3,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i3.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 4,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i4.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 5,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i5.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 6,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i6.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 7,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i7.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 8,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i8.jpg",
    price: 25,
    oldPrice: 35,
  },
  {
    id: 9,
    name: "Latest men’s sneaker",
    image: "/img/product/inspired-product/i2.jpg",
    price: 25,
    oldPrice: 35,
  },
//   {
//     id: 10,
//     name: "Latest men’s sneaker",
//     image: "/img/product/inspired-product/i1.jpg",
//     price: 25,
//     oldPrice: 35,
//   },
];

const ShopProducts = () => {
  return (
    <div className="col-lg-9">

      {/* Product Sorting */}
      <div className="product_top_bar">
        <div className="left_dorp">
          <select className="sorting">
            <option value="1">Default sorting</option>
            <option value="2">Default sorting 01</option>
            <option value="4">Default sorting 02</option>
          </select>

          <select className="show">
            <option value="12">Show 12</option>
            <option value="14">Show 14</option>
            <option value="16">Show 16</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="latest_product_inner">
        <div className="row">

          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <div className="single-product">

                <div className="product-img">
                  <img
                    className="card-img"
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
                    <span className="mr-4">
                      ${product.price.toFixed(2)}
                    </span>

                    <del>
                      ${product.oldPrice.toFixed(2)}
                    </del>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default ShopProducts;

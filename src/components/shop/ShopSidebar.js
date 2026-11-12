
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Frozen Fish",
  "Dried Fish",
  "Fresh Fish",
  "Meat Alternatives",
  "Fresh Fish",
  "Meat Alternatives",
  "Meat",
];

const brands = [
  "Apple",
  "Asus",
  "Gionee",
  "Micromax",
  "Samsung",
];

const colors = [
  "Black",
  "Black Leather",
  "Black with red",
  "Gold",
  "Spacegrey",
];

const ShopSidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="left_sidebar_area">

        {/* Browse Categories */}
        <aside className="left_widgets p_filter_widgets">
          <div className="l_w_title">
            <h3>Browse Categories</h3>
          </div>

          <div className="widgets_inner">
            <ul className="list">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to="/shop">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Brand */}
        <aside className="left_widgets p_filter_widgets">
          <div className="l_w_title">
            <h3>Product Brand</h3>
          </div>

          <div className="widgets_inner">
            <ul className="list">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className={brand === "Gionee" ? "active" : ""}
                >
                  <Link to="/shop">{brand}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Color Filter */}
        <aside className="left_widgets p_filter_widgets">
          <div className="l_w_title">
            <h3>Color Filter</h3>
          </div>

          <div className="widgets_inner">
            <ul className="list">
              {colors.map((color) => (
                <li
                  key={color}
                  className={color === "Black with red" ? "active" : ""}
                >
                  <Link to="/shop">{color}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Price Filter */}
        <aside className="left_widgets p_filter_widgets">
          <div className="l_w_title">
            <h3>Price Filter</h3>
          </div>

          <div className="widgets_inner">
            <div className="range_item">
              <div id="slider-range"></div>

              <div>
                <label htmlFor="amount">Price : </label>
                <input
                  type="text"
                  id="amount"
                  readOnly
                  value=""
                />
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ShopSidebar;

import React from "react";
import ShopBanner from "../components/shop/ShopBanner";
import ShopProducts from "../components/shop/ShopProducts";
import ShopSidebar from "../components/shop/ShopSidebar";

const Shop = () => {
  return (
    <>
      <ShopBanner />

      <section className="cat_product_area section_gap">
        <div className="container">
          <div className="row flex-row-reverse">
            <ShopProducts />
               <ShopSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

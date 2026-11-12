import React from "react";
import ProductBanner from "../components/product/ProductBanner";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";

const ProductDetails = () => {
  return (
    <>
      <ProductBanner />

      <div className="product_image_area">
        <div className="container">
          <div className="row s_product_inner">
            <ProductGallery />
            <ProductInfo />
         
          </div>
        </div>
      </div>
         <ProductDescription />
    </>
  );
};

export default ProductDetails;

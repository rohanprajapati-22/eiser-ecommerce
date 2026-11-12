
import React, { useState } from "react";

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbnails = [
    "/img/product/single-product/s-product-s-2.jpg",
    "/img/product/single-product/s-product-s-3.jpg",
    "/img/product/single-product/s-product-s-4.jpg",
  ];

  const mainImages = [
    "/img/product/single-product/s-product-1.jpg",
    "/img/product/single-product/s-product-1.jpg",
    "/img/product/single-product/s-product-1.jpg",
  ];

  return (
    <div className="col-lg-6">
      <div className="s_product_img">
        <div id="carouselExampleIndicators" className="carousel slide">
          <ol className="carousel-indicators">
            {thumbnails.map((image, index) => (
              <li
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <img src={image} alt={`Product thumbnail ${index + 1}`} />
              </li>
            ))}
          </ol>

          <div className="carousel-inner">
            {mainImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${index + 1} slide`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

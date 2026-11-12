
import React from "react";

const ProductGallery = ({ product }) => {
    return (
        <div className="col-lg-6">
            <div className="s_product_img">
                <img
                    className="d-block w-100"
                    src={product.imageUrl}
                    alt={product.name}
                />
            </div>
        </div>
    );
};

export default ProductGallery;

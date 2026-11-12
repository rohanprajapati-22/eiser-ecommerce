
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductBanner from "../components/product/ProductBanner";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import { getProductById } from "../services/productService";

const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProduct = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("Unable to load product details.");
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    return (
        <>
            <ProductBanner />

            {loading && <p className="text-center">Loading product...</p>}

            {error && <p className="text-center">{error}</p>}

            {product && (
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                            <ProductGallery product={product} />
                            <ProductInfo product={product} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;

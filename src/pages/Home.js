
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import OfferBanner from "../components/Home/OfferBanner";
import LatestBlog from "../components/Home/LatestBlog";
import NewProducts from "../components/Home/NewProducts";
import InspiredProducts from "../components/Home/InspiredProducts";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const Home = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.filter(product => product.isActive));
      } catch (error) {
        console.error("Error fetching home products:", error);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const featuredProducts = products.filter(product => product.isFeatured);
  const newProducts = products.filter(product => product.isNew);
  const inspiredProducts = products.filter(product => product.isInspired);
  return (
    <>
      <Hero />
      <Features />
       {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <FeaturedProducts products={featuredProducts} />
          <NewProducts products={newProducts} />
          <InspiredProducts products={inspiredProducts} />
        </>
      )}
      {/* <FeaturedProducts /> */}
      <OfferBanner />
      {/* <NewProducts /> */}
      {/* <InspiredProducts /> */}
      <LatestBlog />
    </>
  );
};

export default Home;

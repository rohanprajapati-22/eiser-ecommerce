import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import OfferBanner from "../components/Home/OfferBanner";
import LatestBlog from "../components/Home/LatestBlog";
import NewProducts from "../components/Home/NewProducts";
import InspiredProducts from "../components/Home/InspiredProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <OfferBanner />
      <NewProducts />
      <InspiredProducts />
      <LatestBlog />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Extension from "../components/Extension";
import Features from "../components/Features";
import Information from "../components/Information";
import ComingSoon from "../components/ComingSoon";
import Services from "../components/Services";
import Graph from "../components/Graph";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <main className="px-2 h-screen sm:px-3.5 lg:px-8">
      <Navbar />
      <Hero />
      <Content />
      <Extension />
      <Features />
      <Information />
      <ComingSoon />
      <Services />
      <Graph />
      <Reviews />
    </main>
  );
};

export default Home;

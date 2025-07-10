import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";
import Arts from "./components/Arts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-main overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Arts />
      <Footer />
    </div>
  );
}

export default App;

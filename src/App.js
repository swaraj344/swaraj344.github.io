import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "boxicons";
import "boxicons/css/boxicons.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

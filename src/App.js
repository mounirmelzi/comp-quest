import React from "react";
import About from "./components/About";
import Agenda from "./components/Agenda";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Agenda />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navber from "./components/Navber";
import Banner from "./components/Banner";
import About from "./components/About";
import Relavent from "./components/Relavent";
import Benifits from "./components/Benifits";
import Surmons from "./components/Surmons";
import Inovate from "./components/Inovate";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import "./App.css";
import "./responsive.css";

function App() {
  return (
    <>
      <Navber />
      <Banner />
      <About />
      <Relavent />
      <Benifits />
      <Surmons />
      <Visit />
      <Inovate />
      <Footer />
    </>
  );
}

export default App;

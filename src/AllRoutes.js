import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/core/Home";
import About from "../src/core/About";
import Footer from "../src/components/Footer/footer";
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default AllRoutes;

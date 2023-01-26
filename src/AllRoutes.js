import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/core/Home";
import About from "../src/core/About";
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

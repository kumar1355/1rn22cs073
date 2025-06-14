import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProductsPage from "./AllProductsPage";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Customer from "./pages/customer";
import Chart from "./pages/chart";
import NotFound from "./pages/notfound";
import Orders from "./pages/orders";



function App() {
  
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/*  */}
    </>
  )
}

export default App
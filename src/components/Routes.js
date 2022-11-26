import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import PaymentCorfirmed from "../pages/PaymentCorfirmed";
import Redirect from "./Redirect";

function AppRoutes() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/confimed" element={<PaymentCorfirmed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;

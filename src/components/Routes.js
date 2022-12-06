import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BulkEmail from "../pages/BulkEmail";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import PaymentCorfirmed from "../pages/PaymentCorfirmed";
import Redirect from "./Redirect";
import TableRedirect from "./TableRedirect";

function AppRoutes() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/tableredirect" element={<TableRedirect />} />
          <Route path="/confirmed" element={<PaymentCorfirmed />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/emails" element={<BulkEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";

function AppRoutes() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;

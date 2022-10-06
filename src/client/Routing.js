import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import AllObjects from "./components/AllObjects";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="collection" element={<AllObjects />} />
      </Routes>
    </Router>
  );
}

export default Routing;

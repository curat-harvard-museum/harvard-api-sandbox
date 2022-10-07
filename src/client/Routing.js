import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import AllObjects from "./components/FullCollection/AllObjects";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllObjects />} />
      </Routes>
    </Router>
  );
}

export default Routing;

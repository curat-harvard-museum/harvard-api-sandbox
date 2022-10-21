import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import AllObjects from "./components/FullCollection/AllObjects";
import Exhibition from "./components/CurrentExhibition/Exhibition";
import Spectrum from "./components/Spectrum";
import AllColorsByObject from "./components/AllColorsByObject";
import Audios from "./components/Audios";
import Century from "./components/Century";
import AllHues from "./components/AllHues";
import Classification from "./components/Classification";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllObjects />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/spectrum" element={<Spectrum />} />
        <Route path="/colorobj" element={<AllColorsByObject />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/century" element={<Century />} />
        <Route path="/allhues" element={<AllHues />} />
        <Route path="/classification" element={<Classification />} />
      </Routes>
    </Router>
  );
}

export default Routing;

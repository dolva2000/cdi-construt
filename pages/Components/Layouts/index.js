import React from "react";
import Headers from "../layouts/Header";
import Footers from "../layouts/Footer";
import Preloader from "../layouts/Preloader";

export default function index({ children }) {
  return (
    <div className="building_version" data-spy="scroll" data-target=".header">
      <Preloader />
      <Headers />
      {children}
      <Footers />
    </div>
  );
}

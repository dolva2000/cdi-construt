import React from "react";
import Headers from "./Header";
import Footers from "./Footer";
import Preloader from "./Preloader";

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

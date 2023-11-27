import React from "react";
import './index.css';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;

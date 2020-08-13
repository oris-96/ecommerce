import React from "react";

import "./App.css";

import Product from "./components/product";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Product />
    </React.Fragment>
  );
}

export default App;

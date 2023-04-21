import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/services" Component={Services}></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/sign-up" Component={SignUp}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

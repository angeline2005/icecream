import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./MainPage";
import { Customize } from "./Customize";
import { Branded } from "./Branded";
import Footer from "./Footer";
import  AddToCart  from "./AddToCart";
import { LoginMainPage } from "./LoginMainPage";
import { LoginPage } from "./LoginPage";
import { AddNew } from "./AddNew";
import { Modify } from "./Modify";
function App() {

  const [resultantArray, setResultantArray] = useState([]);
  const updateResultantArray = (newItems) => {
    setResultantArray((prevArray) => [
      ...prevArray,
      ...(Array.isArray(newItems) ? newItems : [newItems]),
    ]);
  };

  const [cartItems, setCartItems] = useState([]); 
  const movable = (finalSelection) => {
    setCartItems((prevCart) => [...prevCart, finalSelection]);
  };


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/customize" element={<Customize movable={movable} />} />
          <Route
            path="/branded"
            element={<Branded updateResultantArray={updateResultantArray} />}
          />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/addtocart"
            element={
              <AddToCart
                resultantArray={resultantArray}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/loginmainpage" element={<LoginMainPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/Modify" element={<Modify />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

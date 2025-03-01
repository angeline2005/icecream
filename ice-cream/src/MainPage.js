import React from "react";
import { NavBar } from "./NavBar";
import { MainContent } from "./MainContent";
import Footer from "./Footer";

export const MainPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#FAE1C1",
        minHeight: "100vh", 
        height: "auto", 
        display: "flex",
        flexDirection: "column", 
      }}
    >
      <NavBar />
      <MainContent />
      <Footer/>
    </div>
  );
};

import React from "react";
import loginpagebg from "./loginpagebg.png";
import loginpagebg2 from "./loginpagebg2.png";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#FAE1C1",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        className="row d-flex justify-content-center"
        style={{
          padding: "0px",
          fontWeight: "bold",
          fontSize: "100px",
          lineHeight: "90px",
        }}
      >
        <p
          className="text-center"
          style={{
            margin: "0px",
            padding: "0px",
            lineHeight: "90px",
            color: "#5C4033",
          }}
        >
          SMOOTH MANAGEMENT , <br />
          <span style={{ color: "#F6A7B9", fontFamily: "Pacifico, cursive" }}>
            COOL PROFIT
          </span>
        </p>
      </div>

      <div
        className="row"
        style={{
          marginTop: "100px",
          height: "400px",
          marginLeft: "200px",
          marginRight: "200px",
          transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="col" style={{ width: "200px", padding: "0px" }}>
          <img
            src={loginpagebg}
            style={{ marginTop: "0", height: "400px", width: "360px" }}
            alt="Ice Cream Background"
          />
        </div>
        <div className="col" style={{ width: "400px" }}>
          <p
            style={{
              marginTop: "50px",
              marginLeft: "150px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Manage
          </p>
          <p>
            Welcome to ChillCrave – your ultimate destination for delicious ice
            cream! 🍦 "Scoop Up New Flavors, Toggle Availability with Ease!" 🍨
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "#5C4033",
              borderRadius: "20px",
              border: "2px solid #5C4033",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              width: "auto",
            }}
            onClick={() => navigate("/addnew")}
          >
            Add New
          </button>
          <button
            style={{
              marginLeft: "200px",
              backgroundColor: "white",
              color: "#5C4033",
              borderRadius: "20px",
              border: "2px solid #5C4033",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              width: "auto",
            }}
            onClick={() => navigate("/modify")}
          >
            Modify
          </button>
        </div>
        <div className="col" style={{ width: "200px" }}>
          <img
            src={loginpagebg2}
            style={{ marginTop: "0", height: "400px", width: "360px" }}
            alt="Ice Cream Background 2"
          />
        </div>
      </div>
    </div>
  );
};

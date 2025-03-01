import React from 'react'
import loginbg from './loginbg.png'
import { useNavigate } from "react-router-dom";

export const Login = () => {
   const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="row"
        style={{
          marginLeft: "600px",
          marginTop: "100px",
          width: "600px",
          height: "500px",
          backgroundColor: "rgba(255, 182, 193, 0.7)", 
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div
          className="row"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "26px",
            marginBottom: "20px",
          }}
        >
          <p style={{ marginLeft: "220px" }}>LOGIN</p>
        </div>

        <input
          type="text"
          placeholder="Name"
          style={{
            width: "80%",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #fff",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="email"
          placeholder="Email ID"
          style={{
            width: "80%",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #fff",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "80%",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #fff",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="Employee Code"
          style={{
            width: "80%",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #fff",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          style={{
            width: "200px", 
            height: "50px", 
            backgroundColor: "white",
            color: "#5c4033",
            border: "2px solid #5c4033",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f5c6b5")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
          onClick={() => navigate("/loginpage")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

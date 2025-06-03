import React, { useState } from "react";
import loginbg from "./loginbg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    employeeCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        formData
      );
      if (response.data.success) {
        alert("Login successful!");
        navigate("/loginpage"); // 🔁 Change this to your next route
      } else {
        alert("Invalid credentials or user not found.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          style={inputStyle}
        />
        <input
          type="text"
          name="employeeCode"
          value={formData.employeeCode}
          onChange={handleChange}
          placeholder="Employee Code"
          style={inputStyle}
        />

        <button
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f5c6b5")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
          onClick={handleLogin}
        >
          Login
        </button>

        <p style={{ marginTop: "15px", color: "white" }}>
          Are you a newbie?{" "}
          <span style={signupLinkStyle} onClick={() => navigate("/Signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "80%",
  padding: "10px",
  margin: "5px 0",
  border: "1px solid #fff",
  borderRadius: "5px",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
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
};

const signupLinkStyle = {
  color: "#5c4033",
  fontWeight: "bold",
  textDecoration: "underline",
  cursor: "pointer",
};

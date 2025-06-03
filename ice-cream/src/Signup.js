import React, { useState } from "react";
import axios from "axios";
import loginbg from "./loginbg.png";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    employeecode: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.placeholder.toLowerCase().replace(/\s/g, "")]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // POST data to your backend API
      const response = await axios.post("http://localhost:5001/api/signup", formData);
      alert(response.data.message);
      navigate("/loginmainpage"); // Navigate after success
    } catch (error) {
      alert("Signup failed: " + (error.response?.data?.message || error.message));
    }
  };

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
          <p style={{ marginLeft: "220px" }}>SIGN UP</p>
        </div>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
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
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
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
          value={formData.employeeCode}
          onChange={handleChange}
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
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5c6b5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import loginbg from "./loginbg.png"; // Assuming you have a background image

const ViewPhotos = () => {
  const [items, setItems] = useState([]);

  // Fetch uploaded items on mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/customizes/photos",
        );
        setItems(response.data);
      } catch (err) {
        console.error(
          "Error fetching items:",
          err.response?.data || err.message,
        );
        alert("Failed to fetch uploaded items");
      }
    };

    fetchItems();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {items.length === 0 ? (
        <h2 style={{ color: "white" }}>No uploaded items found</h2>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 182, 193, 0.85)",
              borderRadius: "10px",
              width: "250px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={`data:image/png;base64,${item.imageBase64}`}
              alt={item.title}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p style={{ color: item.available ? "green" : "red" }}>
              {item.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewPhotos;

import React, { useState } from "react";
import { NavBar } from "./NavBar";
import brandedimage from "./brandedimage.png";
import search from "./search.png";
import milksplash from "./milksplash.png";
import ex_gelato from "./ex_gelato.png";
import "./Card.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export const Branded = ({ updateResultantArray }) => {
  const navigate = useNavigate();
  const iceCreamCategories = [
    {
      type: "Gelato",
      iceCreams: [
        {
          id: 1,
          img: ex_gelato,
          title: "Chocolate Gelato",
          price: 43,
          availability: "Available",
          selected: false,
        },
        {
          id: 2,
          img: ex_gelato,
          title: "Vanilla Gelato",
          price: 40,
          availability: "Out of Stock",
          selected: false,
        },
        {
          id: 3,
          img: ex_gelato,
          title: "Strawberry Gelato",
          price: 42,
          availability: "Available",
          selected: false,
        },
      ],
    },
    {
      type: "Sorbet",
      iceCreams: [
        {
          id: 4,
          img: ex_gelato,
          title: "Mango Sorbet",
          price: 45,
          availability: "Available",
          selected: false,
        },
        {
          id: 5,
          img: ex_gelato,
          title: "Lemon Sorbet",
          price: 39,
          availability: "Available",
          selected: false,
        },
        {
          id: 6,
          img: ex_gelato,
          title: "Raspberry Sorbet",
          price: 41,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Frozen Yogurt",
      iceCreams: [
        {
          id: 7,
          img: ex_gelato,
          title: "Blueberry Yogurt",
          price: 44,
          availability: "Available",
          selected: false,
        },
        {
          id: 8,
          img: ex_gelato,
          title: "Peach Yogurt",
          price: 43,
          availability: "Available",
          selected: false,
        },
        {
          id: 9,
          img: ex_gelato,
          title: "Strawberry Yogurt",
          price: 42,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Soft Serve",
      iceCreams: [
        {
          id: 10,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 11,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 12,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Kulfi",
      iceCreams: [
        {
          id: 13,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 14,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 15,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Sherbet",
      iceCreams: [
        {
          id: 16,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 17,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 18,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Ice Popslice",
      iceCreams: [
        {
          id: 19,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 20,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 21,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Philadelphia",
      iceCreams: [
        {
          id: 22,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 23,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 24,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Rolled",
      iceCreams: [
        {
          id: 25,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 26,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 27,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Snow Cream",
      iceCreams: [
        {
          id: 28,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 29,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 30,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Mochi",
      iceCreams: [
        {
          id: 31,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 32,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 33,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Italian Ice",
      iceCreams: [
        {
          id: 34,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 35,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 36,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
    {
      type: "Dondurma",
      iceCreams: [
        {
          id: 37,
          img: ex_gelato,
          title: "Chocolate Soft Serve",
          price: 38,
          availability: "Available",
          selected: false,
        },
        {
          id: 38,
          img: ex_gelato,
          title: "Vanilla Soft Serve",
          price: 35,
          availability: "Available",
          selected: false,
        },
        {
          id: 39,
          img: ex_gelato,
          title: "Matcha Soft Serve",
          price: 39,
          availability: "Out of Stock",
          selected: false,
        },
      ],
    },
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (selectedItem) => selectedItem.id === item.id
      );

      if (isAlreadySelected) {
        return prevSelected.filter(
          (selectedItem) => selectedItem.id !== item.id
        );
      } else {
        return [...prevSelected, item];
      }
    });
  };


  const moveToCart = () => {
    
    updateResultantArray([...selectedItems]);
  };

  return (
    <div style={{ backgroundColor: "#FAE1C1", minHeight: "100vh" }}>
      <NavBar />

      {/* Banner */}
      <div
        className="row mt-5"
        style={{ height: "480px", marginLeft: "200px", marginBottom: "0px" }}
      >
        <div className="col" style={{ marginTop: "100px" }}>
          <p
            style={{
              margin: "0px",
              marginBottom: "0px",
              fontSize: "100px",
              fontWeight: "bold",
              color: "#5C4033",
              lineHeight: "1",
            }}
          >
            SATISFY YOUR
          </p>
          <p
            style={{
              margin: "0px",
              marginBottom: "0px",
              fontSize: "100px",
              fontWeight: "bold",
              color: "#5C4033",
              lineHeight: "1",
            }}
          >
            CRAVINGS ,
          </p>
          <p
            style={{
              margin: "0px",
              marginBottom: "0px",
              fontSize: "100px",
              fontWeight: "bold",
              fontFamily: "Pacifico, cursive",
              color: "#F6A7B9",
              lineHeight: "1",
            }}
          >
            SWEETEN LIFE !
          </p>
        </div>

        <div
          className="col d-flex  "
          style={{ margin: "0px", height: "500px" }}
        >
          <img src={brandedimage} style={{ width: "600px", height: "500px" }} />
        </div>
      </div>

      {/* Milk Splash */}
      <div
        className="row"
        style={{ height: "60px", width: "100%", margin: "0px" }}
      >
        <img
          src={milksplash}
          alt="Milk Splash"
          style={{ margin: "0px", height: "200px" }}
        />
      </div>

      {/* Search Bar */}
      <div
        className="search-box"
        style={{
          marginTop: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="search"
          style={{
            padding: "5px 10px",
            borderRadius: "20px",
            border: "none",
            outline: "none",
            width: "200px",
            transition: "width 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.width = "250px")}
          onBlur={(e) => (e.target.style.width = "200px")}
        />
        <img
          src={search}
          alt="Search icon"
          style={{
            height: "20px",
            width: "20px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Card Content */}
      <div className="row" style={{ marginTop: "80px", marginLeft: "100px" }}>
        <div className="row">
          {iceCreamCategories.map((category) => (
            <div key={category.type} style={{ marginBottom: "40px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "#5C4033",
                }}
              >
                {category.type}
              </p>
              <div className="row">
                {category.iceCreams.map((iceCream) => (
                  <div key={iceCream.id} className="col">
                    <div
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.transition =
                          "transform 0.3s ease";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                      style={{
                        width: "400px",
                        height: "500px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <img
                        src={iceCream.img}
                        alt="Product"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <h3
                        style={{
                          margin: "10px 0",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "#5C4033",
                        }}
                      >
                        {iceCream.title} Rs.{iceCream.price}
                      </h3>
                      <button
                        onClick={() => handleSelect(iceCream)}
                        style={{
                          marginLeft: "100px",
                          padding: "10px",
                          backgroundColor: selectedItems.some(
                            (item) => item.id === iceCream.id
                          )
                            ? "#E08B9D"
                            : "#F6A7B9",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          width: "200px",
                        }}
                      >
                        {selectedItems.some((item) => item.id === iceCream.id)
                          ? "Selected"
                          : "Select"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="row"
        style={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
          gap: "20px", 
        }}
      >
        <button
          style={{
            padding: "10px",
            backgroundColor: "#F6A7B9",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            width: "200px",
          }}
          onClick={() => moveToCart()}
        >
          Add to Cart
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#F6A7B9",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            width: "200px",
          }}
          onClick={() => navigate("/addtocart")}
        >
          Move to Cart
        </button>
      </div>

      <Footer />
      {/* End Div */}
    </div>
  );
};

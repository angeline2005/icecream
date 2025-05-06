import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import icecreamcustomize from "./icecreamcustomize.png";
import ex_gelato from "./ex_gelato.png";
import selected from "./selected.png";
import noproduct from "./noproduct.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Customize = ({ movable }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:5000/api/customizes");
      setCategories(res.data);
    }

    getData();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [finalSelection, setFinalSelection] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelect = (categoryType, iceCreamId) => {
    setCategories((prevCategories) => {
      let syrupCount = 0;
      let toppingCount = 0;

      prevCategories.forEach((category) => {
        if (category.type === "Syrup") {
          syrupCount += category.iceCreams.filter(
            (iceCream) => iceCream.selected
          ).length;
        }
        if (category.type === "Toppings") {
          toppingCount += category.iceCreams.filter(
            (iceCream) => iceCream.selected
          ).length;
        }
      });

      const updatedCategories = prevCategories.map((category) => {
        if (category.type === "Container" && categoryType === "Container") {
          return {
            ...category,
            iceCreams: category.iceCreams.map((iceCream) => {
              const newSelected =
                iceCream.id === iceCreamId ? !iceCream.selected : false;
              updateSelectedItems(iceCream, newSelected);
              return { ...iceCream, selected: newSelected };
            }),
          };
        }

        if (category.type === "IceCream" && categoryType === "IceCream") {
          return {
            ...category,
            iceCreams: category.iceCreams.map((iceCream) => {
              const newSelected =
                iceCream.id === iceCreamId ? !iceCream.selected : false;
              updateSelectedItems(iceCream, newSelected);
              return { ...iceCream, selected: newSelected };
            }),
          };
        }

        if (category.type === "Syrup" && categoryType === "Syrup") {
          const isSelected = category.iceCreams.some(
            (iceCream) => iceCream.id === iceCreamId && iceCream.selected
          );
          if (!isSelected && syrupCount >= 2) {
            return category;
          }
        }

        if (category.type === "Toppings" && categoryType === "Toppings") {
          const isSelected = category.iceCreams.some(
            (iceCream) => iceCream.id === iceCreamId && iceCream.selected
          );
          if (!isSelected && toppingCount >= 2) {
            return category;
          }
        }

        return {
          ...category,
          iceCreams: category.iceCreams.map((iceCream) => {
            if (iceCream.id === iceCreamId) {
              const newSelected = !iceCream.selected;
              updateSelectedItems(iceCream, newSelected);
              return { ...iceCream, selected: newSelected };
            }
            return iceCream;
          }),
        };
      });

      return updatedCategories;
    });
  };

  const updateSelectedItems = (iceCream, isSelected) => {
    setSelectedItems((prevItems) => {
      if (isSelected) {
        return prevItems.some((item) => item.id === iceCream.id)
          ? prevItems
          : [...prevItems, iceCream];
      } else {
        return prevItems.filter((item) => item.id !== iceCream.id);
      }
    });
  };
  const [cartItems, setCartItems] = useState([]);

  const handleConfirm = () => {
    let hasContainer = false;
    let hasIceCream = false;

    categories.forEach((category) => {
      if (category.type === "Container") {
        hasContainer = category.iceCreams.some((iceCream) => iceCream.selected);
      }
      if (category.type === "IceCream") {
        hasIceCream = category.iceCreams.some((iceCream) => iceCream.selected);
      }
    });

    if (hasContainer && hasIceCream) {
      if (isConfirmed) {
        setSelectedItems([]);
        setIsConfirmed(false);
      } else {
        setFinalSelection(selectedItems);
        setTimeout(() => {
          moveToCart(selectedItems);
          setIsConfirmed(true);
        }, 0);
      }
    } else {
      alert("Please select 1 container and 1 ice cream before confirming.");
    }
  };

  const [mainArray, setMainArray] = useState([]);
  const createArrayOfArray = (cartItems) => {
    setMainArray((prevMainArray) => [...prevMainArray, cartItems]);
    setCartItems([]);
    setIsConfirmed(false);
  };

  const moveToCart = (finalSelection) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart, ...finalSelection];
      return updatedCart;
    });

    setFinalSelection([]);

    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        iceCreams: category.iceCreams.map((iceCream) => ({
          ...iceCream,
          selected: false,
        })),
      }))
    );

    setTimeout(() => {
      setSelectedItems([]);
    }, 2000);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      createArrayOfArray(cartItems);
    }
  }, [cartItems]);

  const finalmove = () => {
    console.log(mainArray);
    movable(mainArray);
  };

  return (
    <div style={{ backgroundColor: "#FAE1C1", minHeight: "100vh" }}>
      <NavBar />
      {/*banner */}
      <div
        className="row mt-5 d-flex justify-content-center"
        style={{
          padding: "0px",
          marginTop: "0px",
          fontWeight: "bold",
          fontSize: "100px",
          lineHeight: "90px",
        }}
      >
        <p
          className="text-center"
          style={{
            marginTop: "0px",
            padding: "0px",
            lineHeight: "90px",
            color: "#5C4033",
          }}
        >
          SCOOP UP SOME <br />
          <span style={{ color: "#F6A7B9", fontFamily: "Pacifico, cursive" }}>
            HAPPINESS
          </span>
        </p>
      </div>
      {/*banner img*/}
      <div className="row">
        <img
          src={icecreamcustomize}
          style={{ height: "500px", width: "100%" }}
        />
      </div>

      {/*mini navbar*/}
      <div className="row" style={{ marginTop: "100px" }}>
        <div
          className="row"
          style={{
            backgroundColor: "#F6A7B9",
            padding: "10px 0",
            borderRadius: "20px",
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ display: "flex", gap: "200px" }}>
            {" "}
            {["Container", "IceCream", "Syrup", "Toppings"].map(
              (item, index) => (
                <span
                  key={index}
                  onClick={() => handleScrollToSection(item.toLowerCase())}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    cursor: "pointer",
                    textDecoration: hovered === item ? "underline" : "none",
                    color: "#5C4033",
                    fontSize: "25px",
                  }}
                >
                  {item}
                </span>
              )
            )}
          </p>
        </div>
      </div>

      {/*this is the fourth row*/}
      <div className="row" style={{ marginTop: "80px", marginLeft: "100px" }}>
        <div className="row">
          {categories?.map((category) => (
            <div
              key={category.type}
              id={category.type.toLowerCase()}
              style={{ marginBottom: "40px" }}
            >
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
                {category.icecreams?.map((iceCream) => (
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
                        height: "400px",
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
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <button
                        style={{
                          marginLeft: "100px",
                          padding: "10px",
                          backgroundColor: iceCream.selected
                            ? "#E08B9D"
                            : "#F6A7B9",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          width: "200px",
                        }}
                        onClick={() => handleSelect(category.type, iceCream.id)}
                      >
                        {iceCream.selected ? "Selected" : "Select"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-6 ">
          <img
            src={selected}
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
            alt="Selected"
          />
        </div>
        <div className="col-6">
          <div
            className="row"
            style={{
              marginTop: "160px",
              color: "#5C4033",
              marginLeft: "150px",
            }}
          >
            <h3>You’ve Got Great Taste!</h3>
          </div>
          <div
            className="row"
            style={{ marginTop: "60px", display: "flex", flexWrap: "wrap" }}
          >
            {selectedItems.length > 0 ? (
              <>
                {selectedItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <img
                      src={item.img ? item.img : "fallback-image-url.jpg"}
                      alt={item.name || "Selected Item"}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                      onError={(e) => (e.target.src = "fallback-image-url.jpg")}
                    />
                    {index === selectedItems.length - 1 && (
                      <button
                        style={{
                          width: "100px",
                          height: "50px",
                          display: "block",
                          marginTop: "45px",
                          padding: "10px 10px",
                          fontSize: "16px",
                          backgroundColor: isConfirmed ? "#E08B9D" : "#F6A7B9",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleConfirm}
                      >
                        {isConfirmed ? "Confirmed" : "Confirm"}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <p
                style={{
                  color: "#888",
                  fontSize: "18px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                No items selected
              </p>
            )}
          </div>

          <div
            className="row"
            style={{ marginTop: "60px", marginLeft: "200px" }}
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
                width: "auto",
              }}
              onClick={() => finalmove()}
            >
              Add To Cart
            </button>
            <button
              style={{
                marginLeft: "100px",
                padding: "10px",
                backgroundColor: "#F6A7B9",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                width: "auto",
              }}
              onClick={() => navigate("/addtocart")}
            >
              Move To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

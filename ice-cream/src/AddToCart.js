import { useEffect } from "react";
import { NavBar } from "./NavBar";
import React, { useState } from "react";
import addtocartbg from "./addtocartbg.jpg"
function AddToCart({ resultantArray, cartItems }) {
  const [quantities, setQuantities] = useState(
    resultantArray.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) + delta),
    }));
  };
  const totalPrice = resultantArray.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );
  console.log(cartItems);
  let grandTotal = 0; 
  return (
    <div style={{ backgroundColor: "#FAE1C1", minHeight: "100vh" }}>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${addtocartbg})`,
          marginTop: "100px",
          marginLeft: "400px",
          width: "900px",
          height: "550px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            marginTop: "250px",
            marginLeft: "450px",
            width: "800px",
            height: "450px", 
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            overflowY: "scroll", 
            overflowX: "hidden", 
            padding: "10px", 

           
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
          }}
        >
          
          <div
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              marginLeft: "300px",
              marginBottom: "0px",
            }}
          >
            Shopping Cart
          </div>
          <div
            className="row"
            style={{ color: "white", marginTop: "50px", fontWeight: "bold" }}
          >
            <p style={{ marginTop: "0px" }}>
              <span>Product</span>
              <span style={{ marginLeft: "170px" }}>Price</span>
              <span style={{ marginLeft: "170px" }}>Qty</span>
              <span style={{ marginLeft: "170px" }}>Total</span>
            </p>
          </div>
          <div className="row">
            {resultantArray.length === 0 ? (
              <p></p>
            ) : (
              <div style={{ color: "white" }}>
                {resultantArray.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      marginBottom: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{item.title}</span>
                    <span style={{ marginLeft: "140px", marginRight: "130px" }}>
                      ${item.price}
                    </span>

                    
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "20px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        style={{
                          background: "gray",
                          color: "white",
                          border: "none",
                          padding: "5px",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                      <span
                        style={{
                          margin: "0 10px",
                          minWidth: "20px",
                          textAlign: "center",
                        }}
                      >
                        {quantities[item.id]}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        style={{
                          background: "gray",
                          color: "white",
                          border: "none",
                          padding: "5px",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

               
                <div
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    borderBottom: "2px solid pink",
                    fontWeight: "bold",
                  }}
                >
                  <span>Total:</span>
                  <span style={{ marginLeft: "560px" }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="row">
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((outerGroup, outerIndex) => (
                  <div
                    key={outerIndex}
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    {outerGroup.map((innerGroup, innerIndex) => {
                      if (!Array.isArray(innerGroup)) return null;

                      
                      const totalInnerPrice = innerGroup.reduce(
                        (sum, item) => sum + (item.price || 0),
                        0
                      );
                      const quantity = quantities[innerIndex] || 1;
                      grandTotal += totalInnerPrice * quantity;

                      return (
                        <div
                          key={innerIndex}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <p style={{ marginRight: "100px", color: "white" }}>
                            Icecream {innerIndex + 1}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "20px",
                              border: "1px solid gray",
                              borderRadius: "5px",
                              padding: "5px",
                              marginRight: "0px",
                            }}
                          >
                            <button
                              onClick={() =>
                                handleQuantityChange(innerIndex, -1)
                              }
                              style={{
                                background: "gray",
                                color: "white",
                                border: "none",
                                padding: "5px",
                                cursor: "pointer",
                              }}
                            >
                              -
                            </button>
                            <span
                              style={{
                                margin: "0 10px",
                                minWidth: "20px",
                                textAlign: "center",
                              }}
                            >
                              {quantities[innerIndex] || 1}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(innerIndex, 1)
                              }
                              style={{
                                background: "gray",
                                color: "white",
                                border: "none",
                                padding: "5px",
                                cursor: "pointer",
                              }}
                            >
                              +
                            </button>
                          </div>

                         
                          <p style={{ color: "white" }}>
                            $
                            {(
                              totalInnerPrice * (quantities[innerIndex] || 1)
                            ).toFixed(2)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </>
            ) : (
              <p></p>
            )}
          </div>

          <div
            className="row"
            style={{
              borderBottom: "2px solid pink",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {grandTotal !== 0 && (
              <p>
                <span>Grand Total:</span>
                <span style = {{marginLeft : "520px"}}>${grandTotal.toFixed(2)}</span>
              </p>
            )}
          </div>

          <div
            style={{ fontWeight: "bold", marginTop: "20px", color: "white" }}
          >
            <p>
              <span>Final Total:</span>
              <span style={{ marginLeft: "529px" }}>
                ${(grandTotal + totalPrice).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;

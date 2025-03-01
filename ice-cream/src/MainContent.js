import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mini_icon from './mini_icon.png';
import SimpleImageSlider from "react-simple-image-slider";
import mainpageimage from "./mainpageimage.png";
import { useNavigate } from "react-router-dom";
import aboutusimg1 from "./aboutusimg1.png";
import aboutusimg3 from "./aboutusimg3.png";



const images = [
  { url: "https://arunicecreams.in/images/home/icone-banner.jpg" },
  {
    url: "https://3.imimg.com/data3/DX/KW/MY-13453254/amul-ice-creams-500x500.jpg",
  },
  {
    url: "https://media.assettype.com/foodtechbiz/2021-09/029e5643-ec3d-4252-99eb-f9976bd600bd/vadilal.PNG?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
  },
  {
    url: "https://cgs-cdn.sgp1.digitaloceanspaces.com/dairy-day/wp-content/uploads/2023/03/03052447/dd-hp-banner-cones.jpg",
  },
];

export const MainContent = () => {
  const navigate = useNavigate(); 
  return (
    <div>
      <div
        className="container-fluid"
        style={{ margin: "0px", padding: "0px" }}
      >
        {/*this is the first row*/}
        <div
          className="row mt-5"
          style={{ height: "600px", marginLeft: "200px" }}
        >
          <div className="col">
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
              ICE CREAM
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
              MADE WITH
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
              PASSION
            </p>
            <div className="row mt-4">
              <div className="col-6 d-flex">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#5C4033",
                    borderRadius: "20px",
                    border: "2px solid #5C4033",
                    padding: "10px 60px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigate("/customize")}
                >
                  Customize
                </button>
              </div>
              <div className="col-6">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#5C4033",
                    borderRadius: "20px",
                    border: "2px solid #5C4033",
                    padding: "10px 60px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigate("/branded")}
                >
                  Branded
                </button>
              </div>
            </div>
            <div className="row mt-5 d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={mini_icon}
                  alt="Mini Icon"
                  style={{
                    width: "200px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                />
                <p style={{ color: "#5C4033", fontSize: "18px", margin: "0" }}>
                  "You can't buy happiness,
                  <br /> but you can buy ice cream,
                  <br /> and that's pretty
                  <br /> much the same thing."
                </p>
              </div>
            </div>
          </div>

          <div
            className="col d-flex justify-content-center align-items-center"
            style={{ margin: "0px", height: "100%" }}
          >
            <img
              src={mainpageimage}
              style={{ width: "500px", height: "600px" }}
            />
          </div>
        </div>

        {/*this is the second row*/}

        <div
          className="row"
          style={{
            marginTop: "200px",
            height: "500px",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <div
            className="col-6"
            style={{ padding: 0, margin: 0, overflow: "hidden" }}
          >
            <img
              src="https://www.mashed.com/img/gallery/30-best-ice-cream-flavors-ranked-from-worst-to-best/l-intro-1654092923.jpg"
              alt="Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          <div
            className="col-6"
            style={{ backgroundColor: "#F6A7B9", padding: 0, margin: 0 }}
          >
            <div className="row" style={{ height: "250px" }}>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <img
                    src="https://i.pinimg.com/originals/a9/23/73/a92373bff3b754ba522d79c7ddcdf3d4.jpg"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="Step 1"
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Step 1
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "black",
                    }}
                  >
                    "First, pick the perfect container
                    <br /> to hold your ice cream!,
                    <br />
                    Your sweet adventure begins
                    <br /> with the right choice."
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <img
                    src="https://png.pngtree.com/png-clipart/20190810/ourlarge/pngtree-chocolate-and-strawberry-ice-cream-scoop-png-image_1657449.jpg"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="Step 1"
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Step 2
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "black",
                    }}
                  >
                    "Now, choose your favorite
                    <br /> ice cream flavor!,
                    <br />
                    Indulge in the flavor
                    <br /> that excites your taste buds!"
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ height: "250px" }}>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.FAGaag3ce313XIG5VJ969gHaHa&pid=Api&P=0&h=180"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="Step 1"
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Step 3
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "black",
                    }}
                  >
                    "Drizzle on delight—pick <br /> your favorite syrup!,
                    <br /> Add a splash of sweetness <br /> with your perfect
                    syrup!"
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <img
                    src="https://cookingchew.com/wp-content/uploads/2021/01/ice-cream-toppings-ideas-CO868-FE-min.jpg"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="Step 1"
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Step 4
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: "black",
                    }}
                  >
                    "Top it off with your favorite crunchy,
                    <br /> sweet, or fruity toppings!,
                    <br />
                    Make it your own—choose the perfect <br />
                    toppings for your treat!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*This is third row*/}

        <div
          className="row"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
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
            onClick={() => navigate("/customize")}
          >
            Customize Now
          </button>
        </div>

        {/*This is fourth row*/}

        <div className="row" style={{ marginTop: "200px" }}>
          <SimpleImageSlider
            width={1698}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>

        {/*this is the fifth row*/}
        <div
          className="row"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
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
            onClick={() => navigate("/branded")}
          >
            Browse Brands
          </button>
        </div>

        {/*This is sixth row*/}

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
              src={aboutusimg1}
              style={{ marginTop: "0", height: "400px", width: "360px" }}
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
              About Us
            </p>
            <p>
              Welcome to ChillCrave – your ultimate destination for delicious
              ice cream! Whether you crave a personalized treat crafted to your
              taste or prefer indulging in your favorite branded flavors, we’ve
              got you covered. From endless customizations to premium
              selections, we bring you the sweetest experience, one scoop at a
              time. Scoop. Swirl. Savor. 🍦✨
            </p>
          </div>
          <div className="col" style={{ width: "200px" }}>
            <img
              src={aboutusimg3}
              style={{ marginTop: "0", height: "400px", width: "360px" }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

import React from "react";
import logo_of_website from './logo_of_website.png';
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#F6A7B9",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <div
        className="container"
        style={{
        
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        
        <div>
          <img
            src={logo_of_website}
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/customize"
                style={{ color: "white", textDecoration: "none" }}
              >
                Customize
              </a>
            </li>
            <li>
              <a
                href="/branded"
                style={{ color: "white", textDecoration: "none" }}
              >
                Brands
              </a>
            </li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", marginRight: "10px" }}
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", marginRight: "10px" }}
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Twitter
          </a>
        </div>
      </div>

      <hr style={{ borderColor: "white", margin: "10px 0" }} />

      <p style={{ fontSize: "14px" }}>
        © 2025 ChillCrave. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

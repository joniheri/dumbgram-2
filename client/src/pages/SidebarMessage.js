import React, { useContext } from "react";
import { Link } from "react-router-dom";

// import { Col, Row } from "react-bootstrap";

// import img
import Rectangle5 from "../img/Rectangle 5.png";
import Ellipse1 from "../img/Ellipse1.png";

export default function SidebarMessage() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link
        to="/homemessageselected"
        className="itemJustifyLeft messageSelected"
        style={{
          borderRadius: "5px",
          paddingLeft: "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
          marginBottom: "15px",
          textDecoration: "none",
        }}
      >
        <img
          src={Rectangle5}
          alt=""
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            paddingLeft: "15px",
          }}
        >
          <div>Jon Heri</div>
          <div style={{ color: "#ababab" }}>Hallo Lisa</div>
        </div>
      </Link>
      <Link
        to="/homemessageselected"
        className="itemJustifyLeft messageSelected"
        style={{
          borderRadius: "5px",
          paddingLeft: "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
          marginBottom: "15px",
          textDecoration: "none",
        }}
      >
        <img
          src={Ellipse1}
          alt=""
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            paddingLeft: "15px",
          }}
        >
          <div>Zayn</div>
          <div style={{ color: "#ababab" }}>
            Hai Lisa, when do you go to beach
          </div>
        </div>
      </Link>
    </div>
  );
}

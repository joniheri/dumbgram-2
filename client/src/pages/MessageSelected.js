import React from "react";
import { Card } from "react-bootstrap";

// import img
import Rectangle5 from "../img/Rectangle 5.png";

export default function MessageSelected() {
  return (
    <Card className="" style={{ height: "680px", background: "#1a1b1b" }}>
      <Card.Body>
        <div
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
        </div>
      </Card.Body>
      <Card.Footer>
        <input
          type="text"
          className="inputMessage"
          placeholder="Send Message"
        />
      </Card.Footer>
    </Card>
  );
}

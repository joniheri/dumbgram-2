import React from "react";
import { Col, Row } from "react-bootstrap";

// import react-router-dom components
import { Link } from "react-router-dom";

// import image
import DumbGram from "../img/DumbGram.png";

export default function BrandLeft() {
  return (
    <div>
      <Row style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        <Col>
          <Link to="/homeuser">
            <img
              src={DumbGram}
              alt=""
              style={{
                height: "39px",
                width: "auto",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

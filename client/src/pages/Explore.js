import React from "react";
import { Card, CardColumns } from "react-bootstrap";

// import img
import Rectangle6_1 from "../img/Rectangle6_1.png";
import Rectangle10_1 from "../img/Rectangle10_1.png";
import Rectangle8_1 from "../img/Rectangle8_1.png";
import Rectangle6_2 from "../img/Rectangle6_2.png";
import Rectangle10_2 from "../img/Rectangle10_2.png";
import Rectangle5 from "../img/Rectangle 5.png";
import Ellipse1 from "../img/Ellipse1.png";
import Heart from "../img/Heart.svg";
import Comment from "../img/Comment.svg";
import Plan from "../img/Plan.svg";

export default function Explore() {
  return (
    <div>
      <h1 style={{ color: "#fff", paddingBottom: "20px" }}>EXPLORE</h1>
      <CardColumns style={{ marginTop: "10px", marginBottom: "50px" }}>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img src={Rectangle6_1} style={{ cursor: "pointer" }} />
          <Card.Body style={{ margin: "0", padding: "0" }}></Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img src={Rectangle10_1} style={{ cursor: "pointer" }} />
          <Card.Body style={{ margin: "0", padding: "0" }}></Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img src={Rectangle8_1} style={{ cursor: "pointer" }} />
          <Card.Body style={{ margin: "0", padding: "0" }}></Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img src={Rectangle6_2} style={{ cursor: "pointer" }} />
          <Card.Body style={{ margin: "0", padding: "0" }}></Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img src={Rectangle10_2} style={{ cursor: "pointer" }} />
          <Card.Body style={{ margin: "0", padding: "0" }}></Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img src={Rectangle5} style={{ cursor: "pointer" }} />
          <Card.Body style={{ margin: "0", padding: "0" }}></Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
}

import React from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <div>
      <Container style={{ marginTop: "300px" }}>
        <h1
          style={{
            color: "#b8b8b8",
            marginTop: "200px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          [404] Page Not Found!
        </h1>
      </Container>
    </div>
  );
}

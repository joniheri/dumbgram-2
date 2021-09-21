import React from "react";

// import bootstrap components
import { Container } from "react-bootstrap";

// import components
// import NavbarPublic from "./components/NavbarPublic";

// import Pages
import Landing from "./pages/Landing";

export default function AppProject() {
  return (
    <div>
      <Container fluid>
        <Landing />
      </Container>
    </div>
  );
}

import React from "react";
import { Spinner } from "react-bootstrap";

export default function SpinnerBorder() {
  return (
    <div className="itemJustifyCenter">
      <Spinner animation="border" variant="light" />
    </div>
  );
}

import React from "react";
import { Modal } from "react-bootstrap";

export default function Alert({ alertShow, setAlertShow, messageShowSuccess }) {
  return (
    <div>
      <Modal
        size="sm"
        show={alertShow}
        onHide={() => setAlertShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F" }}
        centered
        style={{ color: "#155724" }}
      >
        <Modal.Body>
          <h3 align="center">{messageShowSuccess}</h3>
        </Modal.Body>
      </Modal>
    </div>
  );
}

import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

// import components
import ModalAlert from "./Alert";

export default function Login({ loginShow, setLoginShow, setRegisterShow }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    alertMessage: null,
    alertVariant: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (e) => {};

  return (
    <div>
      <Modal
        size="sm"
        show={loginShow}
        onHide={() => {
          setLoginShow(false);
          setFormData({
            ...formData,
            email: "",
            password: "",
            alertMessage: "",
            alertVariant: "",
          });
        }}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F  " }}
        centered
      >
        <Modal.Header
          style={{ border: "0", color: "#fff", background: "#1F1F1F" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#1F1F1F" }}>
          {formData.alertMessage && (
            <ModalAlert variant={formData.alertVariant}>
              {formData.alertMessage}
            </ModalAlert>
          )}
          <Form onSubmit={handleFormSubmit}>
            <Form.Control
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input1"
              style={{
                margin: "0 0 15px 0",
                background: "#4b4b4b",
                color: "#fff",
              }}
            />
            <Form.Control
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              type="password"
              placeholder="Password"
              required
              style={{
                margin: "0 0 15px 0",
                background: "#4b4b4b",
                color: "#fff",
              }}
            />
            <Button
              type="submit"
              className="btn-register2"
              style={{
                width: "100%",
                margin: "20px 0 0 0",
                background: "#EE4622",
                borderColor: "#EE4622",
              }}
            >
              Login
            </Button>
            <center>
              <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
                Don't have an account..? Klik{" "}
                <strong
                  style={{
                    cursor: "pointer",
                    color: "#B1B1B1",
                  }}
                  onClick={() => {
                    setLoginShow(false);
                    setRegisterShow(true);
                  }}
                >
                  Here
                </strong>
              </p>
            </center>
            {/* <pre style={{ color: "#fff" }}>
              {JSON.stringify(formData, null, 3)}
            </pre> */}
          </Form>
        </Modal.Body>
      </Modal>
      {/* EndLoginlModal============== */}
    </div>
  );
}

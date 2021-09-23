import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

// import react-router-dom
import { useHistory } from "react-router-dom";

// import API
import { API, setAuthToken } from "../../config/Api";

// import context
import { AppContext } from "../../contexts/GlobalContext";

// import components
import ModalAlert from "./Alert";

export default function Login({ loginShow, setLoginShow, setRegisterShow }) {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

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

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      const requestBody = {
        email: formData.email,
        password: formData.password,
      };

      const body = JSON.stringify({ ...requestBody });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/login", body, config);

      // console.log("DataResponse: ", response);

      // CheckValidationInput
      if (response.data.status === "Validate Failed") {
        setFormData({
          ...formData,
          alertMessage: response.data.message,
          alertVariant: "danger",
        });
        // console.log("ResponseData: ", response.data);
        // console.log("DataStateUpdate: ", state);
      }
      // EndCheckValidationInput=======

      // CheckEmailOrPasswordNotMatch
      else if (response.data.status === "Failed") {
        setFormData({
          ...formData,
          alertMessage: response.data.message,
          alertVariant: "danger",
        });
        // console.log("ResponseData: ", response.data);
        // console.log("DataStateUpdate: ", state);
      }
      // EndCheckEmailOrPasswordNotMatch======

      //CheckConnection
      else if (response.data.status === "Response failed") {
        setFormData({
          ...formData,
          alertMessage: response.data.message,
          alertVariant: "danger",
        });
        // console.log("ResponseData: ", response.data);
        // console.log("DataStateUpdate: ", state);
      }
      //EndCheckConnection===========

      // IfLoginSuccess
      else {
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        setFormData({
          ...formData,
          email: "",
          password: "",
          alertMessage: "",
          alertVariant: "success",
        });
        // console.log("ResponseData: ", response);
        setAuthToken(response.data.token);
        history.push("/homeuser");
        setLoginShow(false);
      }
      // EndIfLoginSuccess==============
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };

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
            <Button type="submit" className="btnModalLogin">
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

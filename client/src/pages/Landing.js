import React, { useContext, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import image
import DumbGram from "../img/DumbGram.png";
import Rectangle3 from "../img/Rectangle 3.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Rectangle5 from "../img/Rectangle 5.png";
import Rectangle6 from "../img/Rectangle 6.png";
import Rectangle8 from "../img/Rectangle 8.png";
import Rectangle9 from "../img/Rectangle 9.png";
import Rectangle10 from "../img/Rectangle 10.png";
import Rectangle12 from "../img/Rectangle 12.png";

// import components
import ModalLogin from "../components/modal/Login";
import ModalRegister from "../components/modal/Register";
import { useHistory } from "react-router-dom";

export default function Landing({ stateLogin, setStateLogin }) {
  const history = useHistory();
  const [state] = useContext(AppContext);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };

  const onSwitchRegister = () => {
    setRegisterShow(true);
    setLoginShow(false);
  };

  // console.log("State: ", state);
  return (
    <div className="body">
      {state.user === null ? (
        <Container>
          <Row>
            <Col md={5}>
              <Row>
                <Col>
                  <img
                    src={DumbGram}
                    alt=""
                    style={{
                      height: "102px",
                      width: "auto",
                      marginBottom: "50px",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1
                    className="colorWhite fontSize1"
                    style={{ marginBottom: "40px" }}
                  >
                    Share your best photos or videos
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={10}>
                  <p
                    style={{
                      color: "#6A6A6A",
                      fontSize: "20px",
                      marginBottom: "40px",
                    }}
                  >
                    Join now, share your creations with another people and enjoy
                    other creations.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button className="btnLogin" onClick={onSwitchLogin}>
                    Login
                  </button>
                  <button className="btnRegister" onClick={onSwitchRegister}>
                    Register
                  </button>
                </Col>
              </Row>
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <Row>
                    <img src={Rectangle6} alt="" className="cardImg" />
                  </Row>
                  <Row>
                    <img src={Rectangle5} alt="" className="cardImg" />
                  </Row>
                  <Row>
                    <img src={Rectangle10} alt="" className="cardImg" />
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <img src={Rectangle3} alt="" className="cardImg" />
                  </Row>
                  <Row>
                    <img src={Rectangle9} alt="" className="cardImg" />
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <img src={Rectangle4} alt="" className="cardImg" />
                  </Row>
                  <Row>
                    <img src={Rectangle8} alt="" className="cardImg" />
                  </Row>
                  <Row>
                    <img src={Rectangle12} alt="" className="cardImg" />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* ModalLogin */}
          <ModalLogin
            loginShow={loginShow}
            setLoginShow={setLoginShow}
            setRegisterShow={setRegisterShow}
            stateLogin={stateLogin}
            setStateLogin={setStateLogin}
          />
          {/* EndModalLogin */}

          {/* ModalRegister */}
          <ModalRegister
            registerShow={registerShow}
            setRegisterShow={setRegisterShow}
            setLoginShow={setLoginShow}
          />
          {/* EndModalRegister */}
        </Container>
      ) : (
        <>{history.push("/homeuser")}</>
      )}
    </div>
  );
}

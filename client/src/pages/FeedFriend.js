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

export default function Feed() {
  return (
    <div>
      <h1 style={{ color: "#fff", paddingBottom: "20px" }}>FEED</h1>
      <CardColumns style={{ marginTop: "10px", marginBottom: "50px" }}>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img
            src={Rectangle6_1}
            style={{ cursor: "pointer", paddingBottom: "10px" }}
          />
          <Card.Body style={{ margin: "0", padding: "0" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={Rectangle5}
                  alt=""
                  style={{
                    height: "25px",
                    width: "25px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ marginLeft: "10px", color: "#fff" }}>Jhon</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                <img
                  src={Heart}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Comment}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Plan}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <span style={{ color: "#ABABAB" }}>101.101 Like</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img
            src={Rectangle10_1}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
          <Card.Body style={{ margin: "0", padding: "0" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={Ellipse1}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ marginLeft: "10px", color: "#fff" }}>Zayn</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                <img
                  src={Heart}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Comment}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Plan}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <span style={{ color: "#ABABAB" }}>102.102 Like</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img
            src={Rectangle8_1}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
          <Card.Body style={{ margin: "0", padding: "0" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={Ellipse1}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ marginLeft: "10px", color: "#fff" }}>Zayn</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                <img
                  src={Heart}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Comment}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Plan}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <span style={{ color: "#ABABAB" }}>103.103 Like</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img
            src={Rectangle6_2}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
          <Card.Body style={{ margin: "0", padding: "0" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={Ellipse1}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ marginLeft: "10px", color: "#fff" }}>Zayn</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                <img
                  src={Heart}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Comment}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Plan}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <span style={{ color: "#ABABAB" }}>104.104 Like</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img
            src={Rectangle10_2}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
          <Card.Body style={{ margin: "0", padding: "0" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={Ellipse1}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ marginLeft: "10px", color: "#fff" }}>Zayn</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                <img
                  src={Heart}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Comment}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Plan}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <span style={{ color: "#ABABAB" }}>105.105 Like</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ background: "#0B0B0B", marginBottom: "30px" }}>
          <Card.Img
            src={Rectangle5}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
          <Card.Body style={{ margin: "0", padding: "0" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                  width: "100px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={Ellipse1}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ marginLeft: "10px", color: "#fff" }}>Zayn</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                <img
                  src={Heart}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Comment}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={Plan}
                  alt=""
                  style={{
                    height: "24px",
                    width: "24px",
                    objectFit: "cover",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <span style={{ color: "#ABABAB" }}>106.106 Like</span>
            </div>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
}

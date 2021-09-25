import React, { useContext } from "react";

import { Col, Row } from "react-bootstrap";

// import react-router-dom components
import { useHistory, Link } from "react-router-dom";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import img
import Edit from "../img/edit.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Home from "../img/Home.png";
import Compass from "../img/Compass.png";
import Exit from "../img/Exit.png";

export default function SidebarMenu() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };
  return (
    <div>
      <Row
        style={{
          paddingTop: "10px",
        }}
      >
        <Col md={1}></Col>
        <Col
          md={10}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <img
            src={Edit}
            alt=""
            style={{
              width: "24px",
              height: "24px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row>
        <Col
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Rectangle4}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Col>
      </Row>

      {/* NameUser */}
      <Row
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Col style={{ textAlign: "center" }}>
          <strong style={{ fontSize: "20px", color: "#ffffff" }}>Lisa</strong>
          <p className="colorText1">@lalisa</p>
        </Col>
      </Row>
      {/* EndNameUser */}

      {/* FollowerFollowing */}
      <Row
        className="itemJustifyCenter"
        style={{
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <div>
          <div
            className="colorText1"
            style={{
              paddingLeft: "35px",
              paddingRight: "35px",
              fontSize: "15px",
            }}
          >
            Posts
          </div>
          <div style={{ color: "#fff", fontSize: "20px" }}>167</div>
        </div>
        <div
          style={{
            borderLeft: "1px solid #363536",
            borderRight: "1px solid #363536",
          }}
        >
          <div
            className="colorText1"
            style={{
              paddingLeft: "35px",
              paddingRight: "35px",
              fontSize: "15px",
            }}
          >
            Followers
          </div>
          <div style={{ color: "#fff", fontSize: "20px" }}>50 K</div>
        </div>
        <div>
          <div
            className="colorText1"
            style={{
              paddingLeft: "35px",
              paddingRight: "35px",
              fontSize: "15px",
            }}
          >
            Following
          </div>
          <div style={{ color: "#fff", fontSize: "20px" }}>3</div>
        </div>
      </Row>
      {/* EndFollowerFollowing */}

      <Row style={{ paddingBottom: "40px" }}>
        <Col md={12} style={{ color: "#fff" }}>
          Rapper in Black Pink, Brand Ambasador Penshoppe
        </Col>
      </Row>

      {/* BorrderBotton */}
      <div style={{ borderBottom: "1px solid #363536" }}></div>
      {/* EndBorrderBotton */}

      {/* FeedMenu */}
      <div className="colorText1" style={{ paddingTop: "25px" }}>
        <Link
          to="/homeuser"
          className="itemJustifyLeft btnHover1 colorText1"
          style={{}}
        >
          <img
            src={Home}
            alt=""
            style={{
              paddingRight: "20px",
            }}
          />
          <div>Feed</div>
        </Link>
      </div>
      {/* EndFeedMenu */}

      {/* Explore */}
      <div className="colorText1" style={{ paddingTop: "25px" }}>
        <Link to="/explore" className="itemJustifyLeft btnHover1 colorText1">
          <img
            src={Compass}
            alt=""
            style={{
              paddingRight: "20px",
            }}
          />
          <div>Explore</div>
        </Link>
      </div>
      {/* EndExplore */}

      {/* BorderBottom */}
      <div
        style={{ borderBottom: "1px solid #363536", paddingTop: "30px" }}
      ></div>
      {/* EndBorderBottom */}

      {/* Logout */}
      <div
        className="colorText1"
        style={{ paddingTop: "25px", paddingBottom: "50px" }}
      >
        <div className="itemJustifyLeft btnHover1" onClick={handleLogout}>
          <img
            src={Exit}
            alt=""
            style={{
              paddingRight: "20px",
            }}
          />
          <div>Logout</div>
        </div>
      </div>
      {/* EndLogout */}
    </div>
  );
}

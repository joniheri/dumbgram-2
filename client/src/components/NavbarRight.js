import React from "react";
import { Link } from "react-router-dom";

// import image
import Plush from "../img/Plush.png";
import VectorPlan from "../img/VectorPlan.png";
import bell1 from "../img/bell1.png";

export default function NavbarRight() {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            width: "400px",
            paddingTop: "5px",
            paddingBottom: "5px",
            alignItems: "center",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <div style={{ color: "#fff" }}>
            {/* Search */}
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="colorText1"
                style={{
                  width: "400px",
                  border: "none",
                  padding: "10px",
                  background: "#232323",
                  borderRadius: "5px",
                  paddingTop: "5px",
                  paddingBottom: "7px",
                }}
              />
            </form>
            {/* EndSearch */}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "right",
            width: "100%",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={bell1}
              alt=""
              style={{ marginLeft: "25px", cursor: "pointer" }}
            />
            <img
              src={VectorPlan}
              alt=""
              style={{ marginLeft: "25px", cursor: "pointer" }}
            />
            <Link
              to="/createpost"
              className="btn1"
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginLeft: "25px",
                textDecoration: "none",
                width: "130px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <img src={Plush} alt="+" title="+" placeholder="+" />
              <div
                style={{
                  color: "#fff",
                  paddingLeft: "7px",
                }}
              >
                <strong>Create post</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

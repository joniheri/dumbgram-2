import React from "react";

export default function EditProfile() {
  return (
    <div>
      <h1 style={{ color: "#fff", paddingBottom: "40px" }}>Edit Profile</h1>
      <form action="">
        <div style={{ marginBottom: "20px" }}>
          <button
            className="btn1"
            style={{
              height: "50px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <strong style={{ color: "#fff" }}>Upload Photos</strong>
          </button>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="input1"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="input1"
          />
          <textarea
            name=""
            rows="8"
            placeholder="Bio"
            className="input1"
          ></textarea>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "right",
            marginBottom: "20px",
          }}
        >
          <button
            className="btn1"
            style={{
              height: "50px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <strong style={{ color: "#fff" }}>Save</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

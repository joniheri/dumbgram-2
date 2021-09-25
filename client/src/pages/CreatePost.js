import React from "react";

export default function CreatePost() {
  return (
    <div>
      <h1 style={{ color: "#fff", paddingBottom: "40px" }}>Create Post</h1>
      <form action="">
        <div style={{ marginBottom: "20px" }}>
          <button
            className="btn1"
            style={{
              height: "50px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <strong style={{ color: "#fff" }}>Upload Photos or Videos</strong>
          </button>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <textarea
            name=""
            rows="10"
            placeholder="Caption"
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
            <strong style={{ color: "#fff" }}>Upload</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

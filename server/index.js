const express = require("express");
const app = express();
const port = 3001;

// app use exxpress.json to get req body JSON
app.use(express.json());

// import cors module
const cors = require("cors");
app.use(cors());

// make static folder
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World! I'm Express.JS");
});

// import route modul
const routerV1 = require("./src/routers/RouterV1");
const routerV2 = require("./src/routers/RouterV2");

// group route
app.use("/api/v1", routerV1);
app.use("/api/v2", routerV2);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

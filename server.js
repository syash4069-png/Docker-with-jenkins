const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<H1>Node.js App Running through Docker & Jenkins Pipeline!</h1>");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

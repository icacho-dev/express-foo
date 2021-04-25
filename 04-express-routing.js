const express = require("express");
const app = express();
const port = 3000;

const users = require("./users-router.js");

app.use("/users", users);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

var express = require("express"),
  router = express.Router();

router.get("/", function (req, res) {
  res.send("GET users");
});

router.post("/", function (req, res) {
  res.send("POST user");
});

module.exports = router;

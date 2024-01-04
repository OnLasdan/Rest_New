const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { fileURLToPath } = require("url");
const path = require("path");

const router = express();

router.use(bodyParser.json()); // to use body object in requests
router.use(morgan("dev"));
router.use(cors());

// Set view engine and views directory
router.set("view engine", "ejs");
router.set("views", path.join(__dirname, "views"));

// Serve static files (CSS)
router.use(express.static(path.join(__dirname, "views", "pages")));
router.get("/", (req, res) => {
  res.render("pages/index");
});


module.exports = router;

const express = require("express");
const platform = require("../controllers/platformSelectController")
//const isAuthenticated = require("../middleware/auth");
const router = express.Router();

//get
router.route("/:id").get(platform.selectPlatform);
router.route("/client/:client_id").get(platform.getClientDatabase);

module.exports = router;
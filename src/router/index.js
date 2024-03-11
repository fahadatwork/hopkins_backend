const platform = require("./platform");
const auth = require("./auth");
const router = require("express").Router();

router.use("/auth", auth);
router.use("/platform", platform)

module.exports = router;

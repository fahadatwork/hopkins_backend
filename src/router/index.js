const platform = require("./platform");
const auth = require("./auth");
const ecom = require('./ecom');
const router = require("express").Router();

router.use("/auth", auth);
router.use("/platform", platform);
router.use('/store', ecom);

module.exports = router;

const express = require("express");
const store = require("../controllers/storeControllers")
const router = express.Router();
const { Authenticated } = require('../middleware/auth')


router.get("/categories/all", Authenticated, store.ecomCategories);

module.exports = router;
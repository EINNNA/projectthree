const router = require("express").Router();
const mainRoutes = require("./books");

// Book routes
router.use("/main", mainRoutes);

module.exports = router;

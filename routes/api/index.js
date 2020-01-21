const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/api", apiRoutes);

module.exports = router;

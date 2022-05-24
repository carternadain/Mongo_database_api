const router = require("express").Router();
const thoughtRoutes = require("./thoughts-route");
const userRoutes = require("./users-route");


router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
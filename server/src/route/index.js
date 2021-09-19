const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");
const authMiddleware = require('../middlewares/admin.middleware');

router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 35 }),
  userController.signUp
);
router.post("/signin", userController.signIn);
router.post("/signout", userController.signOut);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;

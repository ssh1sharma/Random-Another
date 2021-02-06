let express = require("express");
let router = express.Router();
let userController = require("./controllers/userController");

router.get('/', userController.homeController);
router.post('/register', userController.registerController);

module.exports = router;
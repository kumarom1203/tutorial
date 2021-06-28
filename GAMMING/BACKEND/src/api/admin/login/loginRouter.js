const router = require("express").Router();
const {login, test} = require("./loginController");


router.post("/", login);
router.get("/test", test);



module.exports = router;


const router = require("express").Router();
const {
    login, 
    test,
    forgotPassword
} = require("./loginController");


router.post("/", login);
router.post("/forgotPassword", forgotPassword);

router.get("/test", test);



module.exports = router;


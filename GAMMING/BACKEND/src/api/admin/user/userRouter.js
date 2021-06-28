const router = require("express").Router();
const {listUser, addUser, listRole, addRole, detailUser, roleByUser, assignedRoleList} = require("./userController");
const { checkToken } = require("../../../helper/token_validation_admin");

router.post("/listUser", checkToken, listUser);
router.post("/listUserDemo", listUser);
router.post("/detailUser", checkToken, detailUser);
router.post("/roleByUser", checkToken, roleByUser);
router.post("/addUser", checkToken, addUser);
router.post("/listRole", checkToken, listRole);
router.post("/addRole", checkToken, addRole);
router.post("/assignedRoleList", checkToken, assignedRoleList);
router.post("/roleUserDemo", assignedRoleList);


module.exports = router;



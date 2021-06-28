const router = require("express").Router();
const {
    getScenarios, 
    listClient,
    createClient, 
    listGame, 
    createGame, 
    listSession, 
    createSession, 
    listGameBySession, 
    listGameUser, 
    createGameUser, 
    listUserByGame, 
    listSessionByClient,
    listfacilitator,
    basicInformation,
    createWorkshop,
    listWorkshop,
    detailWorkshop,
    getParticipant,
    getTeam,
    updateWorkshop,
    toggleStatusWorkshop,
    deleteWorkshop,
    getClient,
    deleteClient,
    updateClient
} = require("./gameController");
const { checkToken } = require("../../../helper/token_validation_admin");


router.post("/listClient", checkToken, listClient);
router.post("/createClient", checkToken, createClient);

router.post("/getClient", checkToken, getClient);
router.post("/deleteClient", checkToken, deleteClient);

router.post("/updateClient", checkToken, updateClient);

router.post("/listfacilitator", checkToken, listfacilitator);
router.post("/createfacilitator", checkToken, createClient);


router.post("/basicInformation", checkToken, basicInformation);


router.post("/createWorkshop", checkToken, createWorkshop);
router.post("/copyWorkshop", checkToken, createWorkshop);

router.post("/toggleStatusWorkshop", checkToken, toggleStatusWorkshop);

router.post("/updateWorkshop", checkToken, updateWorkshop);

router.post("/deleteWorkshop", checkToken, deleteWorkshop);


router.post("/listWorkshop", checkToken, listWorkshop);
router.post("/detailWorkshop", checkToken, detailWorkshop);


router.post("/getParticipant", checkToken, getParticipant);
router.post("/getTeam", checkToken, getTeam);



router.post("/listSession", checkToken, listSession);
router.post("/createSession", checkToken, createSession);

router.post("/listGame", checkToken, listGame);
router.post("/createGame", checkToken, createGame);


router.post("/listGameUser", checkToken, listGameUser);
router.post("/createGameUser", checkToken, createGameUser);

router.post("/listSessionByClient", checkToken, listSessionByClient);
router.post("/listUserByGame", checkToken, listUserByGame);

router.post("/listGameBySession", checkToken, listGameBySession);


router.post("/getScenarios", getScenarios);


module.exports = router;



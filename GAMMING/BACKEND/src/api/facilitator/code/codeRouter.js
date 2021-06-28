
const router = require("express").Router();
const {
    listWorkshop,
    basicInformation,
    clientCount,
    getClient,
    listClient,
    detailWorkshop,
    getTeam,
    getParticipant,
    getTeamWithParticipant,
    toggleStatusWorkshop,
    getAllCards
} = require("./codeController");
const { checkToken } = require("../../../helper/token_validation_facilitator");

router.post("/listWorkshop", checkToken, listWorkshop);

router.post("/basicInformation", checkToken, basicInformation);
router.post("/clientCount", checkToken, clientCount);

router.post("/getClient", checkToken, getClient);
router.post("/listClient", checkToken, listClient);

router.post("/detailWorkshop", checkToken, detailWorkshop);
router.post("/getParticipant", checkToken, getParticipant);
router.post("/getTeam", checkToken, getTeam);

router.post("/getTeamWithParticipant", checkToken, getTeamWithParticipant);

router.post("/toggleStatusWorkshop", checkToken, toggleStatusWorkshop);
router.post("/getAllCards", getAllCards);

module.exports = router;



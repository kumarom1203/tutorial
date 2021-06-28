const router = require("express").Router();
const {
    resetPassword,
    getParticipantListByTeam,
    gameMenu,
    teamSetupInstruction,
    gameVideo,
    initialSetup,
    roleList,
    setRole,
    setParticipantImage,
    setCompanyDetails,
    getCompanyDetails,
    setCompanyImage,
    disableBubble,
    bubbleStatus,
    defaultValueMachine,
    initialCondition,
    getChatHistory,
    updateModelPopUpPosition,
    getModelPopUpPosition,
    orderCard,
	getTeam,
    getRoundDetail,
    getlobbyPage
   
} = require("./codeController");



const {
    dataEntry
} = require("../../reportingController");




const { checkToken } = require("../../../helper/token_validation_participant");
const { uploadFile } = require("../../../helper/file_upload");

router.post("/resetPassword", checkToken, resetPassword);

router.post("/getParticipantListByTeam", checkToken, getParticipantListByTeam);
router.post("/gameMenu", checkToken, gameMenu);
router.post("/teamSetupInstruction", checkToken, teamSetupInstruction);
router.post("/gameVideo", checkToken, gameVideo);

router.post("/initialSetup", checkToken, initialSetup);
router.post("/roleList", checkToken, roleList);

//router.post("/roleList", checkToken, roleList);
router.post("/setRole", checkToken, setRole);

router.post("/setCompanyDetails", checkToken, setCompanyDetails);
router.post("/getCompanyDetails", getCompanyDetails);

router.post("/setParticipantImage", checkToken, uploadFile, setParticipantImage);
router.post("/setCompanyImage", checkToken, setCompanyImage);

router.post("/disableBubble", checkToken, disableBubble);
router.post("/bubbleStatus", checkToken, bubbleStatus);
router.post("/defaultValueMachine", checkToken, defaultValueMachine);
router.post("/initialCondition", checkToken, initialCondition);
router.post("/getChatHistory", checkToken, getChatHistory);

router.post("/updateModelPopUpPosition", checkToken, updateModelPopUpPosition);

router.post("/getModelPopUpPosition", checkToken, getModelPopUpPosition);

router.post("/orderCard", checkToken, orderCard);

router.post("/getTeam", checkToken, getTeam);


router.post("/getRoundDetail", getRoundDetail);

router.post("/getlobbyPage", getlobbyPage);


/////////////////////////// REPORTING SECTION /////////////////////////////////////////
router.post("/dataEntry", dataEntry);


module.exports = router;



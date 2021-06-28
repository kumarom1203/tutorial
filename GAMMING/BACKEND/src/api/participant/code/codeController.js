const {
	resetPasswordModel,
	getParticipantListByTeamModel,
	gameMenuModel,
	teamSetupInstructionModel,
	gameVideoModel,
	initialSetupModel,
	roleListModel,
	setRoleModel,
	setCompanyDetailsModel,
	getCompanyDetailsModel,
	setParticipantImageModel,
	setCompanyImageModel,
	disableBubbleModel,
	bubbleStatusModel,
	defaultValueMachineModel,
	initialConditionModel,
	getChatHistoryModel,
	updateModelPopUpPositionModel,
	getModelPopUpPositionModel,
	orderCardModel,
	getTeamModel,
  getRoundDetailModel,
  getlobbyPageModel

} = require("./codeModel");
const {md5enc} = require("./../../../helper/md5");



module.exports = {
    resetPassword: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
		body.passwordHash = md5enc(body.password);
        resetPasswordModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Password Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},
	
	

      getRoundDetail: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        //body.team_id = req.decoded.result.team_id;
        //body.workshop_id = req.decoded.result.workshop_id;
        console.log(body);
        getRoundDetailModel(body, (err, results) => {
          if (err) {
        return res.json({
                success: 0,
                message: "Database Error! Unable to process your request",
                  requestData: body,
                  //responceData: err
              });
            }
            if (!results) {
              return res.json({
                  success: 0,
                  message: "Data not found in database",
                  requestData: body,
                  responceData: results
              });
            }else{
              return res.json({
                success: 1,
                message: "Business found",
                  requestData: body,
                  responceData: results
              });
            }
        });
  },

        getlobbyPage: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        //body.team_id = req.decoded.result.team_id;
        //body.workshop_id = req.decoded.result.workshop_id;
        console.log(body);
        getlobbyPageModel(body, (err, results) => {
          if (err) {
        return res.json({
                success: 0,
                message: "Database Error! Unable to process your request",
                  requestData: body,
                  //responceData: err
              });
            }
            if (!results) {
              return res.json({
                  success: 0,
                  message: "Data not found in database",
                  requestData: body,
                  responceData: results
              });
            }else{
              return res.json({
                success: 1,
                message: "Business found",
                  requestData: body,
                  responceData: results
              });
            }
        });
  },



		getTeam: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        getTeamModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Business found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	getParticipantListByTeam: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        getParticipantListByTeamModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Participant List Found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},


	gameMenu: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        gameMenuModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Password Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	teamSetupInstruction: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        teamSetupInstructionModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Password Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	gameVideo: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        gameVideoModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Password Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	initialSetup: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        initialSetupModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Password Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},
	roleList: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        roleListModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Password Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},
	setRole: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        setRoleModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Role Changes Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	setParticipantImage: (req, res) => {
		
		const body = req.body;
		
        body.created_by = req.decoded.result.id;
		    body.img_url = req.img_url;
		
        setParticipantImageModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Image Updated Succesfully",
              		requestData: body,
              		responceData: body
            	});
          	}
		});
	

		
	},

	setCompanyImage: (req, res) => {
		
		const body = req.body;
        body.created_by = req.decoded.result.id;
		
		
        setCompanyImageModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Image Updated Succesfully",
              		requestData: body,
              		responceData: body
            	});
          	}
		});
	

		
	},


	setCompanyDetails: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        setCompanyDetailsModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Company Setup Updated Succesfully",
              		requestData: body,
              		responceData: body
            	});
          	}
        });
	},

	getCompanyDetails: (req, res) => {
        const body = req.body;
        //body.team_id = req.decoded.result.team_id;
        getCompanyDetailsModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Company Setup Updated Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	disableBubble: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        disableBubbleModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Company Setup Updated Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	bubbleStatus: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        bubbleStatusModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Company Setup Updated Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	defaultValueMachine: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        defaultValueMachineModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Company Setup Updated Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	initialCondition: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        initialConditionModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Company Setup Updated Succesfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	getChatHistory: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        getChatHistoryModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Old Chat List",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	updateModelPopUpPosition: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        updateModelPopUpPositionModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Old Chat List",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	getModelPopUpPosition: (req, res) => {
        const body = req.body;
        //body.created_by = req.decoded.result.id;
        getModelPopUpPositionModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Old Chat List",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	orderCard: (req, res) => {
		const data = req.body;
	
        var quarters = data.quarters.replace("Q", "");
		var body = {'years':data.years, 'quarters':quarters, team_id:11}
		
		
        orderCardModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Data not found in database",
              		requestData: body,
              		responceData: results
            	});
          	}else{
            	return res.json({
            		success: 1,
            		message: "Order Card List",
              		requestData: body,
              		responceData: results
            	});
          	}
        });  
	},



	
}

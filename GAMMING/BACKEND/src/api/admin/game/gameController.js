const {
	getScenariosModel, 
	listClientModel, 
	createClientModel, 
	listGameModel, 
	createGameModel, 
	listGameUserModel, 
	createGameUserModel, 
	listSessionModel, 
	createSessionModel, 
	listGameBySessionModel, 
	listSessionByClientModel, 
	listUserByGameModel,
	listfacilitatorModel,
	basicInformationModel,
	createWorkshopModel,
	listWorkshopModel,
	detailWorkshopModel,
	getParticipantModel,
	getTeamModel,
	updateWorkshopModel,
	toggleStatusWorkshopModel,
	deleteWorkshopModel,
	getClientModel,
	deleteClientModel,
	updateClientModel

} = require("./gameModel");


module.exports = {
	
	toggleStatusWorkshop: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        toggleStatusWorkshopModel(body, (err, results) => {
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
            		message: "Status Changes",
              		requestData: body,
              		responceData: results
            	});
				
          	}
        });
	},


	getScenarios: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        getScenariosModel((err, results) => {
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
            		message: "getScenarios found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},
	
    listClient: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listClientModel((err, results) => {
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

	getClient: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        getClientModel(body, (err, results) => {
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
	
	listWorkshop: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listWorkshopModel((err, results) => {
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
	
	detailWorkshop: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        detailWorkshopModel(body, (err, results) => {
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
	
	getParticipant: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        getParticipantModel(body, (err, results) => {
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
        //////console.log('Decoded ', req.decoded);
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

    createClient: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        createClientModel(body, (err, results) => {
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
            		message: "Business Added Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	updateWorkshop: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
		
		updateWorkshopModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		
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
            		message: "Workshop Updated Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });





         
	},


	createWorkshop: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
		createWorkshopModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		
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
            		message: "Workshop Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        }); 
	},

	deleteWorkshop: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
		deleteWorkshopModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		
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
            		message: "Workshop Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        }); 
	},

	

	updateClient: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
		updateClientModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		
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
            		message: "Workshop Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        }); 
	},


	deleteClient: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
		deleteClientModel(body, (err, results) => {
        	if (err) {
				return res.json({
            		success: 0,
            		message: "Database Error! Unable to process your request",
              		requestData: body,
              		
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
            		message: "Workshop Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        }); 
	},


	listSession: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listSessionModel((err, results) => {
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
            		message: "Session found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

    createSession: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        createSessionModel(body, (err, results) => {
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
            		message: "Session Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	listGame: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listGameModel((err, results) => {
        	if (err) {
            	////console.log(err);
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
            		message: "Game found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

    createGame: (req, res) => {
		const body = req.body;
		////console.log(body);
        body.created_by = req.decoded.result.id;
        createGameModel(body, (err, results) => {
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
            		message: "Game Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	listGameBySession: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listGameBySessionModel(body, (err, results) => {
        	if (err) {
            	////console.log(err);
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
            		message: "Game found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

	listGameUser: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listGameUserModel((err, results) => {
        	if (err) {
            	////console.log(err);
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
            		message: "Game found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

    createGameUser: (req, res) => {
		const body = req.body;
		////console.log(body);
        body.created_by = req.decoded.result.id;
        createGameUserModel(body, (err, results) => {
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
            		message: "Player Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	listSessionByClient: (req, res) => {
		const body = req.body;
        body.created_by = req.decoded.result.id;
        listSessionByClientModel(body, (err, results) => {
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
            		message: "Player Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	listUserByGame: (req, res) => {
		const body = req.body;
        body.created_by = req.decoded.result.id;
        listUserByGameModel(body, (err, results) => {
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
            		message: "Player Created Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},
	listfacilitator: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        listfacilitatorModel((err, results) => {
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
            		message: "Facilitator found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},
	basicInformation: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        basicInformationModel((err, results) => {
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
            		message: "Facilitator found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

	
}

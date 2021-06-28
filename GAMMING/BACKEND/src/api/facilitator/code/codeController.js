const {
	listWorkshopModel,
	basicInformationModel,
	clientCountModel,
	getClientModel,
	listClientModel,
	detailWorkshopModel,
	getTeamModel,
	getParticipantModel,
	getTeamWithParticipantModel,
	toggleStatusWorkshopModel,
	getAllCardspModel
} = require("./codeModel");
module.exports = {
    listWorkshop: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        listWorkshopModel(body, (err, results) => {
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
	basicInformation: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
        basicInformationModel(body, (err, results) => {
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

	clientCount: (req, res) => {
        const body = req.body;
		body.created_by = req.decoded.result.id;
        clientCountModel(body, (err, results) => {
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
	getClient: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
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
	listClient: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        listClientModel(body, (err, results) => {
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
		body.created_by = req.decoded.result.id;
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
        body.created_by = req.decoded.result.id;
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

	getTeamWithParticipant: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        getTeamWithParticipantModel(body, (err, results) => {
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

		getAllCards: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        getAllCardspModel(body, (err, results) => {
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

}
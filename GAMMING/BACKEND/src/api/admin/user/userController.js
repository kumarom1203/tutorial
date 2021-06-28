const {userListModel, userAddModel, roleAddModel, roleListModel, detailUserModel, roleByUserModel, assignedRoleListModel} = require("./userModel");
module.exports = {

    listUser: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        userListModel((err, results) => {
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
            		message: "User found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

    addUser: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        userAddModel(body, (err, results) => {
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
            		message: "User Added Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	listRole: (req, res) => {
        const body = req.body;
        //////console.log('Decoded ', req.decoded);
        roleListModel((err, results) => {
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
            		message: "User found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
    },

    addRole: (req, res) => {
        const body = req.body;
        body.created_by = req.decoded.result.id;
        roleAddModel(body, (err, results) => {
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
            		message: "Role Added Successfully",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	detailUser: (req, res) => {
		const body = req.body;
        
        detailUserModel(body, (err, results) => {
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
            		message: "Request Accepted",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	
	roleByUser: (req, res) => {
		const body = req.body;
        roleByUserModel(body, (err, results) => {
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
            		message: "Request Accepted",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	assignedRoleList: (req, res) => {
		const body = req.body;
        assignedRoleListModel(body, (err, results) => {
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

				var groupBy = function(xs, key) {
					return xs.reduce(function(rv, x) {
						(rv[x[key]] = rv[x[key]] || []).push(x);
						return rv;
					}, {});
				};

				
            	return res.json({
            		success: 1,
            		message: "Request Accepted",
              		requestData: body,
              		responceData: groupBy(results, 'user_id')
            	});
          	}
        });
	}

}
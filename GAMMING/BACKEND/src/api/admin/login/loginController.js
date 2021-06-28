const {userLogin, listClientModel} = require("./loginModel");
const {md5enc} = require("./../../../helper/md5");
const { sign } = require("jsonwebtoken"); 
var async = require("async");
module.exports = {
    login: (req, res) => {
        const body = req.body;
        userLogin(body.email, md5enc(body.password), (err, results) => {
        	if (err) {
				return res.json({
            		success: 1,
            		message: "Database Error! Unable to process your  ",
              		requestData: body,
              		//responceData: err
            	});
          	}
          	if (!results) {
            	return res.json({
              		success: 0,
              		message: "Invalid email or password",
              		requestData: body,
              		responceData: results
            	});
          	}else{
				const jsontoken = sign({ result: results }, process.env.JWT_KEY_ADMIN, {
					expiresIn: process.env.JWT_EXPIRE_IN_ADMIN
			 	});
				results.jsonAdminToken = jsontoken;
            	return res.json({
            		success: 1,
            		message: "User Found",
              		requestData: body,
              		responceData: results
            	});
          	}
        });
	},

	test: (req, res) => {
		var result = [];
		listClientModel((err, results) => {
			result = results;
			////console.log(result);
		});
		
	}
}
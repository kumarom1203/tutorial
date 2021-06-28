const {dataEntryModel} = require("./reportingModel");
const {md5enc} = require("./../helper/md5");
const { sign } = require("jsonwebtoken"); 
//var async = require("async");


module.exports = {
	dataEntry: async (req, res, next) => {
		const body = req.body;
        dataEntryModel(body, (err, results) => {
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
		
	}
}
const pool = require('../../config/database');
module.exports = {
	dataEntryModel: (body, callBack) => {
		var query = pool.query('select id, name, email, user_type from facilitator', (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results[0]);
		});
	},
	
}


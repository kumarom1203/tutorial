const pool = require('../../../../config/database');
module.exports = {
	userLogin: (code, callBack) => {
		var query = pool.query('select * from facilitator where md5(code)=?',[code],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results[0]);
		});
		//////console.log(query);
		console.log(query.sql);
	},
	listClientModel: (callBack) => {
		var query = pool.query('select * from client order by id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	}
}


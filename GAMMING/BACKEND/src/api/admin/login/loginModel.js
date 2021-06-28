const pool = require('../../../../config/database');
module.exports = {
	userLogin: (email,password, callBack) => {
		var query = pool.query('select id, name, email, user_type from systemadmin where email=? and password=?',[email, password],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results[0]);
		});
		//////console.log(query);
		//////console.log(query.sql);
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
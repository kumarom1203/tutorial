const pool = require('../../../../config/database');
module.exports = {
	userLogin: (code, callBack) => {
		////console.log(user_id);
		////console.log(password);
        
		var query = pool.query('select id, name, email, team_id, workshop_id, user_type from participant where md5(code)=?',[code],(error, results, fields) => {
			if (error) {
				console.log(error);
				return callBack(error);
			}
			console.log(query.sql);
			return callBack(null, results[0]);
		});
	},

	forgotPasswordModel: (user_id, callBack) => {
		
        
		var query = pool.query('select id, team_id, workshop_id, user_type from participant where id=?',[user_id],(error, results, fields) => {
			if (error) {
				
				return callBack(error);
			}
			return callBack(null, results[0]);
		});
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


const pool = require('../../../../config/database');
module.exports = {

	userListModel: (callBack) => {
		var query = pool.query('select * from users order by id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	userAddModel: (data, callBack) => {
		
		var arr = data.roleList.split(",");
		
		var query = pool.query('insert into users(name, mobile, email, created_by) values(?,?,?,?)',[data.name, data.mobile, data.email, data.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				var insertId = results.insertId;
				arr.forEach(roleFunction);
				function roleFunction(item, index) {
					var query = pool.query('insert into users_role(user_id, role_id, created_by) values(?,?,?)',[insertId, item, data.created_by],(error, results, fields) => {
						if (error) {
							return callBack(error);
						}
					});	
					////console.log(item);
				}
				return callBack(null, results);
			}
			
		});
		
	},

	roleListModel: (callBack) => {
		var query = pool.query('select * from role ',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	roleAddModel: (data, callBack) => {
		var query = pool.query('insert into role(name, created_by) values(?,?)',[data.name, data.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	detailUserModel: (data, callBack) => {
		var query = pool.query('select * from users where id = ?',[data.user_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	roleByUserModel: (data, callBack) => {
		var query = pool.query('SELECT users_role.user_id, role.name FROM users_role LEFT JOIN role on users_role.role_id = role.id WHERE user_id = ?',[data.user_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	assignedRoleListModel: (data, callBack) => {
		var query = pool.query('SELECT users_role.id, users_role.user_id, role.name FROM users_role LEFT JOIN role on users_role.role_id = role.id', (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
		
	}

}
const pool = require('../../../../config/database');
module.exports = {
	listWorkshopModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM workshop WHERE facilitator_id = ?',[body.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			console.log(query.sql);
			return callBack(null, results);
		});
	},

    getAllCardspModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM order_card WHERE year = ?',[body.year], (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			console.log(query.sql);
			return callBack(null, results);
		});
	},

	basicInformationModel: (body, callBack) => {
		var query = pool.query("SELECT  * FROM facilitator_count WHERE facilitator_id = ? ",[body.created_by],(error, results, fields) => {
			if (error) {
				
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	clientCountModel: (body, callBack) => {
		var query = pool.query("SELECT COUNT(id) as total_client FROM client WHERE facilitator_id = ? ",[body.created_by],(error, results, fields) => {
			if (error) {
				
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	getClientModel: (body, callBack) => {
		var query = pool.query('SELECT client.*, systemadmin.name AS created_by, client_count.workshop_count, client_count.number_of_team, client_count.number_of_participant FROM client LEFT JOIN systemadmin ON client.created_by = systemadmin.id LEFT JOIN client_count ON client.id = client_count.client_id  WHERE client.id = ? AND facilitator_id = ?',[body.client_id, body.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	listClientModel: (body, callBack) => {
		var query = pool.query('SELECT client.*, systemadmin.name AS created_by, client_count.workshop_count, client_count.number_of_team, client_count.number_of_participant FROM client LEFT JOIN systemadmin ON client.created_by = systemadmin.id LEFT JOIN client_count ON client.id = client_count.client_id where client.is_deleted = 0 AND client.facilitator_id = ? ORDER BY client.id DESC',[body.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},
	detailWorkshopModel: (data, callBack) => {
		////console.log(data);
		var query = pool.query('SELECT workshop.*, client.name as client_name, facilitator.name as facilitator_name, scenario.name as scenario_name, systemadmin.name as created_by FROM workshop LEFT JOIN client ON workshop.client_id = client.id LEFT JOIN facilitator ON workshop.facilitator_id = facilitator.id LEFT JOIN scenario ON workshop.scenario_id = scenario.id LEFT JOIN systemadmin ON workshop.created_by = systemadmin.id where workshop.id = ? AND workshop.facilitator_id = ?',[data.workshop_id, data.created_by],(error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},
	getParticipantModel: (data, callBack) => {
		var query = pool.query('SELECT participant.*, team.name as team_name, team.workshop_id as workshop_id FROM participant LEFT JOIN team ON participant.team_id = team.id WHERE team.workshop_id = ? order by team.name',[data.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	getTeamModel: (data, callBack) => {
		var query = pool.query('SELECT * from team WHERE team.workshop_id = ?',[data.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	getTeamWithParticipantModel: (data, callBack) => {
		var query = pool.query('SELECT participant.*, team.name as team_name, team.workshop_id as workshop_id FROM participant LEFT JOIN team ON participant.team_id = team.id WHERE team.workshop_id = ? order by team.name',[data.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			else{
				function groupByOne(key, array) {
					var result = [];
					for (var i = 0; i < array.length; i++) {
						var added = false;
						for (var j = 0; j < result.length; j++) {
				
							if (result[j][key] == array[i][key]) {
				
								result[j].items.push(array[i]);
								added = true;
								break;
							}
						}
						if (!added) {
							var entry = {
								items: []
							};
							entry[key] = array[i][key];
							entry.items.push(array[i]);
							result.push(entry);
						}
					}
					return result;
				}
				var res = groupByOne("team_name", results);

				return callBack(null, res);

			}
			
		});
	},
	toggleStatusWorkshopModel: (data, callBack) => {
	
		var query = pool.query('UPDATE workshop SET status = ? WHERE id = ?',[data.status, data.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				return callBack(null, results);	

//values(?,?,?,?,?, ?, ?,?, ?, ?)
//insert into workshop(title, created_by, facilitator_id, client_id, scenario_id, description, workshop_start_date, workshop_end_date, number_of_team, number_of_participant) values(?,?,?,?,?, ?, ?,?, ?, ?)

			}
		});
	},

}
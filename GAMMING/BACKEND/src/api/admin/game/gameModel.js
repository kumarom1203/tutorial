const pool = require('../../../../config/database');
module.exports = {

	listClientModel: (callBack) => {
		var query = pool.query('SELECT client.*, systemadmin.name AS created_by, client_count.workshop_count, client_count.number_of_team, client_count.number_of_participant FROM client LEFT JOIN systemadmin ON client.created_by = systemadmin.id LEFT JOIN client_count ON client.id = client_count.client_id where client.is_deleted = 0 ORDER BY client.id DESC',(error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	getClientModel: (data, callBack) => {
		var query = pool.query('SELECT client.*, systemadmin.name AS created_by, client_count.workshop_count, client_count.number_of_team, client_count.number_of_participant FROM client LEFT JOIN systemadmin ON client.created_by = systemadmin.id LEFT JOIN client_count ON client.id = client_count.client_id  WHERE client.id = ?',[data.client_id],(error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},
	

	listfacilitatorModel: (callBack) => {
		var query = pool.query('select * from facilitator order by id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	listWorkshopModel: (callBack) => {
		var query = pool.query('SELECT workshop.*, client.name as client_name, facilitator.name as facilitator_name, scenario.name as scenario_name, systemadmin.name as created_by FROM workshop LEFT JOIN client ON workshop.client_id = client.id LEFT JOIN facilitator ON workshop.facilitator_id = facilitator.id LEFT JOIN scenario ON workshop.scenario_id = scenario.id LEFT JOIN systemadmin ON workshop.created_by = systemadmin.id where workshop.is_deleted = 0 ORDER BY workshop.id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	detailWorkshopModel: (data, callBack) => {
		var query = pool.query('SELECT workshop.*, client.name as client_name, facilitator.name as facilitator_name, scenario.name as scenario_name, systemadmin.name as created_by FROM workshop LEFT JOIN client ON workshop.client_id = client.id LEFT JOIN facilitator ON workshop.facilitator_id = facilitator.id LEFT JOIN scenario ON workshop.scenario_id = scenario.id LEFT JOIN systemadmin ON workshop.created_by = systemadmin.id where workshop.id = ?',[data.workshop_id],(error, results, fields) => {
			if (error) {
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

	basicInformationModel: (callBack) => {
		var query = pool.query("SELECT 'CLIENT_COUNT' AS 'identifier', COUNT(id) AS total FROM client UNION SELECT 'FACILITATOR_COUNT' AS 'identifier', COUNT(id) AS total FROM facilitator UNION SELECT 'WORKSHOP_COUNT' AS 'identifier', COUNT(id) AS total FROM workshop UNION SELECT 'PARTICIPANT_COUNT' AS 'identifier', COUNT(id) AS total FROM participant",(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},



	getScenariosModel: (callBack) => {
		var query = pool.query('select * from default_value order by id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				

				var groupBy = function(xs, key) {
					return xs.reduce(function(rv, x) {
						(rv[x[key]] = rv[x[key]] || []).push(x);
						return rv;
					}, {});
				};
				
				var res = groupBy(results, 'identifier');  
                
				return callBack(null, res);
			}
			
		});
	},

	createClientModel: (data, callBack) => {
		var query = pool.query('insert into client(name, industry, created_by) values(?,?,?)',[data.name, data.industry, data.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	updateWorkshopModel: (callBack) => {
		var query = pool.query('select * from facilitator order by id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	
	createWorkshopModel: (data, callBack) => {
		var number_of_participant = data.data.length;
		var query = pool.query('insert into workshop(title, created_by, facilitator_id, client_id, scenario_id, description, workshop_start_date, workshop_end_date, number_of_team, number_of_participant) values(?,?,?,?,?, ?, ?,?, ?, ?)',[data.workshop_title, data.created_by, data.facilitator, data.client_id, data.scenario_name, data.description, data.workshop_start_date, data.workshop_end_date, data.no_of_team, number_of_participant],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{	

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
				var res = groupByOne("TEAM", data.data);
				res.forEach(teamFunction);
				function teamFunction(item, index) {
				var query = pool.query('insert into team(name, workshop_id, created_by) values(?,?,?)',[item.TEAM, results.insertId, data.created_by],(error, resultsTwo, fields) => {
					if (error) {
						return callBack(error);
					}else{
								
						item.items.forEach(participantFunction);
						function participantFunction(participant, index) {
						var query = pool.query('insert into participant(workshop_id, name, created_by, team_id, email, mobile, department, position, location, gender, age)values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',[results.insertId, participant.NAME, data.created_by, resultsTwo.insertId, participant.EMAIL, participant.MOBILE, participant.DEPARTMENT, participant.POSITION, participant.LOCATION, participant.GENDER, participant.AGE],(error, resultsThree, fields) => {
							if (error) {
								return callBack(error);
							}else{
								
								
		
							}
						});
							
						}



					}
				});
					
				}
				return callBack(null, results);	
			}
		});
	},

	updateWorkshopModel: (data, callBack) => {
		
		var number_of_participant = data.data.length;
		//////console.log();
		var query = pool.query('UPDATE workshop SET title = ?, created_by = ?, facilitator_id = ?, client_id = ?, scenario_id = ?, description = ?, workshop_start_date = ?, workshop_end_date = ?, number_of_team = ?, number_of_participant = ? WHERE id = ?',[data.workshop_title, data.created_by, data.facilitator, data.client_id, data.scenario_name, data.description, data.workshop_start_date, data.workshop_end_date, data.no_of_team, number_of_participant, data.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{

				var query = pool.query('DELETE FROM team WHERE workshop_id = ?',[data.workshop_id],(error, results, fields) => {
					if (error) {
						return callBack(error);
					}else{
						var query = pool.query('DELETE FROM participant WHERE workshop_id = ?',[data.workshop_id],(error, results, fields) => {
							if (error) {
								return callBack(error);
							}else{
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
								var res = groupByOne("TEAM", data.data);
								res.forEach(teamFunction);
								function teamFunction(item, index) {
								var query = pool.query('insert into team(name, workshop_id, created_by) values(?,?,?)',[item.TEAM, data.workshop_id, data.created_by],(error, resultsTwo, fields) => {
									if (error) {
										return callBack(error);
									}else{
												
										item.items.forEach(participantFunction);
										function participantFunction(participant, index) {
										var query = pool.query('insert into participant(workshop_id, name, created_by, team_id, email, mobile, department, position, location, gender, age)values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',[data.workshop_id, participant.NAME, data.created_by, resultsTwo.insertId, participant.EMAIL, participant.MOBILE, participant.DEPARTMENT, participant.POSITION, participant.LOCATION, participant.GENDER, participant.AGE],(error, resultsThree, fields) => {
											if (error) {
												return callBack(error);
											}else{
												
												
						
											}
										});
											
										}
				
				
				
									}
								});
									
								}	
								
							}
						});
						
					}
				});
				return callBack(null, results);	
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


	deleteWorkshopModel: (data, callBack) => {
	
		var query = pool.query('UPDATE workshop SET is_deleted = 1 WHERE id = ?',[data.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				return callBack(null, results);	



			}
		});
	},

	deleteClientModel: (data, callBack) => {
	
		var query = pool.query('UPDATE client SET is_deleted = 1 WHERE id = ?',[data.client_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				return callBack(null, results);	


			}
		});
	},
	

	updateClientModel: (data, callBack) => {
	
		var query = pool.query('UPDATE client SET name = ?, industry = ? WHERE id = ?',[data.name, data.industry, data.client_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				return callBack(null, results);	


			}
		});
	},

	

	listSessionModel: (callBack) => {
		var query = pool.query('SELECT game_session.*, client.name AS client_name FROM game_session LEFT JOIN client ON game_session.client_id = client.id order by game_session.id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},


	createSessionModel: (data, callBack) => {
		var query = pool.query('insert into game_session(name, client_id, start_date, created_by) values(?,?,?,?)',[data.name, data.client_id, data.start_date, data.created_by],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},



	listGameModel: (callBack) => {
		var query = pool.query('SELECT game.*, game_session.name as game_session_name, game_session.start_date game_session_start_date, client.name as client_name FROM game LEFT JOIN game_session ON game.game_session_id = game_session.id LEFT JOIN client ON game_session.client_id = client.id ORDER BY game.id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	createGameModel: (data, callBack) => {
		data.games.forEach(gameFunction);
		function gameFunction(item, index) {
			var query = pool.query('insert into game(name, slogan, game_session_id, created_by) values(?,?,?,?)',[item.game_name, item.slogan, data.session_id, data.created_by],(error, results, fields) => {
				if (error) {
					return callBack(error);
				}
			});	
		}
		return callBack(null, 1);
	},

	listGameBySessionModel: (data, callBack) => {
		var query = pool.query('SELECT game.*, game_session.name as game_session_name, game_session.start_date game_session_start_date, client.name as client_name FROM game LEFT JOIN game_session ON game.game_session_id = game_session.id LEFT JOIN client ON game_session.client_id = client.id where game.game_session_id = ? ORDER BY game.id DESC',[data.session_id], (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	


	listGameUserModel: (callBack) => {
		var query = pool.query('SELECT game_users.*, game.name as game_name, game_session.name as game_session_name, game_session.start_date as game_session_start_date, client.name as client_name FROM game_users LEFT JOIN game on game_users.game_id = game.id LEFT JOIN game_session on game.game_session_id = game_session.id LEFT JOIN client on game_session.client_id = client.id order by game_users.id DESC',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	createGameUserModel: (data, callBack) => {

		data.players.forEach(gameFunction);
		function gameFunction(item, index) {
			
			var query = pool.query('insert into game_users(game_id, user_name, email, mobile, created_by) values(?,?,?,?,?)',[data.game_id, item.player_name, item.email, item.mobile, data.created_by],(error, results, fields) => {
				if (error) {
					return callBack(error);
				}
			});	
		}
		return callBack(null, 1);
	},
	listSessionByClientModel: (data, callBack) => {
		var query = pool.query('SELECT * from game_session where client_id = ?',[data.client_id], (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	listUserByGameModel: (data, callBack) => {
		var query = pool.query('SELECT * from game_users where game_id = ?',[data.game_id], (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},


	/*
	  game_id: '46',
  players: [
    { player_name: 'Om', email: 'om@123', mobile: '23215345' },
    {
      player_name: 'shailesh',
      email: 'sh@gmail.com',
      mobile: '523478564'
    },
    { player_name: 'Pawan', email: 'pq@gmail.com', mobile: '4567235' }
  ]
}
	
	*/


}
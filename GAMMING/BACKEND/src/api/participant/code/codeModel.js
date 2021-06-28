const pool = require('../../../../config/database');
module.exports = {
	resetPasswordModel: (body, callBack) => {
		var query = pool.query('UPDATE participant SET password = ? AND where id = ?',[body.passwordHash, body.user_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},


	getRoundDetailModel: (body, callBack) => {
		var query = pool.query('SELECT id, year, quarter, action, sub_action FROM initial_condition WHERE workshop_id = ? AND team_id = ? ORDER BY id DESC LIMIT 1',[body.workshop_id, body.team_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			console.log(query.sql);
			return callBack(null, results[0]);
		});
	},


	getParticipantListByTeamModel: (body, callBack) => {
		var query = pool.query('SELECT id , name, mobile, email, department, position, location, gender, img_url, age from participant where team_id = ?',[body.team_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}

			return callBack(null, results);
		});
	},
	gameMenuModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM game_menu', (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},
	
	getTeamModel: (data, callBack) => {


			var query1 = pool.query('UPDATE team SET enable_card_selection = 0 WHERE team.workshop_id = ?',[data.workshop_id],(error, results1, fields) => {
			if (error) {
				return callBack(error);
			}else{
				console.log('-------');
				console.log(query1.sql);
			   
			   	var query2 = pool.query('UPDATE team SET enable_card_selection = 1 WHERE marketing_power IN(SELECT * FROM (SELECT MAX(marketing_power) AS  marketing_power FROM team WHERE workshop_id = ?) as t) LIMIT 1',[data.workshop_id],(error, results2, fields) => {
			if (error) {
				return callBack(error);
			}else{
				console.log('-------');
				console.log(query2.sql);
			   
			   	var query = pool.query('SELECT * from team WHERE team.workshop_id = ? order by marketing_power DESC',[data.workshop_id],(error, results, fields) => {
				if (error) {
				return callBack(error);
			}else{
				console.log('-------');
				console.log(query.sql);

				return callBack(null, results);
			}
					});


			
			}
		});


			
			}
		});



	},

	teamSetupInstructionModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM team_setup_instruction', (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	gameVideoModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM game_video', (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results[0]);
		});
	},

	initialSetupModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM default_value', (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},
	roleListModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM role where name NOT IN (SELECT position FROM participant where team_id = ?)',[body.team_id], (error, results, fields) => {
			if (error) {
				return callBack(error);
			}else{
				return callBack(null, results);
			}
			
		});
	},

	setRoleModel: (body, callBack) => {
		var query = pool.query('UPDATE participant SET position = ? WHERE id = ?',[body.name, body.participant_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	setCompanyDetailsModel: (body, callBack) => {
		var query = pool.query('UPDATE team SET virtual_company_name = ?, slogan = ? WHERE id = ?',[body.name, body.slogan, body.team_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	getCompanyDetailsModel: (body, callBack) => {
		var query = pool.query('SELECT team.*, COUNT(participant.id) as total_participant FROM team LEFT JOIN participant ON team.id = participant.team_id WHERE team.id = ?',[body.team_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			
			return callBack(null, results[0]);
		});
	},

	setParticipantImageModel: (body, callBack) => {
		var query = pool.query('UPDATE participant SET img_url = ? WHERE id = ?',[body.img_url, body.participant_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			console.log(query.sql);
			return callBack(null, results);
		});
	},
	setCompanyImageModel: (body, callBack) => {
		var query = pool.query('UPDATE team SET img_url = ? WHERE id = ?',[body.img_url, body.team_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			console.log(query.sql);
			return callBack(null, results);
		});
	},

	disableBubbleModel: (body, callBack) => {
		var query = pool.query('UPDATE participant SET show_bubble = 0 WHERE id = ?',[body.participant_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	bubbleStatusModel: (body, callBack) => {
		var query = pool.query('SELECT id, show_bubble from participant where id = ?',[body.participant_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},


	defaultValueMachineModel: (body, callBack) => {
		var query = pool.query('SELECT * from default_value_machine',(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		});
	},

	initialConditionModel: (body, callBack) => {

		var query = pool.query('SELECT * from initial_condition where team_id = ? AND workshop_id = ?',[body.team_id, body.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			{
				console.log(query.sql);
				return callBack(null, results[0]);
			}
			
		});
	},

	getChatHistoryModel: (body, callBack) => {
		var query = pool.query('SELECT * FROM participant_chat WHERE team_id = ? order by id ASC',[body.team_id], (error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	},






	updateModelPopUpPositionModel: (body, callBack) => {
		
		var query = pool.query('UPDATE team SET popUpPosition=? where id = ? ',[body.popUpPosition, body.team_id],(error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	
	},

	getModelPopUpPositionModel: (body, callBack) => {
		
		var query = pool.query('SELECT popUpPosition FROM team where id = ? ',[body.team_id],(error, results, fields) => {
			if (error) {
				////console.log(error);
				return callBack(error);
			}
			return callBack(null, results);
		});
	
	},

	orderCardModel: async (body, callBack) => {
		
		var query = pool.query('SELECT condair_order_card.id as card_id, condair_order_card.*, condair_order_card_selected.selected AS selected, condair_order_card_selected.team_id, condair_order_card_selected.workshop_id, condair_order_card_selected.participant_id FROM condair_order_card LEFT JOIN condair_order_card_selected on condair_order_card.id = condair_order_card_selected.condair_order_card_id WHERE condair_order_card.year = ? AND condair_order_card.No_of_teams <= ? order by id ASC',[body.Year, body.No_of_teams],(error, results, fields) => {
			if (error) {
				console.log(error);
				return callBack(error);
			}else{
				body.results = results;
				console.log(query.sql);
				var query2 = pool.query('SELECT id FROM team WHERE card_selected = 0 AND workshop_id = ? ORDER BY marketing_power DESC LIMIT 0, 1',[body.workshop_id],(error, resultsTeam, fields) => {
				if (error) {
					console.log(error);
					return callBack(error);
				}else{
					
                var dataRaw = JSON.parse(JSON.stringify(resultsTeam[0]));
				body.enable_team_id = dataRaw.id; 
				console.log(query2.sql);
				return callBack(null, body);
			}
			
		});
			}

			
			
		});
	
	},


		getByRankModel: async (body, callBack) => {
		
		var query = pool.query('SELECT id FROM team WHERE card_selected = 0 AND workshop_id = ? ORDER BY rank DESC LIMIT 0, 1',[body.workshop_id],(error, resultsTeam, fields) => {
			if (error) {
				console.log(error);
				return callBack(error);
			}else{
				
                var dataRaw = JSON.parse(JSON.stringify(resultsTeam[0]));
				body.enable_team_id = dataRaw.id; 
				return callBack(null, body);
			}
			
		});
	
	},

	getlobbyPageModel: async (body, callBack) => {
		
		var query = pool.query('SELECT participant.name as participant_name, participant.id as participant_id, team.id as team_id, team.name as team_name FROM participant LEFT JOIN team ON participant.team_id = team.id WHERE team.workshop_id = ?',[body.workshop_id],(error, resultsTeam, fields) => {
			if (error) {
				console.log(error);
				return callBack(error);
			}else{
				
				return callBack(null, resultsTeam);
			}
			
		});
	
	},



	
	
	
}
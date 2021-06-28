const pool = require('../config/database');
module.exports = {
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


	getTeamModel: (body, callBack) => {
		var query = pool.query('SELECT initial_condition.marketing_round, initial_condition.id, initial_condition.workshop_id, initial_condition.team_id, team.name, initial_condition.marketing, initial_condition.action_type FROM initial_condition LEFT JOIN team ON initial_condition.team_id = team.id WHERE initial_condition.workshop_id = ?',[body.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			{
				console.log(query.sql);
				return callBack(null, results);
			}
			
		});
	},

	showCardSelectionModel: (body, callBack) => {

		var query = pool.query('SELECT initial_condition.SALES, initial_condition.FGWH_UNITS, initial_condition.order_card_number, initial_condition.marketing_round, initial_condition.id, initial_condition.workshop_id, initial_condition.team_id, team.name, initial_condition.marketing, initial_condition.action_type FROM initial_condition LEFT JOIN team ON initial_condition.team_id = team.id WHERE initial_condition.workshop_id = ?',[body.workshop_id],(error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			{
				console.log(query.sql);
				return callBack(null, results);
			}
			
		});
	},



	copyToLogTable: (data, callBack) => {
		var query = pool.query('select * from initial_condition where team_id = ?',[data.team_id],(error, results, fields) => {
			if (error) {
				console.log('copyToLogTable');
				console.log(error);
				//return callBack(error);
			}else{
				var dataString = JSON.stringify(results[0]);
				var query = pool.query('insert into initial_condition_log(team_id, participant_id, datas, workshop_id, quarter, year, action_type) values(?,?,?,?,?,?,?)',[data.team_id, data.participant_id, dataString, data.workshop_id, data.quarter, data.year, data.action],(error, results, fields) => {		
				if (error) {
					console.log('copyToLogTableError');
					console.log(error);
					return callBack(error);
				}else{
 
				}
				return 0;
				});
			}
		});
	},

	updateAR: (body, callBack) => {
		console.log(body);
		if(body.action == 'Update_AR_Q1'){
			var query = pool.query('UPDATE initial_condition SET CASH=CASH+?, AR_Q1 = AR_Q1-?,  action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.Update_trade_receivables, body.Update_trade_receivables,  body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'payInterest'){
			var query = pool.query('UPDATE initial_condition SET CASH=CASH-?, RESERVES = RESERVES-?, short_term_loans_interest = short_term_loans_interest+?, long_term_loans_interest = long_term_loans_interest+?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.total_intrest, body.total_intrest, body.short_term_loans_interest, body.long_term_laon_intrest,  body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'adjustShortTermLoanQ1'){
			var query = pool.query('UPDATE initial_condition SET CASH=CASH+?, STL_Q1 = STL_Q1 + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.change_STL, body.change_STL,  body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'adjustLongTermLoan'){
			var query = pool.query('UPDATE initial_condition SET CASH=CASH+?, LTL = LTL + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.change_LTL, body.change_LTL,  body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'receive_ordered_material'){
			var query = pool.query('UPDATE initial_condition SET CASH=CASH - ?, INBOUND_LOGISTICS = INBOUND_LOGISTICS + ?,  Ordered_Materials = Ordered_Materials - ?, invenrty_meterial_recieved = invenrty_meterial_recieved + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.Ordered_Materials, body.Ordered_Materials, body.Ordered_Materials, body.Ordered_Materials,  body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'Ordered_Materials'){
			var query = pool.query('UPDATE initial_condition SET Ordered_Materials=Ordered_Materials + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.Ordered_Materials, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'moveToFinsihedGoods'){
			var query = pool.query('UPDATE initial_condition SET GIP_UNITS=GIP_UNITS - ?, FGWH_UNITS=FGWH_UNITS + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.GIP_UNITS, body.GIP_UNITS, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'upgradeBelt_1'){
			var query = pool.query('UPDATE initial_condition SET BELT_1 = ?, CASH=CASH - ?, EQUIPMENT = EQUIPMENT+?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.BELT, body.val, body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'upgradeBelt_2'){
			var query = pool.query('UPDATE initial_condition SET BELT_2 = ?, CASH=CASH - ?, EQUIPMENT = EQUIPMENT+?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.BELT, body.val, body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

			if(body.action == 'upgradeBelt_3'){
			var query = pool.query('UPDATE initial_condition SET BELT_3 = ?, CASH=CASH - ?, EQUIPMENT = EQUIPMENT+?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.BELT, body.val, body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'upgradeBelt_4'){

			var query = pool.query('UPDATE initial_condition SET BELT_4 = ?, CASH=CASH - ?, EQUIPMENT = EQUIPMENT+?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.BELT, body.val, body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'investInAssemblyBelt'){
			var query = pool.query('UPDATE initial_condition SET action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'setAssemblyWorkers'){

			var sqlQuery = 'UPDATE initial_condition SET '+body.key+' = '+body.value+', action_type = "'+body.action+'", year = '+body.year+', participant_id = '+body.participant_id+' where team_id = '+body.team_id+' AND workshop_id = '+body.workshop_id;
           
			var query = pool.query(sqlQuery ,(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


	    if(body.action == 'adjustAssemblyWorker'){
			var query = pool.query('UPDATE initial_condition SET action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'transformFromOutBoundLogistic'){

			var sqlQuery = 'UPDATE initial_condition SET INBOUND_LOGISTICS = INBOUND_LOGISTICS - 1,  '+body.key+' = '+body.value+', action_type = "'+body.action+'", year = '+body.year+', participant_id = '+body.participant_id+' where team_id = '+body.team_id+' AND workshop_id = '+body.workshop_id;
           

			var query = pool.query(sqlQuery ,(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


		if(body.action == 'startNewProduction'){
			var query = pool.query('UPDATE initial_condition SET action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


		if(body.action == 'Payassemblyworkers'){
			var query = pool.query('UPDATE initial_condition SET assembly_worker_salary = assembly_worker_salary + ?, CASH = CASH - ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.salaries, body.salaries, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


		if(body.action == 'adjustRndPerson'){
			var query = pool.query('UPDATE initial_condition SET R_N_D = R_N_D + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


		if(body.action == 'Developquality'){
			var query = pool.query('UPDATE initial_condition SET action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'adjustSalesPerson'){
			var query = pool.query('UPDATE initial_condition SET SALES = SALES + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


		if(body.action == 'Adjustsalesforce'){
			var query = pool.query('UPDATE initial_condition SET action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}


			if(body.action == 'setMarketingPerson'){
			var query = pool.query('UPDATE initial_condition SET marketing = marketing + ?, action_type = ?, year = ?, participant_id = ? where team_id = ? AND workshop_id = ?', [body.val, body.action, body.year, body.participant_id, body.team_id, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'startMarketing'){
			
			var query = pool.query('UPDATE initial_condition SET action_type = ? where workshop_id = ?', [body.action, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});

		}

		if(body.action == 'endMarketing'){
			var query = pool.query('UPDATE initial_condition SET marketing_round = 1,  action_type = ? where workshop_id = ?', [body.action, body.workshop_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}



		if(body.action == 'selectOrderCard'){
			var query = pool.query('UPDATE initial_condition SET order_card_number = ? where team_id = ?', [body.order_card_number, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

	    if(body.action == 'Definecommunicationefforts'){
			var query = pool.query('UPDATE initial_condition SET action_type = ? where team_id = ?', [body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

		if(body.action == 'deliverOrder'){
			var query = pool.query('UPDATE initial_condition SET FGWH_UNITS = FGWH_UNITS-?, CASH = CASH + ?, AR_Q1 = AR_Q1 + ?, cogs = cogs + ?, order_card_number_deliverd= ?, action_type = ? where team_id = ?', [body.FGWH_UNITS, body.cash, body.credit, body.total, body.number_deliverd, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
		}

			if(body.action == 'orderManagementEnd'){
			var query = pool.query('UPDATE initial_condition SET action_type = ? where team_id = ?', [body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}


		if(body.action == 'payRNDsalary'){
			var query = pool.query('UPDATE initial_condition SET CASH = CASH -?, R_N_D_salary = R_N_D_salary + ?, action_type = ? where team_id = ?', [body.salary, body.salary, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}





		if(body.action == 'payAdminsalary'){
			var query = pool.query('UPDATE initial_condition SET CASH = CASH -?, ADMIN_salary = ADMIN_salary + ?, action_type = ? where team_id = ?', [body.ADMIN_salary, body.ADMIN_salary, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}

		if(body.action == 'payMarketingsalary'){
			var query = pool.query('UPDATE initial_condition SET CASH = CASH -?, marketing_expenses = marketing_expenses + ?, action_type = ? where team_id = ?', [body.marketing, body.marketing, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}

		if(body.action == 'paySalessalary'){
			var query = pool.query('UPDATE initial_condition SET CASH = CASH -?, SALES_salary = SALES_salary + ?, action_type = ? where team_id = ?', [body.paySalessalary, body.paySalessalary, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results')
		}

		if(body.action == 'paySalessalary'){
			var query = pool.query('UPDATE initial_condition SET CASH = CASH -?, SALES_salary = SALES_salary + ?, action_type = ? where team_id = ?', [body.paySalessalary, body.paySalessalary, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}

		if(body.action == 'calculatEBIT'){
			var query = pool.query('UPDATE initial_condition SET ebit = ebit + ?, action_type = ? where team_id = ?', [body.ebit, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}

	

		if(body.action == 'niat'){
			var query = pool.query('UPDATE initial_condition SET taxes = taxes + ?, action_type = ? where team_id = ?', [ body.niat, body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}


		if(body.action == 'updateReserves'){
			var query = pool.query('UPDATE initial_condition SET action_type = ? where team_id = ?', [ body.action, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}

		if(body.action == 'goToAccounting'){

			var query = pool.query('UPDATE initial_condition SET marketing_round = 0, action_type = "initialCondition", year=?, order_card_number="[]", order_card_number_deliverd = "[]" where team_id = ?', [body.year, body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);

/*
				setTimeout(function(){ 

	              var query = pool.query('UPDATE initial_condition SET marketing_round = 0 where team_id = ?', [body.team_id],(error, results, fields) => {
					  if (error) {
					;
				}
				
				console.log('SET TIMEOUT FUNCTION GOT CALLED');
			});


				}, 2000);


               
             */


				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}


	if(body.action == 'goToAccountingPage'){
			var query = pool.query('UPDATE initial_condition SET marketing_round = 0 where team_id = ?', [body.team_id],(error, results, fields) => {
					if (error) {
					console.log('------------ERROR------------');
					console.log(error);
					return callBack(error);
				}
				console.log(query.sql);
				return callBack(null, results);
			});
			
			//return callBack(null, 'results');
		}













	},

}


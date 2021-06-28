localStorage.clear();
localStorage.setItem('currentPage', 'gameboardPage');
function do_login() {
  
	localStorage.setItem("participant_jwt", '');
    var code =  document.getElementById('code').value;
    var data = {code:code};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'participant/login',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
			//var res = JSON.parse(response);
			if(response.success == 1){
              
				localStorage.setItem("participant_jwt", response.responceData.jsonTokenParticipant);
				document.getElementById('err_msg').innerHTML='';
				localStorage.setItem("participant_id", response.responceData.id);
                localStorage.setItem("participant_name", response.responceData.name);
                localStorage.setItem("team_id", response.responceData.team_id);
                localStorage.setItem("user_type", response.responceData.user_type);
				localStorage.setItem("workshop_id", response.responceData.workshop_id);
                localStorage.setItem("language", 'english');
                 window.location.replace("player_introduction");
               
			}else{
                document.getElementById('err_msg').innerHTML='Wrong Code Supplied<br><br>';  
			}
        },
		error: function (textStatus, errorThrown) {
			document.getElementById('err_msg').innerHTML='Wrong Credentials<br><br>';  
        }		
    });
}



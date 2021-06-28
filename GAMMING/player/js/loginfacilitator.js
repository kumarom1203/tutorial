localStorage.clear();
localStorage.setItem('currentPage', 'gameboardPage');
var facilitator_jwt = '';
function do_login() {

    localStorage.setItem("facilitator_jwt", '');
    var code =  document.getElementById('code').value;
    var data = {code:code};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'facilitator/login',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            if(response.success == 1){
                localStorage.setItem("facilitator_jwt", response.responceData.jsonTokenFacilitator);
                document.getElementById('err_msg').innerHTML='';
                localStorage.setItem("facilitator_id", response.responceData.id);
                  localStorage.setItem("participant_id", 0);
                localStorage.setItem("facilitator_name", response.responceData.name);
                localStorage.setItem("user_type", response.responceData.user_type);
                facilitator_jwt = "Bearer "+response.responceData.jsonTokenFacilitator;
                getWorkShopDetails(facilitator_jwt);
               // saveOrdercardDetails();
                //window.location.replace("facilitator_introduction");
            }else{
                document.getElementById('err_msg').innerHTML='Wrong Code Supplied<br><br>';  
            }
        },
        error: function (textStatus, errorThrown) {
            document.getElementById('err_msg').innerHTML='Wrong Credentials<br><br>';  
        }       
    });
}





function getWorkShopDetails(facilitator_jwt){
    var data = {};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'facilitator/code/listWorkshop',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
              Authorization: facilitator_jwt
        },
        success: function(response) {
            //console.log(JSON.stringify(response.responceData));

            if(response.success == 1){
                localStorage.setItem("facilitator_all_workshop", JSON.stringify(response.responceData));
                localStorage.setItem("facilitator_current_workshop", JSON.stringify(response.responceData[0]));
                localStorage.setItem("workshop_id", response.responceData[0].id);

                getTeamDetails(response.responceData[0].id);


            }else{
                alert(response.message);
                //window.location.replace("login");
            }
        },
        error: function (textStatus, errorThrown) {
            alert('Unable to proccess');  
        }       
    });
    return 0;
}

function getTeamDetails(workshop_id){
    var data = {workshop_id: workshop_id};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'facilitator/code/getTeam',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
              Authorization: facilitator_jwt
        },
        success: function(response) {
            console.log(JSON.stringify(response.responceData));

            if(response.success == 1){
                localStorage.setItem("facilitator_all_team", JSON.stringify(response.responceData));
                localStorage.setItem("facilitator_current_team", JSON.stringify(response.responceData[0]));
                localStorage.setItem("team_id", response.responceData[0].id);

                window.location.replace("facilitator_introduction");

            }else{
                alert(response.message);
                //window.location.replace("login");
            }
        },
        error: function (textStatus, errorThrown) {
            alert('Unable to proccess');  
        }       
    });
    return 0;
}


var workshop_id = localStorage.getItem("workshop_id");
var team_id = localStorage.getItem("team_id");
var participant_id = localStorage.getItem("participant_id");
var participant_name = localStorage.getItem("participant_name");
var user_type = localStorage.getItem("user_type");
var participant_jwt = "Bearer "+localStorage.getItem("participant_jwt");
var team_name = '';
var total_participant = '';
var all_team_in_workshop = '';
var quarter = '';
var year = localStorage.getItem("year");
var socket = io(SOCKET_URL);


function saveOrdercardDetails(){

 

   var temp = [];
      var data = {year:year};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'facilitator/code/getAllCards',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
              Authorization: 'facilitator_jwt'
        },
        success: function(response) {
            if(response.success == 1){

                  response.responceData.forEach(orderCardFun);
                  function orderCardFun(item, index) {
                    //console.log(item);
                    temp[item['id']] = item;
                   }
                localStorage.setItem("allOrderCard", JSON.stringify(temp));
                
               
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

socket.emit('join_workshop', workshop_id);



    var data = {team_id:team_id};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'participant/code/getCompanyDetails',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
              Authorization: participant_jwt
        },
        success: function(response) {
            if(response.success == 1){
              localStorage.setItem("team_name", response.responceData.name);
              localStorage.setItem("virtual_company_name", response.responceData.virtual_company_name);
              localStorage.setItem("total_participant", response.responceData.total_participant);
              team_name = response.responceData.name;
              total_participant = response.responceData.total_participant;

            }else{
                alert(response.message);
                //window.location.replace("login");
            }
        },
        error: function (textStatus, errorThrown) {
            alert('Unable to proccess');  
        }       
    });


var HEARDER_CONTENT = `
<header class="header">
    <div class="header__branding">
        <div class="header__branding__logo"> <img src="../assets/images/logo.svg"></div>
        <div class="header__branding__name">
            <p class="font_regular uppercase text_blue_2">Play Economics</p>
        </div>
    </div>
    <div class="header__toolbar">
        <div class="toolbar">
            <div class="toolbar__group">
                <div class="toolbar__group__item">
                    <a class="button dropbtn-bet" id="myBtn-bet">
                        <div class="coin coin_green"><span id="team_head_count">2</span></div> <span id="team_head_with_count">Betaris</span><i class="far fa-angle-down"></i></a>
                    <div id="myDropdownbet" class="dropdown-content-bet"> 
                    
                </div>
            </div>
            <div class="toolbar__group">
                <div class="toolbar__group__item ">
                    <a aria-haspopup="true" mat-button="" class="mat-menu-trigger button"> <span id="team_head">Betaris</span><i class="far fa-angle-down"></i> </a>
                </div>
                <div class="toolbar__group__item">
                    <a class="button"> <span id="user_head">User-21</span> <i class="far fa-check-circle"></i></a>
                </div>
            </div>
            <div class="toolbar__group">
                <div class="toolbar__group__item"><a class="button "> Year <span id="year_head">1</span> </a></div>
                
             

                <div class="toolbar__group__item"><a class="button "> Action <span id="action_head">1</span> </a></div>
                <div class="toolbar__group__item" id="gameboard_action_button">
              
                </div>
            </div>
        </div>
    </div>
    <div class="header__profile ">
        <div class="toolbar">
            <div class="toolbar__group">
                <div class="toolbar__group__item">
                    <a class="mat-menu-trigger button dropbtn-lan" id="myBtn-lan"> <span class="L1112">EN</span><i class="far fa-angle-down"></i></a>
                    <div id="myDropdown-lan" class="dropdown-content-lan"> <a href="javascript:void(0)" onclick="changeLang(1)">EN</a> <a href="javascript:void(0)" onclick="changeLang(2)">CHI</a> </div>
                </div>
            </div>
            <div class="toolbar__group">
                <div class="toolbar__group__item">
                    <button type="submit" class="mat-menu-trigger button dropbtn" id="myBtn">Player Menu<i class="far fa-bars"></i></button>
                    <div id="myDropdown" class="dropdown-content"> 
                        <a href="javascript:void(0)" onclick="switchTabFun('gameboardPage')">Gameboard</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('marketPage')">Market</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('lobbyPage')">Lobby</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('accounting')" >Accounting</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('budgeting')" >Budgeting</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('forecast_player')" >Forecast</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('forecast_player_graph')" >Forecast Graph</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('kpi_player')" >KPI</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;






if(user_type == 'FACILATOR'){

    var facilitator_all_team = JSON.parse(localStorage.getItem("facilitator_all_team"));
      var menuItem = "";

   facilitator_all_team.forEach(myFunction);
 
    function myFunction(item, index) {
        var items = JSON.stringify(item);
        menuItem = menuItem + "<a href='javascript:void(0)' onclick='setTeamFacilitator("+items+")'>"+item.name+"</a>";
      
    }

   

  

   


    HEARDER_CONTENT = `
    <header class="header">
    <div class="header__branding">
        <div class="header__branding__logo"> <img src="../assets/images/logo.svg"></div>
        <div class="header__branding__name">
            <p class="font_regular uppercase text_blue_2">Play Economics</p>
        </div>
    </div>
    <div class="header__toolbar">
        <div class="toolbar">
            <div class="toolbar__group">
                <div class="toolbar__group__item">
                    <a class="button dropbtn-bet" id="myBtn-bet">
                        <div class="coin coin_green"><span id="team_head_count">0</span></div> <span id="team_head_with_count"></span><i class="far fa-angle-down"></i></a>
                    
                    <div id="myDropdownbet" class="dropdown-content-bet"> 
                        `+menuItem+`
                    </div>
                </div>
            </div>
            <div class="toolbar__group">
                <div class="toolbar__group__item ">
                    <a aria-haspopup="true" mat-button="" class="mat-menu-trigger button"> <span id="team_head">Betaris</span><i class="far fa-angle-down"></i> </a>
                </div>
                <div class="toolbar__group__item">
                    <a class="button"> <span id="user_head">User-21</span> <i class="far fa-check-circle"></i></a>
                </div>
            </div>
            <div class="toolbar__group">
                <div class="toolbar__group__item"><a class="button "> Year <span id="year_head">1</span> </a></div>
                <div class="toolbar__group__item"><a class="button "> Quarter <span id="quarter_head">1</span> </a></div>
                <div class="toolbar__group__item"><a class="button "> Action <span id="action_head">1</span> </a></div>
                <div class="toolbar__group__item" id="gameboard_action_button">

                <a href="javascript:void(0)" onclick="startGame()" class="button "> Start the game <i class="far fa-arrow-alt-to-right"></i></a>

                </div>
            </div>
        </div>
    </div>
    <div class="header__profile ">
        <div class="toolbar">
            <div class="toolbar__group">
                <div class="toolbar__group__item">
                    <a class="mat-menu-trigger button dropbtn-lan" id="myBtn-lan"> <span class="L1112">EN</span><i class="far fa-angle-down"></i></a>
                    <div id="myDropdown-lan" class="dropdown-content-lan"> <a href="javascript:void(0)" onclick="changeLang(1)">EN</a> <a href="javascript:void(0)" onclick="changeLang(2)">CHI</a> </div>
                </div>
            </div>
            <div class="toolbar__group">
                <div class="toolbar__group__item">
                    <button type="submit" class="mat-menu-trigger button dropbtn" id="myBtn">Facilitator menu<i class="far fa-bars"></i></button>
                    <div id="myDropdown" class="dropdown-content"> 

                        <a href="javascript:void(0)" onclick="switchTabFun('gameboardPage')">Gameboard</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('marketPage')">Market</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('lobbyPage')">Lobby</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('accounting')">Accounting</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('budgeting')">Budgeting</a> 
                        <a href="javascript:void(0)" onclick="switchTabFun('kpi_facilitator')">KPI</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;

}  


function startGame(){
    var data = {};
      socket.emit('startGame', workshop_id, data);
    }



    socket.on('receive_startGame', function(responseData){
        window.location = "gameboard";
    }); 


function switchTabFun(page){
    localStorage.setItem('currentPage', page);
    if(page == 'gameboardPage'){
        window.location.replace("gameboard");
    }
    else if(page == 'marketPage'){
        window.location.replace("gameboard");
    }

    else if(page == 'lobbyPage'){
        window.location.replace("gameboard");
    }
    else{
        window.location.replace(page);

    }
}




/*
function switchTabFun(page){
    document.getElementById("marketPage").classList.add('displaynone');
    document.getElementById("gameboardPage").classList.add('displaynone');
    document.getElementById("lobbyPage").classList.add('displaynone');
    document.getElementById(page).classList.remove('displaynone');
    if(page == 'marketPage'){
        getmarketPage();
    }
    if(page == 'lobbyPage'){
        getlobbyPage();
    }
}*/




function setTeamFacilitator(obj){
    console.log(obj);
    localStorage.setItem("facilitator_current_team", JSON.stringify(obj));
    localStorage.setItem("team_id", obj.id);
    location.reload();

}

$( document ).ready(function() {
    document.getElementById('header').innerHTML = HEARDER_CONTENT;
});


function openPopUp(){
        $('.hidden-menutop').toggle();
        // Alternative animation for example
        // slideToggle("fast");
}



function getlobbyPage(){
  console.log('GET TEAM LIST FOR LOBBY PAGE CALLED');

    var data = {team_id:team_id, workshop_id:workshop_id};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'participant/code/getlobbyPage',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
              Authorization: participant_jwt
        },
        success: function(response) {
         
            if(response.success == 1){
                // console.log(response.responceData);
                 var res = groupByOne('team_name', response.responceData);
             
               
                var innerHTML = '';
                res.forEach(teamDetailsLoop);
                function teamDetailsLoop(teams, index1) {

                    
                    innerHTML = innerHTML + '<div class="card card_border_radius"> <div class="card__item card__item_header padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none"> <div class="number"><span>1</span></div> <div class="title"> <p class="uppercase text_blue_1">'+teams.team_name+'</p> </div> </div>';
                      teams.items.forEach(participantDetailsLoop);
                      function participantDetailsLoop(participants, index2) {
                         
                          innerHTML = innerHTML + '<div class="card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half"> <a class="order order_green_2"> <div class="order__text"> <p><i class="far fa-check-circle"></i> &nbsp; '+participants.participant_name+'</p> </div> <div class="order__icon"> <p><i class="far fa-user-crown"></i></p> </div> </a> </div>';

                      }


                  innerHTML = innerHTML + '<div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"> </div> </div>';

                }
            document.getElementById("lobbyPageContent").innerHTML = innerHTML;
            }else{
                alert(response.message);
                //window.location.replace("login");
            }
        },
        error: function (textStatus, errorThrown) {
            alert('Unable to proccess');  
        }       
    });
    

}


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
                
function setGameRound(){
    var data = {team_id:team_id, workshop_id:workshop_id};
    $.ajax({
        type: 'POST',
        url: BASE_URL+'participant/code/getRoundDetail',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
              Authorization: participant_jwt
        },
        success: function(response) {
            console.log(response.responceData);
            if(response.success == 1){
                localStorage.setItem("quarter", response.responceData.quarter);
                localStorage.setItem("year", response.responceData.year);
                localStorage.setItem("action", response.responceData.action);
                localStorage.setItem("sub_action", response.responceData.sub_action);
                document.getElementById('year_head').innerHTML =  response.responceData.year;
                //document.getElementById('quarter_head').innerHTML = response.responceData.quarter;
               // document.getElementById('action_head').innerHTML = response.responceData.action +' '+ response.responceData.sub_action;
                document.getElementById('user_head').innerHTML = participant_name;
                document.getElementById('team_head').innerHTML = team_name;
                 document.getElementById('team_head_with_count').innerHTML = team_name;
                 document.getElementById('team_head_count').innerHTML = total_participant;
                 quarter = response.responceData.quarter;
                 year = response.responceData.year

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



function changeLang(argument) {
    if(argument == 1){
         localStorage.setItem("language", 'english');
         location.reload();
    }
    if(argument == 2){
         
        localStorage.setItem("language", 'chanies');
       location.reload();
    }

}

     
$( document ).ready(function() {
         document.getElementById("myBtn").onclick = function () {myFunction();};
         function myFunction() {
           document.getElementById("myDropdown-lan").classList.remove('show');
         document.getElementById("myDropdown").classList.toggle("show");
         }
         window.onclick = function (event) {
            alert("1");
         if (!event.target.matches('.dropbtn')) {
            alert("2");
         var dropdowns = document.getElementsByClassName("dropdown-content");
         for (let i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
          }
          }
          }
          };
     
         document.getElementById("myBtn-lan").onclick = function () {myFunctionLan();};
         function myFunctionLan() {
            document.getElementById("myDropdown").classList.remove('show');
            document.getElementById("myDropdown-lan").classList.toggle("show");
         }
         window.onclick = function (event) {
         
         if (!event.target.matches('.dropbtn-lan')) {

               var dropdowns = document.getElementsByClassName("dropdown-content-lan");
                  for (let i = 0; i < dropdowns.length; i++) {
                     var openDropdown = dropdowns[i];
                     if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                      }
                  }
            }
         }

         $('#myDropdown').on('click', function(){
            $('#myDropdown').removeClass('show');
         });

     
         document.getElementById("myBtn-bet").onclick = function () {myFunctionBet();};
         function myFunctionBet() {
           // document.getElementById("myDropdown-lan").classList.remove('show');
            document.getElementById("myDropdownbet").classList.toggle("show");
            
         }


         window.onclick = function (event) {
            console.log('got clcik');
         /*
         if (!event.target.matches('.dropbtn-bet')) {
               var dropdowns = document.getElementsByClassName("dropdown-content-bet");
                  for (let i = 0; i < dropdowns.length; i++) {
                     var openDropdown = dropdowns[i];
                     if (openDropdown.classList.contains('show')) {
                       // alert('ss');
                        openDropdown.classList.remove('show');
                      }
                  }
            }
            */
         }

         $('#myDropdown-lan').on('click', function(){
            $('#myDropdown-lan').removeClass('show');
         });
});


var innerHTML_BELT_1_2 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_2">
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="belt_1_bundle_1" onclick="transformFromOutBoundLogistic('belt_1_bundle_1')">
                                             <div class="coin coin_grey displaynone" id="belt_1_c_1">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_1_c_2">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                        <div class="assembly__line__coin-bundle">
            <a class="coin-bundle disabledPointer" id="belt_1_bundle_2" onclick="transformFromOutBoundLogistic('belt_1_bundle_2')">

                                                <div class="coin coin_grey displaynone" id="belt_1_c_3">
                                                   <span>1</span>
                                                </div>

                                                <div class="coin coin_gold displaynone" id="belt_1_c_4">
                                                   <span>3</span>
                                                </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                    </div>
                                    <div class="assembly__line__button-icon__list">
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_1_person_1" onclick="belt_1_person_1()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_1_person_2" onclick="belt_1_person_2()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_1_person_3" onclick="belt_1_person_3()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_1_person_4" onclick="belt_1_person_4()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                    </div>`;


var innerHTML_BELT_1_3 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_3">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_3_bundle_1" onclick="transformFromOutBoundLogistic('belt_3_bundle_1')">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_3_bundle_2" onclick="transformFromOutBoundLogistic('belt_3_bundle_2')"">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_3_bundle_3" onclick="transformFromOutBoundLogistic('belt_3_bundle_3')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_1" onclick="belt_1_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_2" onclick="belt_1_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_3" onclick="belt_1_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_4" onclick="belt_1_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;


var innerHTML_BELT_1_4 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_4">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_4_bundle_1" onclick="transformFromOutBoundLogistic('belt_4_bundle_1')">
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_4_bundle_2" onclick="transformFromOutBoundLogistic('belt_4_bundle_2')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_4_bundle_3" onclick="transformFromOutBoundLogistic('belt_4_bundle_3')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_4_bundle_4" onclick="transformFromOutBoundLogistic('belt_4_bundle_4')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_1" onclick="belt_1_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_2" onclick="belt_1_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_3" onclick="belt_1_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_1_person_4" onclick="belt_1_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;



var innerHTML_BELT_2_2 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_2">
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="belt_2_bundle_1" onclick="transformFromOutBoundLogistic('belt_2_bundle_1')">
                                              <div class="coin coin_grey displaynone" id="belt_2_c_1">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_2_c_2">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="belt_2_bundle_2" onclick="transformFromOutBoundLogistic('belt_2_bundle_2')">
                                              <div class="coin coin_grey displaynone" id="belt_2_c_3">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_2_c_4">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                    </div>
                                    <div class="assembly__line__button-icon__list">
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_2_person_1" onclick="belt_2_person_1()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_2_person_2" onclick="belt_2_person_2()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_2_person_3" onclick="belt_2_person_3()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_2_person_4" onclick="belt_2_person_4()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                    </div>`;


var innerHTML_BELT_2_3 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_3">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_1" onclick="transformFromOutBoundLogistic('belt_2_bundle_1')">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_2" onclick="transformFromOutBoundLogistic('belt_2_bundle_2')">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_3" onclick="transformFromOutBoundLogistic('belt_2_bundle_3')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_1" onclick="belt_2_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_2" onclick="belt_2_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_3" onclick="belt_2_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_4" onclick="belt_2_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;

var innerHTML_BELT_2_4 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_4">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_1" onclick="transformFromOutBoundLogistic('belt_2_bundle_1')">
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_1" onclick="transformFromOutBoundLogistic('belt_2_bundle_1')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_1" onclick="transformFromOutBoundLogistic('belt_2_bundle_1')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="belt_2_bundle_4" onclick="transformFromOutBoundLogistic('belt_2_bundle_4')">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>

<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_1" onclick="belt_2_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_2" onclick="belt_2_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_3" onclick="belt_2_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_2_person_4" onclick="belt_2_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;



var innerHTML_BELT_3_1 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_2">
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle inactive">
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle inactive">
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                    </div>
                                    <div class="assembly__line__button-icon__list">
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_3_person_1" onclick="belt_3_person_1()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_3_person_2" onclick="belt_3_person_2()"> 
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_3_person_3" onclick="belt_3_person_3()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_3_person_4" onclick="belt_3_person_4()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                    </div>`;


var innerHTML_BELT_3_2 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_2">
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="bundle362">
                                              <div class="coin coin_grey displaynone" id="belt_3_c_1">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_3_c_2">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="bundle373">
                                              <div class="coin coin_grey displaynone" id="belt_3_c_3">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_3_c_4">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                    </div>
                                    <div class="assembly__line__button-icon__list">
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_3_person_1" onclick="belt_3_person_1()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_3_person_2" onclick="belt_3_person_2()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_3_person_3" onclick="belt_3_person_3()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_3_person_4" onclick="belt_3_person_4()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                    </div>`;


var innerHTML_BELT_3_3 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_3">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111486">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111493">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111500">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_1" onclick="belt_3_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_2" onclick="belt_3_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_3" onclick="belt_3_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_4" onclick="belt_3_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;



var innerHTML_BELT_3_4 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_4">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111542">
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111550">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111560">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111568">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_1" onclick="belt_3_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_2" onclick="belt_3_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_3" onclick="belt_3_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_3_person_4" onclick="belt_3_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;



var innerHTML_BELT_4_1 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_2">
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle inactive" id="belt694"> 
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle inactive" id="belt699">
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                    </div>
                                    <div class="assembly__line__button-icon__list">
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_4_person_1" onclick="belt_4_person_1()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_4_person_2" onclick="belt_4_person_2()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_4_person_3" onclick="belt_4_person_3()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue" id="belt_4_person_4" onclick="belt_4_person_4()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                    </div>`;


var innerHTML_BELT_4_2 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_2">
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="bundle362">
                                              <div class="coin coin_grey displaynone" id="belt_4_c_1">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_4_c_2">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                       <div class="assembly__line__coin-bundle">
                                          <a class="coin-bundle disabledPointer" id="bundle373">
                                              <div class="coin coin_grey displaynone" id="belt_4_c_3">
                                                <span>1</span>
                                             </div>
                                             <div class="coin coin_gold displaynone" id="belt_4_c_4">
                                                <span>3</span>
                                             </div>
                                             <div class="coin-bundle__background"></div>
                                          </a>
                                       </div>
                                    </div>
                                    <div class="assembly__line__button-icon__list">
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_4_person_1" onclick="belt_4_person_1()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_4_person_2" onclick="belt_4_person_2()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_4_person_3" onclick="belt_4_person_3()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                       <div class="assembly__line__button-icon">
                                          <a class="button-icon button-icon_blue active" id="belt_4_person_4" onclick="belt_4_person_4()">
                                             <i class="fas fa-user"></i>
                                          </a>
                                       </div>
                                    </div>`;

                                    

var innerHTML_BELT_4_3 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_3">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111609">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111616">
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111623">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_1" onclick="belt_4_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_2" onclick="belt_4_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_3" onclick="belt_4_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_4" onclick="belt_4_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;



var innerHTML_BELT_4_4 = `<div class="assembly__line__coin-bundle__list assembly__line__coin-bundle_4">
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111665">
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111673">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111682">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__coin-bundle">
        <a class="coin-bundle disabledPointer" id="a1111111691">
            <!---->
            <!---->
            <div class="coin-bundle__background"></div>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>
<div class="assembly__line__button-icon__list">
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_1" onclick="belt_4_person_1()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_2" onclick="belt_4_person_2()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_3" onclick="belt_4_person_3()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <div class="assembly__line__button-icon">
        <a class="button-icon button-icon_blue active" id="belt_4_person_4" onclick="belt_4_person_4()"> <i class="fas fa-user"></i>
            <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div>
        </a>
    </div>
    <!---->
    <!---->
</div>`;


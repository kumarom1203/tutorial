
socket.emit('join_team', team_id);
var getInitialData = '';
var changeInnwerHtml = 1;
var STL = 0;
var LTL = 0;
var data = {
    'team_id': team_id,
    'workshop_id': workshop_id,
}

var blockedClass = 'blocked'; 

socket.emit('initialConditionBySocket', team_id, data);

socket.on('receive_initialConditionBySocket', function(initialData){
   setInitialConditionToAll(initialData)
});


function setInitialConditionToAll(initialData){


    blockedClass = 'blocked';
    getInitialData = initialData;
    console.log(initialData);
    STL = getInitialData.STL_Q1;
    LTL = getInitialData.LTL;

    var LIABILITIES = initialData.STL_Q1 + initialData.STL_Q2 + initialData.STL_Q3 + initialData.STL_Q4 + initialData.SHARE_CAPITAL + initialData.LTL;

    var ASSETS_HEAD = initialData.BUILDINGS + initialData.GIP_VALUE + initialData.FGWH_VALUE + initialData.EQUIPMENT + initialData.MACHINERY + initialData.AR_Q1 + initialData.AR_Q2 + initialData.AR_Q3 + initialData.AR_Q4 + initialData.CASH + initialData.RMWH_UNIT_N_VALUE + initialData.invenrty_meterial_recieved +initialData.assembly_worker_salary;

    var RESERVES = ASSETS_HEAD - LIABILITIES;
    LIABILITIES = ASSETS_HEAD;

    document.getElementById("R_N_D_salary").innerHTML = initialData.R_N_D_salary;
    document.getElementById("ADMIN_salary").innerHTML = initialData.ADMIN_salary;
    document.getElementById("marketing_expenses").innerHTML = initialData.marketing_expenses;
    document.getElementById("SALES_salary").innerHTML = initialData.SALES_salary;
    document.getElementById("ebit").innerHTML = initialData.ebit;
   

         document.getElementById("taxes").innerHTML = initialData.taxes;


         if(initialData.action_type == 'niat'){
            document.getElementById("niatax").innerHTML = initialData.ebit - initialData.taxes;

         }else{
            document.getElementById("niatax").innerHTML = 0;
         }
         

   

    

    document.getElementById("ASSETS_HEAD").innerHTML = ASSETS_HEAD;R_N_D_salary
    document.getElementById("RESERVES").innerHTML = RESERVES; 
    document.getElementById("LIABILITIES").innerHTML = LIABILITIES; 

    document.getElementById("cash_value").innerHTML = initialData.CASH;
    document.getElementById("BUILDINGS").innerHTML = initialData.BUILDINGS;

    document.getElementById("trade_receivable_value").innerHTML = initialData.AR_Q1 + initialData.AR_Q2 + initialData.AR_Q3 + initialData.AR_Q4;
    document.getElementById("MACHINERY_AND_EQUIPMENT").innerHTML = initialData.EQUIPMENT + initialData.MACHINERY;
    document.getElementById("inventory_material_goods_in_process_and_finished_goods").innerHTML = initialData.GIP_VALUE + initialData.invenrty_meterial_recieved + initialData.FGWH_VALUE + initialData.RMWH_UNIT_N_VALUE + initialData.assembly_worker_salary;

    document.getElementById("PLANT_AND_PROPERTY").innerHTML = initialData.BUILDINGS;


      document.getElementById("cogs").innerHTML = initialData.cogs;

   

    document.getElementById("STL").innerHTML = initialData.STL_Q1 + initialData.STL_Q2 + initialData.STL_Q3 + initialData.STL_Q4;
    document.getElementById("STL_INTREST").innerHTML = initialData.STL_INTREST+'%'; 
    document.getElementById("LTL_INTREST").innerHTML = initialData.LTL_INTREST+'%'; 
    document.getElementById("LTL").innerHTML = initialData.LTL; 
    document.getElementById("EMERGENCY_LOAN").innerHTML = initialData.EMERGENCY_LOAN; 
    document.getElementById("EMERGENCY_LOAN_INTREST").innerHTML = initialData.EMERGENCY_LOAN_INTREST+'%'; 

    document.getElementById("OTHER_LIABILITIES").innerHTML = initialData.OTHER_LIABILITIES; 
    document.getElementById("OTHER_LIABILITIES_INTREST").innerHTML = initialData.OTHER_LIABILITIES_INTREST+'%'; 

    document.getElementById("SHARE_CAPITAL").innerHTML = initialData.SHARE_CAPITAL; 
  
   
    document.getElementById("intrest").innerHTML = initialData.short_term_loans_interest + initialData.long_term_loans_interest; 

    document.getElementById("Ordered_Materials").innerHTML = initialData.Ordered_Materials; 
    var belt_1_person = initialData.belt_1_person_1 + initialData.belt_1_person_2 + initialData.belt_1_person_3 + initialData.belt_1_person_4;

    var belt_2_person = initialData.belt_2_person_1 + initialData.belt_2_person_2 + initialData.belt_2_person_3 + initialData.belt_2_person_4;

    var belt_3_person = initialData.belt_3_person_1 + initialData.belt_3_person_2 + initialData.belt_3_person_3 + initialData.belt_3_person_4;

    var belt_4_person = initialData.belt_4_person_1 + initialData.belt_4_person_2 + initialData.belt_4_person_3 + initialData.belt_4_person_4;

    var belt_person = [belt_1_person, belt_2_person, belt_3_person, belt_4_person];

    belt_person.sort(function(a, b){return b-a});

    var htmlCont = '';

    belt_person.forEach(myFunction);
function myFunction(item, index) {
  if(item){
    htmlCont = htmlCont + '<a class="button-icon button-icon_blue active blocked"> <i class="fas fa-user"></i> </a>';

  }else{
    htmlCont = htmlCont + '<a class="button-icon button-icon_blue blocked"> <i class="fas fa-user"></i> </a>';

  }
}
document.getElementById("ADMINISTRATION_IT").innerHTML = htmlCont; 







var finished_goodsBundle = '';

  for(var fg = 0; fg<initialData.FGWH_UNITS; fg++){
 
    finished_goodsBundle = finished_goodsBundle + '<div class="coin-bundle"> <div class="coin coin_grey"> <span>1</span> </div> <div class="coin coin_gold"> <span>3</span> </div> <div class="coin-bundle__background"></div> </div>';

   }


    

    
    if(initialData.action_type != 'moveToFinsihedGoods'){
        document.getElementById("finished_goodsBundle").innerHTML = finished_goodsBundle; 
    }









  
   coin_bundle_in = '';

   for(var ij = 0; ij<initialData.INBOUND_LOGISTICS; ij++){
    coin_bundle_in = coin_bundle_in + '<div class="coin-bundle"> <div class="coin coin_grey"> <span >1</span> </div> <div class="coin coin_gold"> <span>1</span> </div> <div class="coin-bundle__background"></div> <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div> </div>';

   }

     

     if(initialData.action_type != 'receive_ordered_material'){
         document.getElementById("coin_bundle_INBOUND_LOGISTICS").innerHTML = coin_bundle_in;
     }

   
  if(initialData.action_type == 'startMarketing'){
//   console.clear();
    console.log('Initail condtion called startMarketingOperation function');

     startMarketingOperation();
   

  }





   if(initialData.action_type == 'initialCondition'){

    

        document.getElementById("action_head").innerHTML = '1 A';

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 1A: UPDATE TRADE RECEIVABLES';

        document.getElementById("popupbox_content").innerHTML = 'Select the appropriate position in the BALANCE SHEET to receive outstanding payments';
        //document.getElementById("show-hidden-menu").classList.remove("disabledPointer");
        document.getElementById("card_card_border_radius").classList.add("active");
        document.getElementById("gameboard_action_button").innerHTML = '<a onclick="Update_AR_Q1()" class="button"> Update Trade Receivables <i class="far fa-arrow-alt-to-right"></i></a>';
        document.getElementById("Update_AR_BUTTON").setAttribute('onclick','Update_AR_Q1()');
       // document.getElementById("animation_invalid").classList.add("animation_invalid");

       if(initialData.marketing_round == 0){
        window.scrollTo(0,9999);
          openFancybox();

       }
        

   }


    if(initialData.action_type == 'startNewProduction'){
         document.getElementById("action_head").innerHTML = '3 E';
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 3E: PAY SALARIES FOR ASSEMBLY STAFF';
        document.getElementById("popupbox_content").innerHTML = 'Click on top right button to pay the salaries for the entire staff.';
         openFancybox();

        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1">  Pay assembly workers<i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick=" Payassemblyworkers()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';

    }





    if(initialData.action_type == 'upgradeBelt_1' || initialData.action_type == 'upgradeBelt_2' || initialData.action_type == 'upgradeBelt_3' || initialData.action_type == 'upgradeBelt_4' || initialData.action_type == 'moveToFinsihedGoods'){
           document.getElementById("card_card_border_radius_4").classList.add("active");

           
           document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Invest in assembly belts<i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="investInAssemblyBelt()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';
    }

    if(initialData.action_type == 'Update_AR_Q1'){
     
          document.getElementById("action_head").innerHTML = '1 B';
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 1B: PAY INTEREST ON SHORT- AND -LONG-TERM LIBILITES';
        document.getElementById("popupbox_content").innerHTML = 'Select the appropriate position in the INCOME STATEMENT to pay the interest of your liabilities.';
        document.getElementById("gameboard_action_button").innerHTML = '<a onclick="payInterest()" class="button"> Pay interest <i class="far fa-arrow-alt-to-right"></i></a>';
        //document.getElementById("show-hidden-menu").classList.add("disabledPointer"); 
        //document.getElementById("show-hidden-menu-1").classList.remove("disabledPointer");

        
        document.getElementById("card_card_border_radius").classList.remove("active");
        document.getElementById("animation_invalid").classList.remove("animation_invalid");
        
        document.getElementById("card_card_border_radius_1").classList.add("active");
        
        openFancybox();
   } 



    if(initialData.action_type == 'payInterest'){
         document.getElementById("action_head").innerHTML = '1 C';
       
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 1C: DECIDE ON SHORT-TERM LOANS';
        document.getElementById("popupbox_content").innerHTML = 'You may change the amount of your short-term loans with the -/+ button. The total amount of short- and long-term loans must be in relation to the total shareholder liabilities and equity (quota 2:1)';
         document.getElementById("gameboard_action_button").innerHTML = '<a onclick="adjustShortTermLoan()" class="button">  Adjust short-term loans  <i class="far fa-arrow-alt-to-right"></i></a>';
        
        document.getElementById("card_card_border_radius_1").classList.remove("active");
        document.getElementById("card_card_border_radius_2").classList.add("active");

        document.getElementById("counter__button__minus").classList.remove("disabledPointer");
        document.getElementById("counter__button__plus").classList.remove("disabledPointer");

        document.getElementById("show-hidden-menu-2").classList.remove("disabledPointer");
         openFancybox();
   }  



    if(initialData.action_type == 'endMarketing'){

   
      document.getElementById("marketPage").classList.add('displaynone');
    document.getElementById("gameboardPage").classList.add('displaynone');
    document.getElementById("lobbyPage").classList.add('displaynone');

    document.getElementById('gameboardPage').classList.remove('displaynone');
    document.getElementById("startMarketing").innerHTML = '';

 document.getElementById("action_head").innerHTML = '7';
    document.getElementById("popupbox_heading").innerHTML = 'ACTION 7: Order Management';
        document.getElementById("popupbox_content").innerHTML = 'You may deliver order from here';

        document.getElementById("gameboard_action_button").innerHTML = '<a onclick="ordermanagement()" class="button button_red_1">  Order Management  <i class="far fa-arrow-alt-to-right"></i></a>';

        document.getElementById("card_card_border_radius_9").classList.add("active");


       
   
        
    

          openFancybox();

   

  }


    if(initialData.action_type == 'adjustShortTermLoanQ1'){
         document.getElementById("action_head").innerHTML = '1 D';


      

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 1D: DECIDE ON LONG-TERM LOANS';
        document.getElementById("popupbox_content").innerHTML = 'You may change the amount of your long-term loans with the -/+ button. The total amount of short- and long-term loans must be in relation to the total shareholder liabilities and equity (quota 2:1)';
        document.getElementById("gameboard_action_button").innerHTML = '<a onclick="adjustLongTermLoan()" class="button">  Adjust long-term loans  <i class="far fa-arrow-alt-to-right"></i></a>';

        document.getElementById("card_card_border_radius_2").classList.add("active");
        document.getElementById("show-hidden-menu-2").classList.add("disabledPointer");
        document.getElementById("show-hidden-menu-3").classList.remove("disabledPointer");
        document.getElementById("counter__button__minus").classList.add("disabledPointer");
        document.getElementById("counter__button__plus").classList.add("disabledPointer");

        document.getElementById("counter__button__minus_long").classList.remove("disabledPointer");
        document.getElementById("counter__button__plus_long").classList.remove("disabledPointer");



          openFancybox();

   }   

var order_card =  JSON.parse(initialData.order_card_number);
        var order_deliverd = JSON.parse(initialData.order_card_number_deliverd);
        var savedOrderCard = JSON.parse(localStorage.getItem('allOrderCard'));
 
         var orderCardForAction = '';
         for(let val of order_card){
            var found = order_deliverd.includes(val);
            
            console.log(savedOrderCard[val]);
           



           if(val != 0){
            var deliver = savedOrderCard[val]['id']+''+savedOrderCard[val]['order_number'];
            var actionbtn = 'onclick="deliverOrder('+val+')"';

               if(found){
                actionbtn = '';
                deliver = '<div class="pill pill_green_1"> <span>Delivered</span> </div>';
              }
              var cashorcredit = 'CASH';

             if(savedOrderCard[val]["payment_terms"] == 0){
                cashorcredit = 'CREDIT';
             }
             orderCardForAction = orderCardForAction + '<div class="confirmation-container"> <a '+actionbtn+' class="card card_border_radius"> <div class="card__item card__item_text padding-bottom_mobile_half align_mobile_center"> '+deliver+' </div> <div class="card__item card__item_separator padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none padding-bottom_mobile_none"> </div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"> </div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_quarter"> </div> <div class="card__item card__item_finance-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="finance-list"> <div class="finance"> <div class="finance__text"> <p>Units</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_grey"> <span >'+savedOrderCard[val]["unit_per_order"]+'</span> </div> </div> </div> <div class="finance"> <div class="finance__text"> <p>Unit price</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_gold"> <span>'+savedOrderCard[val]["unit_price"]+'</span> </div> </div> </div> <div class="finance"> <div class="finance__text"> <p>Net sales</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_gold"> <span>'+savedOrderCard[val]["revenue_per_order"]+'</span> </div> </div> </div> </div> </div> <div class="card__item card__item_text padding-top_mobile_quarter padding-bottom_mobile_half"> <h4>'+cashorcredit+'</h4> </div> </a> </div>';

           }
          

         }


           document.getElementById("orderCardForAction").innerHTML = orderCardForAction;

    if(initialData.action_type == 'Payassemblyworkers'){
        
         document.getElementById("rd_1").classList.remove("disabledPointer");
         document.getElementById("rd_2").classList.remove("disabledPointer");
         document.getElementById("rd_3").classList.remove("disabledPointer");
         document.getElementById("rd_4").classList.remove("disabledPointer");
         document.getElementById("rd_5").classList.remove("disabledPointer");
         document.getElementById("rd_6").classList.remove("disabledPointer");

         document.getElementById("action_head").innerHTML = '4';
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 4: DEVELOP PRODUCT QUALITY';
        document.getElementById("popupbox_content").innerHTML = 'Each developer improves the quality index by +1. Decide on the quality development by adding or removing quality developers. Note that marketing power (1–6) is related to the quality level.';
        openFancybox();
        document.getElementById("card_card_border_radius_4").classList.remove("active");
        document.getElementById("card_card_border_radius_7").classList.add("active");
   }  


   

     for(var i=1; i<=initialData.SALES; i++){
        document.getElementById("sales_"+i).classList.add("active");
        //document.getElementById("rdc_"+i).classList.remove("inactive");
     }

    for(var i=1; i<=initialData.marketing; i++){

        document.getElementById("marketing_"+i).classList.add("active");
        //document.getElementById("rdc_"+i).classList.remove("inactive");


     }



    for(var i=1; i<=initialData.R_N_D; i++){

        document.getElementById("rd_"+i).classList.add("active");
        document.getElementById("rdc_"+i).classList.remove("inactive");


     }



     



    if(initialData.action_type == 'Developquality'){
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1">   Adjust sales force <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="Adjustsalesforce()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';

        document.getElementById("rd_1").classList.remove("blocked");
        document.getElementById("rd_2").classList.remove("blocked");
        document.getElementById("rd_3").classList.remove("blocked");
        document.getElementById("rd_4").classList.remove("blocked");
        document.getElementById("rd_5").classList.remove("blocked");
        document.getElementById("rd_6").classList.remove("blocked");
    }


    if(initialData.action_type == 'deliverOrder'){
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1">Order management <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="orderManagementEnd()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';

        document.getElementById("popupbox_heading").innerHTML = 'Confirm';
        document.getElementById("popupbox_content").innerHTML = 'Confirm order managment';
        openFancybox();
    }

    if(initialData.action_type == 'orderManagementEnd'){
         document.getElementById("action_head").innerHTML = '8 A ';

        document.getElementById("card_card_border_radius_1").classList.add("active");
        document.getElementById("card_card_border_radius_9").classList.remove("active");
        document.getElementById("show-hidden-menu-10").classList.remove("disabledPointer");

        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Pay R&amp;D expenses<i class="far fa-arrow-alt-to-right"></i> </a> </div>';

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 8A: PAY THE COSTS FOR R&D';
        document.getElementById("popupbox_content").innerHTML = 'Select the appropriate position in the INCOME STATEMENT to pay salaries and infrastructure cost of the R&D.';
        openFancybox();
    }



    if (initialData.action_type == 'payRNDsalary') {
         document.getElementById("action_head").innerHTML = '8 B';
        document.getElementById("card_card_border_radius_1").classList.add("active");
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Pay Admin Expenses expenses<i class="far fa-arrow-alt-to-right"></i> </a> </div>';
      document.getElementById("show-hidden-menu-11").classList.remove("disabledPointer");
      document.getElementById("show-hidden-menu-10").classList.add("disabledPointer");
       document.getElementById("popupbox_heading").innerHTML = 'ACTION 8B: PAY THE COSTS FOR ADMINISTRATION AND IT';
        document.getElementById("popupbox_content").innerHTML = 'Select the appropriate position in the INCOME STATEMENT to pay the salaries of the ADMINISTRATION & IT.';
      openFancybox();
    }


    if (initialData.action_type == 'payAdminsalary') {
         document.getElementById("action_head").innerHTML = '8 C';
        document.getElementById("card_card_border_radius_1").classList.add("active");
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Pay Marketing Expenses expenses<i class="far fa-arrow-alt-to-right"></i> </a> </div>';

        document.getElementById("show-hidden-menu-12").classList.remove("disabledPointer");
        document.getElementById("show-hidden-menu-11").classList.add("disabledPointer");
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 8C: PAY THE COSTS FOR MARKETING';
        document.getElementById("popupbox_content").innerHTML = 'Select the appropriate position in the INCOME STATEMENT to pay the cost of the communication campaign.';
        openFancybox();
    }

    if (initialData.action_type == 'payMarketingsalary') {
         document.getElementById("action_head").innerHTML = '8 D';
        document.getElementById("card_card_border_radius_1").classList.add("active");
          document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Pay Sales Expenses expenses<i class="far fa-arrow-alt-to-right"></i> </a> </div>';

      document.getElementById("show-hidden-menu-13").classList.remove("disabledPointer");
      document.getElementById("show-hidden-menu-12").classList.add("disabledPointer");
       document.getElementById("popupbox_heading").innerHTML = 'ACTION 8D: PAY THE COSTS FOR SALES';
        document.getElementById("popupbox_content").innerHTML = 'Select the appropriate position in the INCOME STATEMENT to pay salaries and infrastructure cost of the SALES.';
      openFancybox();
    }


    if (initialData.action_type == 'paySalessalary') {
         document.getElementById("action_head").innerHTML = '9 A';
        document.getElementById("card_card_border_radius_1").classList.remove("active");
        document.getElementById("card_card_border_radius_10").classList.add("active");


        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Calculate EBT<i class="far fa-arrow-alt-to-right"></i> </a> </div>';
        document.getElementById("show-hidden-menu-14").classList.remove("disabledPointer");
        document.getElementById("show-hidden-menu-13").classList.add("disabledPointer");
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 9A: CALCULATE EBIT';
        document.getElementById("popupbox_content").innerHTML = 'Click on the appropriate position in the INCOME STATEMENT to calculate your earnings before interest and taxes.';
        openFancybox();
    }

    if (initialData.action_type == 'calculatEBIT') {

         document.getElementById("action_head").innerHTML = '9 B';


        document.getElementById("card_card_border_radius_1").classList.add("active");

        document.getElementById("card_card_border_radius_10").classList.remove("active");

        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Settle taxes & calculate EAT<i class="far fa-arrow-alt-to-right"></i> </a> </div>';

        document.getElementById("show-hidden-menu-15").classList.remove("disabledPointer");

        document.getElementById("show-hidden-menu-14").classList.add("disabledPointer");

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 9B: PAY TAXES AND CALCULATE NET INCOME AFTER TAXES';

        document.getElementById("popupbox_content").innerHTML = 'Click on the appropriate position in the INCOME STATEMENT to pay the taxes and calculate the net income after taxes. Note that taxes are only due in case of profit.';

        openFancybox();

    }

       if (initialData.action_type == 'niat') {
         document.getElementById("action_head").innerHTML = '9 C';
        document.getElementById("card_card_border_radius_1").classList.remove("active");
        document.getElementById("card_card_border_radius_2").classList.add("active");
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button">Update reserves & end business period<i class="far fa-arrow-alt-to-right"></i> </a> </div>';
        document.getElementById("show-hidden-menu-16").classList.remove("disabledPointer");
        document.getElementById("show-hidden-menu-15").classList.add("disabledPointer");
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 9C: ADJUST RESERVES';
        document.getElementById("popupbox_content").innerHTML = 'Click on the appropriate position in the BALANCE SHEET to adjust the reserves according to the current year"s profit or loss.';
        openFancybox();  
    }

        if (initialData.action_type == 'updateReserves') {

             document.getElementById("action_head").innerHTML = '9 D';

      
        document.getElementById("card_card_border_radius_10").classList.remove("active");
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container"> <a class="button button_red_1" onclick="goToAccounting()"> Go to accounting <i class="far fa-arrow-alt-to-right"></i> </a> </div>';
        document.getElementById("show-hidden-menu-16").classList.add("disabledPointer");
        document.getElementById("show-hidden-menu-15").classList.add("disabledPointer");
        document.getElementById("popupbox_heading").innerHTML = 'ACTION 9D: BUSINESS PERIOD COMPLETED.';
        document.getElementById("popupbox_content").innerHTML = 'Click on the navigation bar to go to your accounts.';
        openFancybox(); 

    }






    if(initialData.action_type == 'adjustSalesPerson'){
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1">   Adjust sales force <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="Adjustsalesforce()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';
    }




    if(initialData.action_type == 'Adjustsalesforce' || initialData.action_type == 'setMarketingPerson'){
           document.getElementById("action_head").innerHTML = '6';
          document.getElementById("sales_1").classList.add("blocked");
          document.getElementById("sales_2").classList.add("blocked");
          document.getElementById("sales_3").classList.add("blocked");
          document.getElementById("sales_4").classList.add("blocked");
          document.getElementById("sales_5").classList.add("blocked");
          document.getElementById("sales_6").classList.add("blocked");
          document.getElementById("sales_7").classList.add("blocked");
          document.getElementById("sales_8").classList.add("blocked");
          document.getElementById("sales_9").classList.add("blocked");
          document.getElementById("sales_10").classList.add("blocked");
          document.getElementById("sales_11").classList.add("blocked");
          document.getElementById("sales_12").classList.add("blocked");

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 6: DEFINE COMMUNICATION EFFORTS & COMPLETE MARKETING CAMPAIGN';
        document.getElementById("popupbox_content").innerHTML = 'Decide on communication efforts to conclude your marketing campaign. Each such effort adds +1 to the marketing power (1-12).';

        if(initialData.action_type == 'Adjustsalesforce')
        {

         openFancybox();
        }
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Define communication efforts <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="Definecommunicationefforts()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';

        for(var i=1; i<=11; i++){

        document.getElementById("marketing_"+i).classList.remove("blocked");
        //document.getElementById("rdc_"+i).classList.remove("inactive");


     }

    }

  


    if(initialData.action_type == 'Definecommunicationefforts'){
         document.getElementById("action_head").innerHTML = '7';

   for(var i=1; i<=11; i++){

        document.getElementById("marketing_"+i).classList.add("blocked");
        //document.getElementById("rdc_"+i).classList.remove("inactive");


     }


        document.getElementById("popupbox_heading").innerHTML = 'ACTION 7A: ORDER MANAGEMENT';
        document.getElementById("popupbox_content").innerHTML = 'Select an order you want to deliver.';

        
         
         openFancybox();
        
        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Order management <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="Ordermanagement()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';

        for(var i=1; i<=11; i++){

            document.getElementById("marketing_"+i).classList.remove("blocked");
            //document.getElementById("rdc_"+i).classList.remove("inactive");
        }



    getmarketPage();
    document.getElementById("marketPage").classList.add('displaynone');
    document.getElementById("gameboardPage").classList.add('displaynone');
    document.getElementById("lobbyPage").classList.add('displaynone');
    document.getElementById('marketPage').classList.remove('displaynone');

    


    }
    if(initialData.action_type == 'adjustRndPerson'){


        document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Develop Quality <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="Developquality()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';
    }


    
    if(initialData.action_type == 'adjustLongTermLoan'){
      
        document.getElementById("action_head").innerHTML = '2 A';

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 2A: RECEIVE RAW MATERIAL';
        document.getElementById("popupbox_content").innerHTML = 'Click on the truck in the INBOUND LOGISTICS to receive and pay the raw material ordered in the previous period.';

        document.getElementById("gameboard_action_button").innerHTML = '<a onclick="RECEIVE RAW MATERIAL()" class="button">  RECEIVE RAW MATERIAL  <i class="far fa-arrow-alt-to-right"></i></a>';

        document.getElementById("card_card_border_radius_2").classList.remove("active");
        document.getElementById("card_card_border_radius_3").classList.add("active");

        document.getElementById("show-hidden-menu-3").classList.add("disabledPointer");
        document.getElementById("counter__button__minus_long").classList.add("disabledPointer");
        document.getElementById("counter__button__plus_long").classList.add("disabledPointer");
        document.getElementById("show-hidden-menu-4").classList.remove("disabledPointer");

        openFancybox();
        window.scrollTo(0, 0); 
    }



    if(initialData.action_type == 'receive_ordered_material'){
        var coin_bundle = ''; 
        var i = 0;    
        function myLoop() {         
            setTimeout(function() {   
                if (i < initialData.INBOUND_LOGISTICS) {            
                    coin_bundle = coin_bundle + '<div class="coin-bundle"> <div class="coin coin_grey"> <span >1</span> </div> <div class="coin coin_gold"> <span>1</span> </div> <div class="coin-bundle__background"></div> <div class="coin coin__animation coin_medium coin_gold inactive"> <span>+0</span> </div> </div>'; 
                    document.getElementById("coin_bundle_INBOUND_LOGISTICS").innerHTML = coin_bundle;   
                    document.getElementById("Ordered_Materials").innerHTML = initialData.Ordered_Materials + initialData.INBOUND_LOGISTICS - i -1; 
                    if(i >= (initialData.INBOUND_LOGISTICS-1)){
                        openFancybox();
                         document.getElementById("action_head").innerHTML = '2 B';
                         document.getElementById("gameboard_action_button").innerHTML = '<a class="button">   Order material   <i class="far fa-arrow-alt-to-right"></i></a>';
                    }
                    myLoop();        
                }                      
                i++; 
            }, 500) 
        }
        myLoop();  


        document.getElementById("popupbox_heading").innerHTML = 'ACTION 2B: ORDER RAW MATERIAL';
        document.getElementById("popupbox_content").innerHTML = 'Order raw material using the -/+ button in the INBOUND LOGISTICS. You will receive and pay those raw material units in the next period.';
        document.getElementById("card_card_border_radius_2").classList.remove("active");
        document.getElementById("card_card_border_radius_3").classList.add("active");    
        document.getElementById("show-hidden-menu-4").classList.add("disabledPointer");
        document.getElementById("ORDERRAWMATERIAL_minus").classList.remove("inactive");
        document.getElementById("ORDERRAWMATERIAL_minus").classList.remove("blocked");
        document.getElementById("ORDERRAWMATERIAL_plus").classList.remove("inactive");
        document.getElementById("ORDERRAWMATERIAL_plus").classList.remove("blocked");     
    }  



        if(initialData.action_type == 'Ordered_Materials'){
             document.getElementById("action_head").innerHTML = '3 A';
            document.getElementById("popupbox_heading").innerHTML = 'ACTION 3A: UPDATE ONGOING PRODUCTION';
            document.getElementById("popupbox_content").innerHTML = 'Click on the FINISHED GOODS inventory to transform goods in process to finished goods.';
            document.getElementById("card_card_border_radius_3").classList.remove("active");
            document.getElementById("card_card_border_radius_5").classList.add("active");
            document.getElementById("1617882767").classList.remove("disabledPointer");
            openFancybox();
        } 

        


  
        if(initialData.action_type == 'Developquality'){
             document.getElementById("action_head").innerHTML = '5';
            document.getElementById("rd_1").classList.add("disabledPointer");
            document.getElementById("rd_2").classList.add("disabledPointer");
            document.getElementById("rd_3").classList.add("disabledPointer");
            document.getElementById("rd_4").classList.add("disabledPointer");
            document.getElementById("rd_5").classList.add("disabledPointer");
            document.getElementById("rd_6").classList.add("disabledPointer");
            document.getElementById("card_card_border_radius_7").classList.remove("active");
            document.getElementById("card_card_border_radius_8").classList.add("active");
            document.getElementById("popupbox_heading").innerHTML = 'ACTION 5: DECIDE ON SALES FORCE';
            document.getElementById("popupbox_content").innerHTML = 'Define the size of your sales force. You can add or remove staff. Each sales can handle 1 customer order, and adds +1 to the marketing power (1–12).';
            openFancybox();
            for(var i=1; i<=12; i++){
                document.getElementById("sales_"+i).classList.remove("blocked");
            }

}   
  



        if(initialData.action_type == 'setAssemblyWorkers'){
            blockedClass = 'cutomcssclass';
             document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Adjust Assembly Workers<i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="adjustAssemblyWorker()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';
        }


        if(initialData.action_type == 'investInAssemblyBelt'){
            blockedClass = 'cutomcssclass';


                  document.getElementById("show-hidden-menu-6").classList.add("disabledPointer");
        document.getElementById("show-hidden-menu-7").classList.add("disabledPointer");

        document.getElementById("show-hidden-menu-8").classList.add("disabledPointer");
        document.getElementById("show-hidden-menu-9").classList.add("disabledPointer");

         document.getElementById("action_head").innerHTML = '3 C';

               document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Adjust Assembly Workers<i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="adjustAssemblyWorker()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';
            document.getElementById("popupbox_heading").innerHTML = 'ACTION 3C: ADJUST ASSEMBLY STAFF';
            document.getElementById("popupbox_content").innerHTML = 'You can add or remove workers in available assembly lines.';
            /*
             document.getElementById("card_card_border_radius_3").classList.remove("active");
             document.getElementById("card_card_border_radius_5").classList.add("active");
             document.getElementById("1617882767").classList.remove("disabledPointer");
            */
            openFancybox();
        }  




    if(initialData.action_type == 'adjustAssemblyWorker' || initialData.action_type == 'transformFromOutBoundLogistic'){
         document.getElementById("action_head").innerHTML = '3 D';
         document.getElementById("popupbox_heading").innerHTML = 'ACTION 3D: START NEW PRODUCTION';
        document.getElementById("popupbox_content").innerHTML = 'Select the available spaces on the assembly belts to place new production orders.';



      
        setTimeout(function() { 


         document.getElementById("gameboard_action_button").innerHTML = '<div class="confirmation-container" id="show-hidden-menutop" onclick="openPopUp()"> <a class="button button_red_1"> Start New Production <i class="far fa-arrow-alt-to-right"></i> </a> <div class="confirmation hidden-menutop" style="display: none;"> <div class="confirmation__item confirmation__text"> <p>Confirm?</p> </div> <div class="confirmation__item confirmation__buttons"> <button onclick="startNewProduction()" class="button button_blue_1"> <i class="far fa-check"></i> </button> <button class="button button_blue_3"> <i class="far fa-times"></i> </button> </div> </div> <!----> </div>';


        if(initialData.action_type == 'adjustAssemblyWorker'){
            openFancybox();
        }


        if(document.getElementById("belt_1_bundle_1"))
            document.getElementById("belt_1_bundle_1").classList.remove("disabledPointer");

        if(document.getElementById("belt_1_bundle_2"))
            document.getElementById("belt_1_bundle_2").classList.remove("disabledPointer");

        if(document.getElementById("belt_1_bundle_3"))
            document.getElementById("belt_1_bundle_3").classList.remove("disabledPointer");

        if(document.getElementById("belt_1_bundle_4"))
            document.getElementById("belt_1_bundle_4").classList.remove("disabledPointer");


        if(document.getElementById("belt_2_bundle_1"))
            document.getElementById("belt_2_bundle_1").classList.remove("disabledPointer");

        if(document.getElementById("belt_2_bundle_2"))
            document.getElementById("belt_2_bundle_2").classList.remove("disabledPointer");

        if(document.getElementById("belt_2_bundle_3"))
            document.getElementById("belt_2_bundle_3").classList.remove("disabledPointer");

        if(document.getElementById("belt_2_bundle_4"))
            document.getElementById("belt_2_bundle_4").classList.remove("disabledPointer");

        if(document.getElementById("belt_3_bundle_1"))
            document.getElementById("belt_3_bundle_1").classList.remove("disabledPointer");

        if(document.getElementById("belt_3_bundle_2"))
            document.getElementById("belt_3_bundle_2").classList.remove("disabledPointer");

        if(document.getElementById("belt_3_bundle_3"))
            document.getElementById("belt_3_bundle_3").classList.remove("disabledPointer");

        if(document.getElementById("belt_3_bundle_4"))
            document.getElementById("belt_3_bundle_4").classList.remove("disabledPointer");

        if(document.getElementById("belt_4_bundle_1"))
            document.getElementById("belt_4_bundle_1").classList.remove("disabledPointer");

        if(document.getElementById("belt_4_bundle_2"))
            document.getElementById("belt_4_bundle_2").classList.remove("disabledPointer");

        if(document.getElementById("belt_4_bundle_3"))
            document.getElementById("belt_4_bundle_3").classList.remove("disabledPointer");

        if(document.getElementById("belt_4_bundle_3"))
            document.getElementById("belt_4_bundle_4").classList.remove("disabledPointer");

         }, 500) 
    }

    if(initialData.action_type == 'moveToFinsihedGoods'){
        var coin_bundle = ''; 
        var i = 0;    
        function myLoop() {         
            setTimeout(function() {   
                if (i < initialData.FGWH_UNITS) {  

                    coin_bundle = coin_bundle + '<div class="coin-bundle"> <div class="coin coin_grey"> <span>1</span> </div> <div class="coin coin_gold"> <span>3</span> </div> <div class="coin-bundle__background"></div> </div>'; 

                    document.getElementById("finished_goodsBundle").innerHTML = coin_bundle;   

                    if(i == 0){
                        document.getElementById("belt_1_c_1").classList.add("displaynone");
                        document.getElementById("belt_1_c_2").classList.add("displaynone");
                    }

                     if(i == 1){
                        document.getElementById("belt_1_c_3").classList.add("displaynone");
                        document.getElementById("belt_1_c_4").classList.add("displaynone");
                    }

                    if(i == 2){
                        document.getElementById("belt_2_c_1").classList.add("displaynone");
                        document.getElementById("belt_2_c_2").classList.add("displaynone");
                    }

                    if(i == 3){
                        document.getElementById("belt_2_c_3").classList.add("displaynone");
                        document.getElementById("belt_2_c_4").classList.add("displaynone");
                    }

                    if(i >= (initialData.FGWH_UNITS-1)){
                         document.getElementById("action_head").innerHTML = '3 B';
                        openFancybox();
                    }

                    myLoop();        
                }                      
                i++; 
            }, 500) 
        }
        myLoop();  




        document.getElementById("show-hidden-menu-6").classList.remove("disabledPointer");
        document.getElementById("show-hidden-menu-7").classList.remove("disabledPointer");

        document.getElementById("show-hidden-menu-8").classList.remove("disabledPointer");
        document.getElementById("show-hidden-menu-9").classList.remove("disabledPointer");
      

        document.getElementById("popupbox_heading").innerHTML = 'ACTION 3B: INVEST IN ASSEMBLY BELTS';
        document.getElementById("popupbox_content").innerHTML = 'By selecting “add belt” or “upgrade” you can change the capacity of your ASSEMBLY. The maximum production capacity is 16 units. Assembly belts are available as level 1 (2 units), level 2 (3 units) and level 3 (4 units).';
        document.getElementById("card_card_border_radius_5").classList.remove("active");
        document.getElementById("card_card_border_radius_4").classList.add("active");
        document.getElementById("1617882767").classList.add("disabledPointer");
    }  


    //document.getElementById("BELT_1_MU_RIGHT").innerHTML = initialData.M1;
   if(changeInnwerHtml){  
     if(initialData.BELT_1 == 'M1'){
        document.getElementById("BELT_1_LINE").innerHTML = innerHTML_BELT_1_2;
        document.getElementById("BELT_1_MU_LEFT").innerHTML = initialData.M1;
        document.getElementById("BELT_1_ACTION_RIGHT").innerHTML = 'Upgrade to Type 2';
     }
     if(initialData.BELT_1 == 'M2'){
        document.getElementById("BELT_1_LINE").innerHTML = innerHTML_BELT_1_3;
        document.getElementById("BELT_1_MU_LEFT").innerHTML = initialData.M2;
        document.getElementById("BELT_1_ACTION_RIGHT").innerHTML = 'Upgrade to Type 3';
     }
     if(initialData.BELT_1 == 'M3'){
        document.getElementById("BELT_1_MU_LEFT").innerHTML = initialData.M3;
        document.getElementById("BELT_1_LINE").innerHTML = innerHTML_BELT_1_4;
        document.getElementById("assembly__button_belt_1").innerHTML = '<div class="button inactive"> <div class="icon"> <i class="far fa-check"></i> </div> <span>Type 3</span> </div>';

     }
    if(initialData.BELT_1 == 'M4'){
        document.getElementById("BELT_1_MU_LEFT").innerHTML = initialData.M4;
    }

    if(initialData.BELT_2 == 'M1'){
        document.getElementById("BELT_2_LINE").innerHTML = innerHTML_BELT_2_2;
        document.getElementById("BELT_2_MU_LEFT").innerHTML = initialData.M1;
        document.getElementById("BELT_2_ACTION_RIGHT").innerHTML = 'Upgrade to Type 2';
    }

    if(initialData.BELT_2 == 'M2'){
        document.getElementById("BELT_2_MU_LEFT").innerHTML = initialData.M2;
        document.getElementById("BELT_2_ACTION_RIGHT").innerHTML = 'Upgrade to Type 3';
        document.getElementById("BELT_2_LINE").innerHTML = innerHTML_BELT_2_3;
    }

    if(initialData.BELT_2 == 'M3'){
        document.getElementById("BELT_2_MU_LEFT").innerHTML = initialData.M3;
        document.getElementById("BELT_2_LINE").innerHTML = innerHTML_BELT_2_4;
        document.getElementById("assembly__button_belt_2").innerHTML = '<div class="button inactive"> <div class="icon"> <i class="far fa-check"></i> </div> <span>Type 3</span> </div>';
    }

    if(initialData.BELT_2 == 'M4'){
        document.getElementById("BELT_2_MU_LEFT").innerHTML = initialData.M4;
    }


    if(initialData.BELT_3 == 'NO'){
        document.getElementById("BELT_3_LINE").innerHTML = innerHTML_BELT_3_1;
        document.getElementById("BELT_3_MU_LEFT").innerHTML = 0;
        document.getElementById("BELT_3_ACTION_RIGHT").innerHTML = 'Investment in Type 1';
    }

    if(initialData.BELT_3 == 'M1'){
        document.getElementById("BELT_3_MU_LEFT").innerHTML = initialData.M1;
        document.getElementById("BELT_3_LINE").innerHTML = innerHTML_BELT_3_2;
        document.getElementById("BELT_3_ACTION_RIGHT").innerHTML = 'Upgrade to Type 2';
    }
    if(initialData.BELT_3 == 'M2'){
        document.getElementById("BELT_3_MU_LEFT").innerHTML = initialData.M2;
        document.getElementById("BELT_3_ACTION_RIGHT").innerHTML = 'Upgrade to Type 3';
        document.getElementById("BELT_3_LINE").innerHTML = innerHTML_BELT_3_3;
    }
    if(initialData.BELT_3 == 'M3'){

        document.getElementById("BELT_3_MU_LEFT").innerHTML = initialData.M3;
        document.getElementById("BELT_3_LINE").innerHTML = innerHTML_BELT_3_4;
        document.getElementById("assembly__button_belt_3").innerHTML = '<div class="button inactive"> <div class="icon"> <i class="far fa-check"></i> </div> <span>Type 3</span> </div>';

    }
    if(initialData.BELT_3 == 'M4'){

        document.getElementById("BELT_3_MU_LEFT").innerHTML = initialData.M4;

    }

    if(initialData.BELT_4 == 'NO'){

        document.getElementById("BELT_4_LINE").innerHTML = innerHTML_BELT_4_1;
        document.getElementById("BELT_4_MU_LEFT").innerHTML = 0;
        document.getElementById("BELT_4_ACTION_RIGHT").innerHTML = 'Investment in Type 1';

     }

    if(initialData.BELT_4 == 'M1'){

        document.getElementById("BELT_4_LINE").innerHTML = innerHTML_BELT_4_2;
        document.getElementById("BELT_4_MU_LEFT").innerHTML = initialData.M1;
        document.getElementById("BELT_4_ACTION_RIGHT").innerHTML = 'Upgrade to Type 2';

     }
     if(initialData.BELT_4 == 'M2'){

        document.getElementById("BELT_4_MU_LEFT").innerHTML = initialData.M2;
        document.getElementById("BELT_4_ACTION_RIGHT").innerHTML = 'Upgrade to Type 3';
        document.getElementById("BELT_4_LINE").innerHTML = innerHTML_BELT_4_3;

     }
     if(initialData.BELT_4 == 'M3'){

        document.getElementById("BELT_4_MU_LEFT").innerHTML = initialData.M3;
        document.getElementById("BELT_4_LINE").innerHTML = innerHTML_BELT_4_4;
        document.getElementById("assembly__button_belt_4").innerHTML = '<div class="button inactive"> <div class="icon"> <i class="far fa-check"></i> </div> <span>Type 3</span> </div>';

     }
     if(initialData.BELT_4 == 'M4'){

        document.getElementById("BELT_4_MU_LEFT").innerHTML = initialData.M4;

     }

}

    // BELT 1 CHARACTER SETTING UP 
    //blockedClass = 'blocked';
    if(initialData.belt_1_bundle_1 == 1){
        setTimeout(function() { 
        document.getElementById("belt_1_bundle_1").classList.add("disabledPointer");
    }, 500);

        document.getElementById("belt_1_bundle_1").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_1_bundle_2 == 1){

        setTimeout(function() { 
            document.getElementById("belt_1_bundle_2").classList.add("disabledPointer");
        }, 500);
        document.getElementById("belt_1_bundle_2").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_1_bundle_3 == 1){
        


        setTimeout(function() { 
            document.getElementById("belt_1_bundle_3").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_1_bundle_3").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_1_bundle_4 == 1){
       

        setTimeout(function() { 
             document.getElementById("belt_1_bundle_4").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_1_bundle_4").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }


    if(initialData.belt_2_bundle_1 == 1){
       

        setTimeout(function() { 
              document.getElementById("belt_2_bundle_1").classList.add("disabledPointer");
        }, 500);


        document.getElementById("belt_2_bundle_1").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_2_bundle_2 == 1){
        setTimeout(function() { 
              document.getElementById("belt_2_bundle_2").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_2_bundle_2").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_2_bundle_3 == 1){
        setTimeout(function() { 
              document.getElementById("belt_2_bundle_3").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_2_bundle_3").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_2_bundle_4 == 1){
       
        setTimeout(function() { 
              document.getElementById("belt_2_bundle_4").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_2_bundle_4").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }


    if(initialData.belt_3_bundle_1 == 1){
        setTimeout(function() { 
            document.getElementById("belt_3_bundle_1").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_3_bundle_1").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_3_bundle_2 == 1){
        setTimeout(function() { 
            document.getElementById("belt_3_bundle_2").classList.add("disabledPointer");
        }, 500);


        document.getElementById("belt_3_bundle_2").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_3_bundle_3 == 1){
        setTimeout(function() { 
            document.getElementById("belt_3_bundle_3").classList.add("disabledPointer");
        }, 500);


        document.getElementById("belt_3_bundle_3").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_3_bundle_4 == 1){
        


        setTimeout(function() { 
            document.getElementById("belt_3_bundle_4").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_3_bundle_4").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }


    if(initialData.belt_4_bundle_1 == 1){
       

      setTimeout(function() { 
            document.getElementById("belt_4_bundle_1").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_4_bundle_1").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_4_bundle_2 == 1){
        

        setTimeout(function() { 
            document.getElementById("belt_4_bundle_2").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_4_bundle_2").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_4_bundle_3 == 1){
        
        setTimeout(function() { 
            document.getElementById("belt_4_bundle_3").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_4_bundle_3").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }

    if(initialData.belt_4_bundle_4 == 1){
    
        setTimeout(function() { 
            document.getElementById("belt_4_bundle_4").classList.add("disabledPointer");
        }, 500);

        document.getElementById("belt_4_bundle_4").innerHTML = '<div class="coin coin_grey"><span>1</span></div><div class="coin coin_gold"><span>1</span></div><div class="coin-bundle__background"></div>';
    }



    setTimeout(function() {
        if(initialData.belt_1_person_1 == 1){
            document.getElementById("belt_1_person_1").classList.add(blockedClass);
            document.getElementById("belt_1_person_1").classList.add('active');
        }else{
             document.getElementById("belt_1_person_1").classList.add(blockedClass);
            document.getElementById("belt_1_person_1").classList.remove('active');
        }

        if(initialData.belt_1_person_2 == 1){
            document.getElementById("belt_1_person_2").classList.add(blockedClass);
            document.getElementById("belt_1_person_2").classList.add('active');
        }else{
            document.getElementById("belt_1_person_2").classList.add(blockedClass);
            document.getElementById("belt_1_person_2").classList.remove('active');
        }

        if(initialData.belt_1_person_3 == 1){
            document.getElementById("belt_1_person_3").classList.add(blockedClass);
            document.getElementById("belt_1_person_3").classList.add('active');
        }else{
             document.getElementById("belt_1_person_3").classList.add(blockedClass);
            document.getElementById("belt_1_person_3").classList.remove('active');
        }

        if(initialData.belt_1_person_4 == 1){
            document.getElementById("belt_1_person_4").classList.add(blockedClass);
            document.getElementById("belt_1_person_4").classList.add('active');
        }else{
            document.getElementById("belt_1_person_4").classList.add(blockedClass);
            document.getElementById("belt_1_person_4").classList.remove('active');
        }



        //********************************************

        if(initialData.belt_2_person_1 == 1){
            document.getElementById("belt_2_person_1").classList.add(blockedClass);
            document.getElementById("belt_2_person_1").classList.add('active');
        }else{
            document.getElementById("belt_2_person_1").classList.add(blockedClass);
            document.getElementById("belt_2_person_1").classList.remove('active');
        }

        if(initialData.belt_2_person_2 == 1){
            document.getElementById("belt_2_person_2").classList.add(blockedClass);
            document.getElementById("belt_2_person_2").classList.add('active');
        }else{
            document.getElementById("belt_2_person_2").classList.add(blockedClass);
            document.getElementById("belt_2_person_2").classList.remove('active');
        }

        if(initialData.belt_2_person_3 == 1){
            document.getElementById("belt_2_person_3").classList.add(blockedClass);
            document.getElementById("belt_2_person_3").classList.add('active');
        }else{
            document.getElementById("belt_2_person_3").classList.add(blockedClass);
            document.getElementById("belt_2_person_3").classList.remove('active');
        }

        if(initialData.belt_2_person_4 == 1){
            document.getElementById("belt_2_person_4").classList.add(blockedClass);
            document.getElementById("belt_2_person_4").classList.add('active');
        }else{
            document.getElementById("belt_2_person_4").classList.add(blockedClass);
            document.getElementById("belt_2_person_4").classList.remove('active');
        }

        //********************************************
        if(initialData.BELT_3 != 'NO'){
            if(initialData.belt_3_person_1 == 1){
                document.getElementById("belt_3_person_1").classList.add(blockedClass);
                document.getElementById("belt_3_person_1").classList.add('active');
            }else{
                document.getElementById("belt_3_person_1").classList.add(blockedClass);
                document.getElementById("belt_3_person_1").classList.remove('active');
            }

            if(initialData.belt_3_person_2 == 1){
                document.getElementById("belt_3_person_2").classList.add(blockedClass);
                document.getElementById("belt_3_person_2").classList.add('active');
            }else{
                document.getElementById("belt_3_person_2").classList.add(blockedClass);
                document.getElementById("belt_3_person_2").classList.remove('active');
            }

            if(initialData.belt_3_person_3 == 1){
                document.getElementById("belt_3_person_3").classList.add(blockedClass);
                document.getElementById("belt_3_person_3").classList.add('active');
            }else{
                document.getElementById("belt_3_person_3").classList.add(blockedClass);
                document.getElementById("belt_3_person_3").classList.remove('active');
            }

            if(initialData.belt_3_person_4 == 1){
                document.getElementById("belt_3_person_4").classList.add(blockedClass);
                document.getElementById("belt_3_person_4").classList.add('active');
            }else{
                document.getElementById("belt_3_person_4").classList.add(blockedClass);
                document.getElementById("belt_3_person_4").classList.remove('active');
            }
        }else{
            document.getElementById("belt_3_person_1").classList.add('blocked');
            document.getElementById("belt_3_person_2").classList.add('blocked');
            document.getElementById("belt_3_person_3").classList.add('blocked');
            document.getElementById("belt_3_person_4").classList.add('blocked');
        }
//******************************************************************************
    if(initialData.BELT_4 != 'NO'){
        if(initialData.belt_4_person_1 == 1){
            document.getElementById("belt_4_person_1").classList.add(blockedClass);
            document.getElementById("belt_4_person_1").classList.add('active');
        }else{
            document.getElementById("belt_4_person_1").classList.add(blockedClass);
            document.getElementById("belt_4_person_1").classList.remove('active');
        }

        if(initialData.belt_4_person_2 == 1){
            document.getElementById("belt_4_person_2").classList.add(blockedClass);
            document.getElementById("belt_4_person_2").classList.add('active');
        }else{
            document.getElementById("belt_4_person_2").classList.add(blockedClass);
            document.getElementById("belt_4_person_2").classList.remove('active');
        }

        if(initialData.belt_4_person_3 == 1){
            document.getElementById("belt_4_person_3").classList.add(blockedClass);
            document.getElementById("belt_4_person_3").classList.add('active');
        }else{
            document.getElementById("belt_4_person_3").classList.add(blockedClass);
            document.getElementById("belt_4_person_3").classList.remove('active');
        }

        if(initialData.belt_4_person_4 == 1){
            document.getElementById("belt_4_person_4").classList.add(blockedClass);
            document.getElementById("belt_4_person_4").classList.add('active');
        }else{
            document.getElementById("belt_4_person_4").classList.add(blockedClass);
            document.getElementById("belt_4_person_4").classList.remove('active');
        }

    }else{
        document.getElementById("belt_4_person_1").classList.add('blocked');
        document.getElementById("belt_4_person_2").classList.add('blocked');
        document.getElementById("belt_4_person_3").classList.add('blocked');
        document.getElementById("belt_4_person_4").classList.add('blocked');
    }
}, 200);
      
       
     if(initialData.GIP_UNITS == 4){

        if(initialData.BELT_1 == 'M1'){
           
            document.getElementById("belt_1_c_1").classList.remove("displaynone");
            document.getElementById("belt_1_c_2").classList.remove("displaynone");

            document.getElementById("belt_1_c_3").classList.remove("displaynone");
            document.getElementById("belt_1_c_4").classList.remove("displaynone");
        }

        if(initialData.BELT_2 == 'M1'){
            document.getElementById("belt_2_c_1").classList.remove("displaynone");
            document.getElementById("belt_2_c_2").classList.remove("displaynone");

            document.getElementById("belt_2_c_3").classList.remove("displaynone");
            document.getElementById("belt_2_c_4").classList.remove("displaynone");
        }


    }
   
}








//////////////////////////////////////////////////////////////////////////////////////////// OUT OF INITIAL CONDITION 
 
      
        function belt_1_person_1() {
           var belt_1_person_1 = 1 - getInitialData.belt_1_person_1;
           setAssemblyWorkers('belt_1_person_1', belt_1_person_1);
        }


        function belt_1_person_2() {
           var belt_1_person_2 = 1 - getInitialData.belt_1_person_2;
           setAssemblyWorkers('belt_1_person_2', belt_1_person_2);
        }

        function belt_1_person_3() {
           var belt_1_person_3 = 1 - getInitialData.belt_1_person_3;
           setAssemblyWorkers('belt_1_person_3', belt_1_person_3);
        }

        function belt_1_person_4() {
           var belt_1_person_4 = 1 - getInitialData.belt_1_person_4;
           setAssemblyWorkers('belt_1_person_4', belt_1_person_4);
        } 




        function belt_2_person_1() {
           var belt_2_person_1 = 1 - getInitialData.belt_2_person_1;
           setAssemblyWorkers('belt_2_person_1', belt_2_person_1);
        }


        function belt_2_person_2() {
           var belt_2_person_2 = 1 - getInitialData.belt_2_person_2;
           setAssemblyWorkers('belt_2_person_2', belt_2_person_2);
        }

        function belt_2_person_3() {
           var belt_2_person_3 = 1 - getInitialData.belt_2_person_3;
           setAssemblyWorkers('belt_2_person_3', belt_2_person_3);
        }

        function belt_2_person_4() {
           var belt_2_person_4 = 1 - getInitialData.belt_2_person_4;
           setAssemblyWorkers('belt_2_person_4', belt_2_person_4);
        } 

       


        function belt_3_person_1() {
           var belt_3_person_1 = 1 - getInitialData.belt_3_person_1;
           setAssemblyWorkers('belt_3_person_1', belt_3_person_1);
        }


        function belt_3_person_2() {
           var belt_3_person_2 = 1 - getInitialData.belt_3_person_2;
           setAssemblyWorkers('belt_3_person_2', belt_3_person_2);
        }

        function belt_3_person_3() {
           var belt_3_person_3 = 1 - getInitialData.belt_3_person_3;
           setAssemblyWorkers('belt_3_person_3', belt_3_person_3);
        }

        function belt_3_person_4() {
           var belt_3_person_4 = 1 - getInitialData.belt_3_person_4;
           setAssemblyWorkers('belt_3_person_4', belt_3_person_4);
        } 



        function belt_4_person_1() {
           var belt_4_person_1 = 1 - getInitialData.belt_4_person_1;
           setAssemblyWorkers('belt_4_person_1', belt_4_person_1);
        }


        function belt_4_person_2() {
           var belt_4_person_2 = 1 - getInitialData.belt_4_person_2;
           setAssemblyWorkers('belt_4_person_2', belt_4_person_2);
        }

        function belt_4_person_3() {
           var belt_4_person_3 = 1 - getInitialData.belt_4_person_3;
           setAssemblyWorkers('belt_4_person_3', belt_4_person_3);
        }


        function belt_4_person_4() {
           var belt_4_person_4 = 1 - getInitialData.belt_4_person_4;
           setAssemblyWorkers('belt_4_person_4', belt_3_person_4);
        } 






        function transformFromOutBoundLogistic(args){

            var data = {
                'quarter': quarter, 
                'team_id': team_id, 
                'participant_id': participant_id, 
                'year': year, 
                'key': args,
                'value': 1,
                'action': 'transformFromOutBoundLogistic', 
                'workshop_id': workshop_id
            }
            socket.emit('game_page_data', team_id, data);
            socket.on('receive_game_page_data', function(responseData){
                setInitialConditionToAll(responseData);
                getInitialData = responseData;
            }); 
        }
   

function deliverOrder(arg){
    var savedOrderCard = JSON.parse(localStorage.getItem('allOrderCard'));

    var currentOrderCard = savedOrderCard[arg];
    var number_deliverd = JSON.parse(getInitialData.order_card_number_deliverd);
    number_deliverd.push(arg);
    number_deliverd = JSON.stringify(number_deliverd);
    
    var FGWH_UNITS = currentOrderCard['unit_per_order'];
    var cash = 0;
    var credit = 0;
    if(currentOrderCard['payment_terms'] == 1){
        cash = currentOrderCard['revenue_per_order'];
    }else{
        credit = currentOrderCard['revenue_per_order'];
    }

    var total = cash + credit;

    var unit_per_order = currentOrderCard['unit_per_order'];
    
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'cash': cash,
        'credit': credit,
        'total': total,
        'FGWH_UNITS': FGWH_UNITS,
        'unit_per_order': unit_per_order,
        'number_deliverd': number_deliverd,
        'action': 'deliverOrder', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 




}


function setAssemblyWorkers(key, value){
    changeInnwerHtml = 0;
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'key': key,
        'value': value,
        'action': 'setAssemblyWorkers', 
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
}


function adjustAssemblyWorker(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'adjustAssemblyWorker', 
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
}




function upgradeToTypeBelt_1(){
    var M = '';
    var val = 0;
    if(getInitialData.BELT_1 == 'M1' ){
        M = 'M2';
        val = getInitialData.M2 - getInitialData.M1;
    }
    if(getInitialData.BELT_1 == 'M2' ){
        M = 'M3';
        val = getInitialData.M3 - getInitialData.M2;
    }
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'upgradeBelt_1', 
        'BELT': M,
        'val': val,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
}


function upgradeToTypeBelt_2(){
    // check if m1 is active
    var M = '';
    var val = 0;
    if(getInitialData.BELT_2 == 'M1' ){
        M = 'M2';
        val = getInitialData.M2 - getInitialData.M1;
    }

    if(getInitialData.BELT_2 == 'M2' ){
        M = 'M3';
        val = getInitialData.M3 - getInitialData.M2;
    }


    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'upgradeBelt_2', 
        'BELT': M,
        'val': val,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 

}


function upgradeToTypeBelt_3(){
    // check if m1 is active
    var M = '';
    var val = 0;

     if(getInitialData.BELT_3 == 'NO' ){
        M = 'M1';
        val = getInitialData.M1;
    }

    if(getInitialData.BELT_3 == 'M1' ){
        M = 'M2';
        val = getInitialData.M2 - getInitialData.M1;
    }

    if(getInitialData.BELT_3 == 'M2' ){
        M = 'M3';
        val = getInitialData.M3 - getInitialData.M2;
    }


    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'upgradeBelt_3', 
        'BELT': M,
        'val': val,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 

}


function upgradeToTypeBelt_4(){
    // check if m1 is active
    var M = '';
    var val = 0;

     if(getInitialData.BELT_4 == 'NO' ){
        M = 'M1';
        val = getInitialData.M1;
    }

    if(getInitialData.BELT_4 == 'M1' ){
        M = 'M2';
        val = getInitialData.M2 - getInitialData.M1;
    }

    if(getInitialData.BELT_4 == 'M2' ){
        M = 'M3';
        val = getInitialData.M3 - getInitialData.M2;
    }


    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'upgradeBelt_4', 
        'BELT': M,
        'val': val,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 

}


function finished_goods(){
    closePopup('#wrap_popup1');
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'moveToFinsihedGoods', 
        'GIP_UNITS': getInitialData.GIP_UNITS,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 


}

function investInAssemblyBelt(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'investInAssemblyBelt', 
        'data': getInitialData.id, 
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
}

function Update_AR_Q1(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'Update_AR_Q1', 
        'Update_trade_receivables': getInitialData.AR_Q1,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;

    }); 
}


function payInterest() {
    console.log('payInterest', getInitialData);
    var short_term_loans_interest = (((parseInt(getInitialData.STL_Q1) + parseInt(getInitialData.STL_Q2) + parseInt(getInitialData.STL_Q3) + parseInt(getInitialData.STL_Q4)) * parseInt(getInitialData.STL_INTREST))) / 100;
    var long_term_laon_intrest = ((parseInt(getInitialData.LTL) * parseInt(getInitialData.LTL_INTREST))) / 100;
    var payInterestData = {
        action: "payInterest",
        participant_id: participant_id,
        quarter: quarter,
        short_term_loans_interest: short_term_loans_interest,
        long_term_laon_intrest: long_term_laon_intrest,
        team_id: team_id,
        workshop_id: workshop_id,
        total_intrest: short_term_loans_interest + long_term_laon_intrest,
        year: year,
    }

    socket.emit('game_page_data', team_id, payInterestData);
    socket.on('receive_game_page_data', function(responseData) {
        console.log('payInterest', responseData); 
        setInitialConditionToAll(responseData);
    })
}




var NEW_STL = 99999;
var change_STL = 0;
var NEW_LTL = 99999;
var change_LTL = 0;
function calculateShortTermLoan(opr){
    $('.hidden-menu-2').hide();

    if(NEW_STL == 99999){
       NEW_STL = STL; 
       document.getElementById("show-hidden-menu-2").classList.remove("disabledPointer");
    }
    
    if(opr == 'minus'){
       NEW_STL = NEW_STL - 10;
    }
    if(opr == 'plus'){
       NEW_STL = NEW_STL + 10;
    }
    if(NEW_STL<0){
        NEW_STL = 0;
    }
    if(NEW_STL>200){
        NEW_STL = 200;
    }
    change_STL = NEW_STL - STL;

 

    var total = change_STL + STL + LTL;
    console.log(total);


   

    var RESERVES = parseInt(document.getElementById("RESERVES").innerHTML);
    var SHARE_CAPITAL = parseInt(document.getElementById("SHARE_CAPITAL").innerHTML);

    
    var totalRatio = (RESERVES + SHARE_CAPITAL) * 2 ;

    if(total>totalRatio){
        document.getElementById("popupbox_heading").innerHTML = 'Invalid Amount';

        document.getElementById("popupbox_content").innerHTML = 'The total amount of short- and long-term loans must be in relation to the total shareholder liabilities and equity (quota 2:1)';
        openFancybox();
        console.log('Not valid');
        NEW_STL = NEW_STL - 10;

    }



    document.getElementById("STL").innerHTML = NEW_STL;
}


function calculateLongTermLoan(opr){

      $('.hidden-menu-3').hide();

    if(NEW_LTL == 99999){
       NEW_LTL = LTL; 
       document.getElementById("show-hidden-menu-3").classList.remove("disabledPointer");
    }
    
    if(opr == 'minus'){
       NEW_LTL = NEW_LTL - 10;
    }
    if(opr == 'plus'){
       NEW_LTL = NEW_LTL + 10;
    }
    if(NEW_LTL<0){
        NEW_LTL = 0;
    }
    if(NEW_LTL>200){
        NEW_LTL = 200;
    }
    change_LTL = NEW_LTL - LTL;

     console.clear();
    console.log(change_STL);
    console.log(STL);
    console.log(LTL);

    var total = change_LTL + STL + LTL;
    console.log(total);


   

    var RESERVES = parseInt(document.getElementById("RESERVES").innerHTML);
    var SHARE_CAPITAL = parseInt(document.getElementById("SHARE_CAPITAL").innerHTML);

    
    var totalRatio = (RESERVES + SHARE_CAPITAL) * 2 ;



    if(total>totalRatio){
        document.getElementById("popupbox_heading").innerHTML = 'Invalid Amount';

        document.getElementById("popupbox_content").innerHTML = 'The total amount of short- and long-term loans must be in relation to the total shareholder liabilities and equity (quota 2:1)';
        openFancybox();
        console.log('Not valid');
        NEW_LTL = NEW_LTL - 10;

    }
    

    document.getElementById("LTL").innerHTML = NEW_LTL;



}


function adjustShortTermLoan(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'adjustShortTermLoanQ1', 
        'change_STL': change_STL,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    });   

}



var materialQnty = 0;
function orederRawMeterial(opr){
   
    if(opr == 'plus'){
       materialQnty = materialQnty + 1;
    }
    if(opr == 'minus'){
      materialQnty = materialQnty - 1;
    }

    if(materialQnty < 0){
        materialQnty = 0;
    }
    if(materialQnty > 10000){
        materialQnty = 10000;
    }

    document.getElementById("show-hidden-menu-5").classList.remove("disabledPointer");
    document.getElementById("Ordered_Materials_1").classList.remove("blocked");
   
    document.getElementById("Ordered_Materials").innerHTML = materialQnty;
 
}


function orederRawMeterialnow(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'Ordered_Materials', 
        'Ordered_Materials': materialQnty,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    });   

}





function adjustLongTermLoan(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'adjustLongTermLoan', 
        'change_LTL': change_LTL,
        'workshop_id': workshop_id
    }
    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    });   

}


function Receive_ordered_material(){

        var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'receive_ordered_material', 
        'Ordered_Materials': getInitialData.Ordered_Materials,
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    });   


}


function startNewProduction(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'startNewProduction', 
        'workshop_id': workshop_id
        
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    });   

}


function Developquality(){
     var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'Developquality', 
        'workshop_id': workshop_id,
       
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 


}


function Adjustsalesforce(){


         var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'Adjustsalesforce', 
        'workshop_id': workshop_id,
       
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 

}

function adjustRndPerson(args){


    document.getElementById("rd_1").classList.remove("active");
    document.getElementById("rdc_1").classList.add("inactive");

    document.getElementById("rd_2").classList.remove("active");
    document.getElementById("rdc_2").classList.add("inactive");

    document.getElementById("rd_3").classList.remove("active");
    document.getElementById("rdc_3").classList.add("inactive");

    document.getElementById("rd_4").classList.remove("active");
    document.getElementById("rdc_4").classList.add("inactive");

    document.getElementById("rd_5").classList.remove("active");
    document.getElementById("rdc_5").classList.add("inactive");

  document.getElementById("rd_6").classList.remove("active");
    document.getElementById("rdc_6").classList.add("inactive");

var val
if(getInitialData.R_N_D<7){

    if(args > getInitialData.R_N_D){
        console.log('ADD');
        val = 1;
   
    }else{
        val = -1;
        console.log('REMOVE');
    }

       var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'adjustRndPerson', 
        'workshop_id': workshop_id,
        'val': val,
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 


}else{
    alert('You Can not add more than 6')
}

    

}



function adjustSales(args){
    document.getElementById("sales_1").classList.remove("active");
    document.getElementById("sales_2").classList.remove("active");
    document.getElementById("sales_3").classList.remove("active");
    document.getElementById("sales_4").classList.remove("active");
    document.getElementById("sales_5").classList.remove("active");
    document.getElementById("sales_6").classList.remove("active");
    document.getElementById("sales_7").classList.remove("active");
    document.getElementById("sales_8").classList.remove("active");
    document.getElementById("sales_9").classList.remove("active");
    document.getElementById("sales_10").classList.remove("active");
    document.getElementById("sales_11").classList.remove("active");
    document.getElementById("sales_12").classList.remove("active");

var val
if(getInitialData.SALES<12){

    if(args > getInitialData.SALES){
        console.log('ADD');
        val = 1;
   
    }else{
        val = -1;
        console.log('REMOVE');
    }

       var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'adjustSalesPerson', 
        'workshop_id': workshop_id,
        'val': val,
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 


}else{
    alert('You Can not add more than 12')
}

    

}



function setMarketingPerson(args){
    document.getElementById("marketing_1").classList.remove("active");
    document.getElementById("marketing_2").classList.remove("active");
    document.getElementById("marketing_3").classList.remove("active");
    document.getElementById("marketing_4").classList.remove("active");
    document.getElementById("marketing_5").classList.remove("active");
    document.getElementById("marketing_6").classList.remove("active");
    document.getElementById("marketing_7").classList.remove("active");
    document.getElementById("marketing_8").classList.remove("active");
    document.getElementById("marketing_9").classList.remove("active");
    document.getElementById("marketing_10").classList.remove("active");
    document.getElementById("marketing_11").classList.remove("active");
  

var val
if(getInitialData.marketing<11){

    if(args > getInitialData.marketing){
        console.log('ADD');
        val = 1;
   
    }else{
        val = -1;
        console.log('REMOVE');
    }

       var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'setMarketingPerson', 
        'workshop_id': workshop_id,
        'val': val,
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 


}else{
    alert('You Can not add more than 12')
}

    

}



function getmarketPage(){

    if(getInitialData.action_type == 'startMarketing'){
     startMarketingOperation();
     return 0;
   

  }

    console.log('GET TEAM LIST FOR MARKETING PAGE CALLED');
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'getTeamList', 
        'workshop_id': workshop_id,
    }

    socket.emit('getTeamList', team_id, data);
    socket.on('receive_getTeamList', function(responseData){
        var teamDetails = '';
        var i = 0;
        var all_at_six=[];
            responseData.forEach(myFunction);
            function myFunction(item, index) {
                i++;

                if(item.marketing_round == 1){
                    
                  
                     teamDetails = '<h3 style=" font-size: 42px; color: #fff; ">Marketing round completed</h3>';
                     
                     return 0;
                }

                console.log('***********************');

                all_at_six.push(item.action_type);
                if(item.action_type == 'Definecommunicationefforts'){
                    teamDetails= teamDetails + '<div class="card card_border_radius"> <div class="card__item card__item_header padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none"> <div class="number"> <span>'+i+'</span> </div> <div class="title"> <p class="uppercase text_blue_1">'+item.name+'</p> </div> </div> <div class="card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="order order_green_2 "> <div class="order__text"> <p><i class="far fa-check-circle"></i> &nbsp; Ready</p> </div> </div> </div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"></div> </div>';
                }else{
                    teamDetails= teamDetails + '<div class="card card_border_radius"> <div class="card__item card__item_header padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none"> <div class="number"> <span>'+i+'</span> </div> <div class="title"> <p class="uppercase text_blue_1">'+item.name+'</p> </div> </div> <div class="card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="order"> <div class="order__text"> <p><i class="far fa-spinner"></i> &nbsp; Waiting...</p> </div> </div></div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"></div> </div>';
                }  
            }

            document.getElementById("teamDetails").innerHTML = teamDetails;
            console.log('all_at_six');
            var list = all_at_six.filter((x, i, a) => a.indexOf(x) == i);
            if(list.length == 1){

                if(list[0] == 'Definecommunicationefforts'){
                    console.log('START MARKETING');

                    if(user_type == 'FACILATOR'){
            
                        document.getElementById("startMarketing").innerHTML = '<a href="javascript:void(0)" onclick="startMarketing();"> <div class="card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half" > <div class="order order_green_2 "> <div class="order__text"> <p> START MARKETING </p> </div> </div> </div> </a>';

                    }
                }

            }  
    }); 

}



function startMarketingOperation() {
    document.getElementById("marketPage").classList.add('displaynone');
    document.getElementById("gameboardPage").classList.add('displaynone');
    document.getElementById("lobbyPage").classList.add('displaynone');

    document.getElementById('marketPage').classList.remove('displaynone');
  console.log('startMarketingOperation function called showCardSelection function');

    showCardSelection();



    if(user_type == 'FACILATOR'){
        document.getElementById("startMarketing").innerHTML = '<a href="javascript:void(0)" onclick="endMarketing();"> <div class="card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half" > <div class="order order_green_2 "> <div class="order__text"> <p> END MARKETING </p> </div> </div> </div> </a>';
    }
}


function showCardSelection(){
    var orderCard = JSON.parse(localStorage.getItem('allOrderCard'));
  
       var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'getTeamList', 
        'workshop_id': workshop_id,
    }

    socket.emit('showCardSelection', workshop_id, data);
    socket.on('receive_showCardSelection', function(responseData){
        
          var onevar = [];
  var maxd = [];
   var alreadySelected = [];
    var notLeader = true;
  responseData.forEach(onefun);
    function onefun(item, index) {


        var newOne = JSON.parse(item['order_card_number']);
        newOne.forEach(uniq);

        function uniq(item, index){
            alreadySelected.push(item);

        }
       
        
      var order_card_number_count = (JSON.parse(item['order_card_number'])).length;
      var ind = 20 - index;
      maxd.push(order_card_number_count);
      onevar.push({'marketing': ind,  'order_card_number_count':order_card_number_count , 'team_id': item['team_id']});


    };
   

   
       
    

   

    var maxd = Math.max.apply(Math, maxd);
    var leader = onevar[0]['team_id'];
    var loop = true;
    onevar.forEach(twofun);
    function twofun(item, index) {
      var curOrderNumber = parseInt(item.order_card_number_count);
     if(loop){
      if(curOrderNumber<maxd){
          leader = item.team_id;
          loop = false;
      }
     }  
    }


        console.log('leader - ', leader);
        console.log(orderCard);
         $indata = '';
         
        responseData.forEach(myFunction);
            function myFunction(item, index) {
                console.log(item);
                var classes = '';
                if(team_id == leader && item['team_id'] == leader){
                    classes = 'active';
                }
                $indata = $indata + '<div class="mycustomeclass card card_border_radius '+classes+'"> <div class="card__item card__item_header padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none"> <div class="number"> <span>'+(index+1)+'</span> </div> <div class="title"> <p class="uppercase text_blue_1">'+item["name"]+'</p> </div> </div> <div class="card__item card__item_finance-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="finance-list"> <div class="finance"> <div class="finance__text"> <p>Marketing power</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_green"> <span>'+item["marketing"]+'</span> </div> </div> </div> <div class="finance"> <div class="finance__text"> <p>Units to sell</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_grey"> <span>'+item["FGWH_UNITS"]+'</span> </div> </div> </div> <div class="finance"> <div class="finance__text"> <p>Sales force</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_blue"> <span>'+item["SALES"]+'</span> </div> </div> </div> </div> </div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"></div> <div class="card__item card__item_separator padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none padding-bottom_mobile_none"></div> <div class="card__item card__item_spacer padding-top_mobile_none"></div>';
                var order_card_number = JSON.parse(item.order_card_number);
                order_card_number.forEach(myFunction);
                var team_id_PASS = item["team_id"]; 
               
                function myFunction(item, index) {
                  

                    if(orderCard[item] == undefined){
                          var oid= 'PASS';
                          var oorder_number = '';
                    }else{
                        var oid = orderCard[item]['id'];
                        var oorder_number = orderCard[item]['order_number'];

                    }

                    

                   $indata = $indata + '<div class="card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="order"> <div class="order__text"> <p>'+oid+' '+oorder_number+'</p> </div> </div> </div>';

                }

               

               // if(item["team_id"] == leader){
                if(team_id == leader && item['team_id'] == leader){
                    notLeader = false;
                    console.log(notLeader);

                    $indata =  $indata + ' <div onclick="selectCard(0)" class="mycustomeclass2 card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half"> <a class="order order_blue_1 order_hover"> <div class="order__text"> <p> <i class="far fa-forward"></i> &nbsp; Pass </p> </div> </a> </div> ';
                }else{
                    $indata =  $indata + '<div class="mycustomeclass2 card__item card__item_order-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="order"> <div class="order__text"> <p> <i class="far fa-spinner"></i> &nbsp; Waiting... </p> </div> </div></div>';
                }

                $indata =  $indata + ' <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"></div> </div>';



            }
                var ordercardhtml = '<div class="card__item card__item_select-orders padding-bottom_mobile_none"><div class="grid grid_order-cards">';
                var allSelected = [];
                orderCard.forEach(orderCardFun);
                function orderCardFun(item, index) {
                     


                  
                      if(item == null){
                       return 0;
                    }

                    if(item["payment_terms"] == 0){
                        var payment_terms = 'CREDIT';
                    }else{
                        var payment_terms = 'CASH';
                    }
                    var cardIds = item["id"];

                     var found = alreadySelected.includes(cardIds);

                 

                    if(found){
                         button_blue = '<a class="button button_blue_2"> <i class="far fa-check"></i> </a>';
                        allSelected.push(1);
                    }else{
                           var button_blue = '<a class="button button_blue_1" onclick="selectCard('+cardIds+')"> Select </a>';

                   allSelected.push(0);

                    }

                    if(item == null){
                       return 0;
                    }

                    console.log(notLeader);

                    if(notLeader){
                         button_blue = '<a class="button button_blue_2"> Waiting </a>';
                    }





                   ordercardhtml = ordercardhtml + '<div class="card card_border_radius"> <div class="card__item card__item_text padding-bottom_mobile_half align_mobile_center"> <h3>'+item["order_number"]+'</h3> </div> <div class="card__item card__item_separator padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none padding-bottom_mobile_none"></div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_half"></div> <div class="card__item card__item_spacer padding-top_mobile_none padding-bottom_mobile_quarter"></div> <div class="card__item card__item_finance-list padding-top_mobile_none padding-bottom_mobile_half"> <div class="finance-list"> <div class="finance"> <div class="finance__text"> <p>Units</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_grey"> <span>'+item["unit_per_order"]+'</span> </div> </div> </div> <div class="finance"> <div class="finance__text"> <p>Unit price</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_gold"> <span >'+item["unit_price"]+'</span> </div> </div> </div> <div class="finance"> <div class="finance__text"> <p> Net sales</p> </div> <div class="finance__coin"> <div class="coin coin_small coin_gold"> <span>'+item["revenue_per_order"]+'</span> </div> </div> </div> </div> </div> <div class="card__item card__item_text padding-top_mobile_quarter"> <h4>'+payment_terms+'</h4> </div> <div class="card__item_button_select card__item card__item_button padding-left_mobile_none padding-right_mobile_none padding-top_mobile_none padding-bottom_mobile_none ng-star-inserted"> '+button_blue+' </div> </div>';
                   
                }

             document.getElementById("teamDetails").innerHTML = $indata;
             ordercardhtml = ordercardhtml + '</div></div>';
             document.getElementById("orderCardSelection").innerHTML = ordercardhtml;
            // console.clear();

             var allSelected = allSelected.includes(0);
             if(!allSelected){
                console.log('All selected');
                $('.mycustomeclass').removeClass('active');
                $('.mycustomeclass2').addClass('displaynone');
                $('.card__item_button_select').addClass('displaynone');
             }
            
    });

}





function selectCard(arg){
   
    console.log(team_id);
    var order_card_number = JSON.parse(getInitialData.order_card_number);
    order_card_number.push(arg);
    order_card_number = JSON.stringify(order_card_number);
        var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'order_card_number': order_card_number,
        'action': 'selectOrderCard', 
        'workshop_id': workshop_id 
    }

    socket.emit('game_page_data_for_workshop', workshop_id, data);
    socket.on('receive_game_page_data_for_workshop', function(responseData){
        console.log('receive_game_page_data');
        setInitialConditionToAll(responseData);
    }); 
   

}







function endMarketing(){

    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'endMarketing', 
        'workshop_id': workshop_id 
    }

    socket.emit('endMarketing', workshop_id, data);
    /*socket.on('receive_game_page_data', function(responseData){
        console.clear();
        console.log('receive_game_page_data');
        //setInitialConditionToAll(responseData);
    }); 
    */
       
}

   socket.on('receive_endMarketing', function(responseData){
        console.clear();
        console.log('receive_game_page_data');
        setInitialConditionToAll(responseData);
    }); 


function startMarketing(){
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'startMarketing', 
        'workshop_id': workshop_id        
    }

    socket.emit('startMarketingsock', workshop_id, data);


}

    socket.on('receive_startMarketingsock', function(responseData){
     
        document.getElementById("teamDetails").innerHTML = '';
        setInitialConditionToAll(responseData);
        getInitialData = responseData;

    }); 


function Definecommunicationefforts(){

    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'Definecommunicationefforts', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    

}




function orderManagementEnd(){
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'orderManagementEnd', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}


function payRNDsalary(){
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'salary': getInitialData.R_N_D, 
        'action': 'payRNDsalary', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}


function paySalessalary(){
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'paySalessalary': getInitialData.SALES, 
        'action': 'paySalessalary', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}



function payMarketingsalary(){
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'marketing': getInitialData.marketing, 
        'action': 'payMarketingsalary', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}




function payAdminsalary(){
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'ADMIN_salary': getInitialData.ADMIN, 
        'action': 'payAdminsalary', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}

function calculatEBIT(){
    var ebit = getInitialData.cogs - (getInitialData.SALES_salary + getInitialData.R_N_D_salary + getInitialData.ADMIN_salary + getInitialData.marketing_expenses);
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'ebit' : ebit,
        'action': 'calculatEBIT', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}


function goToAccountingPage(){
    alert('Accoun');
}


function niat(){
      var niat = ((getInitialData.ebit)*20/100);
      if(getInitialData.ebit<=0){
        niat = 0;  // this means tax

      }
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'niat': niat,
        
        'action': 'niat', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}

function updateReserves(){
      var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        
        'action': 'updateReserves', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 
    
}




function goToAccounting(){
       var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year + 1, 
        'action': 'goToAccounting', 
        'workshop_id': workshop_id
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        localStorage.setItem('currentPage', 'accounting');
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
        window.location.replace("accounting");
    }); 
    
    
}





function Payassemblyworkers(){
    var salaries = getInitialData.belt_1_person_1 + getInitialData.belt_1_person_2 + getInitialData.belt_1_person_3 + getInitialData.belt_1_person_4 + getInitialData.belt_2_person_1 + getInitialData.belt_2_person_2 + getInitialData.belt_2_person_3 + getInitialData.belt_2_person_4 + getInitialData.belt_3_person_1 + getInitialData.belt_3_person_2 + getInitialData.belt_3_person_3 + getInitialData.belt_3_person_4 + getInitialData.belt_4_person_1 + getInitialData.belt_4_person_2 + getInitialData.belt_4_person_3 + getInitialData.belt_4_person_4;
    
    var data = {
        'quarter': quarter, 
        'team_id': team_id, 
        'participant_id': participant_id, 
        'year': year, 
        'action': 'Payassemblyworkers', 
        'workshop_id': workshop_id,
        'salaries': salaries,

        
    }

    socket.emit('game_page_data', team_id, data);
    socket.on('receive_game_page_data', function(responseData){
        setInitialConditionToAll(responseData);
        getInitialData = responseData;
    }); 



    

}








  
   

    

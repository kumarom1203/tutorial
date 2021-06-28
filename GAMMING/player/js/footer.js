function openFancybox() {
    var currentPage = localStorage.getItem('currentPage');


   if(currentPage == 'gameboardPage'){

    setTimeout(function() {
        jQuery('#popuplink').trigger('click');
    }, 200);

   }


};

function openPopup(divPopup) {
   $(divPopup).fadeIn(250);
}

function closePopup(divPopup) {
   $(divPopup).fadeOut(250);
}

jQuery(document).ready(function() {

    //openFancybox();

    var visited = jQuery.cookie('visited');
    if (visited == 'yes') {
        // second page load, cookie active
    } else {
       // openFancybox(); // first page load, launch fancybox
    }
    jQuery.cookie('visited', 'yes', {
        expires: 365 // the number of days cookie  will be effective
    });
    jQuery("#popuplink").fancybox({
        modal: true,
        maxWidth: 600,
        overlay: {
            closeClick: true
        }
    });
});




$(document).ready(function() {
    $('#show-hidden-menu').click(function() {
        if(getInitialData.action_type == 'initialCondition'){
            $('.hidden-menu').toggle();
        }else{
            $('#putredonclick').addClass("animation_invalid");
                setTimeout(function(){ 
                $('#putredonclick').removeClass('animation_invalid'); 
            }, 600);
        }
        //$('.hidden-menu').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-1').click(function() {
  if(getInitialData.action_type == 'Update_AR_Q1'){
            $('.hidden-menu-1').toggle();
        }else{
            $('#putredonclick_1').addClass("animation_invalid");
                setTimeout(function(){ 
                $('#putredonclick_1').removeClass('animation_invalid'); 
            }, 600);
        }



        //$('.hidden-menu-1').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

     $('#show-hidden-menu-2').click(function() {
        $('.hidden-menu-2').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-3').click(function() { 
        $('.hidden-menu-3').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });



    $('#show-hidden-menu-4').click(function() { 
        $('.hidden-menu-4').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-5').click(function() { 
        $('.hidden-menu-5').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-6').click(function() { 
        $('.hidden-menu-6').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-7').click(function() { 
        $('.hidden-menu-7').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-8').click(function() { 
        $('.hidden-menu-8').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-9').click(function() { 
        $('.hidden-menu-9').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });


      $('#show-hidden-menu-10').click(function() { 
        //$('.hidden-menu-10').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });


      $('#show-hidden-menu-11').click(function() { 
       // $('.hidden-menu-11').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });


     $('#show-hidden-menu-12').click(function() { 
       // $('.hidden-menu-12').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });


    $('#show-hidden-menu-13').click(function() { 

        console.log(getInitialData);

        //$('.hidden-menu-13').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });


    $('#show-hidden-menu-14').click(function() { 
        //$('.hidden-menu-14').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

    $('#show-hidden-menu-15').click(function() { 
        //$('.hidden-menu-15').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });

 

        $('#show-hidden-menu-16').click(function() { 
        $('.hidden-menu-16').toggle();
        // Alternative animation for example
        // slideToggle("fast");
    });


});

$(document).ready(function() {
    var res = setGameRound();
});



$('.putredonclick').click(function(){
    
  

    $(this).addClass("animation_invalid");
    setTimeout(function(){ 
        $('.putredonclick').removeClass('animation_invalid'); 
    }, 600);
    

});




// $(".animation_invalid_class").click(
//   function () {
//     $(this).addClass('animation_invalid');
//   }, 
//   function () {
//     $(this).removeClass('animation_invalid');
//   }
// );
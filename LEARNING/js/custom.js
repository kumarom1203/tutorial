(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()




$(window).on('scroll',function(){
	if($(this).scrollTop() > 131){  
    	$('nav.navbar').addClass("fixed-top");
    }
    if($(this).scrollTop() < 41){  
             $('nav.navbar').removeClass("fixed-top");
    } 
		
});

//active tab 
$(document).ready(function() {
    //collapse item 
    // $('.nav-text').each(function() {
    //     $(this).click(function() {

    //         for (i = 0; i < $('.nav-text').length; i++) {
    //             $('.nav-text').removeClass('active-nav');
    //         }
    //         $(this).addClass('active-nav');

    //     });
    // });

  //   $('body').on('mouseenter mouseleave','.nav-item',function(e){
	// 		if ($(window).width() > 750) {
	// 			var _d=$(e.target).closest('.nav-item');_d.addClass('show');
	// 			setTimeout(function(){
	// 			_d[_d.is(':hover')?'addClass':'removeClass']('show');
	// 			},1);
	// 		}
  // });
  
    $('#product-btn').click(function(){
        $('#sidebar').css({
            "right":"0px",
            "visibility":"visible",
             "overflow-y":"scroll"
        })
    });

    $('#sidebar-close-icon').click(function(){
        $('#sidebar').css({
            "right":"-30%",
            "visibility":"hidden"
        })
    });




    
});


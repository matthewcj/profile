// parralax
$(window).on('load', function(){
	$('.navbaratas').addClass('navbaratasShow')
});

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	
	if(wScroll > $('.photo').offset().top -1100 ) {
		$('.photo .img-fluid').each(function(i){
			setTimeout(function(){
				$('.photo .img-fluid').eq(i).addClass('Show');		
			}, 500 * (i+1));
		});

	}

});

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	
	if(wScroll > $('.kiri').offset().top -1100 ) {
		$('.kiri .img-fluid').each(function(i){
			setTimeout(function(){
				$('.kiri .img-fluid').eq(i).addClass('Show');		
			}, 500 * (i+1));
		});

	}

});

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();


	if(wScroll > $('.tengah').offset().top -1100 ) {
		$('.tengah .img-fluid').each(function(i){
			setTimeout(function(){
				$('.tengah .img-fluid').eq(i).addClass('Show');		
			}, 500 * (i+1));
		});

	}

});

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.kanan').offset().top -1100 ) {
		$('.kanan .img-fluid').each(function(i){
			setTimeout(function(){
				$('.kanan .img-fluid').eq(i).addClass('Show');		
			}, 500 * (i+1));
		});

	}

});
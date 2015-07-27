var banner = document.getElementById('banner');
setTimeout(function() {
	banner.style.marginTop = '0';
	}, 800);
	
$(document).ready(function(){
	$('a[href^="#about"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
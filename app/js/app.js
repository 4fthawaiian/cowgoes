'use strict';

window.PP = {};

var App = (function() {
		
	var privateVariable = 'App fired!',
		docElem = document.documentElement;

	return {
		publicFunction: function() {
			console.log(privateVariable);
		},
		userAgentInit: function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		}
	};

})();

(function() {

	//foundation init
	$(document).foundation();

	App.publicFunction();
	App.userAgentInit();

	$('[data-interact="load"]').on('click touchend', function (e) {
		e.preventDefault();

		var shadow = '<img src="img/covers/shadow.png" class="shadow">';

		$(this).closest('.cover-container').find(".option > .active").removeClass('active');
		$(this).closest('.cover-container').find(".option > .shadow").remove();
		$(this).toggleClass('active').promise().done(function (el){
			setTimeout(function() {
				el.parent().prepend(shadow).fadeIn();
			}, 100);
		});
	});

	PP.favToggle = $('.fav');

    PP.favToggle.on('click touchEnd', function (e) {
        
        e.preventDefault();
        $(this).children('i').toggleClass('active');

    });

    PP.levelLink = $('[data-interact="levelLink"]');

    PP.levelLink.on('click touchEnd', function (e) {
    	e.preventDefault();
    	var data = $(this).data('link');
    	alert('Loaded '+data+ '!');
    }); 

})();
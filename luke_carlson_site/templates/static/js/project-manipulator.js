$(document).ready(function(){
    if(window.location.hash){ /* checks for #!project in the url */
	var hash = window.location.hash.substring(1);
	console.log('the hash is' + hash);
    }
    $('#show-all').click(function(){
	$('#crunchbase-scraper').fadeIn();
	$('#todo-list').fadeIn();
	$('#parashoot').fadeIn();
	$('#twitterdefbot').fadeIn();
    });
    $('#crunch-click').click(function(){
	$('#crunchbase-scraper').fadeIn();
	$('#todo-list').hide();
	$('#parashoot').hide();
	$('#twitterdefbot').hide();
    });
    $('#todo-click').click(function(){
	$('#todo-list').fadeIn();
	$('#twitterdefbot').hide();
	$('#parashoot').hide();
	$('#crunchbase-scraper').hide();
    });
    $('#defbot-click').click(function(){
	$('#twitterdefbot').fadeIn();
	$('#todo-list').hide();
	$('#parashoot').hide();
	$('#crunchbase-scraper').hide();
    });
    $('#parashoot-click').click(function(){
	$('#parashoot').fadeIn();
	$('#todo-list').hide();
	$('#twitterdefbot').hide();
	$('#crunchbase-scraper').hide();
    });
});
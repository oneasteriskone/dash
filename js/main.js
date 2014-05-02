//Quick testing for ideas.


$(document).ready(function(){
	$('.transparent-search-results').hide();
});

$('.search-item-menu').click(function(){
	$('.transparent-search-results').fadeIn('slow');
});

$('.close-search').click(function(){
	$('.transparent-search-results').fadeOut('slow')
});

var search = [ 'Apple', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Fruity fun'];

$('.search-text-main').keypress(function(e){
	if(e.which === 13){
		$('.search-inputs').animate({
			"margin-top": "10%"
		}, 500);

		//Here you add your super smart search function. 
		var searchText = $('.search-text-main').val();
		var resultBoxes = "";
		for(var i = 0; i < search.length; i++){
			if(search[i].indexOf(searchText) !== -1){
				resultBoxes+="<div class='box'><a href='#'>"+search[i]+"</a></div>";
			}
		}
		$('.search-results').hide().html(resultBoxes).fadeIn('slow');
	}
});

$(document).keyup(function(e){
	if(e.which === 27){
		$('.transparent-search-results').fadeOut('slow')
	}
});
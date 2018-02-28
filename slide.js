

$(document).ready(function(){
	
	setInterval (function(){
$(".view ul").animate({marginLeft:'-1300px'},700,function(){
	$(this).find("li:last").after($(this).find("li:first"));
	$(this).css({marginLeft:'0'});
});

	},5000);
		$(".view ul").fadeIn('slow');
});


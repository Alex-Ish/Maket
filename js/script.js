$(document).ready(function(){
	if($(window).width() >= 1580){
	$('.galka').click(function(event){
		$('.g1').toggleClass('g12');
		$('.g2').toggleClass('g22');
		$('.jstop').toggle(function(){
			$('jstop').fadeToggle();
		});
	});
	$('#ssbllka1').click(function(event){
		event.preventDefault();
		$('.x').toggleClass('Blue');
		$('.y').toggleClass('Blue3');
		$('.Dashboard').toggleClass('Blue2');
		$('.menu__span1').toggleClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.cherta').toggleClass('cherta1').removeClass('cherta2').removeClass('cherta3').removeClass('cherta4').removeClass('cherta5').removeClass('cherta6');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka1').fadeToggle();
		$('.obolochka2').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka2').click(function(event){
		event.preventDefault();
		//$('.fc3e2').toggleClass('fc3e22');
		$('.cherta').toggleClass('cherta2').removeClass('cherta1').removeClass('cherta3').removeClass('cherta4').removeClass('cherta5').removeClass('cherta6');
		$('.menu__span2').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93.png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka2').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka3').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta3').removeClass('cherta2').removeClass('cherta1').removeClass('cherta4').removeClass('cherta5').removeClass('cherta6');
		$('.menu__span3').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector(2).png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka3').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka2').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka4').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta4').removeClass('cherta2').removeClass('cherta3').removeClass('cherta1').removeClass('cherta5').removeClass('cherta6');
		$('.menu__span4').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile(2).png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka4').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka2').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka5').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta5').removeClass('cherta2').removeClass('cherta3').removeClass('cherta4').removeClass('cherta1').removeClass('cherta6');
		$('.menu__span5').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector(3).png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka5').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka2').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka6').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta6').removeClass('cherta2').removeClass('cherta3').removeClass('cherta4').removeClass('cherta5').removeClass('cherta1');
		$('.menu__span6').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings(2).png');
		$('.obolochka6').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka2').fadeOut();
	});
	$('#Ongoing').click(function(event){
		event.preventDefault();
		$('.cherta222').css("display","block").css("left","28px");
		$('#Ongoing').css("color","#5E81F4");
		$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
		$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
	});
	$('#Favorite').click(function(event){
		event.preventDefault();
		$('.cherta222').css("display","block").css("left","147px");
		$('#Favorite').css("color","#5E81F4");
		$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
		$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
	});
	$('#Complete').click(function(event){
		event.preventDefault();
		$('.cherta222').css("display","block").css("left","273px");
		$('#Complete').css("color","#5E81F4");
		$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
		$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
	});	
	$('.fc3e2').trigger("click");
	$('#alexa').click(function(event){
		event.preventDefault();
	});
	}
	if($(window).width() <= 780 && $(window).width() >= 500){
		$('#Ongoing').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","35px");
			$('#Ongoing').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Favorite').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","147px");
			$('#Favorite').css("color","#5E81F4");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Complete').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","260px");
			$('#Complete').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('.Dashboard').click(function(event){
			$('.x').toggleClass('Blue');
			$('.y').toggleClass('Blue3');
			$('.Dashboard').toggleClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e2__img').click(function(event){		
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93.png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e3__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector(2).png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e4__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile(2).png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e5__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector(3).png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e6__img').on('click',function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings(2).png');
		});
	}
	if($(window).width() <= 375){
		$('#Alexa2').click(function(event){
			$('.jstop').toggle(function(){
				$('jstop').fadeToggle();
			});
			$('.O').toggle(function(event){
				$('O').css("height","0");			
			});
			$('.ohara').toggle(function(event){
				$('ohara').css("height","0");				
			});
			$('nav').toggle(function(event){
				$('nav').css("width","0");
			});
			$('.firstcolumn-3-element').toggle(function(event){
				$('firstcolumn-3-element').css("height","0")				
			});
			$('.Alexa').fadeToggle();
			$('body, head').css("overflow-y","hidden");
			$('.content, .first-column, body, .second-column').css("background","#000");
			$('.imgalexa, .Alexa').css("position","fixed");
			$('.obolochka2').fadeOut();
			$('.imgalexa').fadeIn();
			$('.Alexa').fadeIn();
		});
		$('.imgalexa').click(function(event){
			$('.jstop').toggle(function(){
				$('jstop').fadeToggle();
			});
			$('body, head').css("overflow-y","auto");
			$('.O').toggle(function(event){
				$('O').css("height","0")				
			});
			$('.ohara').toggle(function(event){
				$('ohara').css("height","0")				
			});
			$('nav').toggle(function(event){
				$('nav').css("width","0");
			});
			$('.firstcolumn-3-element').toggle(function(event){
				$('firstcolumn-3-element').css("height","67px")				
			});
			$('.content, .first-column, body').css("background","#FFF");
			$('.second-column').css("background","#f5f5fb");
			$('.imgalexa').css("display","none");
			$('.Alexa').fadeOut();
			$('.obolochka2').fadeIn();
		});

		$('.Dashboard').click(function(event){
			$('.x').toggleClass('Blue');
			$('.y').toggleClass('Blue3');
			$('.Dashboard').toggleClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e2__img').click(function(event){
				
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93.png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');

		});
		$('.fc3e3__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector(2).png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e4__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile(2).png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e5__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector(3).png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e6__img').on('click',function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings(2).png');
			$('.imgalexa').css("transform","translate(260px,-20px)")
		});
		$('#Ongoing').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","35px");
			$('#Ongoing').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Favorite').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","147px");
			$('#Favorite').css("color","#5E81F4");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Complete').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","260px");
			$('#Complete').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
		});		
	}
});
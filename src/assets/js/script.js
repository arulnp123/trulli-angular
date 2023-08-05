/*
Author       : Dreamguys
Template Name: Truelysell - Bootstrap Template
Version      : 1.3
*/

window.onload = function() {
    "use strict";
	
	// // Sidebar	
	// if($(window).width() <= 991){
	// var Sidemenu = function() {
	// 	this.$menuItem = $('.main-nav a');
	// };
	
	// function init() {
	// 	var $this = Sidemenu;
	// 	$('.main-nav a').on('click', function(e) {
	// 		if($(this).parent().hasClass('has-submenu')) {
	// 			e.preventDefault();
	// 		}
	// 		if(!$(this).hasClass('submenu')) {
	// 			$('ul', $(this).parents('ul:first')).slideUp(350);
	// 			$('a', $(this).parents('ul:first')).removeClass('submenu');
	// 			$(this).next('ul').slideDown(350);
	// 			$(this).addClass('submenu');
	// 		} else if($(this).hasClass('submenu')) {
	// 			$(this).removeClass('submenu');
	// 			$(this).next('ul').slideUp(350);
	// 		}
	// 	});
	// }
	// // Sidebar Initiate
	// init();
	// }
	
	// Textarea Text Count	
	var maxLength = 100;
	$('#review_desc').on('keyup change', function () {
		var length = $(this).val().length;
		 length = maxLength-length;
		$('#chars').text(length);
	});
		
	// Floating Label
	if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
	
	// Mobile menu sidebar overlay	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
	
	$(document).on('click', '.sidebar-overlay', function() {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	$(document).on('click', '#menu_close', function() {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	// Add More Hours	
    $(".hours-info").on('click','.trash', function () {
		$(this).closest('.hours-cont').remove();
		return false;
    });

    $(".add-hours").on('click', function () {
		
		var hourscontent = '<div class="row form-row hours-cont">' +
			'<div class="col-12 col-md-10">' +
				'<div class="row form-row">' +
					'<div class="col-12 col-md-6">' +
						'<div class="form-group">' +
							'<label>Start Time</label>' +
							'<select class="form-control">' +
								'<option>-</option>' +
								'<option>12.00 am</option>' +
								'<option>12.30 am</option>' + 
								'<option>1.00 am</option>' +
								'<option>1.30 am</option>' +
							'</select>' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6">' +
						'<div class="form-group">' +
							'<label>End Time</label>' +
							'<select class="form-control">' +
								'<option>-</option>' +
								'<option>12.00 am</option>' +
								'<option>12.30 am</option>' +
								'<option>1.00 am</option>' +
								'<option>1.30 am</option>' +
							'</select>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".hours-info").append(hourscontent);
        return false;
	});
	
	// Chat
	var chatAppTarget = $('.chat-window');
	(function() {
		if ($(window).width() > 991)
			chatAppTarget.removeClass('chat-slide');
		
		$(document).on("click",".chat-window .chat-users-list a.media",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.addClass('chat-slide');
			}
			return false;
		});
		$(document).on("click","#back_user_list",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.removeClass('chat-slide');
			}	
			return false;
		});
	})();
	
	// Circle Progress Bar
	
	function animateElements() {
		$('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#da3f81'
					}
				});
			}
		});
		$('.circle-bar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph2').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph2').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#68dda9'
					}
				});
			}
		});
		$('.circle-bar3').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph3').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph3').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#1b5a90'
					}
				});
			}
		});
	}	
	
	if($('.circle-bar').length > 0) {
		animateElements();
	}
	// Range slider
	if(document.getElementById("myRange")!=null){
		var slider = document.getElementById("myRange");
		var output = document.getElementById("currencys");
		output.innerHTML = slider.value;
	  
		slider.oninput = function() {
		  output.innerHTML = this.value;
		}
	}
	if(document.getElementById("myRange")!=null){
		document.getElementById("myRange").oninput = function() {
			var value = (this.value-this.min)/(this.max-this.min)*100
			this.style.background = 'linear-gradient(to right, #FF0080 0%, #FF0080 ' + value + '%, #c4c4c4 ' + value + '%, #c4c4c4 100%)'
		  };
		}
		
	$(document).on("click",".logo-hide-btn",function () {
		$(this).parent().hide();
	});
	$(window).scroll(animateElements);
	
	// Preloader
	
	$(window).on('load', function () {
		if($('#loader').length > 0) {
			$('#loader').delay(350).fadeOut('slow');
			$('body').delay(350).css({ 'overflow': 'visible' });
		}
	})
	// add Formset
$(document).on("click",".addlinks",function () {
	var experiencecontent = '<div class="form-group links-cont">' +
	'<div class="row align-items-center">' +
	'<div class="col-lg-3 col-12">' +
	'<input type="text" class="form-control" placeholder="Label">' +
	'</div>' +
	'<div class="col-lg-8 col-12">' +
	'<input type="text" class="form-control" placeholder="Link with http:// Or https://">' +
	'</div>' +
	'<div class="col-lg-1 col-12">' +
	'<a href="#" class="btn btn-sm bg-danger-light  delete_review_comment">' +
	'<i class="far fa-trash-alt "></i> ' +
	'</a>' +
	'</div>' +
	'</div>' +
	'</div>' ;
	
	$(".settings-form").append(experiencecontent);
	return false;
});

$(".settings-form").on('click','.delete_review_comment', function () {
	$(this).closest('.links-cont').remove();
	return false;
});


// add Formset
												
$(document).on("click",".addnew",function () {
	var experiencecontent = '<div class="form-group links-conts">' +
	'<div class="row align-items-center">' +
	'<div class="col-lg-3 col-12">' +
	'<input type="text" class="form-control" placeholder="Label">' +
	'</div>' +
	'<div class="col-lg-8 col-12">' +
	'<input type="text" class="form-control" placeholder="Link with http:// Or https://">' +
	'</div>' +
	'<div class="col-lg-1 col-12">' +
	'<a href="#" class="btn btn-sm bg-danger-light  delete_review_comment">' +
	'<i class="far fa-trash-alt "></i> ' +
	'</a>' +
	'</div>' +
	'</div>' +
	'</div>' ;
	
	$(".settingset").append(experiencecontent);
	return false;
});

$(".settingset").on('click','.delete_review_comment', function () {
	$(this).closest('.links-conts').remove();
	return false;
});

$(document).on("click",".addlinknew",function () {
	var experiencecontent = '<div class="form-group links-cont">' +
	'<div class="row align-items-center">' +
	'<div class="col-lg-3 col-12">' +
	'<input type="text" class="form-control" placeholder="Label">' +
	'</div>' +
	'<div class="col-lg-8 col-12">' +
	'<input type="text" class="form-control" placeholder="Link with http:// Or https://">' +
	'</div>' +
	'<div class="col-lg-1 col-12">' +
	'<a href="#" class="btn btn-sm bg-danger-light  delete_review_comment">' +
	'<i class="far fa-trash-alt "></i> ' +
	'</a>' +
	'</div>' +
	'</div>' +
	'</div>' ;
	
	$(".settings-forms").append(experiencecontent);
	return false;
});

$(".settings-forms").on('click','.delete_review_comment', function () {
	$(this).closest('.links-cont').remove();
	return false;
});

										
// add social links Formset
$(document).on("click",".addsocail",function () {
	var experiencecontent = '<div class="form-group countset">' +
	'<div class="row align-items-center">' +
	'<div class="col-lg-2 col-12">' +
	'<div class="socail-links-set">' +
	'<ul>' +
	'<li class=" dropdown has-arrow main-drop">' +
	'<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">' +
	'<span class="user-img">' +
	'<i class="fab fa-github me-2"></i>' +
	'</span>' +
	'</a>' +
	'<div class="dropdown-menu">' +
	'<a class="dropdown-item" href="#"><i class="fab fa-facebook-f me-2"></i>Facebook</a>' +
	'<a class="dropdown-item" href="#"><i class="fab fa-twitter me-2"></i>twitter</a>' +
	'<a class="dropdown-item" href="#"><i class="fab fa-youtube me-2"></i> Youtube</a>' +
	'</div>' +
	'</li>' +
	'</ul>' +
	'</div>' +
	'</div>' +
	'<div class="col-lg-9 col-12">' +
	'<input type="text" class="form-control" placeholder="Link with http:// Or https://">' +
	'</div>' +
	'<div class="col-lg-1 col-12">' +
	'<a href="#" class="btn btn-sm bg-danger-light  delete_review_comment">' +
	'<i class="far fa-trash-alt "></i> ' +
	'</a>' +
	'</div>' +
	'</div> ' +
	'</div> ';
	
	$(".setings").append(experiencecontent);
	return false;
});

$(".setings").on('click','.delete_review_comment', function () {
	$(this).closest('.countset').remove();
	return false;
});


// add Faq
												
$(document).on("click",".addfaq",function () {
	var experiencecontent = '<div class="row counts-list">' +
	'<div class="col-md-11">' +
	'<div class="cards">' +
	'<div class="form-group">' +
	'<label>Title</label>' +
	'<input type="text" class="form-control" >' +
	'</div>' +
	'<div class="form-group mb-0">' +
	'<label>Content</label>' +
	'<textarea class="form-control"></textarea>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'<div class="col-md-1">' +
	'<a href="#" class="btn btn-sm bg-danger-light  delete_review_comment">' +
	'<i class="far fa-trash-alt "></i> ' +
	'</a>' +
	'</div>' +
	'</div> ';
	
	$(".faq").append(experiencecontent);
	return false;
});

$(".faq").on('click','.delete_review_comment', function () {
	$(this).closest('.counts-list').remove();
	return false;
});
}
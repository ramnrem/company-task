import one from "./some.js";
import img from "./img/up.png";
const css = require('./css/style.scss');




/*notice dropdown disable*/
let mq = window.matchMedia("(min-width: 1200px)");
let isDisabled = $('.dropdown-dis').prop('disabled');
if (!mq.matches) { 
	$('.dropdown-dis').prop('disabled', false);
	
} else if (mq.matches){
	$('.dropdown-dis').prop('disabled', true);
	for( let i = 1; i <= $('.getchilds').length; i++ ){
		$(".notice-list").append("<li class='notice-list-item'><a href='#'' class='notice-list-link'>" + $(".getchilds:nth-child(" + i + ")").text() +  "</a></li>");
	}
}
$( window ).resize(function() {
	let mq = window.matchMedia("(min-width: 1200px)");
	let isDisabled = $('.dropdown-dis').prop('disabled');
	if (!mq.matches && isDisabled) {
		
		$('.dropdown-dis').prop('disabled', false);
		$(".notice-list-item").remove();
	} else if (mq.matches && !isDisabled){
		$('.dropdown-dis').prop('disabled', true);
		for( let i = 1; i <= $('.getchilds').length; i++ ){
			$(".notice-list").append("<li class='notice-list-item'><a href='#'' class='notice-list-link'>" + $(".getchilds:nth-child(" + i + ")").text() +  "</a></li>");
		}
	}
});
/*notice dropdown disable --end*/

$('.nav-btn').click(function(){
	if($('#navbarSupportedContent').attr('class') == "navbar-collapse collapse"){
		$(this).find('i').attr('class', 'fa fa-times');
		$('.navbar-leftside').addClass('nav-leftside-collapsed');
	}else if ($('#navbarSupportedContent').attr('class') == "navbar-collapse collapse show"){
		$(this).find('i').attr('class','fa fa-bars');
		$('.navbar-leftside').addClass('nav-leftside-collapsed');
	}
})

$('.view-article').click(function(){
	if($('.iscollapse').attr('class') == "iscollapse collapse"){
		$(this).find('.article-btn').attr('src', 'img/up.png'); 
	}else if ($('.iscollapse').attr('class') == "iscollapse collapse show"){
		$(this).find('.article-btn').attr('src','img/down.png')
	}
})

$('document').ready(function(){
	if ($(document).height() <= $(window).height())
		$('footer').addClass("fixed-bottom");
});

/*footer dropdown disable*/
let mq1 = window.matchMedia("(min-width: 768px)");
let isDisabled1 = $('.dropdown-f').prop('disabled');
if (!mq1.matches) { 
	$('.dropdown-f').prop('disabled', false);
	$('.caret').removeClass('caret-display-none')
} else if (mq1.matches){
	$('.dropdown-f').prop('disabled', true);
	$('.caret').addClass('caret-display-none')
	for( let i = 1; i <= $('.getchilds1').length; i++ ){
		$(".section-list").append("<li class='section-list-item'><a href='#'' class='section-list-link'>" + $(".getchilds1:nth-child(" + i + ")").text() +  "</a></li>");
	}
}
$( window ).resize(function() {
	let mq = window.matchMedia("(min-width: 768px)");
	let isDisabled = $('.dropdown-f').prop('disabled');
	if (!mq.matches && isDisabled) {
		
		$('.dropdown-f').prop('disabled', false);
		$(".section-list-item").remove();
		$('.caret').removeClass('caret-display-none')
	} else if (mq.matches && !isDisabled){
		$('.dropdown-f').prop('disabled', true);
		$('.caret').addClass('caret-display-none')
		for( let i = 1; i <= $('.getchilds1').length; i++ ){
			$(".section-list").append("<li class='section-list-item'><a href='#'' class='section-list-link'>" + $(".getchilds:nth-child(" + i + ")").text() +  "</a></li>");
		}
	}
});



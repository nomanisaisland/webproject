//导航部分
var btn = document.getElementById('btn');
var navbar = document.getElementById('nav-navbar');
var nav = document.getElementById('nav');
var bol = true;
var navbarH = navbar.offsetHeight;
var navbarMaxH = 185;
var navbarMinH = 0;
var navH = nav.offsetHeight;
var navMaxH = 238;
var navMinH = 53;
btn.onclick = function(){
	//判断是否点击了
	if (bol) {
		var timer = setInterval(function(){
			navbarH += 10;
			navH += 10;

			if (navbarH > navbarMaxH) {
				navbarH = navbarMaxH;
				if (navH > navMaxH) {
					navH = navMaxH;
					clearInterval(timer);
					nav.style.height = navH + "px";
					navbar.style.height = navbarH + "px";
				}
			} 
		},0)
	 	bol = false;
	}
	else{
		timer = setInterval(function(){
			navbarH -= 10;
			navH -= 10;

			if (navbarH < navbarMinH) {
				navbarH = navbarMinH;
				if (navH < navMinH) {
					navH = navMinH;
					clearInterval(timer);
					nav.style.height = navH + "px";
					navbar.style.height = navbarH + "px";
				}
			} 
			
		},0)
		bol = true;
	}
} 


//轮播图
var slider_main = document.getElementById('slider_main');
var slider_img = slider_main.getElementsByTagName('li');
var slider_btn = document.getElementById('slider_btn');

function slider(){
	var imgW = parseInt(slider_main.getElementsByTagName('img')[0].offsetWidth);
	timer = setInterval(function(){
		for(var i=0; i<slider_img.length;i++){

		}
	})
	function animate(offset){

	}
}
slider();


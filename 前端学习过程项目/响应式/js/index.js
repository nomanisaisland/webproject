
(function(){
	var men = document.getElementById("word_co_men");
	var women = document.getElementById("word_co_women");
	var kids = document.getElementById("word_co_kids");
	var sale = document.getElementById("word_co_sale");
	var abus = document.getElementById("word_co_abus");
	var support = document.getElementById("word_co_support");

	var letw_one = document.getElementById("nav_letw_one");
	var letw_tw = document.getElementById("nav_letw_tw");
	var letw_thr = document.getElementById("nav_letw_thr");
	var letw_fou = document.getElementById("nav_letw_fou");

	men.onmouseover = (function(){
		letw_one.style.display = "block";
		letw_one.onmouseover = (function(){
			letw_one.style.display = "block";
		})
	})
	men.onmouseout = (function(){
		letw_one.style.display = "none";
		letw_one.onmouseout = (function(){
			letw_one.style.display = "none";
		})
	})

	women.onmouseover = (function(){
		letw_tw.style.display = "block";
		letw_tw.onmouseover = (function(){
			letw_tw.style.display = "block";
		})
	})
	women.onmouseout = (function(){
		letw_tw.style.display = "none";
		letw_tw.onmouseout = (function(){
			letw_tw.style.display = "none";
		})
	})


	kids.onmouseover = (function(){
		letw_thr.style.display = "block";
		letw_thr.onmouseover = (function(){
			letw_thr.style.display = "block";
		})
	})
	kids.onmouseout = (function(){
		letw_thr.style.display = "none";
		letw_thr.onmouseout = (function(){
			letw_thr.style.display = "none";
		})
	})

	sale.onmouseover = (function(){
		letw_fou.style.display = "block";
		letw_fou.onmouseover = (function(){
			letw_fou.style.display = "block";
		})
	})
	sale.onmouseout = (function(){
		letw_fou.style.display = "none";
		letw_fou.onmouseout = (function(){
			letw_fou.style.display = "none";
		})
	})
}());


// 轮播图

(function(){
	// var pic = ["images/slide_1.gif","images/slide_2.gif","images/slide_3.gif","images/slide_4.gif","images/slide_5.gif"];
	var dots = document.getElementById("dot-btn");
	var dots_clic = dots.getElementsByTagName("span");
	var dots_btn = dots.getElementsByTagName("i");
	var slide = document.getElementById("slide");
	var main_slide = document.getElementById("main_slide");
	var currentPage = 0;

	function changePic(){
		if (currentPage > 4) {
			currentPage = 0;
		}
		if (currentPage < -1) {
			currentPage = 4;
		}
		slide.src = "images/slide" + currentPage + ".gif";
		for (var i = 0;i < dots_btn.length; i++) {
				dots_btn[i].className = "";
		};
		dots_btn[currentPage].className = "dot-btn-seleted";
	}
	var timer = setInterval(func1,"1000")
	function func1(){
		currentPage++;
		changePic();
		
	};

	main_slide.addEventListener("mouseover", func2, false);
	function func2(){
		clearInterval(timer);
	};
	main_slide.addEventListener("mouseout", func3, false);
	function func3(){
		timer = setInterval(func1,"1000");
	};


	for(var j = 0;j < dots_clic.length;j++){
		dots_clic[j].onclick = function(){
			var clickIndex = parseInt(this.getAttribute("index"));
		 	currentPage = clickIndex - 1;	 	
			changePic(); 
		}
	}
}());

// alert($)
$("#header_del").mouseover(function del(){
	$(".header-top").fadeOut(1000);
});

function navs(na,idn){
	$(na).mouseover(function(){
		$(idn).show();
		$(na).css({"background":"#999395"});
		$(idn).mouseover(function(){
			$(idn).show();
			$(na).css({"background":"#999395"});
			return false;
		})
	})
	$(na).mouseout(function(){
		$(idn).hide();
		$(na).css({"background":"#6e6568"});
		$(idn).mouseout(function(){
			$(idn).hide();
			$(na).css({"background":"#6e6568"});
		})
	})
}
navs("#nav_hea","#side_nav_sefi");
navs("#nav_mop","#side_nav_sese");
navs("#nav_com","#side_nav_seth");
navs("#nav_hfu","#side_nav_sefo");
navs("#nav_mcl","#side_nav_sefif");
navs("#nav_wms","#side_nav_sesix");
navs("#nav_mas","#side_nav_sesev");
navs("#nav_car","#side_nav_seeig");
navs("#nav_mab","#side_nav_senin");
navs("#nav_fod","#side_nav_seten");
navs("#nav_gif","#side_nav_seele");
navs("#nav_med","#side_nav_setwe");
navs("#nav_bok","#side_nav_seth");
navs("#nav_tit","#side_nav_seth");
navs("#nav_cft","#side_nav_seth");


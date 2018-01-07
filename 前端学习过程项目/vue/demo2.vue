<style type="text/css">
		*{
			margin: 0;
			padding: 0;
			
		}
		header{
			width: 500px;
			height: 50px;
			background-color: #E64242;
			color: #000;
		}
		#body{
			display: flex;
			width: 500px;
			height: 600px;
		}
		#body_main{
			margin: 0;
			width: 300px;	
			height: 600px;
			border: none;
			outline: none;
			background-color: #ccc;
		}
		#body_aside{
			margin: 0;
			width: 200px;
			height: 600px;
			outline: none;
			border: none;
			background-color: #ddd;
		}
		footer{
			width: 500px;
			height: 50px;
			background-color: #000;
		}
	</style>
<script type="text/javascript" src="vue.js"></script>
<div id="app">
	<app-header></app-header>
	<app-body>
		<app-main></app-main>
		<app-aside></app-aside>
	</app-body>
	<app-footer></app-footer>
</div>
<script type="text/javascript">
	var divHeader = vue.extend({
		template:"<header>头</header>"
	})
	var divBody = vue.extend({
		template:"<div id="body">头</div>"
	})
	var divMain = vue.extend({
		template:"<div id="body_main">头</div>"
	})
	var divAside = vue.extend({
		template:"<div id="body_aside">头</div>"
	})
	var divFooter = vue.extend({
		template:"<footer>头</footer>"
	})
	// 注册
	vue.component("app-header",appHeader)
	vue.component("app-body",appBody)
	vue.component("app-main",appMain)
	vue.component("app-aside",appAside)
	vue.component("app-footer",appFooter)
	
</script>
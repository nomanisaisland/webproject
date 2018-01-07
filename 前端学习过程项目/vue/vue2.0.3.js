/*new Vue({
	el: '#app',
	template: '<div>this is a {{ text }}<div>',
	data: {
		text: "test"
	}
})*/


/*Vue.component('my-header',{
	template: "<div>this is a test</div>"
})
new Vue({
	el: '#app',
	data: {
		text: "test"
	}
})*/


/*var myHeader = {
	template: "<div>this is a test</div>"
}
new Vue({
	el: '#app',
	data: {
		text: "test"
	},
	components: {
		'my-header': myHeader
	}
})*/

// 组件树的演示
var myHeaderChild = {
	template: "<p>this is a child</p>"
}
var myHeader = {
	template: "<div>this is a test <my-header-child> </my-header-child> </div>",
	components: {
		'my-header-child': myHeaderChild
	}
}
new Vue({
	el: '#app',
	data: {
		text: "test"
	},
	components: {
		'my-header': myHeader
	}
})
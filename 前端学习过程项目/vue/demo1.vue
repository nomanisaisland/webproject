<script type="text/javascript" src="vue.js"></script>
<h1>Vue.js 的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统：</h1>
<div id="app">
	<ul>

	    <li v-for="todo in todos" v-bind:title="message">
	     	<span> {{todo.text}}</span>
	    </li>

	</ul>
	<p v-if="seen"> <!-- v-for 指令可以绑定数组的数据来渲染一个项目列表： -->
	    看到我了吗
	</p>
</div>


<div id="app-2">
	<input v-model="newTodo" v-on:keyup.enter="addTodo">
	<ul>
		<li v-for="todo in todos">
			<span>{{todo.text}}</span>
			<button v-on:click="removeTodo($index)">x</button>
		</li>
	</ul>
</div>



 <div id="app4">
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
    <ul>
        <li v-for="todo in todos">
            <span>{{todo.text}}</span>
            <button v-on:click="removeTodo($index)">X</button>
        </li>
    </ul>
</div>
<script type="text/javascript">
	new Vue({
	  el: "#app",
	  data:{
	    todos : [
	      {text: "hello"},
	      {text: "hi"},
	      {text: "welcome"},
	    ],
	    message : "页面加载于" + new Date().toLocaleString() ,
	    seen : false, 
	  },
	})
	var app2 = new Vue({
		el: "#app-2",
		data: {
			newTodo: "",
			todos: [
				{text: "add something!"},
			]
		},
		methods: {
		  	addTodo: function(){
		  		var text = this.newTodo.trim()
		  		if (text) {
		  			this.todos.push({text: text})
		  			this.newTodo = ""
		  		}
		  	},
		  	removeTodo: function(index){
		  		alert(index);
		  		this.todos.splice(index,1)
		  	}
	   	}
	})
	new Vue({
        el: "#app4",
        data:{
            todos: [
                {text: 11111},
                {text: 22222},
                {text: 33333}
            ]
        },
        methods: {
            addTodo: function(){
                var newTodo = this.newTodo.trim();
                if(newTodo){
                    this.todos.push({text: newTodo})
                    this.newTodo = ""
                }
            },
            removeTodo: function(index){
            	index = 0;
                console.log(index); // 为什么输出控制台的是mouseEvent 对象
                this.todos.splice(index, 1)
            }
        }
    })
</script>

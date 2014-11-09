 function uploadAndSubmit() { 
	 var form = document.forms["demoForm"]; 
	    
	 if (form["file"].files.length > 0) { 
		 // 寻找表单域中的 <input type="file" ... /> 标签
		 var file = form["file"].files[0]; 
		 // try sending 
		 var reader = new FileReader(); 

		 reader.onloadstart = function() { 
			 // 这个事件在读取开始时触发
			 console.log("onloadstart"); 
			 document.getElementById("bytesTotal").textContent = file.size; 
		 } 
		 reader.onprogress = function(p) { 
		 	// 这个事件在读取进行中定时触发
			 console.log("onprogress"); 
			 document.getElementById("bytesRead").textContent = p.loaded; 
		 } 

		 reader.onload = function() { 
		    // 这个事件在读取成功结束后触发
			 console.log("load complete"); 
		 } 

		 reader.onloadend = function() { 
		    // 这个事件在读取结束后，无论成功或者失败都会触发
		 if (reader.error) { 
		 	console.log(reader.error); 
		 } 
		 else { 
			 document.getElementById("bytesRead").textContent = file.size; 
			 // 构造 XMLHttpRequest 对象，发送文件 Binary 数据
			 var xhr = new XMLHttpRequest(); 
			 xhr.open(/* method */ "POST", 
			 /* target url */ "upload.jsp?fileName=" + file.name 
			 /*, async, default to true */); 
			 xhr.overrideMimeType("application/octet-stream"); 
			 xhr.sendAsBinary(reader.result); 
			 xhr.onreadystatechange = function() { 
			 if (xhr.readyState == 4) { 
					 if (xhr.status == 200) { 
						 console.log("upload complete"); 
						 console.log("response: " + xhr.responseText); 
					 } 
				 } 
			 } 
		 } 
		 } 

		 reader.readAsBinaryString(file); 
		} 
		else { 
		 	alert ("Please choose a file."); 
		} 
 } 
//1.1控制器 命名空间
 var Controller={}；
 (Controller.users=function($){
 	var nameClick=function(){
 		/*    ###############     */
 		alert("nameClick");
 	};

 	$(function(){
 		$("#view .name").click(nameClick);
 	});
 })($);


//1.2构造函数
 var Person=function(name){
 	this.name=name;
 };
 var alice=new Person('alice');
 assert( alice instanceof Person);

//1.3创建类库
	 var Class=function(){
	 	var klass=function(){
	 		this.init.apply(this,arguments)
	 	};
	 	klass.prototype.init = function() {
	 		// body...

	 	};
	 	return klass;
	 };

	 var Person=new Class;

	 Person.prototype.init=function(){
	 };

	 var person=new Person;

		Person.find=function(id){/* ... */};
		var person=Person.find(1);

		Person.fn=Person.prototype;

		Person.fn.breath=function(){/* ... */};

		var person=new Person;

		person.breath();

//1.4 给类库添加方法
var Person=new Class;
Person.find=function(id){/*...*/};
var person=Person.find(1);

var Person=new Class;
Person.fn.save=function(){/*...*/};
var person=new Person;
person.save();

var Class=function(){
	var klass=function(){
		this.init.apply(this,arguments);
	};
	klass.fn=klass.prototype;
	klass.extend=function(obj){
		var extended=obj.extended;
		for(var i in obj){
			klass[i]=obj[i];
		}
		if(included) included(klass)
	};
	return klass;
};




//2.1监听事件
绑定事件监听的函数addEventListener(),三个参数：type、listener、useCapture。
var button=document.getElementById('div');
button.addEventListener("click",function(){/*...*/},false);

所有浏览器都支持的事件；click、dbclick、mousemove、mouseover、mouseout、focus、blur、change(表单输入框)、submit(表单特有)



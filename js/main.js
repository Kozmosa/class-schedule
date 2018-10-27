function solveArgument(argv_name) {
	//Solve by function GetRequest()
	var request = GetRequest();
	var argv = request[argv_name];
	return argv;
}

function GetRequest() { 
	var url = location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return theRequest; 
} 

function change_text(element, content) {
	//Get element by params
	element.innerHTML = content;
}

function get_element(id) {
	//Get element by id
	var x = document.getElementById(id);
	return x;
}
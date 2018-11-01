/*
Program Name:Class Schedule
Author Name: Xuyang1638
Author's school: Wuning No.2 Middle School
Program Version:in index.html and readme file.
*/

function getContent(day) {
    var monday = {
        "one":"语文",
        "two":"英语",
        "three":"英语",
        "four":"信息",
        "five":"美术",
        "six":"数学",
        "seven":"班会"
    };

    var tuesday = {
        "one": "英语",
        "two": "语文",
        "three": "数学",
        "four": "地理",
        "five": "政治",
        "six": "历史",
        "seven": "生物",
    };

    var wednesday = {
        "one": "数学",
        "two": "语文",
        "three": "英语",
        "four": "健康",
        "five": "语文",
        "six": "语文",
        "seven": "阅读",
    };

    var thursday = {
        "one": "英语",
        "two": "语文",
        "three": "数学",
        "four": "体育",
        "five": "地理",
        "six": "历史",
        "seven": "政治",
    };

    var friday = {
        "one": "语文",
        "two": "数学",
        "three": "数学",
        "four": "生物",
        "five": "音乐",
        "six": "英语",
        "seven": "体育",
    };

    switch (day) {
        case "1":
            return monday;
            break;
        case "2":
            return tuesday;
            break;
        case "3":
            return wednesday;
            break;
        case "4":
            return thursday;
            break;
        case "5":
            return friday;
            break;
        default:
            return "unknow param";
            console.log("unknow param");
            break;
    };
}

function solveUrl(argv_name) {
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
        console.log(strs)
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

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getQueue() {
    // Get
    href = window.location.href;
    console.log(href)
}

function warmTip() {
  mdui.alert("Please check the things of school before, then go to school.","Warm tips");
  mdui.alert("The things like your : ID Card , Textbook , The homework of last night ...","Warm tips");
}

function playVideo(url) {
  //Get url by params
}

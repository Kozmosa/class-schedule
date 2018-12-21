/*
Program Name:Class Schedule
Author Name: Xuyang1638
Author's school: Wuning No.2 Middle School
Program Version:in index.html and readme file.
*/

function getContent(day) {
    var monday = {
        "1": "语文",
        "2": "英语",
        "3": "英语",
        "4": "信息",
        "5": "美术",
        "6": "数学",
        "7": "班会"
    };

    var tuesday = {
        "1": "英语",
        "2": "语文",
        "3": "数学",
        "4": "地理",
        "5": "政治",
        "6": "历史",
        "7": "生物",
    };

    var wednesday = {
        "1": "数学",
        "2": "语文",
        "3": "英语",
        "4": "健康",
        "5": "语文",
        "6": "语文",
        "7": "阅读",
    };

    var thursday = {
        "1": "英语",
        "2": "语文",
        "3": "数学",
        "4": "体育",
        "5": "地理",
        "6": "历史",
        "7": "政治",
    };

    var friday = {
        "1": "语文",
        "2": "数学",
        "3": "数学",
        "4": "生物",
        "5": "音乐",
        "6": "英语",
        "7": "体育",
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

function getTitle(day) {
    var days = {
        '1': 'Monday | 星期一',
        '2': 'Tuesday | 星期二',
        '3': 'Wednesday | 星期三',
        '4': 'Thursday | 星期四',
        '5': 'Friday | 星期五',
    };

    return days[day];
}

function getSelect() {
    var select = document.getElementById('daySelect');
    var index = daySelect.selectedIndex; //序号，取当前选中选项的序号
    var val = daySelect.options[index].value;
    return val;
}

function enterClassesPage() {
    // Enter Class Page
    var selectDay = getSelect();
    window.open('perDay.api.html?day=' + selectDay);
    console.log('OK.');
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
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
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
    if (r != null) return unescape(r[2]);
    return null;
}

function getQueue() {
    // Get
    href = window.location.href;
    console.log(href)
}

function warmTip() {
    mdui.alert("Please check the things of school before, then go to school.", "Warm tips");
    mdui.alert("The things like your : ID Card , Textbook , The homework of last night ...", "Warm tips");
}

function playVideo(url) {
    //Get url by params
}

function enterTomorrowPage() {
    var d = Date();
    var day = d.getDay();
    day = day + 1;
    day = day.toString();
    enterClassesPage(day);
}

function enterTodayPage() {
    var d = new Date();
    var day = d.getDay();
    enterClassesPage(day);
}

function checkContestRisk() {
    // Check Contest Risk by Date
    var d = new Date();
    var day = d.getDay(); // Get Day in a week number
    switch (day) {
        case 3:
            var result = {
                "type": "Chinese",
                "risk": true,
            }
            return result;
            break;

        case 5:
            var result = {
                "type": "Maths",
                "risk": true,
            }
            return result;
            break;

        default:
            return false;
    }
}
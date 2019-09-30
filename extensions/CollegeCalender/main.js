// Dynamic Load Css and js
var DynamicLoading = {
    css: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}

function GetTodayClasses(cdata){
    const d = new Date()
    const day = d.getDay()
    const todayClasses = cdata[day]
    return todayClasses
}

function ApplyClasses(todayClasses) {
    for(let i = 1; i < 9; i++) {
        const el = document.querySelector('#class-' + i.toString())
        const className = todayClasses[i]
        if(className == '') {
            el.innerText = '无课'
        } else {
            el.innerText = className
        }
    }

    return true
}

function LoadClasses(cdata, day) {
    // Day: String or Integer
    if(day === 'today') {
        ApplyClasses(GetTodayClasses(cdata))
        mdui.snackbar({
            message: "数据重载完成！"
        })
        return true
    }
    ApplyClasses(cdata[day])
    mdui.snackbar({
        message: "数据重载完成！"
    })
    return true
}
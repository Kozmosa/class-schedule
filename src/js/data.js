function getContent(class_num) {
    var class19_chinese = {
        "name": "初一 (19)班",
        "classes_per_day": [{
                "day": "Monday",
                classes: [
                    "语文",
                    "英语",
                    "英语",
                    "信息",
                    "美术",
                    "数学",
                    "班会",
                ]
            },

            {
                "day": "Tuesday",
                classes: [
                    "英语",
                    "语文",
                    "数学",
                    "地理",
                    "政治",
                    "历史",
                    "生物",
                ]
            },

            {
                "day": "Wednesday",
                classes: [
                    "数学",
                    "语文",
                    "英语",
                    "健康",
                    "语文",
                    "语文",
                    "阅读",
                ]
            },

            {
                "day": "Thursday",
                classes: [
                    "英语",
                    "语文",
                    "数学",
                    "体育",
                    "地理",
                    "历史",
                    "政治",
                ]
            },

            {
                "day": "Friday",
                classes: [
                    "语文",
                    "数学",
                    "数学",
                    "生物",
                    "音乐",
                    "英语",
                    "体育",
                ]
            },
        ]
    }

    var class19_english = {
        "name": "初一 (19)班",
        "classes_per_day": [{
                "day": "Monday",
                classes: [
                    "Chinese",
                    "English",
                    "English",
                    "Computer",
                    "Art",
                    "Math",
                    "Class Meeting",
                ]
            },

            {
                "day": "Tuesday",
                classes: [
                    "English",
                    "Chinese",
                    "Math",
                    "Geography",
                    "Politics",
                    "History",
                    "Biology",
                ]
            },

            {
                "day": "Wednesday",
                classes: [
                    "Math",
                    "Chinese",
                    "English",
                    "Health",
                    "Chinese",
                    "Chinese",
                    "Read",
                ]
            },

            {
                "day": "Thursday",
                classes: [
                    "English",
                    "Chinese",
                    "Math",
                    "体育",
                    "Geography",
                    "History",
                    "Politics",
                ]
            },

            {
                "day": "Friday",
                classes: [
                    "Chinese",
                    "Math",
                    "Math",
                    "Biology",
                    "音乐",
                    "English",
                    "体育",
                ]
            },
        ]
    }

    var class18 = {
        "name": "初一 (18)班",
        "classes-per-day": [{
                "day": "Monday",
                classes: [
                    "语文",
                    "英语",
                    "英语",
                    "信息",
                    "美术",
                    "数学",
                    "班会",
                ]
            },
            {
                "day": "Tuesday",
                classes: [
                    "英语",
                    "语文",
                    "数学",
                    "地理",
                    "政治",
                    "历史",
                    "生物",
                ]
            },
            {}
        ]
    }

    switch (class_num) {
        case 18:
            return class18;
            break;
        case 19:
            return class19;
            break;
        default:
            return -1;
            console.error('Exception: Get Content Error.(Data.js Line 71)');
    }
}
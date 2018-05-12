export const MenuList = [
    {
        "name" : "list",
        "icon" : "menu",
        "events" : {
            "onClick": "operateExpandOrCollapse"
        },
        "state": {
            "default": {
                "expanded": false
            }
        }
    }, {
        "name" : "account",
        "icon" : "account_box",
        "label" : "账户",
        "default" : true,
        "href": "account"
    }, {
        "name" : "layout",
        "icon" : "library_books",
        "label" : "布局",
        "href": "switch/layout"
    }, {
        "name" : "container",
        "icon" : "border_all",
        "label" : "容器",
        "href": "switch/container"
    }, {
        "name" : "comp",
        "icon" : "widgets",
        "label" : "组件",
        "href": "switch/component",
        "events": {
            "onClick": "operateComponents"
        }
    }, {
        "name" : "playing",
        "icon" : "play_circle_outline",
        "label" : "运行"
    }, {
        "name" : "storage",
        "icon" : "storage",
        "label" : "数据集"
    }, {
        "name" : "settings",
        "icon" : "settings",
        "label" : "设置"
    }
]
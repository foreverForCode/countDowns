
### 使用说明

 
#### 版本：v1.2.1


#### 特点：
1. 支持动态多个计时器
2. 自动判断 距离开始和距离结束时间

#### 如何使用

```` javascript
countDown({
    startTime   : startTime,
    endTime     : endTime,
    moveCallback: function(hours,mins,miaos,days, tipMsg, elem?){},
    endCallback : function(elem?){},
    elem        : ''
})
````


参数说明

| 参数        | 数据类型     |  介绍          |  实例                |
| --------    | :-----:     | :----:         |  ----                |
| startTime   | {string}    |   开始时间      |  2018-11-12 12:12:12 |
| endTime     | {string}    |   结束时间      |2018-11-12 12:12:12   |
| moveCallback| {function}   |   倒计时回调  | function(){}       |
| endCallback | {function}   |   倒计时结束  | function(){}       |
| elem        | {string}   |   回传的节点    |'.elem'               |


返回数据说明

| 参数        | 数据类型   |  介绍       |
| --------   | :-----:    | :----:      |
| hours      | {number}   |   小时      |
| mins       | {number}   |   分钟      |
| miaos      | {number}   |   秒数      |
| days       | {number}   |   天数      |
| tipMsg     | {string}   |   判断 开始  || 结束    |
| elem       | {string}   |   回传的节点        |



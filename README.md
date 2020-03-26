
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

| 参数        | 数据类型    |  介绍          |
| --------    | :-----:    | :----:         |
| startTime   | {string}   |   开始时间      |
| endTime     | {number}   |   结束时间      |
| moveCallback| {number}   |   倒计时回调    |
| endCallback | {number}   |   倒计时结束    |
| elem        | {string}   |   回传的节点    |


返回数据说明

| 参数        | 数据类型   |  介绍       |
| --------   | :-----:    | :----:      |
| hours      | {number}   |   小时      |
| mins       | {number}   |   分钟      |
| miaos      | {number}   |   秒数      |
| days       | {number}   |   天数      |
| tipMsg     | {string}   |   判断 开始  || 结束    |
| elem       | {string}   |   回传的节点        |



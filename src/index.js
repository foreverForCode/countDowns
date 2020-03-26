/*
 * @Author        : jordan
 * @Date          : 2020-03-26 11:34:51
 * @LastEditTime  : 2020-03-26 11:36:13
 * @Description   : file content
 * @FilePath      : \countDowns\src\index.js
 */


;(function(win){
    var extend = function () {
        var options, name, src, copy, deep = false, target = arguments[0], i = 1, length = arguments.length;
        if (typeof (target) === "boolean") deep = target, target = arguments[1] || {}, i = 2;
        if (typeof (target) !== "object" && typeof (target) !== "function") target = {};
        if (length === i) target = this, --i;
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name], copy = options[name];
                    if (target === copy) continue;
                    if (copy !== undefined) target[name] = copy;
                }
            }
        }
        return target;
    };
    function CountDown(opts){

        var defaultOpts = {
            startTime:'',
            endTime:'',
            moveCallback:null,
            endCallback: null,
            elem:''
        };

        this.currentOpts = extend(defaultOpts,opts||{});
        this.diff        = 0;
        this.timer       = null;
        this.tipMsg      = '开始';   // 开始 | 结束
        if(!this.currentOpts.startTime || !this.currentOpts.endTime){
            console.log('开始时间和结束时间都不能少');
            return;
        };
        this.getDateFormat();
        this.init();

    }
    CountDown.prototype = {

        findStartTime: function (startTime, endTime) {
            
            var that = this;
            var nowTime = new Date();
            var nowTimeSecs   = nowTime.getTime();
            var startTimeSecs = that.parseDateTool(startTime).getTime();
            
            if (nowTimeSecs < startTimeSecs) {
                
                that.tipMsg = '开始';

                return [nowTime, that.parseDateTool(startTime)]
            } else {
                
                that.tipMsg = '结束';

                return [nowTime, that.parseDateTool(endTime)]
            }
        },

        parseDateTool:function(strDate){
            return new Date(Date.parse(strDate.replace(/-/g,"/")))
        },
        getDateFormat:function(){
            var that = this;

            var arr = that.findStartTime(that.currentOpts.startTime, that.currentOpts.endTime);
            
            that.currentOpts.startTime = arr[0];
            that.currentOpts.endTime   = arr[1];
            that.diff                  = that.currentOpts.endTime.getTime() - that.currentOpts.startTime.getTime();
        },
        convientTool:function(val,type){
            switch(type){

                case 'D':
                    return Math.floor(val / (1000 * 60 * 60 * 24));
                    break;
                case 'H':
                    return Math.floor(val / (1000 * 60 * 60)) % 24;
                    break;
                case 'M':
                    return Math.floor(val / (1000 * 60)) % 60;
                    break;
                case 'S':
                    return Math.floor(val / 1000) % 60;
                    break;
                case 'MS':
                    return Math.floor(val / 100) % 10;
                    break;
                default:
                    return;
            }
        },
        checkTime:function(i){

            return i;
        },
        init:function(){
            var that = this;
            that.timer = setInterval(function(){
                var me = that;
                if(me.diff >= 0){
                    var days = me.checkTime(me.convientTool(me.diff,'D'));
                    var hours = me.checkTime(me.convientTool(me.diff,'H'));
                    var mins = me.checkTime(me.convientTool(me.diff,'M'));
                    var miaos = me.checkTime(me.convientTool(me.diff,'S'));
                    var haomiaos = me.checkTime(me.convientTool(me.diff,'MS'))

                    if (me.currentOpts.elem) {
                        
                        me.currentOpts.moveCallback&&me.currentOpts.moveCallback(hours,mins,miaos,days, that.tipMsg, me.currentOpts.elem);
                    } else {
                        
                        me.currentOpts.moveCallback&&me.currentOpts.moveCallback(hours,mins,miaos,days, that.tipMsg);
                    }
                    

                }else{
                    clearInterval(me.timer);

                    if (me.currentOpts.elem) {
                        
                        me.currentOpts.endCallback && me.currentOpts.endCallback(me.currentOpts.elem);
                    } else {
                        
                        me.currentOpts.endCallback && me.currentOpts.endCallback();
                    }
                };
                me.diff = me.diff - 100;
            },100)
        }
    }
    function countDown(params){

        
        return new CountDown(params);
    }
    window.countDown = countDown;
})(window)

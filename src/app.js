var Game = {
    user:{
    },
    gameState:null,
    /**
     * 整个游戏的真正入口
     */
    start:function(){
        //加载poker-plist资源
        cc.director.runScene(new LoginScene());
    }
};

var jslog = function() {
    cc.log(Array.prototype.join.call(arguments, ", "));
};

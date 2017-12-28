/**
 *  游戏大厅场景
 */

var HallScene = cc.Scene.extend({
    _node: null,
    onEnter:function () {
        this._super();
        var root  =  Helper._parseUIFile("res/ui_hall_scene.json")
        this.addChild(root);
        
        //初级场
        var chujichang_btn=Helper._getButton(root, "chujichang");
        chujichang_btn.addTouchEventListener(this.gameChujichang, this);
    },
    gameChujichang:function (sender,type) {
    	var scene = new RoomScene();
    	cc.director.runScene(new cc.TransitionFade(0.5, scene));
    }
});
/**
 *  登录界面
 */

var LoginScene = cc.Scene.extend({
    _node: null,
    onEnter:function () {
        this._super();
        var root  =  Helper._parseUIFile("res/ui_login_scene.json")
        this.addChild(root);
        //登录
        var youkedenglu_btn=Helper._getButton(root,"youkedenglu");
        youkedenglu_btn.addTouchEventListener(this.youKeLogin, this);
    },
    youKeLogin:function (sender,type) {
        var scene = new HallScene()
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }
});
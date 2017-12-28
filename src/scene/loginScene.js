/**
 *  登录界面
 */

var LoginScene = cc.Scene.extend({
    _node: null,
    onEnter:function () {
        this._super();
        var root  =  Helper._parseUIFile("res/ui_login_scene.json")
        this.addChild(root);
        //测试精灵

        // var texture1 = cc.textureCache.addImage("res/Room/card/card_00.png");
        // var sprite =new cc.Sprite();
        // sprite.setTexture(texture1);
        // sprite.dirty=true;
        // sprite.x = 640;
        // sprite.y = 360;
        // root.addChild(sprite);

        //登录
        var youkedenglu_btn=Helper._getButton(root,"youkedenglu");
        youkedenglu_btn.addTouchEventListener(this.youKeLogin, this);
    },
    youKeLogin:function (sender,type) {
        var scene = new HallScene()
        cc.director.runScene(new cc.TransitionFade(0.5, scene));
    }
});
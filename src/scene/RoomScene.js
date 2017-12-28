/**
 * 扎金花房间
 */

var RoomScene=cc.Scene.extend({
    _cardManager:null,
	_scene:null,
	onEnter:function(){
		this._super();
		//显示房间界面
        var root =Helper._parseUIFile("res/ui_room_scene.json");
		this.addChild(root);
		//退出
		var exit_btn=Helper._getButton(root, "tuichu");
		exit_btn.addTouchEventListener(this.onBackCallback,this);

		this._scene=root;

		//init
		this.init();
	},
	init:function () {
		this._cardManager=new CardManager(this._scene);
		this._cardManager.init();
    },
    onBackCallback:function (sender,type) {
        var scene=new HallScene();
        cc.director.runScene(new cc.TransitionFade(0.2, scene));
    }
});
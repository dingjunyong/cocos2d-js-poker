/**
 * 扎金花房间
 */

var RoomScene=cc.Scene.extend({
	onEnter:function(){
		this._super()
		
		//显示房间界面
		var root=Helper._parseUIFile("res/ui_room_scene.json");
		this.addChild(root);
		
		var exit_btn=Helper._getButton(root, "tuichu");
		exit_btn.addTouchEventListener(this.onBackCallback,this);
	},
    onBackCallback:function (sender,type) {
        var scene=new HallScene();
        cc.director.runScene(new cc.TransitionFade(1.2, scene));
    }
});
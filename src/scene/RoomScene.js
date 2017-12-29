/**
 * 扎金花房间
 */

var RoomScene=cc.Scene.extend({
    _zjhGame:null,
	_scene:null,

    _allCards:[],
    _heses : ["0","1","2","3"],
    _dianshues:["2","4","5","6","7","8","9","a","b","c","d","1"],
    _players:[],

	_startGameBtn:null,

	onEnter:function(){
		this._super();
		//显示房间界面
        var root =Helper._parseUIFile("res/ui_room_scene.json");
		this.addChild(root);
		//退出
		var exit_btn=Helper._getButton(root, "tuichu");
		exit_btn.addTouchEventListener(this.onBackCallback,this);

		this._scene=root;

		//开始游戏
        this._startGameBtn=Helper._getButton(root, "start_game");
        this._startGameBtn.addTouchEventListener(this.onStartGame,this);

		//init
		this.init();
	},
	init:function () {

    },

    startGame:function () {
        //创建玩家
        this.createPlayer();
        //创建牌
        this.createCard();
        //洗牌
        this.randomCard();
        //发牌给玩家
        this.sendCard(this,0);
    },

   	//方法
    createPlayer:function () {
        for (var i=0;i<=4;i++){
            var player=Player.create(i+1);
            this._players.push({"sprite":player,"cards":[]});
        }
    },
    createCard:function () {
        for (var i=0;i<this._heses.length;i++){
            for (var j=0;j<this._dianshues.length;j++){
                var card=Card.create(this._heses[i],this._dianshues[j]);
                //定义牌所在的位置
                card.x=1280/2;
                card.y=600;
                card.showBeiMian();
                this._allCards.push(card);
                this._scene.addChild(card);
            }
        }
    },
    randomCard:function () {
        for(var i=0;i<52;i++){
            var pk1_index=Math.floor((Math.random()*this._allCards.length));
            var pk2_index=Math.floor((Math.random()*this._allCards.length));
            var pk1=this._allCards[pk1_index];
            var pk2=this._allCards[pk2_index];
            this._allCards[pk1_index]=pk2;
            this._allCards[pk2_index]=pk1;
        }
    },
    sendCard:function(self,cardIdx){
        var player_count=this._players.length;
        if(cardIdx< player_count * 3){
            var playerIdx=cardIdx % player_count;
            var playerCardIdx=parseInt(cardIdx / player_count);
            var card=this._allCards[cardIdx];
            card.zIndex=cardIdx;

            var player=this._players[playerIdx].sprite;
            this._players[playerIdx].cards.push(card);
            var position=player.getMoveCardPosition(playerCardIdx);
            card.runAction(cc.sequence(
                cc.moveTo(0.1,position),
                cc.callFunc(this.sendCard,this,cardIdx + 1)
            ));
        }else{
        	for(var i=cardIdx;i<this._allCards.length;i++){
                this._allCards[i].runAction(cc.sequence(
                    cc.moveTo(0.01,cc.p(1280/2,800))
                ));
			}
			this.stopAllActions();
		}
    },

    //事件
    onStartGame:function (sender,type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                this._startGameBtn.setVisible(false);
                this.startGame();
                break;
            default:
                break;
        }

    },
    onBackCallback:function (sender,type) {
        var scene=new HallScene();
        cc.director.runScene(new cc.TransitionFade(0.2, scene));
    }
});
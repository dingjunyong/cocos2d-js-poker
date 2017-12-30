/**
 * Created by adks on 2017/12/29.
 */

var ZJHGame=cc.Class.extend({
    _scene: null, //房间场景
    _allCards:[],
    _heses : ["0","1","2","3"],
    _dianshues:["2","4","5","6","7","8","9","a","b","c","d","1"],
    _players:[],
    //金币数量
    gold:1000,

    ctor:function (root) {
        this._scene=root;
    },
    start:function () {
        //创建玩家
        this.createPlayer();
        //房地
        this.sendGold();
        //创建牌
        this.createCard();
        //洗牌
        this.randomCard();
        //发牌给玩家
        this.sendCard(this,0);
    },
    createPlayer:function () {
        for (var i=0;i<=4;i++){
            var player=Player.create(i+1);
            this._players.push(player);
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

            var player=this._players[playerIdx]
            var position=player.getMoveCardPosition(playerCardIdx);
            card.runAction(cc.sequence(
                cc.moveTo(0.1,position),
                cc.callFunc(this.sendCard,this,cardIdx + 1)
            ));
        }
    },
    sendGold:function () {



    }
});
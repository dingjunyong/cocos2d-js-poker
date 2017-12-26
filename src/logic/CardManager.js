/*
*   Card Manager
*/

var CardManager=cc.Class.extend({
    _scene: null, //房间场景
    _allCards:[],
    _heses : ["0","1","2","3"],
    _dianshues:["2","4","5","6","7","8","9","a","b","c","d","1"],

    ctor:function (root) {
        this._scene=root;
    },
    init:function () {
        //创建牌
        this.createCard();
    },
    createCard:function () {
        for (var i=0;i<=this._heses.length;i++){
            for (var j=0;i<this._dianshues.length;i++){
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
        
    },
    createPlayer:function () {
        
    },
    sendCard:function () {
        
    }
});

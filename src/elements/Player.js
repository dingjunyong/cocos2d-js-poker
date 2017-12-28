/**
 * 玩家对象
 * */

var Player=cc.Sprite.extend({
    _touXiang:null,
    _userName:null,
    _number:0,
    _cards:[],

    _cardX:0,
    _cardOffsetX:0,
    _cardY:0,
    _cardOffsetY:0,


    ctor:function(username,zuowei,cardX,cardOffsetX,cardY,cardOffsetY) {
        this.super();
        this._userName=username;
        this._number=zuowei;
        this._cardX=cardX;
        this._cardOffsetX=cardOffsetX;
        this._cardY=cardY,
        this._cardOffsetY=cardOffsetY;
    },
    addCard:function (card) {
        var position=cc.p(this._cardX+this._cardOffsetX*this.getCardLength(),this._cardY+this._cardOffsetX*this.getCardLength());
        this._cards.push({"card":card,"position":position});
        return position;
    },
    getCardLength:function () {
        return this._cards.length;
    }
});

Player.create=function (zuowei) {

    switch(zuowei){
        case 1:
            var player=new Player("玩家"+zuowei,zuowei,352,82,430,0);
            return player;
        case 2:
            var player=new Player("玩家"+zuowei,zuowei,352,82,180,0);
            return player;
        case 3:
            var player=new Player("玩家"+zuowei,zuowei,590,82,255,0);
            return player;
        case 4:
            var player=new Player("玩家"+zuowei,zuowei,1010,-82,180,0);
            return player;
        case 5:
            var player=new Player("玩家"+zuowei,zuowei,1010,-82,430,0);
            return player;
    }
}

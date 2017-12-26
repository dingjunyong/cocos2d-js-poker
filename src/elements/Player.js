/**
 * 玩家对象
 * */

var Player=cc.Sprite.extend({
    _touXiang:null,
    _userName:null,
    _zuoWei:null,
    _cards:[],
    _ctor:function(username,zuowei) {
        this._userName=username;
        this._zuowei=zuowei;
        this.super();
    }
});

Player.create=function (zuowei) {
    var player=new Player("玩家"+zuowei,zuowei);
    return player;
}

/*
* 单张牌精灵
* */

var Card = cc.Sprite.extend({
    _bmFile:null,
    _zmFile:null,
    _huaSe:0,
    _dianShu:0,
    ctor:function (huaSe,dianShu,zmFile,bmFile) {
        this._bmFile=bmFile;
        this._zmFile=zmFile;
        this._super();
    },
    showZhengMian:function () {
        this.initWithFile(this._zmFile);
    },
    showBeiMian:function () {
        this.initWithFile(this._bmFile);
    }
});

Card.create=function (huase,dianshu) {
    var bm_file="res/Room/card/card_00.png";
    var zm_file="res/Room/card/card_"+huase+dianshu+".png";
    var dianshu_number=0;
    switch(dianshu){
        case "a":
            dianshu_number=10;
            break;
        case "b":
            dianshu_number=11;
            break;
        case "c":
            dianshu_number=12;
            break;
        case "d":
            dianshu_number=13;
            break;
        case "1":
            dianshu_number=14;
            break;
        default:
            dianshu_number=parseInt(dianshu);
            break;
    }
    var card=new Card(parseInt(huase),dianshu_number,zm_file,bm_file);
    return card;
}
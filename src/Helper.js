/**
 * Created by kenkozheng on 2014/8/20.
 */
var Helper = {
    _getButton:function(rootElement,name){
        var button=ccui.helper.seekWidgetByName(rootElement,name);
        button.setTouchEnabled(true);
        button.setPressedActionEnabled(true);
        return button
    },
    _parseUIFile: function(file){
    	cc.log("ccs.load : %s", file);
    	var json = ccs.load(file);
    	return json.node;
    }
};
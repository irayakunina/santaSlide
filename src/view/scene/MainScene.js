/**
 * Created by bz on 31/10/2015.
 */
var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new BackgroundLayer();
        this.addChild(layer);
    }
});
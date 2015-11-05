/**
 * Created by bz on 31/10/2015.
 */
var Santa = cc.Class.extend({
    sprite: null,

    ctor: function(x, y){
        this.sprite = null;
        this.init(x, y);
    },

    init: function(x, y){
        var x = x || 100;
        var y = y || 100;
        this.sprite = new cc.Sprite(res.bag);
        this.sprite.attr({
            x: x,
            y: y
        })
    }
});
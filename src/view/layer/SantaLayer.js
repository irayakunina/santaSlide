/**
 * Created by bz on 31/10/2015.
 */
/**
 * Created by bz on 31/10/2015.
 */
var SantaLayer = cc.Layer.extend({
    visualObjects: null,
    scene: null,

    ctor:function (scene) {
        this._super();
        this.scene = scene;
        this.visualObjects = {};
    },

    addSanta: function(){
        var santa = new Santa(this.scene.size.width / 2, 100);
        this.visualObjects.santa = santa.sprite;

        this.addChild(this.visualObjects.santa);
    },

    getMoveSantaAnimationWithTarget: function(){
        var moveTo = new cc.MoveTo(2, this.scene.size.width / 2 + (Math.random() * 200 - 100), this.scene.size.height - 100);
        return {action: moveTo, target: this.visualObjects.santa};
    }
});
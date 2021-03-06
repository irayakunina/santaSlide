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
        var santa = new Santa(this.scene.size.width / 2 - 100, 100);
        var santa2 = new Santa(this.scene.size.width / 2 + 100, 100);
        var santa3 = new Santa(this.scene.size.width / 2, 100);
        this.visualObjects.santa = santa.sprite;
        this.visualObjects.santa2 = santa2.sprite;
        this.visualObjects.santa3 = santa3.sprite;

        this.addChild(this.visualObjects.santa);
        this.addChild(this.visualObjects.santa2);
        this.addChild(this.visualObjects.santa3);
    },

    getMoveSantaAnimationWithTarget: function(visualObjectId){
        var moveTo = new cc.MoveTo(2, this.scene.size.width / 2 + (Math.random() * 200 - 100), this.scene.size.height - 150);
        var scaleTo = new cc.ScaleTo(2, 0.5, 0.5);

        return { action: new cc.Spawn([moveTo, scaleTo]), target: this.visualObjects[visualObjectId] };
    }
});
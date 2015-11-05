/**
 * Created by bz on 31/10/2015.
 */
var MainScene = cc.Scene.extend({
    layers: {},
    size: {},
    view: null,

    ctor: function(view){
        this._super();

        this.view = view;
    },

    onEnter:function () {
        this._super();
        this.size = cc.winSize;
        this.layers = {};
        this.layers.backgroundLayer = new BackgroundLayer(this);
        this.layers.fieldLayer = new FieldLayer(this);
        this.layers.santaLayer = new SantaLayer(this);

        this.addChild(this.layers.backgroundLayer);
        this.addChild(this.layers.fieldLayer);
        this.addChild(this.layers.santaLayer);

        this.view.sceneInitializationComplete();
    },

    addSanta: function(){
        this.layers.santaLayer.addSanta();
    },

    moveSanta: function(id){
        var animationObject = this.layers.santaLayer.getMoveSantaAnimationWithTarget(id);
            animationObject.target.runAction(animationObject.action);
    }
});
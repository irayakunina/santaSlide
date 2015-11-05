/**
 * Created by bz on 31/10/2015.
 */
var GameView = cc.Class.extend({
    controller: {},
    scene: {},


    ctor: function(parentController){
        this.controller = parentController;
        this.scene = new MainScene(this);
    },

    start: function(){
        cc.director.runScene(this.scene);
    },

    pause: function(){

    },

    resume: function(){

    },

    sceneInitializationComplete: function(){
        if(this.controller && this.controller.viewDidFinishLoading) {
            this.controller.viewDidFinishLoading();
        }
    },

    addSanta: function(){
        this.scene.addSanta();
    },

    moveSanta: function(id){
        this.scene.moveSanta(id);
    }
});
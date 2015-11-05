/**
 * Created by bz on 30/10/2015.
 */
var GameController = cc.Class.extend({
    app: null,
    view: null,
    model: null,

    ctor: function(app, view, model){
        this.app = app;
        this.view = view;
        this.model = model;

        this.init();
    },

    init: function(){

    },

    viewDidFinishLoading: function(){
        this.view.addSanta();
        this.view.moveSanta('santa');
        this.view.moveSanta('santa2');
        this.view.moveSanta('santa3');
    }
});
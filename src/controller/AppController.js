var AppController = cc.Class.extend({
    dispatcher: null,
    model: {},
    view: {},

    ctor: function(){
        //this._super();
        this.init();
    },

    init: function(){
        this.view = new GameView(this);

        this.view.start();
    }
});
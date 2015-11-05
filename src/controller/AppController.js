var AppController = cc.Class.extend({
    dispatcher: null,
    model: {},
    view: {},
    gameController: null,

    ctor: function(){
        //this._super();
        this.gameController = null;
        this.init();
    },

    init: function(){
        this.view = new GameView(this);

        this.gameController = new GameController(this, this.view, {});

        this.view.start();
    },

    viewDidFinishLoading: function(){
        this.gameController.viewDidFinishLoading();
    }
});
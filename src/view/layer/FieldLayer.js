/**
 * Created by bz on 31/10/2015.
 */
var FieldLayer = cc.Layer.extend({
    sprite:null,

    ctor:function (scene) {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Santa's Run Way", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.RunWay_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            scaleX: size.width / this.sprite.width,
        });
        this.addChild(this.sprite, 0);

        return true;
    }
});
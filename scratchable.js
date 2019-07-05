cc.Class({

    extends: cc.Component,

    properties: {
        mask: cc.Mask,
    },

    // onLoad: function () {
    //     this.node.on(cc.Node.EventType.TOUCH_START, this._onTouch, this);
    //     this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouch, this);
    //     this.node.on(cc.Node.EventType.TOUCH_END, this._onTouch, this);
    // },

    initScratable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouch, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouch, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouch, this);
    },


    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouch, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouch, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouch, this);

    },

    _onTouch(event) {
        var point = event.touch.getLocation();
        point = this.mask.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    },


    _addCircle: function (point) {
        const g = this.mask._graphics;
        g.ellipse(point.x, point.y, 60, 60);
        g.close();
        g.stroke();
        g.fill();
    },

});
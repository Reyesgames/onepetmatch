var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        b = {};
    try {
        return b.__proto__ = a, b.a
    } catch (c) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var c = $jscomp.setPrototypeOf;
        c(a, b)
    } else
        for (c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else a[c] = b[c];
    a.superClass_ = b.prototype
};
var Load = function() {
    return Phaser.Scene.call(this, "load") || this
};
$jscomp.inherits(Load, Phaser.Scene);
Load.prototype.preload = function() {
    var a = this;
    this.add.sprite(360, 540, "background");
    this.add.sprite(360, 320, "game_title");
    var b = this.add.rectangle(config.width / 2, 600, 600, 20);
    b.setStrokeStyle(4, 16777215);
    b.alpha = .7;
    var c = this.add.rectangle(config.width / 2, 600, 590, 10, 16777215);
    c.alpha = .8;
    this.load.on("progress", function(a) {
        c.width = 590 * a
    });
    this.load.on("complete", function() {
        b.destroy();
        c.destroy();
        var d = draw_button(360, 700, "start", a);
        a.tweens.add({
            targets: d,
            alpha: .5,
            yoyo: !0,
            duration: 300,
            loop: -1
        })
    }, this);
    this.input.on("gameobjectdown", function() {
        a.scene.start("menu")
    }, this);
    this.load.image("shadow", "img/shadow.png");
    this.load.image("sign", "img/sign.png");
    this.load.image("header", "img/header.png");
    this.load.image("footer", "img/footer.png");
    this.load.image("btn_home", "img/btn_home.png");
    this.load.image("btn_shuffle", "img/btn_shuffle.png");
    this.load.image("btn_hint", "img/btn_hint.png");
    this.load.image("btn_play", "img/btn_play.png");
    this.load.image("btn_next", "img/btn_next.png");
    this.load.image("btn_sound_on",
        "img/btn_sound_on.png");
    this.load.image("btn_sound_off", "img/btn_sound_off.png");
    this.load.image("btn_restart", "img/btn_restart.png");
    this.load.image("btn_menu", "img/btn_menu.png");
    this.load.image("btn_start", "img/btn_start.png");
    this.load.image("circle", "img/circle.png");
    this.load.image("arrow", "img/arrow.png");
    this.load.image("shuffle_icon", "img/shuffle_icon.png");
    this.load.image("hint_icon", "img/hint_icon.png");
    this.load.image("score_bar", "img/score_bar.png");
    this.load.spritesheet("lines", "img/lines.png", {
        frameWidth: 90,
        frameHeight: 90
    });
    for (var d = 1; 22 >= d; d++) this.load.image("obj" + d, "img/obj" + d + ".png");
    this.load.audio("click", "audio/click.mp3");
    this.load.audio("connected", "audio/connected.mp3");
    this.load.audio("itemclick", "audio/itemclick.mp3");
    this.load.audio("gameover", "audio/gameover.mp3");
    this.load.audio("nomatch", "audio/nomatch.mp3");
    this.load.audio("completed", "audio/completed.mp3");
    this.load.audio("hint", "audio/hint.mp3");
    this.load.audio("shuffle", "audio/shuffle.mp3")
};
Load.prototype.create = function() {};
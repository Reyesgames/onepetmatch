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
                    var e = Object.getOwnPropertyDescriptor(b, c);
                    e && Object.defineProperty(a, c, e)
                } else a[c] = b[c];
    a.superClass_ = b.prototype
};
var last_array = 0,
    best_score = 0,
    game_data = {
        sound: !0
    },
    player_data = {
        drop_mode: 0,
        hint_left: 5,
        shuffle_left: 5,
        score: 0
    };
load_data();

function load_data() {
    var a = localStorage.getItem("redfoc_onet_best");
    a && (best_score = a);
    (a = localStorage.getItem("redfoc_onet_data")) && (player_data = JSON.parse(a));
    if (a = localStorage.getItem("redfoc_onet_array")) a = JSON.parse(a), last_array = a.arr, player_data = a.data
}
var Menu = function() {
    return Phaser.Scene.call(this, "menu") || this
};
$jscomp.inherits(Menu, Phaser.Scene);
Menu.prototype.create = function() {
    var a = this,
        b = this;
    this.add.sprite(0, 0, "background").setOrigin(0);
    this.add.sprite(0, config.height, "header").setOrigin(0, 1);
    this.add.sprite(0, config.height, "footer").setOrigin(0, 1);
    var c = this.add.sprite(360, 320, "game_title");
    this.tweens.add({
        targets: c,
        y: c.y + 30,
        duration: 1300,
        ease: "Sine.easeInOut",
        yoyo: !0,
        repeat: -1
    });
    this.add.text(360, 600, "BEST SCORE:", {
        fontFamily: "PoetsenOne",
        fontSize: 35,
        align: "center",
        color: "#000000"
    }).setOrigin(.5);
    this.add.text(360, 650, String(best_score), {
        fontFamily: "PoetsenOne",
        fontSize: 30,
        align: "center",
        color: "#FFFFFF"
    }).setOrigin(.5);
    draw_button(360, 760, "play", this);
    this.input.on("gameobjectdown", function(c, d) {
        d.button && (play_sound("click", a), a.tweens.add({
            targets: d,
            scaleX: .9,
            scaleY: .9,
            yoyo: !0,
            ease: "Linear",
            duration: 100,
            onComplete: function() {
                "play" === d.name, b.scene.start("game")
            }
        }, a))
    }, this);
    this.add.text(360, 1040, "How To Play ?\n----------------- \n The goal is to match the same tiles by connecting pairs.\n:- Use Hint to get expose tiles pair.\n :- Use Shuffle to rearrange the tiles on the board randomly. \n\n\n-", {
        fontFamily: "robotomono",
        fontSize: 22,
        align: "center",
        color: "#000000"
    }).setOrigin(.5)
};
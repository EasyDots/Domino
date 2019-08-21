const game=require("GameMgr");
const level=require("Level1");
cc.Class({
    extends: cc.Component,
    properties: {
     
    },
    onLoad () {
    },

    start () {
        //开启物理
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
    },

    // update (dt) {},
});

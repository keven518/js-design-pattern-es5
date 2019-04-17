/**
 * 命名空间
 */

var Main = {
    run: function() {
        console.log('run');
    },
    jump: function() {
        console.log('jump');
    }
}
Main.run();

// 游戏人物
// var Player = {
//     hp: 100,
//     mp: 200
// }

// 游戏人物
var Player = (function() {
    // 实例
    var instance = null;
    // 私有变量
    var hp = 100; // 生命值
    var mp = 200; // 魔法值
    // 初始化函数
    function init() {
        return {
            // 获取生命值
            getHp: function() {
                return hp;
            },
            // 获取魔法值
            getMp: function() {
                return mp;
            },
            // 行走方法
            run: function() {
                console.log('running');
            }
        }
    }
    return {
        // 初始化一个游戏英雄
        init: function() {
            // 未存在,则初始化
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

// 创建一个游戏英雄
var person1 = Player.init();
console.log(person1.getHp());
console.log(person1.getMp());
// 死亡复活
var person2 = Player.init();
// 创建的还是之前的对象
console.log(person1 === person2); // true
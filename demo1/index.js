// #简单工厂模式第一种
/**
 * 足球类
 */
// var FootBall = function  () {
//     this.play = function () {
//         console.log('我在踢足球');
//     }
// }

/**
 * 篮球类
 */
// var BasketBall = function  () {
//     this.play = function () {
//         console.log('我在打篮球');
//     }
// }

// var football = new FootBall();
// football.play();
// var basketball = new BasketBall();
// basketball.play();

/**
 * 球类工厂
 */
// var Ball = function(name) {
//     switch (name) {
//         case '足球':
//             return new FootBall();
//         break;
//         case '篮球':
//             return new BasketBall();
//         break;
//     }
// }
// var football =  Ball('足球');
// football.play();
// var basketball =  Ball('篮球');
// basketball.play();

// #简单工厂模式第一种end

// #简单工厂模式第二种

/**
 * 球类工厂
 */
// var Ball = function(name) {
//     // 创建一个对象,对对象扩展扩展属性还有方法
//     var o = new Object();
//     o.name = name;
//     //默认的方法 如果在加上一个羽毛球类,这时候就不需要补充play方法
//     o.play = function () {
//         console.log('我在打'+name);
//     }
//     if (name === '足球') {
//         o.play = function () {
//             console.log('我在踢'+name);
//         }
//     }else if (name === '篮球') {
//         o.play = function () {
//             console.log('我在打'+name);
//         }
//     }
//     // 将对象返回
//     return o;
// }
// var football =  Ball('足球');
// football.play();
// var basketball =  Ball('篮球');
// basketball.play();

// #简单工厂模式第二种end



// # 工厂方法模式
// 安全模式创建工厂类
// var Ball = function (type,name) {
//     /**
//      * 安全模式 Ball也可以运行处new Ball的效果
//      */
//     if(this instanceof Ball) {
//         var s = new this[type](name);
//         return s;
//     }else {
//         return new Ball(type,name);
//     }
// }
// 工厂原型中设置创建所有类
// Ball.prototype = {
//     basketBall: function(name) {
//         this.play = function() {
//             console.log('我在打'+name);
//         }
//     },
//     footBall: function(name) {
//         this.play = function() {
//             console.log('我在踢'+name);
//         }
//     },
//     badmintonBall: function(name) {
//         this.play = function() {
//             console.log('我在打'+name);
//         }
//     },
//     // ....
// }
// var football = new Ball('footBall','足球');
// football.play();
// var basketball = new Ball('basketBall','篮球');
// basketball.play();
// var badmintonball = new Ball('badmintonBall','羽毛球');
// badmintonball.play();

// # 工厂方法模式end

// # 抽象工厂模式


// 抽象类的介绍
// var Ball = function () {}
// Ball.prototype = {
//     play: function () {
//         return new Error('抽象方法不能调用');
//     }
// }


var Sport = function(subType, superType) {
    if( typeof Sport[superType] === 'function'){
        // 缓存类
        function F() {};
        // 继承父类属性和方法
        F.prototype = new Sport[superType]();
        // 将子类constructor 指向子类
        subType.constructor = subType;
        // 子类原型继承 “父类”
        subType.prototype = new F(); 
    }else {
        // 不存在抽象类则抛出错误
        throw new Error('未创建该抽象类');
    }
}

// 球类运动抽象类
Sport.Ball = function () {
    this.type = 'ball';
}
Sport.Ball.prototype = {
    play: function () {
        return new Error('抽象方法不能调用');
    }
}

// 力量型运动抽象类
Sport.Power = function () {
    this.type = 'power';
}
Sport.Power.prototype = {
    play: function () {
        return new Error('抽象方法不能调用');
    }
}

// 速度型运动抽象类
Sport.Speed = function () {
    this.type = 'speed';
}
Sport.Speed.prototype = {
    play: function () {
        return new Error('抽象方法不能调用');
    }
}

// 篮球类
var BasketBall = function (name) {
    this.name = name;
};
// 抽象工厂实现对球类运动的继承
Sport(BasketBall,'Ball');
BasketBall.prototype.play = function () {
    console.log('我在玩'+this.name);
}


// 举重类
var WeightLifting = function (name) {
    this.name = name;
};
// 抽象工厂实现对力量型运动的继承
Sport(WeightLifting,'Power');
WeightLifting.prototype.play = function () {
    console.log('我在玩'+this.name);
}

// 跑步类
var Running = function (name) {
    this.name = name;
};
// 抽象工厂实现对速度运动的继承
Sport(Running,'Speed');
Running.prototype.play = function () {
    console.log('我在'+this.name);
}

// 抽象工厂模式实现
var basketBall = new BasketBall('篮球');
console.log(basketBall.type);//ball
basketBall.play();
var weightLifting = new WeightLifting('举重');
console.log(weightLifting.type);//power
weightLifting.play();
var running = new Running('跑步');
console.log(running.type);//ball
running.play();

/** 输出结果
 * ball
 * 我在玩篮球
 * power
 * 我在玩举重
 * speed
 * 我在跑步
 */


// # 抽象工厂模式end
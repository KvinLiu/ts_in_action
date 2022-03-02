/*
 * @Author: lhf
 * @Date: 2022-03-02 11:20:29
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\class-interface.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 11:36:54
 */

// 接口可以约束类公有(public)成员的类型, 不能约束构造函数  最少属性
interface Human {
  // new (name: string): void  // 构造函数
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(public name: string) {
    this.name = name;
  }
  eat() {
  }
}

// 接口继承
interface Main extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Main, Child {}

let boy: Boy = {
  name: "key",
  eat() {
    console.log("eat rice");
  },
  run() {
    console.log("run away");
  },
  cry: function (): void {
    console.log("don't cry");
  },
};

// 接口继承类, 接口将类的成员抽象出来, 所有成员，public, protected，private
class Auto {
  state = 1;
  private state2 = 0;
}
interface AutoInterface extends Auto {
}
// class C implements AutoInterface {
//   state = 23;
// }
class Bus extends Auto implements AutoInterface {
}

class C extends Auto {
}

let c = new C();

console.log("wht c", c);

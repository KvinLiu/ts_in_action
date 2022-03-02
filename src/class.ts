/*
 * @Author: lhf
 * @Date: 2022-03-02 10:22:40
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\class.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 11:43:07
 */
class Dog {
  constructor(name: string) { // private, 既不实例化，也不继承；protected，只能被继承，相当于生成个基类
    this.name = name;
  }
  name: string;
  readonly legs: number = 4;
  // private static food: string = "bones";
  static food: string = "bones";
  run() {
    console.log("just run");
  }
  private pri() {
    console.log("this is private");
  }
  protected pro() {
  }
  private foodtwo: string = "bones";
}

// 无论ES6 还是 TS，类属性都是实例属性而不是原型属性
// console.log(Dog.prototype);
let dog = new Dog("wangwang");
// 1.内部属性只在实例上，不在原型上
// 2.内部属性必须初始化
// console.log(dog);
//console.log(Dog.food);
// dog.run()
// dog.pri() // 不能被实例掉用
// dog.pro()

// 类的继承
class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    // this.pri()  // 子类也不能调用 private, 但是子类中有？
    this.pro();
  }
  // color: string; 构造函数中用修饰符，直接在实例中生成属性
}
// 成员修饰符，默认 public
// public 对所有人可见
// private 只能被类自己调用,不能被实例和子类调用
// protected 只能在类和子类中访问，不能在实例中访问
// readyonly 不可被更改，一定要初始化
// static 类的静态成员, 只能通过类名调用,可以被继承
interface DogInterface extends Dog {}

let husky = new Husky("haha", "white");
console.log("Husky the dog", husky);

// husky.run();
// husky.pri()
//console.log(Husky.food);

// 抽象类
class AbsDog {
  protected constructor(public name: string) {}
}

abstract class Animal {
  eat() {
    console.log("eat");
  }
  abstract sleep(): void;
}

// let animal = new Animal()

class Dogabs extends Animal {
  constructor(public name: string) {
    super();
    this.name = name;
  }
  run() {
    console.log("Just Run!");
  }
  sleep() {
    console.log("Dog Sleep");
  }
}

let absDog = new Dogabs("abstract dog");
console.log(absDog.eat());

// 多态，抽象类中的方法在继承类中有不同的实现
class Cat extends Animal {
  sleep() {
    console.log("Cat sleep");
  }
}

let cat = new Cat();

let animals: Animal[] = [absDog, cat];
animals.forEach((i) => {
  i.sleep();
});

// this, TS 中的特殊，相交于 ES 中的 this
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFlow().step1().step2(); //... 方法的链式调用

class Myflow extends WorkFlow {
  next() {
    return this;
  }
}

new Myflow().next().step1().step2().next();

/*
 * @Author: lhf
 * @Date: 2022-03-02 14:43:15
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\advanced.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 16:59:07
 */

// 基础类型推断
let a;
let b = 12;
let cd = [1];

let fn = (x = 1) => x + 1;

// 最佳通用类型推断
let jo = [1, null];

// 已上都是从右向左推断

// 还有一种，从左向右推断，上下文类型推断
window.onkeydown = (event) => {
  // console.log(event);
};

// 如果你比TS更了解自己地代码，或者不需要帮你推断，可以用类型断言
interface Foo {
  bar: number;
}
// 类型断言有时候会出错，比如遗忘第二句地时候，增加灵活性，避免滥用
// let foo = {} as Foo
// foo.bar = 1

// 所以 best practice 是
let foo: Foo = {
  bar: 12,
};

// 类型兼容性
/* X 兼容 Y：X（目标类型） = Y（源类型） */

let s: string = "a";
// s = null; // 可以说 string 兼容 null

// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };

x = y; // x 比 y 更宽泛，更不具体, duck type,
// y = x  不兼容，y 比 x 更具体，更特殊，不能兼容

// console.log("x?", x); 过了检查，但是不会去除特殊 property

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 1) 参数个数
let handler1 = (a: number) => {};
hof(handler1);

let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...args: number[]) => {};

// 固定参数可兼容可选和剩余参数
//a1 = b1;
//a1 = c1;
// b1 = c1;  在 strictNullChecks true 时 不兼容, false 时兼容
// b1 = a1;

// 剩余参数可兼容固定和可选参数
c1 = a1;
c1 = b1;

// 2) 参数类型, 必须匹配
let handler3 = (a: string) => {};
// hof(handler3)

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};

// p3d = p2d // 兼容, 可以通过 strictNullChecks 修改
// p2d = p3d; // 不兼容 成员个数多的要兼容个数少的, 与接口兼容性正好相反
// 把它当函数参数对待
// 这叫函数参数的双向协变, 允许将精确类型赋值给不精确类型

// 3) 返回值类型
let f1 = () => ({ name: "Alice" });
let g12 = () => ({ name: "Alice", location: "Beijing" });

// f1 = g12
// g12 = f1  // 不兼容 f1 的信息少于 g12

// 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举兼容性
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}

let fruit: Fruit.Apple = 3;
let no: number = Fruit.Apple;
// let color: Color.Red = Fruit.Apple // 不兼容

// 类兼容, 静态成员和构造函数不参与比较
// 如果有 private, 只能是父子类兼容
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  private name = "A";
}

class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  private name = "B";
}

let aaa = new A(1, 3);
let bbb = new B(1);

// aaa = bbb;
// bbb = aaa;

class SubA extends A {}

let suba = new SubA(1, 3);

suba = aaa;
aaa = suba;

// 泛型兼容性
interface Empty<T> { // 只有类型参数 P 被使用时，才影响兼容性
  value: T;
}

// let obj11: Empty<number> = {};
// let obj22: Empty<string> = {};

// obj11 = obj22;

let log11 = <T>(x: T): T => {
  console.log("x");
  return x;
};

let log22 = <U>(x: U): U => {
  console.log("x");
  return x;
};

log11 = log22;

/*
 * @Author: lhf
 * @Date: 2022-03-02 14:43:15
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\advanced.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 15:08:59
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

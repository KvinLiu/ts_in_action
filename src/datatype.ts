/*
 * @Author: lhf
 * @Date: 2022-03-01 17:42:01
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\datatype.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 15:04:00
 */

// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";
// str = 123
// 数组
let arr1: number[] = [1, 2, 3, 4];
let arr2: Array<number | string> = [1, 2, 3, "4"];
// 元组
let tuple: [number, string] = [0, "1"];
// tuple.push(3);
// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;
// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.y = 3;
// Symbol
let s1: Symbol = Symbol();
let s2 = Symbol();
// console.log(s1 === s2);
// undefined, null
let nu: undefined = undefined;
let nul: null = null;
// void
let noReturn = () => {};

// any
let xxx;

// never
let error = () => {
  throw new Error("error");
};

let endless = () => {
  while (true) {}
};

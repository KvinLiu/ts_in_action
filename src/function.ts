/*
 * @Author: lhf
 * @Date: 2022-03-02 10:07:46
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\function.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 10:21:32
 */
// 函数定义
function add1(x: number, y: number) {
  return x + y;
}

let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number;
}

// add1(1,2,3) 函数参数个数有限制

function add5(x: number, y?: number) { // 可选参数必须位于必选参数之后
  return x + Number(y);
}

function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}

add6(1, 2, 3, 4);
add6(1, undefined, 2); // 可必选位必传参

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

console.log("add7", add7(1, 2, 3, 4, 5, 56, 6, 7));

// 函数重载
function add8(...rest: number[]): number; // 重载列表
function add8(...rest: string[]): string; // 重载列表
function add8(...rest: any[]): any { // any[] 包含 number[]， string[]
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}

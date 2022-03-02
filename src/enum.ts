/*
 * @Author: lhf
 * @Date: 2022-03-01 18:03:46
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\enum.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 09:48:26
 */
// 数字枚举
enum Role {
  Reporter = 1, // default 0
  Developer, // +1
  Maintainer, // +1
  Owner,
  Guest,
}
// console.log("Role", Role.Maintainer);
// 数字枚举实现原理,反向映射

// 字符串枚举
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了",
}

// 异构枚举
enum Answer {
  N,
  Y = "Yes",
}

// 枚举成员, 只读类型，不可修改
enum Char {
  // const, 常量枚举成员, compile 计算
  a,
  b = Char.a,
  c = 1 + 3,
  // computed, 需要被计算的成员, runtime 计算
  d = Math.random(),
  e = "123".length,
  f = 1, // computed 后的成员必须赋值
}

// 常量枚举, 特性，会在编译阶段移除
const enum Month {
  Jan,
  Feb,
  Mar,
}

// 枚举类型
enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}
enum G {
  a = "apple",
  b = "banana",
}

let e: E = 3;
let f: F = 3;
// e === f
let e1: E.a = 1;
let e2: E.b;
// e1 === e2
let e3: E.a = 1;
e1 === e3;

let g1: G = G.b;
let g2: G.a = G.a;

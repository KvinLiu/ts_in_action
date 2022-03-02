/*
 * @Author: lhf
 * @Date: 2022-03-02 11:58:16
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\generics.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 14:43:03
 */

// function log(value: any): any {
//   console.log(value);
//   return value;
// }

function log<T>(value: T): T {
  console.log(value);
  return value;
}

// 调用方法1, type anotation
log<string[]>(["1", "2"]);
// 调用方法2，type infer
log([1, 2, 3, 4]);

// 定义泛型函数类型
type Log = <T>(value: T) => T;

let myLog: Log = log;

// 泛型接口
interface LogIF {
  <T>(value: T): T;
}

// 接口所有成员
interface LogIFA<T = string> { // string 指定默认类型
  (value: T): T;
}

let myLogA: LogIFA<number> = log;
let myLogAb: LogIFA = log; // 默认类型

// 泛型类, 不能约束静态成员
class LogC<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new LogC<number>();

// 泛型约束, 这里通过 interface 约束了 T，使其只可以传带length属性的
interface Length {
  length: number;
}
function logys<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

logys([1]);
logys("hello");
logys({ name: "kevin", length: 12 });

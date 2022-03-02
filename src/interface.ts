/*
 * @Author: lhf
 * @Date: 2022-03-02 09:30:55
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\interface.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 10:07:00
 */
// obj
interface List {
  readonly id: number; // 只读属性
  name: string;
  // [x: string]: any;    字符串索引签名, list 可以支持多属性
  age?: number; // ? 可选属性
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
  });
}

let result = {
  data: [
    { id: 1, name: "A", age: 0 },
    { id: 2, name: "B" },
  ],
};
// duck type, 类型断言 as,
// render({
//   data: [
//     { id: 1, name: "A", sex: "male"},
//     { id: 2, name: "B" },
//   ]
// } as Result)
// 类型断言的第二种方式
// render(<Result>{
//   data: [
//     { id: 1, name: "A", sex: "male"},
//     { id: 2, name: "B" },
//   ]
// })

// render(result);

interface StringArray {
  [index: number]: string; //用任意数字索引，返回字符串
}

let chars: StringArray = ["A", "B"];

interface Names {
  [x: string]: string;
  // y: number
  [z: number]: string;
}

let names: Names = { 1: "A", "hello": "B", 2: "C" };

// function interface
let addinterface: (x: number, y: number) => number;

// interface Add {
//   (x: number, y:number): number
// }

type Add = (x: number, y: number) => number; // 类型别名

let addTwo: Add = (a, b) => a + b;

//  混合类型接口, 就是广义的JS函数，函数带property
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

// 工厂方法
function getLib(): Lib {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "123";
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();

let lib2 = getLib();

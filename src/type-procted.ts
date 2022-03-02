/*
 * @Author: lhf
 * @Date: 2022-03-02 17:09:37
 * @Description: 文件描述
 * @FilePath: \ts_in_action\src\type-procted.ts
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-02 17:24:10
 */

// 类型保护机制
enum Type {
  Strong,
  Weak,
}

class Java {
  helloJava() {
    console.log("Hello Java");
  }
  java: any;
}

class JavaScript {
  helloJavaScript() {
    console.log("Hello JavaScript");
  }
  javaScript: any;
}

function getLanguage(type: Type, x: string | number = 1) {
  let lang = type == Type.Strong ? new Java() : new JavaScript();
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava();
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }

  // instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // in
  // if ("java" in lang) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // typeof
  // if (typeof x === "string") {
  //   x.length;
  // } else {
  //   x.toFixed(2);
  // }

  // function
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  return lang;
}

function isJava(lang: Java | JavaScript): lang is Java { // 返回值叫类型谓词
  return (lang as Java).helloJava !== undefined;
}

getLanguage(Type.Strong);

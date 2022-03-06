interface DDogInterface {
  run(): void;
}

interface CCatInterface {
  jump(): void;
}

let pet: DDogInterface & CCatInterface = {
  run() {},
  jump() {},
};

let aaabb: "a" | "b" | "c" = "a";
let baaabb: 1 | 2 | 3 = 1;

interface Square {
  kind: "Square";
  size: number;
}

interface Rectangle {
  kind: "Rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
  switch (s.kind) {
    case "Square":
      return s.size * s.size;
    case "Rectangle":
      return s.width * s.height;
  }
}

let obj1 = {
  a: 2,
  b: 3,
  c: 4,
};

// function getValues(obj: any, keys: string[]) {
//   return keys.map((i) => obj[i]);
// }

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((i) => obj[i]);
}

console.log(getValues(obj1, ["a", "c", "b"]));
console.log(getValues(obj1, ["a"]));

interface Obj23 {
  a: number;
  b: string;
}

let key: keyof Obj23;

interface ObjNotReadOnly {
  a: number;
  b: string;
  c: boolean;
}

type ObjReadOnly = Readonly<ObjNotReadOnly>;
type ObjPartial = Partial<ObjNotReadOnly>;
type ObjPic = Pick<ObjNotReadOnly, "a" | "c">;

type NewTypeRecord = Record<"x" | "z", ObjNotReadOnly>;

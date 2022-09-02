// 1. Viết 1 function kiểm tra value có phải là object hay không ?
// typeof value === "object"
// {} [] null
function isObject(value) {
  if (typeof value === 'object' && !Array.isArray(value) && typeof value !== 'null') {
    return true;
  }
  return false;
}
// {}
// plain object -> true else return false
// console.log(isObject({}));

// 2. {a: 1, b: 2} -> [["a", 1], ["b", 2]]
// v1
function objectToArray(object) {
  // check nếu không phải object thì dừng
  if (!isObject(object)) return;

  return Object.entries(object);
}
console.log(objectToArray({ long: true, hải: false }));

//v2
function objectToArray1(object) {
  // if (!isObject(object)) return;

  const value = Object.keys(object); // ['long','hai']
  const result = value.map((x) => [x, object[x]]);

  return result;
}
console.log(objectToArray1({ long: true, hải: false }));

//v3
function objectToArray1(object) {
  // if (!isObject(object)) return;
  let result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(objectToArray1({ long: true, hải: false }));

// without
// 3. ({ a: 1, b: 2 }, 'b') => { a: 1 }
// rest parameter
function without(object, ...key) {
  console.log(key);
  const objNew = { ...object };
  key.forEach((item) => {
    delete objNew[item];
  });

  return objNew;
}
console.log(without({ a: 1, b: 2 }, 'b'));

// 4. { a: 1, b: 2 }, { a: 1, b: 2 } -> true
// 4. { a: 1, b: 2 }, { a: 1, b: 2, c: 3 } -> false
function isEqualObject(obj1, obj2) {
  // so sánh số lượng keys
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);

  if (objkey1.length !== objkey2.length) return false;
  // so sánh giá trị hai object
  // ['a', 'b'] -> objkey1
  // ['c', 'b'] -> objkey2
  const result = objkey1.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1, b: 2 }, { c: 1, b: 2 }));


function isEqualObject(obj1, obj2) {
  // so sánh số lượng keys
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);

  if (objkey1.length !== objkey2.length) return false;
  // so sánh giá trị hai object
  // ['a', 'b'] -> objkey1
  // ['c', 'b'] -> objkey2
  const result = objkey2.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1, b: 2 }, { c: 1, b: 2 }));
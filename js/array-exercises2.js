// 1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
const array = [1, 1000, false, null, 'evondev', '', undefined, 'javascript', [1, 2, 3], NaN];
// new Boolean
// Boolean
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);

// 1.1. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ['javascript']],
  [888, 666, [90]],
];
//flat(number)
const result = complexArray.flat(2);
console.log(result);

// 2. Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number) {
  if (typeof number !== 'number') return null;
  // convert to String
  // split('')-> [value]
  // reverse()
  // join('')
  const value = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);
reverseNumber(1234);

// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz".

function fizzBuzz(number) {
  if (typeof number !== 'number') return null;
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Buzz');
    } else if (i % 2 === 0) {
      console.log('Fizz');
    }
  }
}
console.log(fizzBuzz(10));

// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi.
// vowels là các kí tự u e o a i
// Ví dụ "evondev" -> 3
function countVowels(string) {
  let count = 0;
  const characters = 'ueoai';
  for (let c of string.toLowerCase()) {
    if (characters.includes(c)) count += 1;
  }
  return count;
}
console.log(countVowels('evondev'));

// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,7,6];
function uniqueFn(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
}
console.log(uniqueFn([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));

// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào.
// Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
// ([1,2,3,4,5,6], 3) -> [[1,2,3], [4,5,6]]
function splitArray(array, number) {
  let result = []; // tạo mảng empty để lưu kết quả
  let index = 0; // init index = 0 để chạy vòng lặp while, lưu ý khai báo let vì sau mỗi vòng lặp sẽ tăng index lên

  while (index < array.length) {
    const sliceArray = array.slice(index, index + number);
    const resultPush = result.push(sliceArray);
    index = index + number;
  }

  return result;
}
console.log(splitArray([1, 2, 3, 4, 5, 6], 2));

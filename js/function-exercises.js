// 1.Viết function(hàm) so sánh 2 số a,b tìm ra số lớn hơn
function compare(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== ' number') {
    console.log('please enter a valid number');
  }
  return Math.max(a, b);
}
// console.log(compare(10, '5'));
// console.log(compare('hello'));

// 2.In hoa chữ cái đầu trong chữ , ví dụ : long -> Long
function capitalLetterFirst(word = '') {
  if (word.length === 0) return null;
  // convert to lower case
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  // chaArt(index)
  // slice(startIndex, endIndex -1)
  let otherWord = word.toLowerCase().slice(1);

  return `${newWord}${otherWord}`;
}
// console.log(capitalLetterFirst('long'));

// 3.Viết hàm có sử dụng callback ( function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}

function printMax(number) {
  console.log(`Max number is: ${number}`);
}
console.log(useCallback(500, 1000, printMax));

// callback F8
function myFunction(thamSo) {
  thamSo('Học Lập Trình');
}

function myCallBack(value) {
  console.log('Value:', value);
}

myFunction(myCallBack);

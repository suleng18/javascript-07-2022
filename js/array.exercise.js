// // 1. Đảo ngược một chuỗi. Ví dụ: "Xuan Long" -> "Long Xuan";
function reverseString(str) {
  if (typeof str !== 'string') return null;

  const reverseStr = str.split(' ');
  return reverseStr.reverse(reverseStr).join(' ');
}
console.log(reverseString('Xuan Long'));

// 2. Đảo ngược một chuỗi bao gôm các kí tự. Ví dụ: "Xuan Long" -> "gnoL nauX"
function reverseWord(str) {
  if (typeof str !== 'string') return null;

  const arrStr = str.split('').reverse().join('');

  return arrStr;
}
console.log(reverseWord('chiều nay em có đi làm không'));

// 3. In hoa chữ cái đầu trong chuỗi ví dụ: "my name is Suleng" -> "My Name Is Suleng"

function capitalLetterFirst(word = '') {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);

  return `${newWord}${otherWord}`;
}

function captitalizeStr(str) {
  if (!str) return null;

  const result = str
    .split(' ')
    .map((element) => capitalLetterFirst(element))
    .join(' ');
  return result;
}
console.log(captitalizeStr('my name is Suleng'));

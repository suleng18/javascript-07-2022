// addEventListener
const button = document.querySelector('.button');
const span = document.querySelector('.button span');
function handleClick() {
  console.log('click button');
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener('click', handleClick());
// Đúng
// button.addEventListener('click', handleClick, {
//   // capture: true,
// });

// span.addEventListener('click', function (e) {
//   // e.stopPropagation();
//   e.stopImmediatePropagation();
//   console.log('click span');
// });

// span.addEventListener('click', function (e) {
//   e.stopPropagation();
//   console.log('click span 2');
// });
// document.body.addEventListener('click', function () {
//   console.log('click body');
// });
// bubbling : nổi bọt
// sự kiện click chạy từ trong ra ngoài
// target vs currentTarget
button.addEventListener('click', function (event) {
  // event.target : nó sẽ chọn chính xác element mà mình click tới
  console.log(`event.target: ${event.target}`);
  // event.targetCurrent : nó sẽ chọn phần tử mà mình click
  console.log(`event.currentTarget: ${event.currentTarget}`);
});

// event.preventDefault() - ngăn chặn hành vi mặc định của tag
const link = document.querySelector('.link');

link.addEventListener('click', function (e) {
  e.preventDefault();
  const name = e.target.dataset.gitHub;
  console.log(name);
  // console.log('click link');
  // console.log(e.target);
  // console.log(e.target.style);
  // e.target.style.color = 'red';
});

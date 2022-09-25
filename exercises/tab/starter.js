const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

[...tabItems].forEach((item) => item.addEventListener('click', handleTabClick));
function handleTabClick(event) {
  [...tabItems].forEach((item) => item.classList.remove('active')); // xóa hết tất cả class active ở các tab-item
  event.target.classList.add('active'); // sau đó add class active vào các tab hiện tại
  const tabNumber = event.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('data-tab') === tabNumber) {
      item.classList.add('active');
    }
  });
}

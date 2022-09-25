const button = document.querySelector('.button');
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener('click', function () {
  document.body.insertAdjacentHTML('beforeend', template);
});

document.body.addEventListener('click', function (event) {
  // console.log(event.target);
  if (event.target.matches('.modal-close')) {
    const modal = event.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (event.target.matches('.modal')) {
    event.target.parentNode.removeChild(event.target);
  }
});
// const modalClose = document.querySelector('.modal-close');
// modalClose.addEventListener('click', handleCloseModal);

// function handleCloseModal(event) {
//   console.log(event.target);
// }

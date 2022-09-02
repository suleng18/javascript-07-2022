// const template = `<div class="modal">
//   <div class="modal-content">
//     <i class="fa fa-times modal-close"></i>
//     <div class="modal-desc">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit repellendus earum,
//       error eveniet dignissimos numquam placeat, quibusdam nihil magnam praesentium sint repudiandae
//       iste? Nemo officia assumenda quis nisi a.
//     </div>
//     <div class="modal-action">
//       <button class="modal-submit">Confirm</button>
//       <button class="modal-cancel">Cancel</button>
//     </div>
//   </div>
// </div>`;

// const body = document.body;
// body.insertAdjacentHTML('afterbegin', template);

const body = document.body;

const modal = document.createElement('div');
modal.classList.add('modal');
console.log(modal);
body.appendChild(modal);

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);

const modalClose = document.createElement('i');
modalClose.className = 'fa fa-times modal-close';
modalContent.appendChild(modalClose);

const modalDesc = document.createElement('div');
modalDesc.classList.add('modal-desc');
modalDesc.textContent =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi error, vitae exercitationem iusto atque sed numquam qui accusantium accusamus necessitatibus. Aspernatur molestiae sequi mollitia, iusto laboriosam harum assumenda at.';
modalContent.appendChild(modalDesc);

const modalAction = document.createElement('div');
modalAction.classList.add('modal-action');
modalContent.appendChild(modalAction);

const modalSubmit = document.createElement('button');
modalSubmit.classList.add('modal-submit');
modalSubmit.textContent = 'Comfirm';
modalAction.appendChild(modalSubmit);

const modalCancel = document.createElement('button');
modalCancel.classList.add('modal-cancel');
modalCancel.textContent = 'Cancel';
modalAction.appendChild(modalCancel);

const modalSelector = document.querySelector('.modal');
if (modalSelector) {
  setTimeout(() => modalSelector.classList.add('is-show'), 2000);
}

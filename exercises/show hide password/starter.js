window.addEventListener('load', function (e) {
  const togglePassword = document.querySelector('.toggle');

  togglePassword.addEventListener('click', function (e) {
    const input = this.previousElementSibling;
    console.log(input);
    const inputType = input.getAttribute('type');
    if (inputType === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
});

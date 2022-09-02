const button = document.querySelector('.change');
button.addEventListener('click', handleChangeColor);
const colors = ['#ffa400', '#00aefd', '#01aefd', '#ffb86c'];

function handleChangeColor() {
  // document.body.setAttribute('style', 'background-color:red');
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}

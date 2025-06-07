function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  if (button) {
    button.addEventListener('click', () => {
      text.hidden = !text.hidden;
    });
  }
}

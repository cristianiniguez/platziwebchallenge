const $switch = document.getElementById('switch');

$switch.addEventListener('click', () => {
  document.querySelector(':root').classList.toggle('dark');
  $switch.classList.toggle('active');
});

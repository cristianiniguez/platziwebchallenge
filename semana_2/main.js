const $shareBtn = document.getElementById('share-btn')
const $shareSection = document.getElementById('share-section')

$shareBtn.addEventListener('click', () => {
  $shareSection.classList.toggle('article__share--active')
})
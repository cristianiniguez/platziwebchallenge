const $image = document.getElementById('slide-img')
const $testimony = document.getElementById('slide-testimony')
const $author = document.getElementById('slide-author')
const $profession = document.getElementById('slide-profession')

const $btnPrev = document.getElementById('btn-previous')
const $btnNext = document.getElementById('btn-next')

let currentSlide = 0

const SLIDES = [
  {
    imgSrc: 'images/image-tanya.jpg',
    imgAlt: 'tanya',
    testimony: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    author: 'Tanya Sinclair',
    profession: 'UX Engineer'
  },
  {
    imgSrc: 'images/image-john.jpg',
    imgAlt: 'john',
    testimony: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    author: 'John Tarkpor',
    profession: 'Junior Front-end Developer'
  }
]

function nextSlide() {
  if (SLIDES[currentSlide + 1]) {
    currentSlide++
    renderSlide(currentSlide)
  }
}

function previousSlide() {
  if (SLIDES[currentSlide - 1]) {
    currentSlide--
    renderSlide(currentSlide)
  }
}

function renderSlide(n) {
  const slide = SLIDES[n]
  $image.src = slide.imgSrc
  $image.alt = slide.imgAlt
  $testimony.innerText = slide.testimony
  $author.innerText = slide.author
  $profession.innerText = slide.profession
}

window.addEventListener('load', () => {
  currentSlide = 0
  renderSlide(currentSlide)
})

$btnPrev.addEventListener('click', previousSlide)
$btnNext.addEventListener('click', nextSlide)

window.addEventListener('keyup', e => {
  const key = e.key
  if (key === 'ArrowRight') {
    nextSlide()
  } else if (key === 'ArrowLeft') {
    previousSlide()
  }
})
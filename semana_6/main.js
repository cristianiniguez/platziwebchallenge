// Global variables
const HERO_IMAGES = [
  {
    mobileImg: 'images/mobile-image-hero-1.jpg',
    desktopImg: 'images/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    content: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    mobileImg: 'images/mobile-image-hero-2.jpg',
    desktopImg: 'images/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    mobileImg: 'images/mobile-image-hero-3.jpg',
    desktopImg: 'images/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    content: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
]
let currentHeroImg = 0

const NAV_MENU_BTN_IMG = [
  'images/icon-hamburger.svg',
  'images/icon-close.svg'
]
let currentNavMenuBtnImg = 0

// Elements
const $header = document.querySelector('header')
const $navMenuBtn = document.getElementById('nav-menu-btn')

const $heroImg = document.getElementById('hero-img')
const $heroTitle = document.getElementById('hero-title')
const $heroContent = document.getElementById('hero-content')

const $heroPrevBtn = document.getElementById('hero-prev-btn')
const $heroNextBtn = document.getElementById('hero-next-btn')

// Functions
function setHeroImage(n) {
  if (HERO_IMAGES[n]) {
    currentHeroImg = n
    const heroImg = HERO_IMAGES[currentHeroImg]
    $heroImg.src = heroImg.mobileImg
    $heroTitle.innerText = heroImg.title
    $heroContent.innerText = heroImg.content
  }
}

// Events
$navMenuBtn.addEventListener('click', () => {
  $header.classList.toggle('menu--shown')
  if (NAV_MENU_BTN_IMG[currentNavMenuBtnImg + 1]) {
    currentNavMenuBtnImg++
  } else {
    currentNavMenuBtnImg--
  }
  $navMenuBtn.src = NAV_MENU_BTN_IMG[currentNavMenuBtnImg]
})

$heroPrevBtn.addEventListener('click', () => {
  setHeroImage(currentHeroImg - 1)
})
$heroNextBtn.addEventListener('click', () => {
  setHeroImage(currentHeroImg + 1)
})

window.addEventListener('load', () => {
  setHeroImage(0)
})
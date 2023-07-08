import './scss/main.scss'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
document.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  let contentTopWrapper = document.querySelector('.content_top_wrapper')
  if (window.scrollY === 0) {
    header.classList.remove('blured')
    contentTopWrapper.classList.remove('border-top')
  }
  if (window.scrollY > 0) {
    header.classList.add('blured')
    contentTopWrapper.classList.add('border-top')
  }
})
const whyCarousel = $('#why-carousel')
whyCarousel.owlCarousel({
  items: 3,
  pagination: false,
  dots: false,
  loop: true,
  // margin: 48,
  responsive: {
    0: {
      margin: 25,
    },
    1025: {
      margin: 37,
    },
    1441: {
      margin: 48,
    },
  },
})

const nextBtnWhy = $('.why_carousel_btn_next')
const prevBtnWhy = $('.why_carousel_btn_prev')
nextBtnWhy.click(function () {
  whyCarousel.trigger('next.owl.carousel', [600])
})

prevBtnWhy.click(function () {
  whyCarousel.trigger('prev.owl.carousel', [600])
})
const howCarousel = $('#how-carousel')
howCarousel.owlCarousel({
  items: 1,
  pagination: false,
  loop: true,
  smartSpeed: 1000,
  // margin: 40,
  dots: true,
  responsive: {
    0: {
      margin: 30,
    },
    1440: {
      margin: 40,
    },
  },
})

const nextBtnHow = $('.how_carousel_btn_next')
const prevBtnHow = $('.how_carousel_btn_prev')
nextBtnHow.click(function () {
  howCarousel.trigger('next.owl.carousel', [600])
})

prevBtnHow.click(function () {
  howCarousel.trigger('prev.owl.carousel', [600])
})

const speakersCarousel = $('#speakers-carousel')
speakersCarousel.owlCarousel({
  items: 3,
  pagination: false,
  loop: true,
  // margin: 42,
  responsive: {
    0: {
      margin: 32,
    },
    1440: {
      margin: 42,
    },
  },
})

const nextBtnSpeakers = $('.speakers_carousel_btn_next')
const prevBtnSpeakers = $('.speakers_carousel_btn_prev')
nextBtnSpeakers.click(function () {
  console.log('hello!')
  speakersCarousel.trigger('next.owl.carousel', [600])
})

prevBtnSpeakers.click(function () {
  speakersCarousel.trigger('prev.owl.carousel', [600])
})

const dynamicImages = Array.from(document.querySelectorAll('.dynamic_images'))

const dynamicSrcArray = dynamicImages.map(img => {
  return img.src
})

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

const getRandomInterval = () => {
  return Math.random() * 2 + 6
}

const getRandomIndex = () => {
  return Math.floor(Math.random() * 9)
}

const imagesWithIntervals = dynamicImages.map(img => {
  return {
    img: img,
    interval: getRandomInterval(),
  }
})

shuffle(dynamicImages)

dynamicImages.forEach((img, index) => {
  setTimeout(() => {
    img.classList.add('blur_animated')
    setTimeout(() => {
      img.classList.remove('blur_animated')
    }, 3000)
  }, index * 750)
})

imagesWithIntervals.forEach((item, index) => {
  setTimeout(() => {
    setInterval(() => {
      item.img.src = dynamicSrcArray[getRandomIndex()]
      item.img.classList.add('blur_animated')
      setTimeout(() => {
        item.img.classList.remove('blur_animated')
      }, 3000)
    }, item.interval * 1000)
  }, Math.random() * 4 * 1000)
})

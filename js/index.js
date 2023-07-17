const swiper = new Swiper('.about__swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
});

var teamSwiper = new Swiper(".team__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
});

document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.header__menu').classList.toggle('header__menu--active')
  document.querySelector('.header__burger').classList.toggle('header__burger--active')
  document.querySelector('body').classList.toggle('menuBG--active')
})


let res = document.querySelector('.form__item--res')

document.querySelector('.form__item--increment').addEventListener('click', () =>{
  let value = Number(res.innerHTML)
  if (value > 100){
    return
  }
  res.innerHTML = value + 1
})

document.querySelector('.form__item--decrement').addEventListener('click', () =>{
  let value = Number(res.innerHTML)
  if (value > 100){
    return
  }
  res.innerHTML = value - 1
})
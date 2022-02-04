var swiper = new Swiper(".header__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
      },
  });


var iso = new Isotope( '.gallery__body', {
    itemSelector: '.gallery__body--item',
    percentPosition: true,
  });

document.querySelectorAll(".galery__filter--btn").forEach(el => {
    el.addEventListener("click", (e) =>{
        e.preventDefault();
        let filter = e.currentTarget.dataset.filter;
        iso.arrange({ filter: `${filter}` });

        document.querySelectorAll(".galery__filter--btn").forEach(el => {
            el.classList.remove("galery__filter--btn--active")
        });
        e.target.classList.add("galery__filter--btn--active");
    })
})


const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click' , function(e){
  e.preventDefault();
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');

  if (burger.classList.contains('active')) {
    document.querySelector('.btn-search').classList.add('lock')
    document.querySelector('.input-search').classList.add('lock')

    window.onscroll = function(){
      burger.classList.remove('active');
      headerMenu.classList.remove('active');
    };
  } else {
    document.querySelector('.btn-search').classList.remove('lock')
    document.querySelector('.input-search').classList.remove('lock')
  }
})


const galleryCatecoriesBtn = document.querySelector('.gallety__filter--categories');
const galleryCatecoriesLists = document.querySelector('.gallery__filter--lists');
const galleryCatecoriesFilter = document.querySelectorAll(".galery__filter--btn");

galleryCatecoriesBtn.addEventListener('click' , function(e){
  e.preventDefault();
  galleryCatecoriesLists.classList.toggle('active')
  galleryCatecoriesBtn.classList.toggle('active')
})

window.addEventListener('click', function(e){
  if (galleryCatecoriesLists.classList.contains('active')) {
    const target = e.target;
    if ( !target.closest('.gallety__filter--categories') || target.closest('.gallery__filter--lists') || target.closest('.gallery__filter--list') || target.closest('.galery__filter--btn') ) {
      galleryCatecoriesLists.classList.remove('active')
      galleryCatecoriesBtn.classList.remove('active')
    }
  }
})

galleryCatecoriesFilter.forEach(el => {
  el.addEventListener("click", (e) =>{
      e.preventDefault();
      let filter = e.currentTarget.dataset.filter;
      iso.arrange({ filter: `${filter}` });

      galleryCatecoriesFilter.forEach(el => {
          el.classList.remove("galery__filter--btn--active")
      });
      e.target.classList.add("galery__filter--btn--active");

      if (el.classList.contains('galery__filter--btn--active')) {
        galleryCatecoriesBtn.innerHTML = el.textContent
      }    
  })
  if (el.classList.contains('galery__filter--btn--active')) {
        galleryCatecoriesBtn.innerHTML = el.textContent
      }
})










setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
  });
}, 300);

//header style change when scrolling down
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
  const scrollPosition = this.window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

const instaImg = document.querySelector('#h').scrollHeight; //아이디 h요소의 높이
document.querySelector('#fh').style.height = instaImg + 'px';
window.addEventListener('resize', function () {
  const instaImg = document.querySelector('#h').scrollHeight; //아이디 h요소의 높이
  document.querySelector('#fh').style.height = instaImg + 'px';
});

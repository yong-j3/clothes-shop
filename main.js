// ==========================
// スライドショー設定
// ==========================
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add("active");
}

// 3秒ごとにスライドを切り替える
setInterval(showNextSlide, 3000);


// ==========================
// ハンバーガーメニュー
// ==========================
$(function(){
  $('.hamburger').on('click', function(){
    $('#navi').toggleClass('open');
    $(this).toggleClass('active');
  });
});

// ==========================
// スクロールでハンバーガーとロゴの色を切り替え
// ==========================
window.addEventListener('scroll', () => {
  const hamburger = document.querySelector('.hamburger');
  const logo = document.querySelector('#logo');
  const slideshow = document.querySelector('.slideshow-container');
  const slideshowBottom = slideshow.offsetHeight;

  if (window.scrollY > slideshowBottom - 80) {
    hamburger.classList.add('black');
    logo.classList.add('black');
  } else {
    hamburger.classList.remove('black');
    logo.classList.remove('black');
  }
});

// ==========================
// スクロール時のフェードイン
// ==========================
$(window).on('scroll', function() {
  const scrollPos = $(window).scrollTop();
  const windowHeight = $(window).height();

  $('.section-title, .information-content, .access-content').each(function() {
    const elemTop = $(this).offset().top;

    if (scrollPos + windowHeight - 100 > elemTop && !$(this).hasClass('visible')) {
      $(this).addClass('visible');
    }
  });
});


// ==========================
// INFORMATION hover効果（iPad対応）
// ==========================
$(function() {
  const infoItems = $('.information-content li');

  // マウス・トラックパッド用
  infoItems.on('mouseenter', function() {
    $(this).addClass('hover');
  }).on('mouseleave', function() {
    $(this).removeClass('hover');
  });

  // タップ対応（iPadでもhover表現を再現）
  infoItems.on('touchstart', function() {
    const $this = $(this);
    infoItems.not($this).removeClass('hover');
    $this.toggleClass('hover');
  });
});


// ==========================
// GALLERY スクロールアニメーション
// ==========================
const galleryImages = document.querySelectorAll('.gallery-img');

const galleryObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 一度表示されたら監視を解除
    }
  });
}, { threshold: 0.1 });

galleryImages.forEach(img => galleryObserver.observe(img));


// ==========================
// INFORMATIONのスクロール出現アニメーション
// ==========================
const infoItems = document.querySelectorAll('.information-content li');

const infoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

infoItems.forEach(item => infoObserver.observe(item));

// ==========================
// スクロールでヘッダー・ロゴ色を滑らかに切り替え
// ==========================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const logo = document.querySelector('#logo');
  const slideshow = document.querySelector('.slideshow-container');
  const slideshowBottom = slideshow.offsetHeight;

  if (window.scrollY > slideshowBottom - 80) {
    header.classList.add('scrolled');
    hamburger.classList.add('black');
    logo.classList.add('black');
  } else {
    header.classList.remove('scrolled');
    hamburger.classList.remove('black');
    logo.classList.remove('black');
  }
});
'use scrict';
//header
const header = document.querySelector('header')
const SHopBox = document.querySelector('.shop-box')
const BlogBox = document.querySelector('.blog-box')
const GalleryBox = document.querySelector('.gallery-box')
const AbautUs = document.querySelector('.lacation-box')
const ExploreMore =document.getElementById('ExploreMore')
// navbar
const nav = document.querySelector('.navbar');



//sidebar 
const Section1 = document.getElementById('section-1')
const Section2 = document.getElementById('section-2')
const Section3 = document.getElementById('section-3')
const Section4 = document.getElementById('section-4')
const Section5 = document.getElementById('section-5')
const Section6 = document.getElementById('section-6')

const modalLogn = document.querySelector('.logn')
const modalSearch = document.querySelector('.modal-search')
const modalShare = document.querySelector('.modal-share-list')
const modalCart = document.querySelector('.modal-cart');
const btnsOpenModal = document.querySelectorAll('.open_btn');
const btnCloseModalSearch = document.getElementById('close_search')
const btnCloseModalShare = document.getElementById('close_share')
const btnCloseModalCart = document.getElementById('close_cart')
const btnCloseModalLogn  = document.getElementById('close_logn')
const backdrop = document.querySelector('.overlay');
//zoom button 
const modalZoom1 = document.querySelector(".zoomSofa-1")
const modalZoom2 = document.querySelector(".zoomSofa-2")
const modalZoom3 = document.querySelector(".zoomSofa-3")
const modalZoom4 = document.querySelector(".zoomSofa-4")
const modalZoom5 = document.querySelector(".zoomSofa-5")
const modalZoom6 = document.querySelector(".zoomSofa-6")

// Scroll up
const scrollToUp = document.querySelector('.scroll-up');

////////////////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  const parentEl = this.closest('.btnOpenModls');
  if (parentEl.getAttribute('id') === 'search')
    modalSearch.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'logn-li')
    modalLogn.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'share')
    modalShare.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'Cart')
    modalCart.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'zoom-1')
    modalZoom1.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'zoom-2')
    modalZoom2.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'zoom-3')
    modalZoom3.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'zoom-4')
    modalZoom4.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'zoom-5')
    modalZoom5.classList.remove('hidden');
  if (parentEl.getAttribute('id') === 'zoom-6')
    modalZoom6.classList.remove('hidden');
    backdrop.classList.remove('hidden');
};

const openModalSearch = function () {
  modalSearch.classList.remove('hidden');
  backdrop.classList.remove('hidden');

};

const closeModal = function (e) {
    // e.preventDefault();
    modalLogn.classList.add('hidden');
    modalSearch.classList.add('hidden');
    modalShare.classList.add('hidden');
    modalCart.classList.add('hidden');
    modalZoom1.classList.add('hidden');
    modalZoom2.classList.add('hidden');
    modalZoom3.classList.add('hidden');
    modalZoom4.classList.add('hidden');
    modalZoom5.classList.add('hidden');
    modalZoom6.classList.add('hidden');

    backdrop.classList.add('hidden');

    
  };

// open modal
  btnsOpenModal.forEach((btnOpenModal) =>
  btnOpenModal.addEventListener('click', openModal)
);

// close Modal
   btnCloseModalLogn.addEventListener('click', closeModal);
   btnCloseModalSearch.addEventListener('click', closeModal);
   btnCloseModalShare.addEventListener('click', closeModal);
   btnCloseModalCart.addEventListener('click', closeModal);

   backdrop.addEventListener('click', closeModal);



document.addEventListener('keydown', function (e) {
  if (e.keyCode === 90 && e.ctrlKey) {
    openModalSearch();
  }
  if (e.key === 'Escape' && !modalLogn.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalSearch.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalCart.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalShare.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalZoom1.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalZoom2.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalZoom3.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalZoom4.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalZoom5.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Escape' && !modalZoom6.classList.contains('hidden')) {
    closeModal();
  }
});


// sidebar  
Section1.addEventListener('click', function () {
  header.scrollIntoView({ behavior: 'smooth' });
});
Section2.addEventListener('click', function () {
  SHopBox.scrollIntoView({ behavior: 'smooth' });
});
Section3.addEventListener('click', function () {
  BlogBox.scrollIntoView({ behavior: 'smooth' });
});
Section4.addEventListener('click', function () {
  GalleryBox.scrollIntoView({ behavior: 'smooth' });
});
Section5.addEventListener('click', function () {
  AbautUs.scrollIntoView({ behavior: 'smooth' });
});

// button section
ExploreMore.addEventListener('click', function () {
  BlogBox.scrollIntoView({ behavior: 'smooth' });
});




//Image replacement like
function swapImages1(){
  var get = document.getElementById('getImage1');
 if (get.src.match("images/svg/icons-shop/like.svg")){
   get.src = "images/lazy-icon/like.png";
  }
 else{
   get.src = "images/svg/icons-shop/like.svg";
  }
};

function swapImages2(){
  var get = document.getElementById('getImage2');
 if (get.src.match("images/svg/icons-shop/like.svg")){
   get.src = "images/lazy-icon/like.png";
  }
 else{
   get.src = "images/svg/icons-shop/like.svg";
  }
};
function swapImages3(){
  var get = document.getElementById('getImage3');
 if (get.src.match("images/svg/icons-shop/like.svg")){
   get.src = "images/lazy-icon/like.png";
  }
 else{
   get.src = "images/svg/icons-shop/like.svg";
  }
};
function swapImages4(){
  var get = document.getElementById('getImage4');
 if (get.src.match("images/svg/icons-shop/like.svg")){
   get.src = "images/lazy-icon/like.png";
  }
 else{
   get.src = "images/svg/icons-shop/like.svg";
  }
};
function swapImages5(){
  var get = document.getElementById('getImage5');
 if (get.src.match("images/svg/icons-shop/like.svg")){
   get.src = "images/lazy-icon/like.png";
  }
 else{
   get.src = "images/svg/icons-shop/like.svg";
  }
};
function swapImages6(){
  var get = document.getElementById('getImage6');
 if (get.src.match("images/svg/icons-shop/like.svg")){
   get.src = "images/lazy-icon/like.png";
  }
 else{
   get.src = "images/svg/icons-shop/like.svg";
  }
};

// slider blog-box
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


// navbar
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight + 10}px`,
});

headerObserver.observe(header);


//reveal section
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


// lazi img
const collectImages = document.querySelectorAll('.collection');

const collectImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('lazy-img');
  observer.unobserve(entry.target);
};

const collectImgObserver = new IntersectionObserver(collectImg, {
  root: null,
  threshold: 0.6,
});

collectImages.forEach((collect) => collectImgObserver.observe(collect));
// copy-btn 
function copyText() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("Matn nusxalandi: " + copyText.value);
}
//scrol up
window.addEventListener('scroll', function () {
  window.pageYOffset >= 270
    ? scrollToUp.classList.remove('scroll-up--hidden')
    : scrollToUp.classList.add('scroll-up--hidden');
});

scrollToUp.addEventListener('click', function () {
  header.scrollIntoView({ behavior: 'smooth' });
});

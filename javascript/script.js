
// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// When Hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle('active');
};

// toogle class active untuk search form
const searchForm = document.querySelector ('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick =(e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};  

// toogle clas active untuk shopping cart button
const shoopingCart = document.querySelector ('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoopingCart.classList.toggle('active');
  e.preventDefault()
};




// click diluar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoopingCart.contains(e.target)) {
    shoopingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display ='flex';
    e.preventDefault();
  };

});



// when klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();

};

// when klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal){
    itemDetailModal.style.display = 'none';
  }
};
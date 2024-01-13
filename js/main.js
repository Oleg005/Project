const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open)
})
function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
};

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

document.addEventListener("DOMContentLoaded", function() {
  const carForm = document.getElementById("soldCarForm");
  const successMessage = document.getElementById("successMessage");
  soldCarForm.addEventListener("submit", function(event) {
    event.preventDefault();
    carForm.reset();

    successMessage.style.display = "block";
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 3000);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const modall = document.getElementById("myModall");
  const carModellElement = document.getElementById("carModell");

  function openForm(modell) {
      carModellElement.textContent = `Ви обрали: ${modell}`;
      modall.style.display = "block";
  }

  function closeForm() {
      modall.style.display = "none";
  }

  function submitForm() {
      const form = document.getElementById("carForm2");
      const formData = new FormData(form);

      formData.forEach(function(value, key) {
          console.log(`${key}: ${value}`);
      });

      closeForm(); 
  }

  window.openForm = openForm;
  window.closeForm = closeForm;
  window.submitForm = submitForm;
});


const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});


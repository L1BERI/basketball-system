(function () {
  const tournamentSwiper = new Swiper(".tournament__swiper", {
    slidesPerView: 0.7,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      1162: {
        slidesPerView: 2.3,
      },
      1042: {
        slidesPerView: 2,
      },
      908: {
        slidesPerView: 1.7,
      },
      772: {
        slidesPerView: 1.4,
      },
      638: {
        slidesPerView: 1.1,
      },
    },
  });

  function typeWriter(element, textArray, speed) {
    if (textArray.length > 0) {
      let text = textArray[0];
      let i = 0;
      let interval = setInterval(function () {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          eraseText(element, text.length, speed, function () {
            textArray.push(textArray.shift()); // Перемещаем первый элемент в конец массива

            setTimeout(function () {
              setTimeout(function () {
                typeWriter(element, textArray, speed);
              }, 1000); // Задержка в 1 секунду между печатанием текстов
            }, 1000); // Мигание курсора каждые 0.5 секунды
          });
        }
      }, speed);
    }
  }

  function eraseText(element, length, speed, callback) {
    let i = 0;
    let interval = setInterval(function () {
      if (i < length) {
        element.innerHTML = element.innerHTML.slice(0, -1);
        i++;
      } else {
        clearInterval(interval);
        callback();
      }
    }, speed / length);
  }

  const element = document.getElementById("typing");
  const textArray = ["slpro", "dk", "bfl"];
  typeWriter(element, textArray, 500);

  const tourlinkSwiper = new Swiper(".tourlink__swiper", {
    effect: "cards",

    cardsEffect: {
      slideShadows: false,
      perSlideOffset: 20,
      perSlideRotate: 0,
    },
  });
  const switcherImages = document.getElementById("image-switcher");
  const imagesBox = document.getElementById("tourlink-images-box");
  switcherImages.addEventListener("change", function () {
    if (switcherImages.checked) {
      tourlinkSwiper.slideNext();
    } else {
      tourlinkSwiper.slidePrev();
    }
  });

  const advSwiper = new Swiper(".adv__swiper", {
    grabCursor: true,
    effect: "creative",
    speed: 1000,
    navigation: {
      nextEl: ".button-next-adv",
      prevEl: ".button-prev-adv",
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
    simulateTouch: false,
    parallax: true,
    on: {
        slideChange: function () {
          const prevButton = document.querySelector('.button-prev-adv');
          const nextButton = document.querySelector('.button-next-adv');
            const paginationBtns = document.querySelector('.swiper-pagination')
          if (this.activeIndex % 2 !== 0) {
            prevButton.classList.add('white');
            nextButton.classList.add('white');
            paginationBtns.classList.add('white')
        } else {
            prevButton.classList.remove('white');
            nextButton.classList.remove('white');
            paginationBtns.classList.remove('white')
          }
        },
      },
  });

//   nextArrow.addEventListener("click", function (e) {
//     if (!nextArrow.classList.contains("swiper-button-disabled")) {
//       nextArrow.classList.toggle("next-arrow--color");
//       prevArrow.classList.toggle("prev-arrow--color");
//     } else {
//       prevArrow.classList.remove("prev-arrow--color");
//       nextArrow.classList.remove("next-arrow--color");
//     }
//   });
//   prevArrow.addEventListener("click", function (e) {
//     if (!prevArrow.classList.contains("swiper-button-disabled")) {
//       prevArrow.classList.toggle("prev-arrow--color");
//       nextArrow.classList.toggle("next-arrow--color");
//     } else {
//       nextArrow.classList.remove("next-arrow--color");
//       prevArrow.classList.remove("prev-arrow--color");
//     }
//   });
})();

// Створити галерею зображень, яку можна прогортати за 
// допомогою клавіш клавіатури (наприклад, вліво / вправо)                       
// 

const galleryEl = document.querySelectorAll('.image');
const imgContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
console.dir(galleryEl);
let currentIndex = 0;
galleryEl.forEach((img, index) => {
console.log(img);
 img.addEventListener("click", () => {
console.log(index);
currentIndex = index;
fullScreenImg(currentIndex);
})
})

function fullScreenImg (index) {
    fullImage.src = galleryEl[index].src;
    imgContainer.style.display = "block";
}

function closeFullScreen() {
    imgContainer.style.display = "none";
}

function handleRight() {
    currentIndex = (currentIndex + 1) % galleryEl.length;
    console.log(currentIndex, "right")
    fullScreenImg(currentIndex);
}

function handleLeft() {
    currentIndex = (currentIndex - 1 + galleryEl.length) % galleryEl.length;
    console.log(currentIndex, "left")
    fullScreenImg(currentIndex);
}


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeFullScreen();
    } else if (event.key === "ArrowRight") {
        handleRight();
    } else if (event.key === "ArrowLeft") {
        handleLeft();
    }
});


// Завдання 2
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість 
// елементів в input і натискає кнопку Створити, після 
// чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція 
// створює стільки div, скільки вказано в amount і додає їх в div#boxes.\

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. 
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

const inputField = document.querySelector('.input');
const buttonCreate = document.querySelector('[data-action="render"]');
const buttonDelete = document.querySelector('[data-action="destroy"]');


function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (let i = 0; i < 10; i++) {
    console.log(getRandomRgb());
  }

  function createBoxes(amount) {
    const boxEl = document.createElement('div')
    console.log(boxEl);
    boxEl.style.width='30px'
    boxEl.style.height='30px'
    const boxes = document.getElementById('boxes')
    boxes.appendChild(boxEl)
  }

  console.log(createBoxes(10));

  inputField.addEventListener('change', event => {
    console.log(event.target);
  })

  buttonCreate.addEventListener('click', event => {
    console.log(event);
  })

  buttonDelete.addEventListener('click', event => {
    boxEl.remove();
  })

  
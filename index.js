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

function createBoxes() {
  const amount = document.getElementById('boxNumber').value;
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
  }
  
  function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  }
  
  function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  
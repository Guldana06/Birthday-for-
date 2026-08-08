let currentIndex = 0;
const messages = [
    "Вы просто невероятно выглядите на этом фото! Настоящая грация.",
    "Ваша улыбка способна осветить даже самый пасмурный день.",
    "Вы обладаете удивительным талантом делать людей вокруг счастливее.",
    "В Вашем взгляде столько тепла и доброты, что невозможно не улыбнуться.",
    "Вы настоящий пример того, как сочетаются ум, стиль и красота.",
    "С каждым разом всё больше убеждаюсь, насколько Вы особенный человек.",
    "Поздравляю Вас! Желаю Вам бесконечного счастья, сбывающихся мечтаний и новых побед!"
];

const photos = document.querySelectorAll('.slider-container img');
const messageText = document.getElementById('message-text');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
    photos[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % messages.length;
    photos[currentIndex].classList.add('active');
    messageText.textContent = messages[currentIndex];

    // Запуск салюта из конфетти на последней фотографии
    if (currentIndex === messages.length - 1) {
        confetti({ 
            particleCount: 150, 
            spread: 100, 
            origin: { y: 0.6 } 
        });
    }
});
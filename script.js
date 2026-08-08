const container = document.getElementById('threejs-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // добавили alpha: true для прозрачности
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 0.8));

const portalsData = [
    { photo: 'photo1.jpg', title: 'Самой прекрасной жеңше', text: 'Дорогая женше, мы хотим сказать, как сильно все рады, что вы есть в нашей семье. Вы не просто жена нашего брата, вы стали для нас родным человеком.' },
    { photo: 'photo2.jpg', title: 'Источник уюта и тепла', text: 'Любимая жеңше, глядя на вас с братом, мы видим, сколько гармонии вы приносите в его жизнь.' },
    { photo: 'photo3.jpg', title: 'Восхищение вами', text: 'Наша дорогая жеңше, вы невероятная девушка! Мы всегда восхищаемся вашим очарованием.' },
    { photo: 'photo4.jpg', title: 'Ваша невероятная улыбка', text: 'Жеңше, ваша улыбка способна осветить любой, даже самый пасмурный день.' },
    { photo: 'photo5.jpg', title: 'Хранительница очага', text: 'Вы обладаете удивительным качеством создавать вокруг себя атмосферу любви и уюта.' },
    { photo: 'photo6.jpg', title: 'Самая стильная', text: 'Жеңше, вы всегда выглядите потрясающе! Вашему чувству стиля можно только позавидовать.' },
    { photo: 'photo7.jpg', title: 'С днем рождения! 🎉', text: '🎆✨ Дорогая жеңше! От всего сердца поздравляем вас! Пусть в вашей жизни всегда царят любовь, уют и благополучие! 🎂🎈🎁' }
];

let currentIndex = 0;

function updateContent() {
    const data = portalsData[currentIndex];
    const imgElement = document.getElementById('popup-photo');
    const titleElement = document.getElementById('popup-title');
    const textElement = document.getElementById('popup-text');

    if (imgElement) imgElement.src = data.photo;
    if (titleElement) titleElement.textContent = data.title;
    if (textElement) textElement.textContent = data.text;
}

// Запуск при загрузке
updateContent();

function triggerFireworks(isFinal) {
    if (isFinal) {
        var duration = 3 * 1000;
        var end = Date.now() + duration;
        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff69b4', '#fff'] });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff69b4', '#fff'] });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    } else {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 }, colors: ['#ff69b4'] });
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % portalsData.length;
    updateContent();
    triggerFireworks(currentIndex === portalsData.length - 1);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + portalsData.length) % portalsData.length;
    updateContent();
    triggerFireworks(false);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
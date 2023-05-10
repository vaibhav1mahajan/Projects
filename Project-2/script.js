const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');
let currentActive = 1;
console.log(52);

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(10);
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, ind) => {
        if (ind < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};
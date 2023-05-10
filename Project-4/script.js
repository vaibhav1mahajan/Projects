const input = document.querySelector('input');
const icon = document.querySelector('i');


icon.addEventListener('click', () => {
    input.classList.toggle('hidden');
})
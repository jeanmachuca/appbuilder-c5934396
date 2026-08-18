let count = 0;
const counterBtn = document.getElementById('counterBtn');
const countDisplay = document.querySelector('.count-display');

counterBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
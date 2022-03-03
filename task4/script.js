const userText = document.querySelector('#link');

userText.addEventListener('click', () => {
    userText.textContent = prompt('Введите текст');
})
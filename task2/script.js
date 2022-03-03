const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль'); 
})

const alert1 = document.querySelector('#alert');

alert1.addEventListener('click', () => {
    alert('Уведомление'); 
})

const prompt1 = document.querySelector('#prompt');

prompt1.addEventListener('click', () => {
    prompt('Введите текст'); 
})
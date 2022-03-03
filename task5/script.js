const input = document.querySelector('#input');
const duplicateField = document.querySelector('#duplicateField');
const submit = document.querySelector('#submit')

input.oninput = function () {
    duplicateField.innerHTML = input.value;
}

submit.addEventListener('click', (event) => {
    console.log(input.value);
    input.value = "";
    duplicateField.innerHTML = "";
})
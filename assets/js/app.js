const addnumber = document.querySelector('#addnumber')
let curValue = 0;
const add = document.querySelector('#add')
const save = document.querySelector('#save')
const savetext = document.querySelector('#savetext')
add.addEventListener('click', () => {
    curValue++;
    addnumber.textContent = curValue;
});
save.addEventListener("click", function () {
    if (addnumber.innerHTML == 0) {
        savetext.classList.replace("save");
    } else {
        if (save.innerHTML == 0) {
            save.innerHTML = number.innerHTML;
        } else {
            savetext.innerHTML += " , " + addnumber.innerHTML;
        }
        addnumber.innerHTML = 0;
    }
});
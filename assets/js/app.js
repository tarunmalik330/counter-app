const addnumber = document.querySelector('#addnumber')
const add = document.querySelector('#add')
const save = document.querySelector('#save')
const savetext = document.querySelector('#savetext')
add.addEventListener('click', () => {
    addnumber.innerHTML = +addnumber.innerHTML + 1;
    savetext.classList.remove("disable");
});
save.addEventListener("click", function () {
    if (addnumber.innerHTML == 0) {
        savetext.classList.add("disable");
    } else {
        if (savetext.innerHTML == 0) {
            savetext.innerHTML = addnumber.innerHTML;
        } else {
            savetext.innerHTML = savetext.innerHTML + " , " + addnumber.innerHTML;
        }
        addnumber.innerHTML = 0;
    }
});
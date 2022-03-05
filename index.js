let paragraphElement = document.getElementById("paragraph");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
minus.classList.add("d-none");
let fontSize = 20;
paragraphElement.style.fontSize = fontSize + "px";

function onIncrease() {
    fontSize = fontSize + 5;
    let updateFontSize = fontSize + "px";
    paragraphElement.style.fontSize = updateFontSize;
    minus.classList.remove("d-none");
    plus.classList.add("d-none");


}

function onDecrease() {
    fontSize = fontSize - 5;
    let updateFontSize = fontSize + "px";
    paragraphElement.style.fontSize = updateFontSize;
    minus.classList.add("d-none");
    plus.classList.remove("d-none");
}

git config --global user.password "sallu@hockey8639"
sallu@hockey8639
salmapatan293@gmail.com
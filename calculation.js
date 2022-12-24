let display = document.querySelector(".inp"),
    inner = document.querySelectorAll(".inner"),
    evil = document.querySelector(".evil"),
    clear = document.querySelector(".clear"),
    rever = document.querySelector(".rever"),
    back = document.querySelector(".back");

inner.forEach((item) => {
    item.addEventListener("click", () => {
        display.value += item.textContent;
    })
});

evil.addEventListener("click", () => {
    let x = eval(display.value);
    display.value = x;
});

clear.addEventListener("click", () => {
    display.value = "";
});

rever.addEventListener("click", () => {
    display.value *= -1;
});

back.addEventListener("click", () => {
    let str = display.value;
    let arr = str.split("");
    arr.pop();

    display.value = arr.join("");

})
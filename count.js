let plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    soni = document.querySelector(".telSoni"),
    narx = document.querySelector("#narx"),
    olish = document.querySelector(".olish"),
    n = 0;


plus.addEventListener("click", () => {
    n++;
    soni.textContent = n;
    narx.textContent = `${n * 450}$`;
})
minus.addEventListener("click", () => {
    n--;
    if (n >= 0) {
        soni.textContent = n;
        narx.textContent = `${n * 450}$`;
    }
    else{
        n = 0;
    }
});
olish.addEventListener("click", () => {
    alert("Xaridingiz uchun rahmat");
    n = 0;
    soni.textContent = n;
    narx.textContent = `${n * 450}$`;
});
let left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    imgs = document.querySelector(".imgs");

let circles = document.querySelectorAll(".circle");

let m = 0;

circles.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.dataset.nomer === '1') {
            circles[0].style.border = `2px solid blue`;
            circles[1].style.border = `2px solid white`;
            circles[2].style.border = `2px solid white`;
            m = 1;
        }
        if (item.dataset.nomer === '2') {
            circles[0].style.border = `2px solid white`;
            circles[1].style.border = `2px solid blue`;
            circles[2].style.border = `2px solid white`;
            m = 0;
        }
        if (item.dataset.nomer === '3') {
            circles[0].style.border = `2px solid white`;
            circles[1].style.border = `2px solid white`;
            circles[2].style.border = `2px solid blue`;
            m = -1;
        }
        imgs.style.transform = `translate(${m * 600}px, 0)`;
    })
});
left.addEventListener("click", () => {
    m++;
    if (m > 1) {
        m = -1;
    }
    imgs.style.transform = `translate(${m * 600}px, 0)`;

    if (m === 1) {
        circles[0].style.border = `2px solid blue`;
        circles[1].style.border = `2px solid white`;
        circles[2].style.border = `2px solid white`;
    }
    if (m === 0) {
        circles[0].style.border = `2px solid white`;
        circles[1].style.border = `2px solid blue`;
        circles[2].style.border = `2px solid white`;
    }
    if (m === -1) {
        circles[0].style.border = `2px solid white`;
        circles[1].style.border = `2px solid white`;
        circles[2].style.border = `2px solid blue`;
    }
});

right.addEventListener("click", () => {
    m--;
    if (m < -1) {
        m = 1;
    }
    imgs.style.transform = `translate(${m * 600}px, 0)`;

    if (m === 1) {
        circles[0].style.border = `2px solid blue`;
        circles[1].style.border = `2px solid white`;
        circles[2].style.border = `2px solid white`;
    }
    if (m === 0) {
        circles[0].style.border = `2px solid white`;
        circles[1].style.border = `2px solid blue`;
        circles[2].style.border = `2px solid white`;
    }
    if (m === -1) {
        circles[0].style.border = `2px solid white`;
        circles[1].style.border = `2px solid white`;
        circles[2].style.border = `2px solid blue`;
    }
});




let items = document.querySelectorAll(".nav-item");

items.forEach((item) => {
    item.addEventListener("click", function() {
        item.classList.add("menu-anm");
        item.style.borderBottom = `2px solid green`;
    })
    item.addEventListener("mouseout", function() {
        item.classList.remove("menu-anm");
        item.style.borderBottom = `none`;

    })
})
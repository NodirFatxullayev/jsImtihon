let name = document.querySelector(".name"),
    email = document.querySelector(".email"),
    sex = document.querySelectorAll(".sex"),
    btn = document.querySelector(".formBtn"),
    tbody = document.querySelector("tbody");

let person;

btn.addEventListener("mouseenter", () => {
    if(name.value === '' || email.value === ''){
        btn.style.transform = `translate(${Math.round(Math.random() * 100)}px, ${Math.round(Math.random() * 100)}px)`;
    }
});

sex.forEach((item) => {
    item.addEventListener("change", () => {
        if(item.id === "erkak"){
            person = 1;
            
        }
        if(item.id === "ayol"){
            person = 2;
            
        }
    })
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let img = document.createElement("img");

    if(person === 1){
        img.src = "./img/men.jfif";
    }
    if(person === 2){
        img.src = "./img/girl.png";
    }

    td1.appendChild(img);
    td2.textContent = name.value;
    td3.textContent = email.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);


    name.value = '';
    email.value = '';
    sex[0].checked = false;
    sex[1].checked = false;
});

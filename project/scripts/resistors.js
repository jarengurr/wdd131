const year = document.querySelector("#currentyear");
const today1 = new Date();
year.innerHTML = `<span class="highlight">${today1.getFullYear()}</span>`;
//alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
//let oLastModif = new Date(document.lastModified)
let lmDate = document.lastModified
document.getElementById("lastModified").innerHTML = lmDate;

// menu setup
const mybutton = document.querySelector("#menu1");
const mynavigation = document.querySelector(".navigate")

mybutton.addEventListener("click", () => {
    mynavigation.classList.toggle("show");
    mybutton.classList.toggle("show");
});

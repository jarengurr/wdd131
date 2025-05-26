const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
//alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
//let oLastModif = new Date(document.lastModified)
let lmDate = document.lastModified
document.getElementById("lastModified").innerHTML = lmDate;



const hamburg = document.querySelector(".hmlink");
const screenmenu = document.querySelector(".links");

hamburg.addEventListener("click", () => {
    hamburg.classList.toggle("active");
    screenmenu.classList.toggle("active");
});
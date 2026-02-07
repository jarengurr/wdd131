const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles California",
        dedicated: " 1956, March, 14",
        area: 190614,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-temple-766339-wallpaper.jpg"
    },
  // Add more temple objects here...
];



const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
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


createTempleCard();

function createTempleCard() {
    temples.forEach(temple =>{
        let templecard = document.createElement("section");
        let templename = document.createElement("h3"); 
        let templelocation = document.createElement("p");
        let templededication = document.createElement("p");
        let templearea = document.createElement("p");
        let templeimg = document.createElement("img");

        templename.textContent = temple.templeName;
        templelocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        templededication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        templearea.innerHTML = `<span class="label">Size:</span> ${temple.area} SQ FT`;
        templeimg.setAttribute("src", temple.imageUrl);
        templeimg.setAttribute("alt", `${temple.templeName} Temple`);
        templeimg.setAttribute("loading", "lazy");

        templecard.appendChild(templename);
        templecard.appendChild(templelocation);
        templecard.appendChild(templededication);
        templecard.appendChild(templearea);
        templecard.appendChild(templeimg);

        document.querySelector(".piclist").appendChild(templecard);


    }
        
    


)}
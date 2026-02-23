
const first = [
    
    {
        code: "1",
        id:"1",
        name: "Brown"
    },
    {
        code: "2",
        id:"2",
        name: "Red"
    },
    {
        code: "3",
        id:"3",
        name: "Orange"
    },
    {
        code: "4",
        id:"4",
        name: "Yellow"
    },
    {
        code: "5",
        id:"5",
        name: "Green"
    },
    {
        code: "6",
        id:"6",
        name: "Blue"
    },
    {
        code: "7",
        id:"7",
        name: "Violet"
    },
    {
        code: "8",
        id:"8",
        name: "Grey"
    },
    {
        code: "9",
        id:"9",
        name: "white"
    },
]

 const second = [
   {
        code: "0",
        id:"0",
        name: "Black"
    },
    {
        code: "1",
        id:"1",
        name: "Brown"
    },
    {
        code: "2",
        id:"2",
        name: "Red"
    },
    {
        code: "3",
        id:"3",
        name: "Orange"
    },
    {
        code: "4",
        id:"4",
        name: "Yellow"
    },
    {
        code: "5",
        id:"5",
        name: "Green"
    },
    {
        code: "6",
        id:"6",
        name: "Blue"
    },
    {
        code: "7",
        id:"7",
        name: "Violet"
    },
    {
        code: "8",
        id:"8",
        name: "Grey"
    },
    {
        code: "9",
        id:"9",
        name: "white"
    },
   
]
   

const multiply = [
    {
        times: 1,
        name: "Black"
    },
    {
        times: 10,
        name: "Brown"
    },
    {
        times: 100,
        name: "Red"
    },
    {
        times: 1000,
        name: "Orange"
    },
    {
        times: 10000,
        name: "Yellow"
    },
    {
        times: 100000,
        name: "Green"
    },
    {
        times: 1000000,
        name: "Blue"
    },
    {
        times: 10000000,
        name: "Violet"
    },
    {
        times: 100000000,
        name: "Grey"
    },
    {
        times: 1000000000,
        name: "white"
    },
    {
        times: 0.1,
        name: "Gold"
    },
    {
        times: 0.01,
        name: "Silver"
    },
]

const tolerance = [
    {
        tol: 20,
        name: "None",
    },
    
    {
        tol: 1,
        name: "Brown",
    },

    {
        tol: 2,
        name: "Red",
    },
    
    
    {
        tol: .5,
        name: "Green",
    },
    {
        tol: .25,
        name: "Blue",
    },
    {
        tol: .1,
        name: "Violet",
    },
    {
        tol: .05,
        name: "Gray",
    },
    
    {
        tol: 5,
        name: "Gold",
    },
    {
        tol: 10,
        name: "Silver",
    },

]

document.addEventListener("DOMContentLoaded", function() {
   
});
window.onload = function() {
    createFirst();
    createSecond();
    createTimes();
    createTol();

} 
   
function createFirst() {
    first.forEach(first1 => {
        const newOption1 = document.createElement("option");
        newOption1.setAttribute("value", first1.code);
        newOption1.setAttribute("id", first1.id);
        newOption1.textContent = first1.name;
        document.querySelector("#first").appendChild(newOption1);
               
    })
    //document.getElementById("first").size = "11";
}




function createSecond() {
    second.forEach(second2 => {
        let newOption2 = document.createElement("option");
        newOption2.setAttribute("value", second2.code);
        newOption2.setAttribute("id", "check");
        newOption2.textContent = second2.name;
        document.querySelector("#second").appendChild(newOption2);
               
    })
    //document.getElementById("second").size = "12";
}


function createTimes() {
    multiply.forEach(times1 => {
        let newOption3 = document.createElement("option");
        newOption3.setAttribute("value", times1.times);
        
        newOption3.textContent = times1.name;
        document.querySelector("#times").appendChild(newOption3);
               
    })
   //document.getElementById("times").size = "13";
}


function createTol() {
    tolerance.forEach(tol => {
        let newOption4 = document.createElement("option");
        newOption4.setAttribute("value", tol.tol);
        
        newOption4.textContent = tol.name;
        document.querySelector("#tol").appendChild(newOption4);
               
    })
    document.getElementById("#tol").size = "9";
}

       




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

function convertColor() {
    let stringNumber = "";
    let fullColorNumber = 0;
     const firstColor = document.getElementById("first").value;
   // document.getElementById("demo").innerHTML = firstColor;

     const secondColor = document.getElementById("second").value;
    //document.getElementById("demo2").innerHTML = secondColor;

    const firstTimes = document.getElementById("times").value;
    const firstTol = document.getElementById("tol").value;
    //document.getElementById("demo3").innerHTML = firstTimes;

    let holdStringNumber = stringNumber.concat(firstColor, secondColor)
    //combine first color number and second color number
    //document.getElementById("demo4").innerHTML = holdStringNumber;
    fullColorNumber = Number(holdStringNumber) * firstTimes;

    //document.getElementById("demo5").innerHTML = fullColorNumber;
    let holdStringOutput = `Your Resistor Value is ${fullColorNumber} ohms with a Tolerance of ${firstTol}%`;
    //document.getElementById("demo6").innerHTML = holdStringOutput;

    let holder = document.createElement("section")
    let convertedColor = document.createElement("p");
    convertedColor.innerHTML = holdStringOutput;
    convertedColor.textContent = holdStringOutput;
    holder.appendChild(convertedColor)
    document.querySelector("#answer").appendChild(holder);
    document.getElementById("answer").value = holdStringOutput;
}


trackVisits();
function trackVisits() {
    let hold = 0;
    let count = localStorage.getItem("myCount")
    if (Number(count)) {
        hold = Number(count);
    } else {
         hold = 0;

    }
    
    
    hold = hold + 1;
   
   
    //document.getElementById("demo8").innerHTML = hold;
    localStorage.setItem("myCount", hold)
    document.getElementById("visits").innerHTML = hold;
}

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
    }
]



createFirst();
function createFirst() {
    first.forEach(first1 => {
        let newOption = document.createElement("option");
        newOption.setAttribute("value", first1.code);
        newOption.setAttribute("id", first1.id);
        newOption.textContent = first1.name;
        document.querySelector("#first").appendChild(newOption);
               
    })
}


createSecond();
function createSecond() {
    second.forEach(second2 => {
        let newOption = document.createElement("option");
        newOption.setAttribute("value", second2.code);
        
        newOption.textContent = second2.name;
        document.querySelector("#second").appendChild(newOption);
               
    })
}

createTimes();
function createTimes() {
    multiply.forEach(times1 => {
        let newOption = document.createElement("option");
        newOption.setAttribute("value", times1.times);
        
        newOption.textContent = times1.name;
        document.querySelector("#times").appendChild(newOption);
               
    })
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
    document.getElementById("demo").innerHTML = firstColor;

     const secondColor = document.getElementById("second").value;
    document.getElementById("demo2").innerHTML = secondColor;

     const firstTimes = document.getElementById("times").value;
    document.getElementById("demo3").innerHTML = firstTimes;

    let holdStringNumber = stringNumber.concat(firstColor, secondColor)
    //combine first color number and second color number
    document.getElementById("demo4").innerHTML = holdStringNumber;
    fullColorNumber = Number(holdStringNumber) * firstTimes;

    document.getElementById("demo5").innerHTML = fullColorNumber;
    let holdStringOutput = `Your Resistor Value is ${fullColorNumber} ohms`;
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
   
   
    document.getElementById("demo8").innerHTML = hold;
    localStorage.setItem("myCount", hold)
    document.getElementById("visits").innerHTML = hold;
}
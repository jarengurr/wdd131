const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
//alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
//let oLastModif = new Date(document.lastModified)
let lmDate = document.lastModified
document.getElementById("lastModified").innerHTML = lmDate;

 let _temp = 40;//degrees f.
 let _windspeed = 40;//mph

function calculateWindChill(_temp, _windspeed) {
    //calculate windchill
   
    let _windch = 35.74 + (.6215 * _temp) - (35.75 * Math.pow(_windspeed, .16)) + (.4275 * _temp * Math.pow(_windspeed, .16));
    return _windch;

}

if (_temp <= 50 && _windspeed > 3) {
    
    let holdtemp = calculateWindChill(_temp, _windspeed);
    holdtemp = holdtemp.toFixed(1);
    let stringholdtemp = holdtemp.toString() +  "°F";

    document.getElementById("wc").innerHTML = stringholdtemp;

} else {
    document.getElementById("wc").innerHTML = "n/a";
}

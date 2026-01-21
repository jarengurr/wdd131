const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;


radiusOutput.textContent = radius;
areaOutput.textContent = area;

const radiusOutput2 = document.getElementById('radius2');
const areaOutput2 = document.getElementById('area2');
let area2 = 0;
let radius2 = 20;
area2 = PI * radius2 * radius2;
radiusOutput2.textContent = radius2;
areaOutput2.textContent = area2; 

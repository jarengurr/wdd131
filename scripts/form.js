const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
]; 
const today = new Date(Date.now());   
//today.setFullYear(2026, 1, 14)
createOption();
        function createOption() {
           products.forEach(product => { 
             let newOption = document.createElement("option");
             newOption.setAttribute("value", product.name);
             newOption.setAttribute("id", product.id);
             newOption.textContent = product.name;
             document.querySelector("#items").appendChild(newOption);

            

            
        
        })
     
    
    }
itemDate();
const nowtoday = "10/12/2025";
    function itemDate() {
      const datebought = document.createElement("input");
      datebought.setAttribute("type", "date");
      datebought.setAttribute("value", "10/25/2024");
      //document.body.appendChild(datebought);
      //document.getElementById("#thedate").innerHTML = today;
      document.querySelector("#thedate").appendChild(datebought);
    
}



document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#favchap");
  const button = document.querySelector("button");
  const list = document.querySelector("ul");



  //********************************************************* */



  button.addEventListener('click', function () {


    if (input.value.trim() !== '') {

      const li = document.createElement("li");
      const deleteButton = document.createElement("button");
      li.textContent = input.value;
      deleteButton.textContent = "❌";



      li.append(deleteButton);
      list.append(li);


      input.value = "";
      input.focus();

      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.value = '';
        input.focus();
      });


    }
  });

});
















buttonElement.addEventListener('click', function() {
  // Code to execute when a key is released
});



buttonElement.addEventListener('keyup', function() {
  // Code to execute when a key is released
});

document.addEventListener("DOMContentLoaded", function() {
  // Code to execute when the DOM is parsed
});


button.addEventListener('click', function() {
       
    if (input.value.trim() !== '') { 
        const input = document.querySelector("#favchap");
        const button = document.querySelector("button");
        const list = document.querySelector("______");

        const li = document.creatElement("li");

        const deleteButton = document.creatElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
    }

});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.value = '';
    input.focus();

});

function changeBackground() {
  const rndCol = `rgb(${random(0)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

button.addEventListener("click", changeBackground);




















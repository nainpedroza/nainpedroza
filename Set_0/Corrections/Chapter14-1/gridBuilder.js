const container = document.getElementById("container");
const entry = document.getElementsByTagName('input')
function makeRows() {
    var rows = document.getElementById("heightValue").value;
    var cols = document.getElementById("widthValue").value;
    container.innerHTML = ''
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};
function reset() {
   container.innerHTML = ''
   entry[0].value = '1';
   entry[1].value = '1';
  }

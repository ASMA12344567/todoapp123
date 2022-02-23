
function addTask(){
var x = document.getElementById("valeu").value;

var h2 = document.createElement("h2");
h2.setAttribute('id', 'h2');
h2.textContent = x;
document.getElementById("div3").appendChild(h2);
document.getElementById('valeu').value = ''
}

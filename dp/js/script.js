var array = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  array.push(checkboxes[i].value)
  console.log(array)
}

// function changeText2(){
// var firstname = document.getElementByClass('firstname').value;
// document.getElementById('boldStuff2').innerHTML = firstname;
// var node=document.createElement("LI");
// var textnode=document.createTextNode(firstname);
// node.appendChild(textnode);
// document.getElementById("demo").appendChild(node);
// }

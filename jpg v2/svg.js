var mouth = document.getElementById('s');
var leftEyes = document.getElementById('left');
var rightEyes = document.getElementById('right');

window.addEventListener("keypress", changeColor);
mouth.addEventListener('dblclick', (event) => {
  changeMouth(event)
});
leftEyes.addEventListener('click', (event) => {
  changeLeftEyes(event)
});
rightEyes.addEventListener('click', (event) => {
  changeRightEyes(event)
});


function changeMouth(event) {
  var lips = event.target;
  var color =lips.style.fill;
  if(color == "red") {
    lips.style.fill= "white";
  }
  else {
    lips.style.fill= "red";
  }

}

function changeLeftEyes(event) {
  var leftEyeBall = event.target;
  var color =leftEyeBall.style.fill;
  if(color == "black") {
    leftEyeBall.style.fill = "violet";
  }
  else {
    leftEyeBall.style.fill= "black";
  }

}

function changeRightEyes(event) {
  var rightEyeBall = event.target;
  var color =rightEyeBall.style.fill;
  if(color == "black") {
    rightEyeBall.style.fill = "violet";
  }
  else {
    rightEyeBall.style.fill= "black";
  }

}

function changeColor(event) {
let body = document.body;
  if (event.key == "g"){
    body.style.backgroundColor = "green";
  }
  else if (event.key == "r"){
    body.style.backgroundColor = "red";
  }
  else if (event.key == "o"){
    body.style.backgroundColor = "orange";
  }
  else if (event.key == "y"){
   body.style.backgroundColor = "yellow";
  }
  else if (event.key == "b"){
    body.style.backgroundColor = "blue";
  }
  else if (event.key == "p"){
   body.style.backgroundColor = "purple";
  }
  else {
   body.style.backgroundColor = "red";
  }
}

var buttons = document.querySelectorAll(".drum");



// function handleClick(){
//   alert("I got clicked");
// }
function handleClick() {
  alert("button");
}

function makeSound(buttonInnerHTML){
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

var test = handleClick

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

  document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
  });

}

function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

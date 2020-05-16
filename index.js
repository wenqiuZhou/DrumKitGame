//comment
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  console.log(i);
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playByKey(buttonInnerHTML);
    addAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event) {
  playByKey(event.key);
  addAnimation(event.key);
})


function playByKey(key) {

  switch (key) {
    case "w":
    case "W":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "a":
    case "A":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    case "s":
    case "S":
      var s = new Audio("sounds/snare.mp3");
      s.play();
      break;
    case "d":
    case "D":
      var d = new Audio("sounds/tom-1.mp3");
      d.play();
      break;
    case "j":
    case "J":
      var j = new Audio("sounds/tom-2.mp3");
      j.play();
      break;
    case "k":
    case "K":
      var k = new Audio("sounds/tom-3.mp3");
      k.play();
      break;
    case "l":
    case "L":
      var l = new Audio("sounds/tom-4.mp3");
      l.play();
      break;
    default:
      var def = new Audio("sounds/tom-4.mp3");
      def.play();

  }
}

function addAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    playKeywise(this.innerHTML);
  });
}

document.addEventListener("keydown", function (ev) {
  playKeywise(ev.key);
});

function playKeywise(x) {
  switch (x) {
    case "w":
      var tom1 = new Audio("src/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var Tom2 = new Audio("src/tom-2.mp3");
      Tom2.play();
      break;
    case "s":
      var Tom3 = new Audio("src/tom-3.mp3");
      Tom3.play();
      break;
    case "d":
      var tom4 = new Audio("src/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("src/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("src/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("src/snare.mp3");
      snare.play();
      break;
    default:
      console.log(x);
  }
}

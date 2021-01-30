var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var audio = new Audio("src/tom-" + 2 + ".mp3");
    audio.play();
  });
}

var noOfButtons = document.querySelectorAll(".drum");
for(var i=0;i<noOfButtons.length;i++)
{
    noOfButtons[i].addEventListener("click",function(){
      var buttonValue = this.innerHTML;
      checkKey(buttonValue);
      makeAnimations(buttonValue);
    });
}

document.addEventListener("keydown",function(event){
  checkKey(event.key);
  makeAnimations(event.key);
});

function checkKey(key){
  switch (key) {
    case "w": var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;
    case "a": var crash = new Audio("sounds/crash.mp3");
              crash.play();
              break;
    case "s": var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;
    case "d": var kick = new Audio("sounds/kick-bass.mp3");
              kick.play();
              break;
    case "j": var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
              break;
    case "k": var snare = new Audio("sounds/snare.mp3");
              snare.play();
              break;
    case "l": var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;
    default:  break;

  }
}


function makeAnimations(key)
{
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

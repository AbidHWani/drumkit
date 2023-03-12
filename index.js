//one can use a loop to add event listener to all the button objects:

/*var lengthOfSelector = document.querySelectorAll(".drum").length;

for(var i=0; i<lengthOfSelector; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got clicked")
    })
};*/

/////////////////////////////using for loop://////////////////////

/*var lengthOfSelector = document.querySelectorAll(".drum").length;

var length = 0;
while (length<lengthOfSelector){
    document.querySelectorAll(".drum")[length].addEventListener("click", function(){
        alert("I got clicked");
    })
    length++;
}*/


/////////////////// adding audio to the buttons:///////////////////////////////////////////


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var dgdg = this.innerHTML;
        makeSound(dgdg);
    })};

//////////////////////////////////responding to key strokes instead of click///////////////////

document.addEventListener("keydown", function(event){
    makeSound(event.key)
});
  
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case"d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case"j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;            
        case"k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case"l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;                
        default:
            break;
    }
}
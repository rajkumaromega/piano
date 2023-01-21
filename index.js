var size = document.querySelectorAll("button").length;
for(var i =0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    var letter = this.innerHTML;
    sounding(letter);
    buttonAnimation(this.innerHTML);

});
}

function sounding(letter){

        switch(letter){
           case "q" :
              var tom1 = new Audio("./sounds/tom-1.mp3");
              tom1.play();
              break;
           case "w" :
                var tom1 = new Audio("./sounds/tom-2.mp3");
                tom1.play();
                break;
           case "e" :
                    var tom1 = new Audio("./sounds/tom-3.mp3");
                    tom1.play();
                    break;
            case "r" :
                    var tom1 = new Audio("./sounds/tom-4.mp3");
                    tom1.play();
                    break;
            case "t" :
                     var tom1 = new Audio("./sounds/crash.mp3");
                    tom1.play();
                    break;
            case "y" :
                     var tom1 = new Audio("./sounds/kick-bass.mp3");
                    tom1.play();
                    break;
            case "u" :
                     var tom1 = new Audio("./sounds/snare.mp3");
                    tom1.play();
                    break;
            default :
                 console.log(letter);
        }
    }

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
addEventListener("keypress",function(event){
        sounding(event.key);
        buttonAnimation(event.key);

})

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
                activeButton.classList.remove("pressed")
        },100);

}
var bulb = document.querySelector(".bulb")
var button = document.querySelector("button")
var container = document.querySelector(".container") 
var color = 1
button.addEventListener('click' , function(){
    if(color == 1){
        bulb.style.backgroundColor = 'yellow'
        color = 0 
        
    }
    else {
        bulb.style.backgroundColor = 'black'
        color = 1
    }
})





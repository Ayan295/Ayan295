var btn = document.querySelector('button')
var body = document.querySelector('body')
var frd = 0;

btn.addEventListener('click',function(){
    if(frd == 0){
        btn.innerHTML = "Add Friend"
        frd = 1
    }else{
        btn.innerHTML = "Remove Friend"
        frd = 0
    }
})
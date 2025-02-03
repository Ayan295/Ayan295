var img = document.querySelector('img')
var posX=0
var posY=0
document.addEventListener("keydown",function(dets){
    if(dets.code == 'ArrowRight' ){
        posX++;
        img.style.left = posX + '%'
        console.log("heey")
        
    } 
    else if(dets.code == 'ArrowLeft'){
        posX--
        img.style.left = posX + '%'
        console.log("right")

    }
    else if(dets.code == 'ArrowUp' ){
        posY--
        img.style.top = posY + '%'
        console.log('up')
    }
    else if(dets.code == 'ArrowDown'){
        posY++
        img.style.top = posY + '%'
    }
})
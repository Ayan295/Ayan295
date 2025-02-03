var btn = document.querySelector('button')
var h11 = document.querySelector('h1')
var growth =document.querySelector('.growth')
var grow = 0;

var num = Math.floor(Math.random()*100)


btn.addEventListener('click',function(){
     var growInterval = setInterval(function(){
        grow++

        h11.innerHTML = grow +'%'
        growth.style.width = grow+ '%'
    },num)

    setTimeout(function(){
        clearInterval(growInterval)
        btn.style.opacity = 0.4
        btn.innerHTML = 'Downloaded'
        btn.style.pointerEvents = 'none'
    },num*100)
})


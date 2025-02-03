var body = document.querySelector('body')
var cursor = document.querySelector('.circle')
var h1 = document.querySelector('h1')
body.addEventListener('mousemove',function(val){
    console.log(val)
    cursor.style.left = val.x + 'px'
    cursor.style.top = val.y + 'px'
})

h1.addEventListener('mouseenter', function(){
    cursor.style.scale = 2
    
})

h1.addEventListener('mouseleave',function(){
    cursor.style.scale = 1
})


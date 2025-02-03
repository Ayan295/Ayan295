var button = document.querySelector('button')
var teams = ['CSK','MI','RR','KKR','RCB','DD']
var p = document.querySelector('p')

button.addEventListener('click',function(){
    var random = Math.floor(Math.random(teams.length)*6)
    p.innerHTML = teams[random]

})
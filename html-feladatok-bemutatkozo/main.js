const mobile = document.getElementById('mobile')
const nav = document.getElementById('nav')

document.addEventListener('click', function(event){
    nav.classList.toggle('active')
})

window.addEventListener('resize', function(){
    nav.classList.remove('active')
})

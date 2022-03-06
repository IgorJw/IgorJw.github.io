const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav_items')
burger.addEventListener('click',()=>{
    nav.classList.toggle('nav_active')
    
})

var navlinks = document.querySelector('.nav_items li a')

Array.from(navlinks).forEach((link)=>{
    link.addEventListener('click',()=>{
        
        console.log('siemas')
        nav.classList.toggle('nav_active')
    })
})
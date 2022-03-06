let items = document.querySelectorAll('li a')

items.forEach(element => {
    
    element.addEventListener('mouseover',()=>{
        if(element.id != "mark"){
            document.getElementById('mark').classList.remove('mark')
            element.classList.add('mark')
        }
        
    })
    element.addEventListener('mouseleave',()=>{
        if(element.id != "mark")
        {
            document.getElementById('mark').classList.add('mark')
        element.classList.remove('mark')
        }
        
    })
});






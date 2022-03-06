let submit = document.getElementById('action_form')
let curr = "$"

let income = document.getElementById('income')
let expences  = document.getElementById('expences')
let balance = document.getElementById('balance')

let incomeVal = 0
let expencesVal = 0
let balanceVal = 0

expences.innerHTML = curr + " " + "0"
income.innerHTML = curr + " " + "0"
balance.innerHTML = curr + " " + "0"



submit.addEventListener('submit',(e)=>{
    e.preventDefault()
    let actText = document.getElementById('action_text').value
    let actVal = document.getElementById('action_value').value
    document.getElementById('action_text').value = ""
    document.getElementById('action_value').value = ""

    
    if(actText != "" && actVal != "")
    {
        let actionItems = document.querySelector('.action_items')
        let div = document.createElement('div')
        div.classList.add('action_item')
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')
        let deleteImg = document.createElement('img')

        

        deleteImg.setAttribute('src','delete.svg')
        actionItems.appendChild(div)
        div.appendChild(div1)
        div.appendChild(div2)
        
        div2.appendChild(div3)
        div2.appendChild(deleteImg)

        div1.innerHTML = actText

        

        if(actVal > 0)
        {
            incomeVal += parseInt(actVal)
            div3.innerHTML = '+' + actVal + curr
            income.innerHTML = curr + " " + incomeVal
            deleteImg.addEventListener('click',()=>{
                div.remove()
                incomeVal -= parseInt(actVal)
                balanceVal -= parseInt(actVal)
                income.innerHTML = curr + " " + incomeVal
                balance.innerHTML = curr + " " + balanceVal
            })
        } else {
            expencesVal += parseInt(actVal)
            expences.innerHTML = curr + " " + expencesVal
            div3.innerHTML = actVal + curr
            deleteImg.addEventListener('click',()=>{
                div.remove()
                expencesVal -= parseInt(actVal)
                balanceVal -= parseInt(actVal)
                expences.innerHTML = curr + " " + expencesVal
                balance.innerHTML = curr + " " + balanceVal
            })
        }
        balanceVal = incomeVal + expencesVal
        balance.innerHTML = curr + " " + balanceVal  
    }
    
    
    

})

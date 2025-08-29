import { menuArray } from "./data.js";

// let main = document.getElementById('main')
let orders = document.getElementById('your-order')
let store = document.getElementById('store')

document.addEventListener('click', function(e){
    if (e.target.dataset.itemId) {
      handleAddToCart(e.target.dataset.itemId);
    }
})

let price = [];

function handleAddToCart(itemId){
        const filtering = menuArray.filter(function(element){
            return element.id == itemId
        })[0]

     
        price.push(filtering.price)
        
        let sum = price.reduce((acc, num) => {
          return acc + num;
        }, 0);

        let screens = `
            <div class= "details" id = "details">
                <div class= "order-info">
                    <h2>${filtering.name}</h2>
                    <p class= "delete" id= "deletes">remove</p>
                </div>

                <h3>$${filtering.price}</h3>
            </div>
        `

        orders.innerHTML += screens;

         document.getElementById("total").innerHTML = `
            <div class= "totals">
                <h2>Total Price</h2>
                <h3>$${sum}</h3>
            </div>
        `;    
        
        let deletes = document.getElementById('deletes')

        // deletes.addEventListener('click', function(){
         
        // })
}

// function deletes(itemId){
//     let arr = []

//     arr.push(handleAddToCart(itemId))
// }

// console.log(deletes())



function render(){
    let item = ``
    menuArray.forEach(function(element){
        item += `
         <div class = "menue">

            <div class = "info">

                <div class ="text">
                    <div class= "emojiImg">${element.emoji}</div>
                    <div class = "text_content">
                        <h2> ${element.name}</h2>
                        <p> ${element.ingredients}</p>
                        <h3> $${element.price}</h3>
                    </div>
                </div>

                <button data-item-id= "${element.id}">+</button>
            </div>

         </div>
        
        `
    })

    return item;
}

store.innerHTML =  render()
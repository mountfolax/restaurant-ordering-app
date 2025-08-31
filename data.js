export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
    {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]


  // let prices = [];
  // filterings.forEach(function(element){
  //     prices.push(element.price)

  //       let sum = prices.reduce((acc, num = 0) => {
  //         return acc + num;
  //     }, 0);

  //     document.getElementById("total").innerHTML = `
  //         <div class= "totals">
  //             <h2>Total Price</h2>
  //             <h3>$${sum}</h3>
  //         </div>
  //     `;
  // })

  // filterings.forEach(function(elements){
  //     if (elements.id == itemId){
  //       let screens = `
  //         <div class= "details" id = "details">
  //             <div class= "order-info">
  //                 <h2>${elements.name}</h2>
  //                 <p class= "delete" id= "deletes">remove</p>
  //             </div>

  //             <h3>$${elements.price}</h3>
  //         </div>
  //     `;
  //     orders.innerHTML += screens;
  //  }

  // })

  // let sum = price.reduce((acc, num) => {
  //   return acc + num;
  // }, 0);

  // let screens = `
  //     <div class= "details" id = "details">
  //         <div class= "order-info">
  //             <h2>${filtering.name}</h2>
  //             <p class= "delete" id= "deletes">remove</p>
  //         </div>

  //         <h3>$${filtering.price}</h3>
  //     </div>
  // `

  //  document.getElementById("total").innerHTML = `
  //     <div class= "totals">
  //         <h2>Total Price</h2>
  //         <h3>$${sum}</h3>
  //     </div>
  // `;

  // let deletes = document.getElementById('deletes')

  // deletes.addEventListener('click', function(){

  // })
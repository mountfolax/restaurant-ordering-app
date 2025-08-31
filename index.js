import { menuArray } from "./data.js";

// let main = document.getElementById('main')
let orders = document.getElementById("your-order");
let store = document.getElementById("store");
let total = document.getElementById("total");

document.addEventListener("click", function (e) {
  if (e.target.dataset.itemId) {
    handleAddToCart(e.target.dataset.itemId);
    rendering();
  } else if (e.target.dataset.btnId) {
    deletes(e.target.dataset.btnId);
    rendering();
  }
});

let filterings = [];

function handleAddToCart(itemId) {
  const filtering = menuArray.filter(function (element) {
    return element.id == itemId;
  })[0];
  filterings.push(filtering);
}

function rendering() {
  let screens = ``;
  for (let i = 0; i < filterings.length; i++) {
    screens += `
                            <div class= "details" id = "details">
                                <div class= "order-info">
                                    <h2>${filterings[i].name}</h2>
                                    <p class= "delete" data-btn-id= "${[
                                      i,
                                    ]}">remove</p>
                                </div>

                                <h3>$${filterings[i].price}</h3>
                            </div>
                        `;

    orders.innerHTML = screens;
  }

 

  let sum = filterings.reduce((acc, num) => {
    return acc + num.price;
  }, 0);

  total.innerHTML = `
                    <div class= "totals">
                        <h2>Total Price</h2>
                        <h3>$${sum}</h3>
                    </div>
                `;
}

function deletes(btnIds) {
 
  console.log(btnIds);
  let save = ``;

  for (let i = 0; i < filterings.length; i++) {
    save = i;
  }

  if (Number(save) === 0 || filterings.length === 1) {
    filterings.splice(Number(btnIds), 1);
    // total.innerHTML = ``;
    orders.innerHTML = ``;
  } else {
    return filterings.splice(Number(btnIds), 1);
  }
  //    return filterings.splice(Number(btnIds), 1);
}

function render() {
  let item = ``;
  menuArray.forEach(function (element) {
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
        
        `;
  });
  return item;
}
store.innerHTML = render();

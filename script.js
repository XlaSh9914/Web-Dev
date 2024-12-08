import dishes from "./Data/dishes.js";

const menuList = document.querySelector(".menu-container");

for (let i = 0; i < dishes.length; i++) {
  const dishCard = document.createElement("div");
  dishCard.className = "dish-card";
  dishCard.innerHTML = ` <img src=${dishes[i].imageURL} alt="Dish Image" class="dish-image">
  <div class="dish-details">
    <h3 class="dish-name concert-one-title">${dishes[i].name}</h3>
    <p class="dish-description">${dishes[i].description}</p>
    <div class="price-quantity">
      <span class="dish-price">$${dishes[i].price}</span>
      <button id="${dishes[i].id}" class="btn highlight cart-btn">🛒</button>
    </div>
  </div>`;

  menuList.append(dishCard);
}

const cartItem = document.querySelector("#cart-items");
const cartSlider = document.getElementById("cart-slider");
const cartToggleArrow = document.getElementById("cart-toggle")

document.getElementById("cart-toggle").addEventListener("click", () => {
  if (cartSlider.style.maxHeight != "400px" && cartItem.innerHTML != ""){
    cartSlider.style.maxHeight = "400px";
    cartToggleArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg>';
  }
  else{
    cartToggleArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed"><path d="m280-400 200-200 200 200H280Z"/></svg>';
    cartSlider.style.maxHeight = "28px";
  } 
    
});

function getDishById(id) {
  return dishes.find((dish) => dish.id === parseInt(id));
}

function removeFromCart(dishId){
  cart = cart.filter(item => item.id !== dishId);
}

function updateCartItem(item, subtract = false) {
  console.log("Before: ",cart);
  const cartTotal = document.getElementById("cart-total");
  const cartItemCount = document.getElementById("cart-count");
  
  let currentTotal = parseFloat(cartTotal.innerHTML.slice(8));
  let itemCount = parseInt(cartItemCount.innerHTML);
  
  if (subtract){
    item.quantity--;
    itemCount--;
    currentTotal -= item.price;
    cartTotal.innerHTML = "Total: $"+currentTotal.toFixed(2);
    if (item.quantity == 0){
      const cartItem = document.getElementById(item.id+"-inCart");
      
      cartItemCount.innerHTML = itemCount; 
      cartItem.remove();
      removeFromCart(item.id);
      console.log("After: ",cart);
      
      return
    }
  }
  else{
    item.quantity++;
    currentTotal += item.price;
    itemCount++;
    cartTotal.innerHTML = "Total: $"+currentTotal.toFixed(2);
  }
  cartItemCount.innerHTML = itemCount; 
  
  let dishInfoElement = document.getElementById(item.id.toString()+"-inCart")
  let dishPriceElement = dishInfoElement.children[1];
  let dishQuantityElement = dishInfoElement.children[2].children[1];

  item.currentPrice = item.price * item.quantity;
  dishPriceElement.innerHTML = "$" + item.currentPrice.toFixed(2);
  dishQuantityElement.innerHTML = item.quantity;
  console.log("After: ",cart);
}

let cart = [];

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const id = clickedElement.id;
  const foundInCart = cart.find((item) => item.id === parseInt(id));

  if (clickedElement.classList[2] == "cart-btn") {
    if (foundInCart == undefined) {
      const dish = getDishById(id);
      cartSlider.style.visibility = "visible";

      const dishInfo = document.createElement("div");
      dishInfo.className = "cart-info";
      dishInfo.id = dish.id + "-inCart";
      dishInfo.innerHTML = `<span style="width: 120px;">${dish.name}</span>
      <span>$${dish.price}</span>
      <div class="quantity-mod">
        <button id="${dish.id}-sub" class="btn border sub" style="padding: 0 7px;">-</button>
        <span>1</span>
        <button id="${dish.id}-add" class="btn border add" style="padding: 0 5px;">+</button>
      </div>
      `;

      cartItem.append(dishInfo);
      cart.push({
        id: dish.id,
        price: dish.price,
        currentPrice: dish.price,
        quantity: 1,
      });
      updateCartItem({
        id: dish.id,
        price: dish.price,
        currentPrice: dish.price,
        quantity: 0,
      });
    } else {
      updateCartItem(foundInCart);
    }
  }

  if (clickedElement.classList[2] == "add"){
    updateCartItem(foundInCart);
  }
  else if (clickedElement.classList[2] == "sub"){
    updateCartItem(foundInCart, true);
  }
});

const dishes = [
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with creamy sauce, pancetta, and parmesan.",
    price: 12.99,
    imageURL: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-videoSmall-v2.jpg"
  },
  {
    name: "Margherita Pizza",
    description: "Traditional Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
    price: 10.99,
    imageURL: "https://static.toiimg.com/photo/56868564.cms"
  },
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
    price: 8.99,
    imageURL: "https://www.allrecipes.com/thmb/JTW0AIVY5PFxqLrf_-CDzT4OZQY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg"
  },
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 15.99,
    imageURL: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Rich and gooey chocolate cake with a molten center, served warm.",
    price: 6.99,
    imageURL: "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg"
  },
  {
    name: "Margherita Pizza",
    description: "Traditional Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
    price: 10.99,
    imageURL: "https://static.toiimg.com/photo/56868564.cms"
  },
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
    price: 8.99,
    imageURL: "https://www.allrecipes.com/thmb/JTW0AIVY5PFxqLrf_-CDzT4OZQY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg"
  },
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 15.99,
    imageURL: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Rich and gooey chocolate cake with a molten center, served warm.",
    price: 6.99,
    imageURL: "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg"
  },
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 15.99,
    imageURL: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Rich and gooey chocolate cake with a molten center, served warm.",
    price: 6.99,
    imageURL: "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg"
  }
];


console.log(dishes)

const menuList = document.querySelector(".menu-container");


for (i=0; i<dishes.length; i++){
  const userDom = document.createElement("div");
  userDom.className = "dish-card";
  userDom.innerHTML = ` <img src=${dishes[i].imageURL} alt="Dish Image" class="dish-image">
  <div class="dish-details">
    <h3 class="dish-name">${dishes[i].name}</h3>
    <p class="dish-description">${dishes[i].description}</p>
    <div class="price-quantity">
      <span class="dish-price">$${dishes[i].price}</span>
      <button class="btn highlight">🛒</button>
    </div>
  </div>`;
  
  menuList.append(userDom)
}

document.getElementById('cart-toggle').addEventListener('click', () => {
  const cartSlider = document.getElementById('cart-slider');
  // cartSlider.classList.toggle('cart-open');
  cartSlider.classList.toggle('cart-closed');
});

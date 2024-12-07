const dishes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish made with creamy sauce, pancetta, and parmesan.",
    price: 12.99,
    imageURL:
      "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-videoSmall-v2.jpg",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description:
      "Traditional Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
    price: 10.99,
    imageURL: "https://static.toiimg.com/photo/56868564.cms",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
    price: 8.99,
    imageURL:
      "https://www.allrecipes.com/thmb/JTW0AIVY5PFxqLrf_-CDzT4OZQY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
  },
  {
    id: 4,
    name: "Grilled Salmon",
    description:
      "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 15.99,
    imageURL:
      "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg",
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description:
      "Rich and gooey chocolate cake with a molten center, served warm.",
    price: 6.99,
    imageURL:
      "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg",
  },
  {
    id: 6,
    name: "Vegetable Stir-Fry",
    description:
      "A medley of fresh vegetables stir-fried in a savory soy and ginger sauce.",
    price: 9.99,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwfn1qwK_04AZGzQVysy-e86aPikvXW4gfA&s",
  },
  {
    id: 7,
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based curry sauce.",
    price: 13.99,
    imageURL:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala-500x500.jpg",
  },
  {
    id: 8,
    name: "Beef Bourguignon",
    description:
      "Classic French stew with tender beef, red wine, mushrooms, and pearl onions.",
    price: 16.99,
    imageURL:
      "https://static01.nyt.com/images/2023/08/24/multimedia/MC-Beef-Bourguignon-lpbv/MC-Beef-Bourguignon-lpbv-googleFourByThree-v2.jpg",
  },
  {
    id: 9,
    name: "Shrimp Scampi",
    description:
      "Succulent shrimp sautéed in a garlic butter sauce, served with linguine.",
    price: 14.99,
    imageURL:
      "https://static01.nyt.com/images/2022/06/02/dining/ShrimpScampi_thumb/ShrimpScampi_thumb-videoSmall-v2.jpg",
  },
  {
    id: 10,
    name: "Panna Cotta",
    description:
      "Silky smooth Italian dessert topped with fresh berries and a sweet glaze.",
    price: 7.99,
    imageURL:
      "https://www.allrecipes.com/thmb/NlP50cO2BjJdN4uGvl5JhW0Rx2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72567-Panna-cotta-ddmfs-4x3-14ae724a2a8e4ca3a79c5e27b2b61994.jpg",
  },
  {
    id: 11,
    name: "Fish Tacos",
    description:
      "Crispy fish fillets served in soft tortillas with a tangy slaw and lime crema.",
    price: 11.99,
    imageURL:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Weeknight-001_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591159264.webp",
  },
  {
    id: 12,
    name: "Greek Salad",
    description:
      "Fresh salad with cucumbers, tomatoes, feta cheese, olives, and oregano dressing.",
    price: 8.49,
    imageURL:
      "https://www.thehungrybites.com/wp-content/uploads/2017/07/Authentic-Greek-salad-horiatiki-featured.jpg",
  },
  {
    id: 13,
    name: "Eggplant Parmesan",
    description:
      "Baked eggplant slices layered with marinara sauce and melted cheese.",
    price: 12.49,
    imageURL:
      "https://www.allrecipes.com/thmb/L9wpL6T8bgfo7C09-Euoa-OSN0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25321-eggplant-parmesan-ii-DDMFS-4x3-6d53ce79765b4c3d9f554d2a47e14d00.jpg",
  },
  {
    id: 14,
    name: "Tiramisu",
    description:
      "Traditional Italian dessert made with mascarpone, espresso, and cocoa.",
    price: 6.49,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXGPTb04lktwuFY6CVpvpZsO-GzBO1BsvIg&s",
  },
  {
    id: 15,
    name: "Pad Thai",
    description:
      "Stir-fried rice noodles with shrimp, eggs, peanuts, and tangy tamarind sauce.",
    price: 13.49,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72V5ausVRwo7zYT15kjjXrycnd4Xy8AHGhQ&s",
  },
  {
    id: 16,
    name: "Lamb Chops",
    description: "Juicy lamb chops grilled and served with mint sauce.",
    price: 18.99,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26zGIAH7eSwPRd-E0Mncg9qFByqBpsaVvdA&s",
  },
  {
    id: 17,
    name: "Baked Ziti",
    description:
      "Pasta baked with marinara, ricotta, and melted mozzarella cheese.",
    price: 12.49,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JX4Oh6m8h9B1vyPjPhDCh9CB9UWiRb97yg&s",
  },
  {
    id: 18,
    name: "French Onion Soup",
    description:
      "Rich beef broth with caramelized onions and melted gruyere on baguette slices.",
    price: 7.99,
    imageURL:
      "https://www.recipetineats.com/tachyon/2018/11/French-Onion-Soup_1.jpg",
  },
  {
    id: 19,
    name: "Chicken Alfredo",
    description:
      "Fettuccine pasta in a creamy Alfredo sauce with grilled chicken.",
    price: 13.99,
    imageURL:
      "https://midwestfoodieblog.com/wp-content/uploads/2023/07/chicken-alfredo-1-2.jpg",
  },
  {
    id: 20,
    name: "Pork Ribs",
    description: "Tender pork ribs glazed with a tangy barbecue sauce.",
    price: 15.49,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_iEYbH0nYRcc4RISEdbStOgqd7fKHwf5VA&s",
  },
  {
    id: 21,
    name: "Veggie Burger",
    description:
      "A hearty patty made with beans and vegetables, served on a toasted bun.",
    price: 10.49,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVrO9FKarrAGq08vByBi6iEz-wLoEUi7c_g&s",
  },
  {
    id: 22,
    name: "Minestrone Soup",
    description: "Hearty Italian vegetable soup with pasta and beans.",
    price: 8.99,
    imageURL:
      "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/minestrone-soup-500x500.jpg",
  },
  {
    id: 23,
    name: "Stuffed Bell Peppers",
    description:
      "Bell peppers stuffed with rice, meat, and a savory tomato sauce.",
    price: 12.99,
    imageURL:
      "https://hips.hearstapps.com/hmg-prod/images/stuffed-peppers-recipe-2-6594706a0a63b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
  },
  {
    id: 24,
    name: "Banoffee Pie",
    description:
      "Sweet pie made with bananas, cream, and caramel on a biscuit base.",
    price: 6.49,
    imageURL:
      "https://www.allrecipes.com/thmb/1DgE3l_I5XSOg0Zgl7dy4zuNfiI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/12625-Banoffee-pie-ddmfs-3x4-1770-a06db2a08ccc4f18835a1f9e2ceb280c.jpg",
  },
  {
    id: 25,
    name: "Pho",
    description: "Vietnamese noodle soup with beef, herbs, and aromatic broth.",
    price: 13.99,
    imageURL:
      "https://www.recipetineats.com/tachyon/2019/04/Beef-Pho_6.jpg?resize=500%2C500",
  },
  {
    id: 26,
    name: "Sushi Platter",
    description:
      "An assortment of sushi rolls and nigiri with soy sauce and wasabi.",
    price: 19.99,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIiv0O3dY64eiOf3wSABT4QYUCDcm8TfAUQ&s",
  },
  {
    id: 27,
    name: "Butter Chicken",
    description: "Indian curry with tender chicken in a creamy tomato sauce.",
    price: 14.99,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyc4s-wlUovV6GlhzuTOhoWd_WnoKBCarBg&s",
  },
  {
    id: 28,
    name: "Quesadilla",
    description: "Grilled tortilla filled with cheese, chicken, and veggies.",
    price: 11.49,
    imageURL:
      "https://cdn.loveandlemons.com/wp-content/uploads/2024/01/quesadilla.jpg",
  },
  {
    id: 29,
    name: "Ratatouille",
    description: "French vegetable medley cooked in a rich tomato sauce.",
    price: 10.49,
    imageURL:
      "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
  },
  {
    id: 30,
    name: "Apple Pie",
    description:
      "Classic dessert made with spiced apples in a flaky pastry crust.",
    price: 6.99,
    imageURL:
      "https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg",
  },
];

export default dishes;

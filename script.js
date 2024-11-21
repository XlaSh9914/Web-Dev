import biographyAndMemoirData from "./Data/biography_and_memoir_data.js";
import childrenLiteratureData from "./Data/children_literature.js";
import historicalFictionData from "./Data/historical_fiction_data.js";
import romanceData from "./Data/romance_data.js";
import scienceFictionData from "./Data/science_fiction_and_fantasy_data.js";
import adminData from "./Admin/admin.js";

let bookData = [
  ...biographyAndMemoirData,
  ...childrenLiteratureData,
  ...historicalFictionData,
  ...romanceData,
  ...scienceFictionData,
];

let header = ``;
let body = ``;
let instructions = ``;
let navigationMessage = ``;
let eventNote = ``;
let cart = [];
let stopExecution = false;

let giveList = (list, listOf) => {
  let generatedList = ``;
  for (let i = 0; i < list.length; i++) {
    generatedList += `\n${i + 1}. ${list[i][listOf]}`;
  }
  console.log(generatedList);
  return generatedList;
};

let promptText = (
  header = ``,
  body = ``,
  instructions = ``,
  navigationMessage = `'X' Exit`,
  eventNote = ``
) => {
  return `${eventNote}\n-🟦${header}🟦-\n\n${body}\n\n${instructions}\n\n${navigationMessage}`;
};

function selectCategory(eventCode = 0) {
  if (stopExecution) return;

  header = `Welcome to the Book List! 😊`;
  body = giveList(bookData, "genre");
  instructions = `Enter the number of the genre you would like to see the books for:`;
  navigationMessage = `'X' Exit`;
  switch (eventCode) {
    case 1:
      eventNote = `⚠Please enter a valid character`;
      break;
    case 2:
      eventNote = `⚠Are you sure you want to exit\n 'Y' Yes\n 'N' No`;
      break;
    default:
      eventNote = ``;
      break;
  }

  let userInput = prompt(promptText(header, body, instructions, navigationMessage, eventNote));

  switch (eventCode) {
    case 0:
    case 1:
      if (userInput.toLowerCase() == "x") {
        selectCategory(2);
      } else if (userInput <= bookData.length && userInput > 0) {
        selectBook(bookData[userInput - 1]);
        selectCategory();
      } else {
        selectCategory(1)
      }
      break;
    case 2:
      if (userInput.toLowerCase() == "y") {
        alert("Goodbye! 👋");
        stopExecution = true;
      } else if (userInput.toLowerCase() == "n") {
        selectCategory();
      } else {
        selectCategory(2);
      }
    }
}

function selectBook(bookList, eventCode = 0) {
  if (stopExecution) return;
  
  let genreName = bookList.genre;
  let books = bookList.books;
  header = `${genreName.toUpperCase()} BOOKS📚`;
  body = giveList(books, "name");
  instructions = `Enter the number of the book you would like to see the details for`;
  navigationMessage = `'B' Back`;
  switch (eventCode) {
    case 1:
      eventNote = `⚠Please enter a valid character`;
      break;
    case 2:
      eventNote = `⚠Are you sure you want to exit\n 'Y' Yes\n 'N' No`;
      break;
    default:
      eventNote = ``;
      break;
  }

  let userInput = prompt(promptText(header, body, instructions, navigationMessage,eventNote));

  switch (eventCode){
    case 0:
    case 1:
      if (userInput.toLowerCase() == "x") {
        selectBook(bookList, 2);
      } else if (userInput.toLowerCase() == "b") {
        return // Go back to the select category
      } else if (userInput <= books.length && userInput > 0) {
        bookDetails(books[userInput - 1], bookList);
        selectBook(bookList);
      } else {
        selectBook(bookList, 1);
      }
      break;
    case 2:
      if (userInput.toLowerCase() == "y") {
        alert("Goodbye! 👋"); //exit
        stopExecution = true;
      } else if (userInput.toLowerCase() == "n") {
        selectBook(bookList)
      } else {
        selectBook(bookList, 2);
      }
      break;
  }
}

function bookDetails(book, bookList, eventCode = 0) {
  if (stopExecution) return;
  
  header = `${book.name.toUpperCase()} DETAILS📚`;
  body = `Author:   ${book.author}\nGenre:    ${book.genre}\nPublish year:    ${book.year}\nDescription:    ${book.description}`;
  instructions = `'R' to rent the book.\n'P' to purchase the book for $${book.price}`;
  navigationMessage = `'B' Back`;
  switch (eventCode) {
    case 1:
      eventNote = `⚠Please enter a valid character`;
      break;
    case 2:
      eventNote = `⚠Are you sure you want to exit\n 'Y' Yes\n 'N' No`;
      break;
    default:
      eventNote = ``;
      break;
  }

  let userInput = prompt(promptText(header, body, instructions, navigationMessage, eventNote));

  switch (eventCode){
    case 0:
    case 1:
      if (userInput.toLowerCase() == "x") {
        bookDetails(book, bookList, 2) //exit confirmation
      } else if (userInput.toLowerCase() == "b") {
        return //go back to select book
      } else if (userInput.toLowerCase() == "r") {
        rentInfo(book, bookList);
        bookDetails(book, bookList)
      } else if (userInput.toLowerCase() == "p") {
        alert("Book added to cart 🛒");
        selectBook(bookList);
      } else {
        bookDetails(book, bookList, 1)
      }
      break
    case 2:
      if (userInput.toLowerCase() == "y") {
        alert("Goodbye! 👋");
        stopExecution = true;
      } else if (userInput.toLowerCase() == "n") {
        bookDetails(book, bookList);
      } else {
        bookDetails(book, bookList, 2)
      }
      break; 
    }
}

function rentInfo(book, bookList, eventCode = 0) {
  if (stopExecution) return;
  
  let rentPrices = rentPricing(book.rent,adminData.durationDiscount)
  header = `Rent Info for ${book.name} 📘`;
  body = `Renting a book will cost you:${rentPrices[3]}`;
  instructions = `Enter the number of rent options you would like:`;
  navigationMessage = `'B' Back`;
  switch (eventCode) {
    case 1:
      eventNote = `⚠Please enter a valid character`;
      break;
    case 2:
      eventNote = `⚠Are you sure you want to exit\n 'Y' Yes\n 'N' No`;
      break;
    default:
      eventNote = ``;
      break;
  }

  let userInput = prompt(promptText(header, body, instructions, navigationMessage, eventNote));

  switch (eventCode){
    case 0:
    case 1:
      if (userInput.toLowerCase() == "x") {
        rentInfo(book, bookList, 2) //exit confirmation
      } else if (userInput.toLowerCase() == "b") {
        return //go back to book details
      } else if (userInput.toLowerCase() > 0 && userInput.toLowerCase() <= 3) {
        addToCart(book, rentPrices[userInput - 1]);
        rentInfo(book, bookList)
      } else {
        rentInfo(book, bookList, 1)
      }
      break;
    case 2:
      if (userInput.toLowerCase() == "y") {
        alert("Goodbye! 👋"); //exit
        stopExecution = true;
      } else if (userInput.toLowerCase() == "n") {
        rentInfo(book, bookList);
      } else {
        rentInfo(book, bookList, 2)
      }
      break;
  }
}

function addToCart(book, selectedRent, eventCode = 0) {
  if (stopExecution) return;
  
  header = `Rent Info for ${book.name} 📘`;
  body = `Renting this book will cost you: $${selectedRent}\nWould you like to rent it??`;
  instructions = `'Y' Yes\n'N' No`;
  navigationMessage = `'B' Back`;
  switch (eventCode) {
    case 1:
      eventNote = `⚠Please enter a valid character`;
      break;
    case 2:
      eventNote = `⚠Are you sure you want to exit\n 'Y' Yes\n 'N' No`;
      break;
    default:
      eventNote = ``;
      break;
  }

  let userInput = prompt(promptText(header, body, instructions, navigationMessage, eventNote));

  switch (eventCode){
    case 0:
    case 1:
      if (userInput.toLowerCase() == "x") {
        addToCart(book, selectedRent, 2) //exit confirmation
      } else if (userInput.toLowerCase() == "b") {
        return //got back to rent info
      } else if (userInput.toLowerCase() == "y") {
        cart.push(book);
        alert("Book added to cart 🛒");
        return //got back to rent info
      } else if (userInput.toLowerCase() == "n") {
        return //got back to rent info
      } else {
        addToCart(book, selectedRent, 1)
      }
      break;
    case 2:
      if (userInput.toLowerCase() == "y") {
        alert("Goodbye! 👋"); //exit
        stopExecution = true;
      } else if (userInput.toLowerCase() == "n") {
        addToCart(book, selectedRent);
      } else {
        addToCart(book, selectedRent, 2)
      }
      break;
  }
}

function rentPricing(oneUnitPrice, discount) {
  let rent1 = oneUnitPrice;
  let rent2 = oneUnitPrice * 2 * (1 - discount / 100);
  let rent3 = oneUnitPrice * 3 * (1 - discount / 100);
  return [rent1, rent2, rent3, `\n1. $${rent1.toPrecision(3)}    for 3 days\n2. $${rent2.toPrecision(3)}    for 6 days\n3. $${rent3.toPrecision(3)}    for 9 days`];
}

selectCategory();

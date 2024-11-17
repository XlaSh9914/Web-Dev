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
let errorNote = ``;
let cart = [];

let giveList = (list, listOf) => {
  let generatedList = ``;
  for (let i = 0; i < list.length; i++) {
    console.log(list[i][listOf]);
    generatedList += `\n${i + 1}. ${list[i][listOf]}`;
  }
  console.log(generatedList);
  return generatedList;
};

let promptText = (
  header = ``,
  body = ``,
  instructions = ``,
  navigationMessage = `Enter 'X' to exit`,
  errorNote = ``
) => {
  return `-🟦${header}🟦-\n\n${body}\n\n${instructions}\n\n${navigationMessage}\n${errorNote}`;
};

function selectCategory(error = false) {
  header = `Welcome to the Book List! 😊`;
  body = giveList(bookData, "genre");
  instructions = `Enter the number of the genre you would like to see the books for:`;
  errorNote = error ? `⚠Please enter a valid number` : ``;

  let userInput = prompt(promptText(header, body, instructions, errorNote));

  if (userInput.toLowerCase() == "x") {
    alert("Goodbye! 👋");
  } else if (userInput <= bookData.length && userInput > 0) {
    selectBook(bookData[userInput - 1]);
  } else {
    selectCategory(true)
  }
}

function selectBook(bookList, error = false) {
  let genreName = bookList.genre;
  let books = bookList.books;
  header = `${genreName.toUpperCase()} BOOKS📚`;
  body = giveList(books, "name");
  instructions = `Enter the number of the book you would like to see the details for`;
  navigationMessage = `Enter 'B' to go back to the previous menu`;
  errorNote = error ? `⚠Please enter a valid number` : ``;

  let userInput = prompt(promptText(header, body, instructions, navigationMessage,errorNote));

  if (userInput.toLowerCase() == "x") {
    alert("Goodbye! 👋");
  } else if (userInput.toLowerCase() == "b") {
    selectCategory();
  } else if (userInput <= books.length && userInput > 0) {
    console.log(books[userInput - 1], bookList);
    bookDetails(books[userInput - 1], bookList);
  } else {
    selectBook(bookList, true);
  }
}

function bookDetails(book, bookList, error) {
  header = `${book.name.toUpperCase()} DETAILS📚`;
  body = `Author:   ${book.author}\nGenre:    ${book.genre}\nPublish year:    ${book.year}\nDescription:    ${book.description}`;
  instructions = `'R' to rent the book.\n'P' to purchase the book for $${book.price}`;
  navigationMessage = `Enter 'B' to go back to the previous menu`;
  errorNote = error ? `⚠Please enter a valid number` : ``;

  let userInput = prompt(promptText(header, body, instructions, navigationMessage, errorNote));

  if (userInput.toLowerCase() == "x") {
    alert("Goodbye! 👋");
  } else if (userInput.toLowerCase() == "b") {
    selectBook(bookList);
  } else if (userInput.toLowerCase() == "r") {
    rentInfo(book, bookList);
  } else if (userInput.toLowerCase() == "p") {
    alert("Book added to cart 🛒");
    selectBook(bookList);
  } else {
    bookDetails(book, bookList, true)
  }
}

function rentInfo(book, bookList, error = false) {
  let rentPrices = rentPricing(book.rent,adminData.durationDiscount)
  header = `Rent Info for ${book.name} 📘`;
  body = `Renting a book will cost you:${rentPrices[3]}`;
  instructions = `Enter the number of rent options you would like:`;
  navigationMessage = `Enter 'B' to go back to the previous menu`;
  errorNote = error ? `⚠Please enter a valid number` : ``;

  let userInput = prompt(promptText(header, body, instructions, navigationMessage, errorNote));

  if (userInput.toLowerCase() == "x") {
    alert("Goodbye! 👋");
  } else if (userInput.toLowerCase() == "b") {
    bookDetails(book, bookList);
  } else if (userInput.toLowerCase() > 0 && userInput.toLowerCase() <= 3) {
    alert("Book added to cart 🛒");
    bookDetails(book, bookList);
  } else {
    rentInfo(book, bookList, true)
  }
}

function rentPricing(oneUnitPrice, discount) {
  let rent1 = oneUnitPrice;
  let rent2 = oneUnitPrice * 2 * (1 - discount / 100);
  let rent3 = oneUnitPrice * 3 * (1 - discount / 100);
  return [rent1, rent2, rent3, `\n1. $${rent1.toPrecision(3)}    for 3 days\n2. $${rent2.toPrecision(3)}    for 6 days\n3. $${rent3.toPrecision(3)}    for 9 days`];
}

selectCategory();

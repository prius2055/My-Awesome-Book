import Book from "./modules/Library.js";
import CurrentDateTime from "./modules/Date.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".date").textContent = CurrentDateTime;
  const book = new Book();
  book.init();
});

const listLink = document.querySelector(".list");
const addNewLink = document.querySelector(".add-new");
const contactLink = document.querySelector(".contact");

const allBooksSection = document.querySelector(".all-books");
const addBookSection = document.querySelector(".add-book");
const contactSection = document.querySelector(".contact-form");

allBooksSection.style.display = "block";
addBookSection.style.display = "none";
contactSection.style.display = "none";

listLink.addEventListener("click", (e) => {
  e.preventDefault();
  allBooksSection.style.display = "block";
  addBookSection.style.display = "none";
  contactSection.style.display = "none";
});

addNewLink.addEventListener("click", (e) => {
  e.preventDefault();
  addBookSection.style.display = "block";
  allBooksSection.style.display = "none";
  contactSection.style.display = "none";
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.style.display = "block";
  addBookSection.style.display = "none";
  allBooksSection.style.display = "none";
});


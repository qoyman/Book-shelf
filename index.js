 // Your JavaScript goes here!

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function removeBookFromLibrary(bookId) {
  const index = myLibrary.findIndex((book) => book.id === bookId);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
}

function createBookCard({ id, title, author, pages, read }) {
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  bookCard.setAttribute("data-book-id", id);
  bookCard.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>Pages:</strong> ${pages}</p>
    <p><strong>Read:</strong> ${read ? "Yes" : "No"}</p>
    <div class="book-buttons">
      <button class="book-btn toggle-read-btn" data-book-id="${id}">
        ${read ? "Mark Unread" : "Mark Read"}
      </button>
      <button class="book-btn remove-btn" data-book-id="${id}">
        Remove
      </button>
    </div>
  `;
  return bookCard;
}

function displayBooks() {
  const container = document.getElementById("book-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    container.appendChild(createBookCard(book));
  });
}

function setupBookContainerListener() {
  const container = document.getElementById("book-container");
  
  container.addEventListener("click", (e) => {
    const bookId = e.target.getAttribute("data-book-id");
    if (!bookId) return;

    if (e.target.classList.contains("toggle-read-btn")) {
      const book = myLibrary.find((b) => b.id === bookId);
      if (book) {
        book.toggleRead();
        displayBooks();
      }
    } else if (e.target.classList.contains("remove-btn")) {
      removeBookFromLibrary(bookId);
      displayBooks();
    }
  });
}

function setupFormListeners() {
  const dialog = document.getElementById("book-form-dialog");
  const newBookBtn = document.getElementById("new-book-btn");
  const bookForm = document.getElementById("book-form");
  const cancelBtn = document.getElementById("cancel-btn");

  newBookBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  cancelBtn.addEventListener("click", () => {
    dialog.close();
  });

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const { title, author, pages, read } = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      pages: parseInt(document.getElementById("pages").value),
      read: document.getElementById("read").checked,
    };

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    bookForm.reset();
    dialog.close();
  });
}

const myLibrary = [];

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
displayBooks();
setupBookContainerListener();
setupFormListeners();  
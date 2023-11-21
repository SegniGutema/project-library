const myLibrary = [];
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = Boolean(readStatus);
}
function addBookToLibrary() {
  //add functionality to the book form toggle
  let bookFormToggle = document.querySelector(".bookFormToggle");
  let skip = document.querySelector(".skip");
  let bookForm = document.querySelector("#book-form");
  skip.addEventListener("click", (e) => {
    // e.preventDefault();
    bookForm.style.display = "none";
  });

  bookFormToggle.addEventListener(
    "click",
    (e) => {
      if (bookForm.style.display === "none") {
        bookForm.style.display = "block";
      } else {
        bookForm.style.display = "none";
      }
    },
    false
  );
  //add onSubmit event listener to book form
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#pages").value;
    let readStatus = document.querySelector("#read-status").checked;
    let bookObject = new Book(title, author, pages, readStatus);
    document.querySelector("#author").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#pages").value = "";
    bookForm.style.display = "none";

    myLibrary.push(bookObject);
    console.log(myLibrary);

    let library = document.querySelector(".Library");
    let libEl = document.createElement("div");
    libEl.setAttribute("class", "bookCard");

    //render book to dom element
    let readStatusToggle = document.createElement("input:checkbox");
    for (let book of myLibrary) {
      libEl.innerHTML = `
    <li>Title :  ${book.title}</li>
    <li>Author : ${book.author}</li>
    <li>Pages :  ${book.pages}</li>
    <li class="readStat">Status : <button class="readStatBtn">${
      book.readStatus ? "Read" : "Not Read"
    }</li>
    <button class="removeBtn">Delete</button>`;

      library.appendChild(libEl);
    }
    //let add read status toggle
    let readStat = document.querySelector(".readStat");

    let readStatBtn = document.querySelectorAll(".readStatBtn");

    readStatBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.textContent === "Read") {
          // e.target.textContent = '';
          e.target.textContent = "Not Read";
        }
        if (e.target.textContent === "Not Read") {
          e.target.textContent = "Read";
        }
      });
      btn.style.cssText = `
        padding:5px;
        margin-left:1rem;
        background-color:rgb(186, 157, 206);
        cursor:pointer;
        border-radius:7px;
        `;
    });

    //now some styling
    let li = document.querySelectorAll("li");
    // li.style.listStyle = 'none';
    li.forEach((l) => (l.style.cssText = `margin-bottom:.7rem`));
    let removeBtn = document.querySelectorAll(".removeBtn");
    removeBtn.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        let p = e.target.parentNode;
        library.removeChild(p);
      })
    );
    removeBtn.forEach(
      (btn) =>
        (btn.style.cssText = `
    padding:7px 10px;
    background-color:red;
    width:100%;
    border-radius:7px;
    cursor:pointer;
    `)
    );

    library.style.cssText = `
    margin-top:5rem;
    width: 90%;
    padding: 1rem 2rem;
    background-color: #ddd3d3;
    color: #010101;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    gap:1.5rem;
    margin-inline:auto;
    `;

    libEl.style.cssText = `
    width:270px;
    background-color:#9f9f9f;
    color:black;
    border-radius:7px;
    padding:1rem 0.7rem;
    `;
  });
}
addBookToLibrary();

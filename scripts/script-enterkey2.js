const body = document.querySelector("body"),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

/*hierboven code amber*/

bookpage();
showFormsCheckboxes(".filter__collapsible-books", ".filter__collaps-open-function-books");
showFormsCheckboxes(".filter__collapsible-books-second", ".filter__collaps-open-funtion-books-second");
showFormsCheckboxes(".filter__collapsible-books-third", ".filter__collaps-open-funtion-books-third");
ShowBooks();/*checkgrid zit in showresults*/
searchBooks();
eventsClick('.i--search','#form__input-searchfunciton');
addList('.add-reading-list', "uw boek is toegevegd aan de leeslijst lijst\n", '.figure-image-title-book__title-book-link');
addList('.add-reading-dvd', "uw dvd is toegevegd aan de dvd lijst\n", '.figure-image-title-book__title-book-link');

function bookpage () {
    let button = document.querySelector('.button-books');
    if(button){
        button.addEventListener('click', () => {
            window.location.href = "boete.index.html";/*https://developer.mozilla.org/en-US/docs/web/api/window/location*/
        });
    }
}
function ShowGridContainer (){
    let divresultsGrid = document.querySelector('.grid-container-filter');
    divresultsGrid.style.display = 'grid';
    divresultsGrid.scrollIntoView({/*sroll to the queryselector*/
        behavior: "smooth"/*https://developer.mozilla.org/en-US/docs/web/api/element/scrollintoview*/
    });
}
function ShowBooks () {
    let buttonicon = document.querySelector('.i--search')
    buttonicon.addEventListener('click', () => {
        ShowGridContainer();
    })
    document.querySelector('#form__input-searchfunciton').addEventListener('keydown', (click) => {
        if (click.key === "Enter") {
            click.preventDefault();
            ShowGridContainer();
        }
    });
}
function showFormsCheckboxes(buttonSelect, formSelect) {/*use parameter*/
    // selecteer elementen
    let formCheckbox = document.querySelector(formSelect);/*formCheckbox is the ame with 3 forms */
    let buttonform = document.querySelector(buttonSelect);
    // formCheckbox.style.transition = "opacity " + "0.1s ease-out";/*css transition add*/
    if(buttonform){
        console.log(`check of deze button bestaan: ${buttonform.textContent}`)
        buttonform.addEventListener('click', () => {/*when click 1 button do :*/
            formCheckbox.style.transition = "opacity " + "0.1s ease-out";/*css transition add*/
            if (formCheckbox.style.display === "none") {/*if proporty is set to none*/
                formCheckbox.style.display = "block";/*set it to blick*/
            } else {
                formCheckbox.style.display = "none";/*https://www.w3schools.com/js/js_function_parameters.asp*//*https://www.w3schools.com/js/js_function_definition.asp*/
            }/*keep it to block*/
        });
    }

}

function searchBooks () {
    let listbooks = document.querySelectorAll('.hide-li-sign');
    let inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();/*save search and keep in mind capital letters*/
    listbooks.forEach(li => {/*for loop throug all li items with a specific class */
        let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');/*variable bookclasses with a specific class on the li*/
        if (bookclasses) {/*checken of variabe exist*/
            let titleBook = bookclasses.textContent || bookclasses.innerText;/*content of book or innertext save in variable titlebook*/
            // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/touppercase

            if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*check on capitalletters and of search equal is to the title of book*/
                // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/indexof

                li.style.display = "";/*empyt li because the name of book is going in the string*/
                li.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                li.style.display = "none";/*if not found display none*/

            }
        }
    })
}
function eventsClick (button) {
    let buttonicon = document.querySelector(button)
    buttonicon.addEventListener('click', () => {
        searchBooks();
    })

    document.querySelector('#form__input-searchfunciton').addEventListener('keydown', (click) => {
        if (click.key === "Enter") {
            click.preventDefault();
            searchBooks();
        }
    });

}// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
function addList  (button, message, books) {
    let buttons = document.querySelectorAll(button);/*select all buttons with specific class*/
    let bookTitles = document.querySelectorAll(books);/*select booktitles with specific class*/
    let displayListBooks = [];
    let list = document.querySelector(".arrayreadlist");

    let removeButton = document.querySelector('.remove-readinglist');
    let showreadinglist = document.querySelector(".readinglist");
    console.log(`laat de readinglist zien dus de leeslijst: ${showreadinglist}`);
    buttons.forEach((button, book) => {/*forloop through all buttons of the nodelist and use 2 calbackfunctions*/
        /*book is 1 book every time from the 18 loops total because there are 18 books*/
        button.addEventListener('click', () => {/*click event if 1 button is pressed from all buttons*/
            console.log(`Button clicked: ${button.textContent}`);/*show button and the content*/
            button.disabled = true;/*make button not clicalble*/
            button.textContent = message;/*show the message*/
            button.classList.add('afterclick');/*give this css proporties to the */
            // console.log(`${book}:booknummer`);/*log the number of the nodelist*/

            let bookTitle = bookTitles[book].textContent;/*store the content of the book in a booktitle the booktitles are 18 books and book is 1 book every time*/
            displayListBooks.push(bookTitle); // Push the title of book to the array
            console.log(`array: ${displayListBooks}`);/*show the array*/

            showreadinglist.scrollIntoView({
                behavior: "smooth"
            });

            list.innerHTML = '';/*exmpty list*/
            // https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/#method-1-using-the-for-loop
            displayListBooks.forEach(book => {/*loop throug array*/
                let li = document.createElement('li');/*make a li element*/
                li.textContent = book;/*put title of book in variable of li*/
                list.appendChild(li);/*add li to list which is a ul */
            })
            // removeButton.addEventListener('click', () => {
            //   /*if click on bin button remove the book of the displaylsistbooks
            //   * remove the button with : uw boek is toegevaad aan */
            //
            // })

        });
    });
}

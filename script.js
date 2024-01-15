ShowBooks();
function ShowBooks () {
    let buttonicon = document.querySelector('.hamburger-icon');
    buttonicon.addEventListener('click', () => {

        let menu = document.querySelector('.menu-ul');
        if (menu.style.display === "none") {/*if proporty is set to none*/
            menu.style.display = "block";/*set it to blick*/
        } else {
            menu.style.display = "none";/*https://www.w3schools.com/js/js_function_parameters.asp*//*https://www.w3schools.com/js/js_function_definition.asp*/
        }/*keep it to block*/
    })
}

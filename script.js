ShowBooks();
function ShowBooks () {
    let buttonicon = document.querySelector('.hamburger-icon');
    buttonicon.addEventListener('click', () => {

        let menu = document.querySelector('.menu-ul');
        menu.classList.toggle('menu-ul-open');

    })
}

ShowHamburgerMenu();
ShowMoreText();
function ShowHamburgerMenu () {
    let buttonicon = document.querySelector('.hamburger-icon');
    buttonicon.addEventListener('click', () => {

        let menu = document.querySelector('.menu-ul');
        menu.classList.toggle('menu-ul-open');

    })
}
function ShowMoreText(){
    let buttonFullDescription = document.querySelector('.full-description');
    buttonFullDescription.addEventListener('click', () => {

        let menu = document.querySelector('.hide-description');
        console.log(menu);
        menu.classList.toggle('open-description');

    })
}

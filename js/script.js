const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click',() => {
    toggleMenu();

});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {

        nav.style.display = 'none';
    }
}

var button = document.querySelector('.bnt')

button.addEventListener('click', function() {
    var sobre = document.querySelector('.sobre-content');
    sobre.classList.toggle('active');

    if (sobre.classList.contains('active')) {
        return button.textContent = 'Read Less';
    }

    button.textContent = 'Read more';
})

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

document.querySelectorAll('.btn-leia-mais').forEach(button => {
    button.addEventListener('click', () => {
        const resumo = button.previousElementSibling; 
        resumo.classList.toggle('expanded'); 

        if (resumo.classList.contains('expanded')) {
            button.innerText = 'Leia Menos';

        } else {
            button.innerText = 'Leia Mais';
        }
    });
});


document.querySelector('.btn_download').addEventListener('click', function() {

    const filePath = './curriculo/Stefanie_Martins.pdf';

    const link = document.createElement('a');

    link.href = filePath;
    
    link.download = 'Curriculo_Stefanie_Martins'; 

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
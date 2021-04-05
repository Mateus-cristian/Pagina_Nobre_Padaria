export default function initMenuMobile() {


    const botao = document.querySelector('.mobile-btn');
    const menu = document.querySelector('.menu ul');

    botao.addEventListener("click", ativarMenu);

    function ativarMenu() {
        menu.classList.toggle('active')
    }



}
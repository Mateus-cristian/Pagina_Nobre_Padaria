//Este script foi feito para substituir o modules pois para ele rodar precisa de um servidor esse aqui é só para teste das funções

//Função para Mostar uma mensagem conforme o dia da semana
//dependendo do dia da semana na máquina ele mostra uma mensagem para cada dia

var dia = document.querySelector('[data-dia="semana"]');

var diadasemana = new Array("Um domingo Especial", "Uma ótima Segunda-Feira", "Uma linda Terça-Feira", "Uma maravilhosa Quarta-Feira", " Uma encantadora Quinta-Feira", "Uma abençoada Sexta-Feira", "Um Sábado sensacional")
var data = new Date;

function mostrarDia() {
    dia.innerText = (diadasemana[data.getDay()]);
}
mostrarDia()

//Função que ativa o menu hamburguer no mobile

const botao = document.querySelector('.mobile-btn');
const menu = document.querySelector('.menu ul');

botao.addEventListener("click", ativarMenu);

function ativarMenu() {
    menu.classList.toggle('active')
}

const linksInternos = document.querySelectorAll('a[href ^= "#"]');

//Função para dar um scroll suave ao site

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
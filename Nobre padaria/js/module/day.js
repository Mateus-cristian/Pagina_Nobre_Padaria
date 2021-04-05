export default function initDay() {

    //Função para Mostar uma mensagem conforme o dia da semana
    //dependendo do dia da semana na máquina ele mostra uma mensagem para cada dia

    var dia = document.querySelector('[data-dia="semana"]');

    var diadasemana = new Array("Um domingo Especial", "Uma ótima Segunda-Feira", "Uma linda Terça-Feira", "Uma maravilhosa Quarta-Feira", " Uma encantadora Quinta-Feira", "Uma abençoada Sexta-Feira", "Um Sábado sensacional")
    var data = new Date;

    function mostrarDia() {
        dia.innerText = (diadasemana[data.getDay()]);
    }
    mostrarDia()
}
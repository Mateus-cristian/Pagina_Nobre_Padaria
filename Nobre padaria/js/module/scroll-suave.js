export default function initScrollSuave() {
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
}
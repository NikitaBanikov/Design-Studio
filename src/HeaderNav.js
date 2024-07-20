export function HeaderNav() {
    const headerNavLinks = document.querySelectorAll('.header-nav__link');

    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            headerNavLinks.forEach(l => {
                l.classList.remove('emphasized');
            });
            e.target.classList.add('emphasized');
        })
    })
}
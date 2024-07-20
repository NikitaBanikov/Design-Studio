import { data } from './photoData.js';

export async function stylesNav() {
    const designStyles = document.querySelectorAll('.fantasies-list__element');
    const stylesData = JSON.parse(data).list;

    const img1 = document.querySelector('.fantasies-img1');
    const img2 = document.querySelector('.fantasies-img2');
    const img3 = document.querySelector('.fantasies-img3');
    const img4 = document.querySelector('.fantasies-img4');

    designStyles.forEach(style => {
        style.addEventListener('click', (e) => {
            designStyles.forEach(s => {
                s.classList.remove('detailed');
            });

            e.target.classList.add('detailed');
            
            const selectedStyle = e.target.textContent.trim();
            const styleData = stylesData.find(s => s.style === selectedStyle);
            if (styleData && styleData.images.length >= 4) {
                [img1, img2, img3, img4].forEach((img, index) => {
                    img.classList.remove('loaded');
                    setTimeout(() => {
                        img.style.backgroundImage = `url(${styleData.images[index]})`;
                        img.classList.add('loaded');
                    }, 50);
                });
            } else {
                console.warn(`Недостаточно изображений для стиля ${selectedStyle}`);
            }
        });
    });
}




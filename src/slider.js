export function Slider() {
    const dots = document.querySelectorAll('.projects-menu__element');
    const links = document.querySelectorAll('.projects-list__link');
    const dotsArea = document.querySelector('.projects-menu__element-wrapper');
    const slides = document.querySelectorAll('.projects-photo');
    const prevBtn = document.querySelector('.projects-menu__img-left');
    const nextBtn = document.querySelector('.projects-menu__img-right');
    const cities = document.querySelectorAll('.description-element__subtitle.city');
    const apartmentAreas = document.querySelectorAll('.description-element__subtitle.area');
    const repairTimes = document.querySelectorAll('.description-element__subtitle.time');
    let slideIndex = 1;

    const showSlides = (n) => {
        if (n < 1) {
            slideIndex = slides.length;
        } else if (n > slides.length) {
            slideIndex = 1;
        }

        cities.forEach(city => city.style.display = 'none');
        apartmentAreas.forEach(area => area.style.display = 'none');
        repairTimes.forEach(time => time.style.display = 'none');
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active'));
        links.forEach(link => link.classList.remove('special'));

        cities[slideIndex - 1].style.display = 'block';
        apartmentAreas[slideIndex - 1].style.display = 'block';
        repairTimes[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('active-slide');
        dots[slideIndex - 1].classList.add('active');
        links[slideIndex - 1].classList.add('special');
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    const addEventListeners = () => {
        prevBtn.addEventListener('click', () => plusSlides(-1));
        nextBtn.addEventListener('click', () => plusSlides(1));

        dotsArea.addEventListener('click', (e) => {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide(index + 1);
                }
            });
        });

        links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentSlide(index + 1);
            });
        });
    }

    const startSlideShow = () => {
        slideInterval = setInterval(() => {
            plusSlides(1);
        }, 5000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlides(slideIndex);
        addEventListeners();
        startSlideShow();
    });
};
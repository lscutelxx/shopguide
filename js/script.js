const buttonNext = document.querySelector('.btn__next');
const buttonPrev = document.querySelector('.btn__prev');

const sliderNext = () => {
    let sliderInner = document.querySelector('.slider__inner');
    let slides = document.querySelectorAll('.slider__item');
    let firstSlide = slides[0];
    sliderInner.removeChild(firstSlide);
    sliderInner.appendChild(firstSlide);
}

const sliderPrev = () => {
    let sliderInner = document.querySelector('.slider__inner');
    let slides = document.querySelectorAll('.slider__item');
    let lastSlide = slides[slides.length - 1];
    sliderInner.removeChild(lastSlide);
    sliderInner.insertBefore(lastSlide, sliderInner.firstChild)
}

buttonNext.addEventListener('click', function(e) {
    e.preventDefault();
    sliderNext();
})

buttonPrev.addEventListener('click', function(e) {
    e.preventDefault();
    sliderPrev();
})




document.querySelectorAll('.phone__title').forEach((element) => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let phoneScreens = document.querySelectorAll('.phone__screen');
        let textDescription = document.querySelectorAll('.phone__descr')
        for (let i=0; i<=document.querySelectorAll('.phone__title').length-1; i++) {
            document.querySelectorAll('.phone__title')[i].classList.remove('phone__title--active'); /* Удаляем класс активность для всех элементов */
            phoneScreens[i].classList.remove('phone__screen--active');
            textDescription[i].classList.remove('phone__descr--active');
        }
        element.classList.add('phone__title--active'); /* Добавляем класс активности для нажатого элемента */
        if (element.parentElement.classList.contains('phone__item-favourites')) {
            phoneScreens[0].classList.add('phone__screen--active');
            textDescription[0].classList.add('phone__descr--active');
        } else if (element.parentElement.classList.contains('phone__item-profile')) {
            phoneScreens[1].classList.add('phone__screen--active');
            textDescription[1].classList.add('phone__descr--active');
        } else if (element.parentElement.classList.contains('phone__item-subscriptions')) {
            phoneScreens[2].classList.add('phone__screen--active');
            textDescription[2].classList.add('phone__descr--active');
        } else if (element.parentElement.classList.contains('phone__item-card')) {
            phoneScreens[3].classList.add('phone__screen--active');
            textDescription[3].classList.add('phone__descr--active');
        } else if (element.parentElement.classList.contains('phone__item-feed')) {
            phoneScreens[4].classList.add('phone__screen--active');
            textDescription[4].classList.add('phone__descr--active');
        }
    })
})

const scrollButton = document.querySelector('.down')
const scrollTarget = document.querySelector('.advantages');

scrollButton.addEventListener('click', function() {
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
});
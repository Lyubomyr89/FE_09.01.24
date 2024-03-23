$(document).ready(function () {
    const accBtns = $('.accordion__btn');
    const allAccordionBody = $('.accordion__body');
    const allAccordionBtn = $('.accordion__btn');

    accBtns.on('click', function (e) {
        const enableMultiOpen = false; // налаштування відкривання аккордеона. Мульти показ або показ тільки одного елементи
        const slideTime = 600; // Час відкриття та закривання елементу

        const currentBtn = $(this); // Отримуємо кнопку по якій здійснили клік
        const nextEl = currentBtn.next('.accordion__body'); // З допомогою методу next() отримуємо наступний елемент після кнопки. Так ми визначаємо який айтем показувати або приховувати.
        const accordionBody = $(nextEl); // Передаємо наступний елемент у функцію $(), щоб мати змогу використовувати методи jQuery.

        if (enableMultiOpen) { // Якщо змінна enableMultiOpen = true це означає, що ми отримаємо відкриватимемо кілька пунктів 

            accordionBody.slideToggle(slideTime);
            currentBtn.toggleClass('active');

        } else { // В іншому випадку, якщо змінна enableMultiOpen = false - це означає, що ми отримаємо відкриватимемо один пунктів 

            if (currentBtn.hasClass('active')) { // Перевірка! Якщо клік відбувається по кнопці яка вже є активною, тобто містить клас active.
                
                allAccordionBody.slideUp(slideTime); // Виконуємо закриття елементу
                allAccordionBtn.removeClass('active'); //Видалення з кнопки класу active

            } else { // Якщо клік відбувається по кнопці яка не є активною, тобто не містить клас active.
                allAccordionBody.slideUp(slideTime); // Закриваємо усі активні елементи
                allAccordionBtn.removeClass('active'); //Видалення з усіх кнопок класу active
                
                currentBtn.addClass('active'); // Додаємо клас active до поточної кнопки
                accordionBody.slideDown(slideTime); // Показуємо елемент який розміщений після поточної кнопки 
            }
        }
    });
});
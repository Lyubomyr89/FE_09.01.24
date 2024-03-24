document.addEventListener('DOMContentLoaded', function () {
    const toggleMode = document.querySelector('#toggleMode');
    const html = document.querySelector('html');

    const input = document.querySelector('#set-title');
    const input2 = document.querySelector('#set-title2');

    const text = document.querySelector('.text');

    if (toggleMode) {

        toggleMode.addEventListener('click', function (e) {
            html.classList.toggle('dark');
        });

    } else {
        console.log('Елемент відсутній');
    }
    // ---------------------
});


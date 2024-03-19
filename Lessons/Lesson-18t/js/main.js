document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.toggleColorMode');
    const html = document.querySelector('html');

    btn.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
        } else {
            html.classList.add('dark');
        }
    })
});
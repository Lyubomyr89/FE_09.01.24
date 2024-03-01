document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');

    if (!headerContainer) return;

    fetch('../../page-parts/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        });

    const isHomePage = document.documentElement.classList.contains('home-page');

    setTimeout(() => {
        if (!isHomePage) return
        const menuLinks = document.querySelectorAll('.sub-menu a[href^="../Lesson"]');

        console.log(menuLinks);

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                // Запобігаємо стандартній поведінці
                event.preventDefault();

                // Визначаємо новий URL
                const newUrl = this.href.replaceAll('/Lesson-', '/Lessons/Lesson-');

                // Змінюємо href для посилання
                this.href = newUrl;

                // Опціонально: перенаправляємо користувача
                window.location.href = newUrl;
            });
        });
    }, 200);
});
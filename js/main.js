document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');

    if (!headerContainer) return;

    fetch('../page-parts/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        });

    setTimeout(() => {
        const menuLinks = document.querySelectorAll('.sub-menu a');

        console.log(menuLinks);

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                // Запобігаємо стандартній поведінці
                console.log('ds');
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
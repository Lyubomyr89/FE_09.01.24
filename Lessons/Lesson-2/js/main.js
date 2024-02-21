document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');

    if (!headerContainer) return;

    fetch('../../page-parts/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        });
});

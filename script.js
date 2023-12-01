function changePage(pageNumber) {
    const main = document.querySelector('main');
    main.classList.remove('move-right');
    main.classList.add(`home-page-${pageNumber}`);
}

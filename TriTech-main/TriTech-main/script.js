function changePage(pageNumber) {
    const main = document.querySelector('main');
    main.classList.remove('move-right');
    main.classList.add(`home-page-${pageNumber}`);
}

function fetchAndShowContent() {
    // Make an API request (replace 'your-api-endpoint' with the actual API endpoint)
    fetch('your-api-endpoint')
        .then(response => response.json())
        .then(data => {
            // Assuming the API response contains the content you want to display
            // Update the main content with the fetched data
            document.querySelector('.main').innerHTML = '<h2>Getting Started</h2>' + data.content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}


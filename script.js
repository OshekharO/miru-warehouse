fetch('https://raw.githubusercontent.com/miru-project/repo/main/index.json')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('data-container');
        renderData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function renderData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.icon;
        img.alt = `${item.name} icon`;

        img.onerror = function() {
            img.src = 'https://shorturl.at/nCEY1';
        };

        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Author: ${item.author}</p>
        `;

        card.appendChild(img);
        card.appendChild(contentDiv);
        dataContainer.appendChild(card);
    });
}

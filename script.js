document.getElementById('generateButton').addEventListener('click', function() {
    fetch('https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt')
    .then(response => response.text())
    .then(data => {
        const suggestions = data.split('\n');
        const randomIndex = Math.floor(Math.random() * suggestions.length);
        const randomSuggestion = suggestions[randomIndex];
        document.getElementById('suggestion').innerText = randomSuggestion;
    })
    .catch(error => console.error('Error:', error));
});

const locations = ['New York', 'Tokyo', 'Paris', 'London', 'Los Angeles', 'Sydney', 'Berlin', 'Toronto', 'Singapore', 'Moscow'];

document.getElementById('locationButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * locations.length);
    const randomLocation = locations[randomIndex];
    document.getElementById('location').innerText = randomLocation;
});


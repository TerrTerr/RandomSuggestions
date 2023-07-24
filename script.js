document.getElementById('generateButton').addEventListener('click', function() {
    fetch('https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/')
        .then(response => response.text())
        .then(data => {
            // Parse the HTML and extract the words
            // This part would be more complex in reality
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const wordElements = doc.querySelectorAll('.word');
            const suggestions = Array.from(wordElements).map(el => el.textContent);
            
            const randomIndex = Math.floor(Math.random() * suggestions.length);
            const randomSuggestion = suggestions[randomIndex];
            
            document.getElementById('suggestion').innerText = randomSuggestion;
        })
        .catch(error => console.error('Error:', error));
});

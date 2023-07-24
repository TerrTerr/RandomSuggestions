document.getElementById('generateButton').addEventListener('click', function() {
    fetch('https://www.mit.edu/~ecprice/wordlist.10000')
        .then(response => response.text())
        .then(data => {
            const suggestions = data.split('\n'); // split the text into an array of lines/words
            
            const randomIndex = Math.floor(Math.random() * suggestions.length);
            const randomSuggestion = suggestions[randomIndex];
            
            document.getElementById('suggestion').innerText = randomSuggestion;
        })
        .catch(error => console.error('Error:', error));
});
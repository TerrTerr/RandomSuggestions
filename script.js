document.getElementById('generateButton').addEventListener('click', function() {
    const suggestions = ['banana', 'airplane', 'violin', 'sandwich', 'butterfly', 
                         'parade', 'robot', 'rainbow', 'unicorn', 'volcano', 
                         'museum', 'elephant', 'spaceship', 'mermaid', 'wizard'];
    
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const randomSuggestion = suggestions[randomIndex];

    document.getElementById('suggestion').innerText = randomSuggestion;
});
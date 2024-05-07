let currentWord = '';

async function getWord() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your dictionary API key
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/random`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        currentWord = data[0].word;
        return data[0].word;
    } catch (error) {
        console.error('Failed to fetch word:', error);
        return null;
    }
}

function displayWord(word) {
    const wordDiv = document.getElementById('word');
    wordDiv.textContent = word;
}

function checkAnswer() {
    const answerInput = document.getElementById('answerInput');
    const answer = answerInput.value.trim().toLowerCase();

    if (answer === currentWord.toLowerCase()) {
        displayResult('Correct!', 'green');
    } else {
        displayResult('Incorrect. Try again!', 'red');
    }

    answerInput.value = '';
    getNewWord();
}

function displayResult(message, color) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.style.color = color;
}

async function getNewWord() {
    const word = await getWord();
    displayWord(word);
    displayResult('', 'green'); // Clear previous result
}

document.addEventListener('DOMContentLoaded', () => {
    getNewWord();
});

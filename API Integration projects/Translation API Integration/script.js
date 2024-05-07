const translateBtn = document.getElementById('translate-btn');
const textInput = document.getElementById('text-input');
const translationResult = document.getElementById('translation-result');

async function translateText() {
    const text = textInput.value.trim();
    if (!text) {
        alert('Please enter text to translate.');
        return;
    }

    try {
        const response = await fetch('https://api.funtranslations.com/translate/shakespeare.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        if (data.success.total > 0) {
            translationResult.textContent = data.contents.translated;
        } else {
            translationResult.textContent = 'Translation failed. Please try again later.';
        }
    } catch (error) {
        console.error('Error translating text:', error);
        translationResult.textContent = 'Translation failed. Please try again later.';
    }
}

translateBtn.addEventListener('click', translateText);

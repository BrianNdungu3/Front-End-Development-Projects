const challengeDescription = document.getElementById('challenge-description');
const codeEditor = document.getElementById('code-editor');
const runButton = document.getElementById('run-button');
const outputConsole = document.getElementById('output-console');

// Sample coding challenge
const challenge = {
    description: 'Write a function to calculate the factorial of a number.',
    solution: 'function factorial(n) {\n    if (n === 0 || n === 1) {\n        return 1;\n    } else {\n        return n * factorial(n - 1);\n    }\n}',
    expectedOutput: 'factorial(5) should return 120.'
};

// Display challenge description and initial code in code editor
challengeDescription.textContent = challenge.description;
codeEditor.textContent = challenge.solution;

// Event listener for run button
runButton.addEventListener('click', runCode);

// Function to run the code
function runCode() {
    // Clear previous output
    outputConsole.innerHTML = '';
    try {
        // Evaluate user's code
        const userCode = codeEditor.textContent;
        const result = eval(userCode);
        // Display output
        outputConsole.textContent = 'Output: ' + result;
    } catch (error) {
        // Display error message
        outputConsole.textContent = 'Error: ' + error.message;
    }
}

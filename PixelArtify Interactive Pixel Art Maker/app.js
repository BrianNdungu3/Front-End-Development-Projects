const canvasContainer = document.getElementById('canvas-container');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const pixelSize = 10;
const numRows = 40;
const numCols = 40;

// Set canvas dimensions based on pixel size and number of rows/columns
canvas.width = pixelSize * numCols;
canvas.height = pixelSize * numRows;

// Initialize grid
const grid = [];
for (let i = 0; i < numRows; i++) {
    grid[i] = [];
    for (let j = 0; j < numCols; j++) {
        grid[i][j] = false; // Initialize all pixels as white (false)
    }
}

// Draw initial grid
drawGrid();

// Add event listeners for mouse interaction
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mousedown', handleMouseDown);

// Function to draw grid
function drawGrid() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            ctx.fillStyle = grid[i][j] ? '#000' : '#fff'; // Set pixel color
            ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize, pixelSize); // Draw pixel
        }
    }
}

// Function to handle mouse move event
function handleMouseMove(event) {
    if (event.buttons === 1) { // Check if left mouse button is pressed
        const rect = canvas.getBoundingClientRect();
        const mouseX = Math.floor((event.clientX - rect.left) / pixelSize);
        const mouseY = Math.floor((event.clientY - rect.top) / pixelSize);
        if (mouseX >= 0 && mouseX < numCols && mouseY >= 0 && mouseY < numRows) {
            grid[mouseY][mouseX] = true; // Set pixel as black (true)
            drawGrid(); // Redraw grid
        }
    }
}

// Function to handle mouse down event
function handleMouseDown(event) {
    event.preventDefault(); // Prevent default browser behavior (e.g., text selection)
}

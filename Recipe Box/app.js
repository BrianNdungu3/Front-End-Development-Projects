const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const mainContent = document.getElementById('main-content');

// Event listener for search form submission
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        searchRecipes(searchTerm);
    } else {
        alert('Please enter a search term');
    }
});

// Function to search for recipes
async function searchRecipes(searchTerm) {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=YOUR_API_KEY`);
        const data = await response.json();
        displayRecipes(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display recipes
function displayRecipes(recipes) {
    mainContent.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <button onclick="viewRecipeDetails(${recipe.id})">View Details</button>
        `;
        mainContent.appendChild(recipeCard);
    });
}

// Function to view recipe details
async function viewRecipeDetails(recipeId) {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=YOUR_API_KEY`);
        const recipe = await response.json();
        displayRecipeDetails(recipe);
    } catch (error) {
        console.error('Error fetching recipe details:', error);
    }
}

// Function to display recipe details
function displayRecipeDetails(recipe) {
    const recipeDetails = document.createElement('div');
    recipeDetails.classList.add('recipe-details');
    recipeDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
        <button onclick="saveRecipe('${recipe.id}')">Save to Recipe Box</button>
    `;
    mainContent.innerHTML = '';
    mainContent.appendChild(recipeDetails);
}

// Function to save recipe to recipe box
function saveRecipe(recipeId) {
    // Implement saving to local storage or database
    alert('Recipe saved to Recipe Box');
}

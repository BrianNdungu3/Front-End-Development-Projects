async function searchRecipes() {
    const ingredientInput = document.getElementById('ingredientInput');
    const ingredient = ingredientInput.value.trim();

    if (ingredient === '') {
        alert('Please enter at least one ingredient.');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your Spoonacular API key
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const recipes = await response.json();

        displayRecipes(recipes);
    } catch (error) {
        showError('Failed to fetch recipes. Please try again later.');
    }
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    if (recipes.length === 0) {
        showError('No recipes found.');
        return;
    }

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Missing Ingredients: ${recipe.missedIngredientCount}</p>
            <p>Used Ingredients: ${recipe.usedIngredientCount}</p>
        `;
        recipeList.appendChild(recipeDiv);
    });
}

function showError(message) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = `<p class="error">${message}</p>`;
}

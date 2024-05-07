async function searchRecipes() {
    const ingredientInput = document.getElementById('ingredientInput');
    const ingredients = ingredientInput.value.trim().split(',');

    if (ingredients.length === 0) {
        alert('Please enter at least one ingredient.');
        return;
    }

    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const recipes = await response.json();

        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = '';

        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>Missing ingredients: ${recipe.missedIngredientCount}</p>
            `;
            recipeList.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error('Error fetching recipe data:', error);
        alert('Failed to fetch recipe data. Please try again later.');
    }
}

const recipeContainer = document.getElementById('recipe');
const getRecipeBtn = document.getElementById('get-recipe-btn');

async function fetchRecipe() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const recipe = data.meals[0];
        recipeContainer.innerHTML = `
            <h2>${recipe.strMeal}</h2>
            <p>${recipe.strInstructions}</p>
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        `;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        recipeContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getRecipeBtn.addEventListener('click', fetchRecipe);

// Initial fetch
fetchRecipe();

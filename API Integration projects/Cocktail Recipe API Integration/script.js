const cocktailContainer = document.getElementById('cocktail');
const getCocktailBtn = document.getElementById('get-cocktail-btn');

async function fetchCocktail() {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const cocktail = data.drinks[0];
        cocktailContainer.innerHTML = `
            <h2>${cocktail.strDrink}</h2>
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
            <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${getIngredients(cocktail)}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching cocktail:', error);
        cocktailContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

function getIngredients(cocktail) {
    let ingredients = '';
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients += `<li>${measure} ${ingredient}</li>`;
        }
    }
    return ingredients;
}

getCocktailBtn.addEventListener('click', fetchCocktail);

// Initial fetch
fetchCocktail();

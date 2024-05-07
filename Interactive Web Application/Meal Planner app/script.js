async function generateShoppingList() {
    const meals = document.querySelectorAll('.meal');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const shoppingList = {};

    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const mealInputs = meals[i * 3];
        
        shoppingList[day] = [];

        for (let j = 0; j < 3; j++) {
            const meal = mealInputs.value.trim();

            if (meal !== '') {
                const recipes = await searchRecipes(meal);
                if (recipes.length > 0) {
                    shoppingList[day].push(...recipes);
                }
            }

            mealInputs = mealInputs.nextElementSibling;
        }
    }

    displayShoppingList(shoppingList);
}

async function searchRecipes(query) {
    // Use an external API to search for recipes based on the query
    // For demonstration purposes, let's assume we're getting sample data
    const response = await fetch(`https://api.example.com/recipes?q=${query}`);
    const data = await response.json();
    return data.results;
}

function displayShoppingList(shoppingList) {
    const shoppingListElement = document.getElementById('shoppingList');
    shoppingListElement.innerHTML = '';

    for (const day in shoppingList) {
        if (shoppingList.hasOwnProperty(day) && shoppingList[day].length > 0) {
            const dayHeading = document.createElement('h2');
            dayHeading.textContent = day;
            shoppingListElement.appendChild(dayHeading);

            const ul = document.createElement('ul');
            shoppingList[day].forEach(recipe => {
                const li = document.createElement('li');
                li.textContent = recipe.title;
                ul.appendChild(li);
            });
            shoppingListElement.appendChild(ul);
        }
    }
}

const recipes = [
    { title: "Pancakes", category: "breakfast" },
    { title: "Spaghetti Carbonara", category: "lunch" },
    { title: "Grilled Salmon", category: "dinner" },
    { title: "Omelette", category: "breakfast" },
    { title: "Caesar Salad", category: "lunch" },
    { title: "Roast Chicken", category: "dinner" },
];

const recipeList = document.getElementById('recipeList');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display all recipes initially
displayRecipes(recipes);

// Filter recipes based on category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const filteredRecipes = category === 'all' ? recipes : recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
    });
});

// Display recipes
function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>Category: ${recipe.category}</p>
        `;
        recipeList.appendChild(recipeCard);
    });
}

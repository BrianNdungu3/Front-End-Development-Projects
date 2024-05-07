document.addEventListener('DOMContentLoaded', () => {
    displayHabits();
});

function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habitText = habitInput.value.trim();

    if (habitText === '') {
        alert('Please enter a habit.');
        return;
    }

    const habitList = document.getElementById('habitList');

    const habitDiv = document.createElement('div');
    habitDiv.classList.add('habit');
    habitDiv.innerHTML = `
        <label>${habitText}</label>
        <input type="checkbox" onclick="toggleHabit(this)">
    `;
    habitList.appendChild(habitDiv);

    saveHabit(habitText);

    habitInput.value = '';
}

function toggleHabit(checkbox) {
    const habitText = checkbox.previousElementSibling.textContent;
    const habits = getHabits();

    habits.forEach(habit => {
        if (habit.text === habitText) {
            habit.completed = checkbox.checked;
        }
    });

    localStorage.setItem('habits', JSON.stringify(habits));
}

function saveHabit(text) {
    const habits = getHabits();
    habits.push({ text, completed: false });
    localStorage.setItem('habits', JSON.stringify(habits));
}

function getHabits() {
    return JSON.parse(localStorage.getItem('habits')) || [];
}

function displayHabits() {
    const habitList = document.getElementById('habitList');
    habitList.innerHTML = '';

    const habits = getHabits();

    habits.forEach(habit => {
        const habitDiv = document.createElement('div');
        habitDiv.classList.add('habit');
        habitDiv.innerHTML = `
            <label>${habit.text}</label>
            <input type="checkbox" ${habit.completed ? 'checked' : ''} onclick="toggleHabit(this)">
        `;
        habitList.appendChild(habitDiv);
    });
}

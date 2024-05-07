document.addEventListener('DOMContentLoaded', () => {
    displayExpenses();
});

function addExpense() {
    const expenseDesc = document.getElementById('expenseDesc').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value.trim());
    const expenseCategory = document.getElementById('expenseCategory').value;

    if (expenseDesc === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid description and amount for the expense.');
        return;
    }

    const expense = {
        id: Date.now(),
        description: expenseDesc,
        amount: expenseAmount,
        category: expenseCategory
    };

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    displayExpenses();

    // Clear input fields
    document.getElementById('expenseDesc').value = '';
    document.getElementById('expenseAmount').value = '';
}

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenses.forEach(expense => {
        const expenseDiv = document.createElement('div');
        expenseDiv.classList.add('expense');
        expenseDiv.innerHTML = `
            <p>Description: ${expense.description}</p>
            <p>Amount: $${expense.amount.toFixed(2)}</p>
            <p class="category">Category: ${expense.category}</p>
        `;
        expenseList.appendChild(expenseDiv);
    });
}

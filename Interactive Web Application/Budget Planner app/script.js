const expenses = [];

document.addEventListener('DOMContentLoaded', () => {
    updateChart();
});

function addExpense() {
    const expenseName = document.getElementById('expenseName').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    const expenseCategory = document.getElementById('expenseCategory').value;

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid expense details.');
        return;
    }

    expenses.push({ name: expenseName, amount: expenseAmount, category: expenseCategory });

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';

    updateChart();
}

function updateChart() {
    const categories = ['Food', 'Transportation', 'Entertainment', 'Housing', 'Utilities', 'Other'];
    const categoryExpenses = Array.from({ length: categories.length }, () => 0);

    expenses.forEach(expense => {
        const index = categories.indexOf(expense.category.charAt(0).toUpperCase() + expense.category.slice(1));
        if (index !== -1) {
            categoryExpenses[index] += expense.amount;
        }
    });

    const expenseChart = document.getElementById('expenseChart').getContext('2d');
    const chart = new Chart(expenseChart, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: categoryExpenses,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#9966ff', '#4bc0c0']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 14,
                    padding: 10
                }
            }
        }
    });
}

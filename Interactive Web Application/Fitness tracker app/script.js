const exercises = [];

document.addEventListener('DOMContentLoaded', () => {
    updateChart();
});

function logExercise() {
    const exerciseInput = document.getElementById('exerciseInput').value.trim();
    const durationInput = parseFloat(document.getElementById('durationInput').value);

    if (exerciseInput === '' || isNaN(durationInput) || durationInput <= 0) {
        alert('Please enter valid exercise details.');
        return;
    }

    exercises.push({ name: exerciseInput, duration: durationInput });

    document.getElementById('exerciseInput').value = '';
    document.getElementById('durationInput').value = '';

    updateChart();
}

function updateChart() {
    const exerciseLabels = exercises.map(exercise => exercise.name);
    const exerciseData = exercises.map(exercise => exercise.duration);

    const exerciseChart = document.getElementById('exerciseChart').getContext('2d');
    const chart = new Chart(exerciseChart, {
        type: 'bar',
        data: {
            labels: exerciseLabels,
            datasets: [{
                label: 'Exercise Duration (minutes)',
                data: exerciseData,
                backgroundColor: '#007bff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 10,
                }
            }
        }
    });
}

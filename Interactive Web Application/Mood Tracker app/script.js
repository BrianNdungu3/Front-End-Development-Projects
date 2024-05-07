// Sample data for demonstration
const sampleData = [
    { date: '2022-01-01', mood: 'happy', activities: 'Had a great day' },
    { date: '2022-01-02', mood: 'sad', activities: 'Missed a deadline' },
    { date: '2022-01-03', mood: 'angry', activities: 'Traffic jam on the way to work' },
    { date: '2022-01-04', mood: 'relaxed', activities: 'Enjoyed a peaceful evening' },
    { date: '2022-01-05', mood: 'stressed', activities: 'Workload piling up' },
    { date: '2022-01-06', mood: 'excited', activities: 'Going on vacation!' },
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Chart.js
    const moodChart = document.getElementById('moodChart').getContext('2d');
    const chart = new Chart(moodChart, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Mood Trend',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                tension: 0.3,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            return ['😡', '😞', '😩', '😌', '😊', '😁'][value];
                        }
                    }
                }
            }
        }
    });

    // Load sample data
    loadSampleData();
});

function loadSampleData() {
    // Extract mood data from sample data
    const moodData = sampleData.map(entry => entry.mood);

    // Update chart with sample data
    updateChart(moodData);
}

function logMood() {
    const moodSelect = document.getElementById('moodSelect');
    const activityInput = document.getElementById('activityInput');

    const mood = moodSelect.value;
    const activities = activityInput.value.trim();

    // Log mood entry (for demonstration only)
    console.log('Mood:', mood);
    console.log('Activities:', activities);

    // Clear input fields
    moodSelect.value = '';
    activityInput.value = '';

    // Update chart (for demonstration only)
    const moodData = [mood, ...sampleData.map(entry => entry.mood)];
    updateChart(moodData);
}

function updateChart(data) {
    // Update chart data
    const chart = Chart.getChart('moodChart');
    chart.data.labels = Array.from({ length: data.length }, (_, i) => i + 1);
    chart.data.datasets[0].data = data.map(moodToIndex);
    chart.update();
}

function moodToIndex(mood) {
    const moodIndexMap = {
        'angry': 0,
        'sad': 1,
        'stressed': 2,
        'relaxed': 3,
        'happy': 4,
        'excited': 5,
    };
    return moodIndexMap[mood];
}

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const addEventBtn = document.getElementById('add-event-btn');

    // Event listener for opening modal
    document.addEventListener('click', event => {
        if (event.target.classList.contains('add-event')) {
            modal.style.display = 'block';
        }
    });

    // Event listener for closing modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Event listener for adding event
    addEventBtn.addEventListener('click', () => {
        const eventTitle = document.getElementById('event-title').value;
        const eventDate = document.getElementById('event-date').value;
        if (eventTitle.trim() !== '' && eventDate.trim() !== '') {
            addEvent(eventTitle, eventDate);
            modal.style.display = 'none';
            document.getElementById('event-title').value = '';
            document.getElementById('event-date').value = '';
        } else {
            alert('Please enter event title and date.');
        }
    });

    // Function to add event to timeline
    function addEvent(title, date) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${date}</p>
        `;
        timeline.appendChild(eventDiv);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayNotes();
});

function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Please enter a note.');
        return;
    }

    const note = {
        id: Date.now(),
        text: noteText
    };

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();

    noteInput.value = '';
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note.text;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteNote(note.id);
        li.appendChild(deleteButton);

        noteList.appendChild(li);
    });
}

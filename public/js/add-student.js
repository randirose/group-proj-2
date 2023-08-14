// front end for when user adds a new student

const addButton = document.querySelector('.new-student-form');

const newStudentHandler = async(event)=>{
    event.preventDefault();

    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const grade = document.querySelector('#inputGrade').value.trim();
    const staffId = document.querySelector('#inputStaff').dataset.id;
    const notes = document.querySelector('#inputNotes').value.trim();
    

    if (firstName && lastName && grade && staffId) {
        const response = await fetch('/api/student', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, grade, staffId, notes }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Sorry, failed to create new blog post');
        }
    }
};

addButton.addEventListener('submit', newStudentHandler);


// FE code to update student info

const editButton = document.querySelector('#edit-student-form');

const updateStudentHandler = async(event)=>{
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('#inputLastName').value.trim();
    const grade = document.querySelector('#inputGrade').value.trim();
    const staffId = document.querySelector('#inputStaff').value;
    const notes = document.querySelector('#inputNotes').value.trim();
    const id = document.querySelector('input[name="student-id"]').value;

        const response = await fetch(`/api/student/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ firstName, lastName, grade, staffId, notes }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(response);
            document.location.replace('/dashboard');
        } else {
            alert('Sorry, failed to update student');
        }
    };

editButton.addEventListener('submit', updateStudentHandler);


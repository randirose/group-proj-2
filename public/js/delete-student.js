// fe code to delete student by id

const delButton = document.getElementById('deleteBtn');
const delStudentHandler = async (event) => {
    event.preventDefault();
    const id = delButton.dataset.id;

    const response = await fetch(`/api/student/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Sorry, failed to delete blog post');
    }
};
delButton.addEventListener('click', delStudentHandler);
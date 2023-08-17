//code to update a staff profile
const editStaff = document.querySelector('.edit-staff-form');

const updateStaffHandler = async function(event) {
    event.preventDefault();
    

    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const role = document.querySelector('#inputRole').value.trim();
    const schoolId = document.querySelector('#inputSchool').value;
    const isAdmin = document.querySelector('#gridCheck').checked;
    console.log(isAdmin);
    const id = editStaff.dataset.id;
  
    const response = await fetch(`/api/staff/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role,
        schoolId,
        isAdmin,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    // console.log(schoolId);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update profile');
    }
  };
  

    editStaff.addEventListener('submit', updateStaffHandler);
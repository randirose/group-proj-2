// FE to signup new staff member

const signupFormHandler = async function(event) {
    event.preventDefault();
    

    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const role = document.querySelector('#inputRole').value.trim();
    const schoolId = document.querySelector('#inputSchool').value;
    const isAdmin = document.querySelector('#gridCheck').checked;
    console.log(isAdmin);
  
    const response = await fetch('/api/staff', {
      method: 'POST',
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
    console.log(schoolId);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
const signupFormHandler = async function(event) {
    event.preventDefault();
    

    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const role = document.querySelector('#inputRole').value.trim();
    const school = document.querySelector('#inputSchool').value.trim();
    const isAdmin = document.querySelector('#gridCheck').value.trim();
  
    const response = await fetch('/api/staff', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role,
        school,
        isAdmin,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
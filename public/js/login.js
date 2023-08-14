const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
  
    if (email && password) {
      const response = await fetch('/api/staff/login', {
        method: 'POST',
        body: JSON.stringify({ 
            email: email.value, 
            password: password.value,
         }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
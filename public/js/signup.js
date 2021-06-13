const signupFormHandler = async(event) => {
    event.preventDefault();

    const name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    const response = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/blogs');
    } else {
        alert(response.statusText);
    }
};




document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

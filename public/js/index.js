
const loginAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/login');

};

const signupAnchorHandler = async(event) => {
    event.preventDefault();
        document.location.replace('/signup');
}

document
    .querySelector('.anchorLogin')
    .addEventListener('click', loginAnchorHandler);

document
    .querySelector('.anchorSignup')
    .addEventListener('click', signupAnchorHandler);
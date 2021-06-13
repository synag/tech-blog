
const loginAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/login');

};



document
    .querySelector('.anchorLogin')
    .addEventListener('click', loginAnchorHandler);


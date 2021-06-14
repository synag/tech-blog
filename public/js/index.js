
const loginAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/login');

};

const homepageAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/homepage');

};

document
    .querySelector('.anchorHomepage')
    .addEventListener('click', homepageAnchorHandler);


document
    .querySelector('.anchorLogin')
    .addEventListener('click', loginAnchorHandler);


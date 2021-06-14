
const loginAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/login');

};

const homepageAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/homepage');

};

const dashboardAnchorHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/blogs');

};
const createBtnHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/post');

};

document
    .querySelector('.anchorHomepage')
    .addEventListener('click', homepageAnchorHandler);


document
    .querySelector('.anchorLogin')
    .addEventListener('click', loginAnchorHandler);

    document
    .querySelector('.anchorDashboard')
    .addEventListener('click', dashboardAnchorHandler);

    document
    .querySelector('.createBtn')
    .addEventListener('click', createBtnHandler);


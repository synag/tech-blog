
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

const updateAnchorPostHandler = async(event) => {
    event.preventDefault();
    document.location.replace(`/update/2`);

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

    document
    .querySelector('.updatePost')
    .addEventListener('click', updateAnchorPostHandler);
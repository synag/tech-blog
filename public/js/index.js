const loginAnchorHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
};

const homepageAnchorHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/homepage");
};

const dashboardAnchorHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/blogs");

};
const createBtnHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/post");
};

const updateAnchorPostHandler = async (event) => {
  event.preventDefault();
  const id =
    event.target.parentElement.parentElement.parentElement.children[0].id;
  document.location.replace(`/update?id=${id}`);
};

const commentAnchorPostHandler = async (event) => {
  event.preventDefault();
  const id =
    event.target.parentElement.parentElement.parentElement.children[0].id;
  document.location.replace(`/commentpost?id=${id}`);
};

const viewCommentAnchorPostHandler = async (event) => {
  event.preventDefault();
  const blogPost_id =
    event.target.parentElement.parentElement.parentElement.children[0].id;
  document.location.replace(`/display?id=${blogPost_id}`);
};

const viewCommentPostAnchorButton =
  document.getElementsByClassName("viewComment");

for (const button of viewCommentPostAnchorButton) {
  button.addEventListener("click", viewCommentAnchorPostHandler);
}

const commentPostAnchorButton =
  document.getElementsByClassName("createComment");

for (const button of commentPostAnchorButton) {
  button.addEventListener("click", commentAnchorPostHandler);
}

document
  .querySelector(".anchorHomepage")
  .addEventListener("click", homepageAnchorHandler);

document
  .querySelector(".anchorLogin")
  .addEventListener("click", loginAnchorHandler);

document
  .querySelector(".anchorDashboard")
  .addEventListener("click", dashboardAnchorHandler);

document
  .querySelector(".createBtn")
  .addEventListener("click", createBtnHandler);

const updateBlogsAnchorButton = document.getElementsByClassName("updatePost");

for (const button of updateBlogsAnchorButton) {
  button.addEventListener("click", updateAnchorPostHandler);
}

const deletePostHandler = async (event) => {
  event.preventDefault();

  id = document.querySelectorAll("div[id]")[1].id;

  if (id) {
    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/blogs");
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector(".deleteBtn")
  .addEventListener("click", deletePostHandler);

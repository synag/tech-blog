const updatePostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  id = document.querySelectorAll("div[id]")[1].id;

  if (title || content) {
    const response = await fetch(`/api/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/blogs");
    } else {
      alert("Failed to update post");
    }
  }
};

document
  .querySelector(".updateBtn")
  .addEventListener("click", updatePostHandler);

const createCommentHandler = async (event) => {
  event.preventDefault();

  const blogPost_id = document.querySelectorAll("a")[5].id;
  const comment = document.querySelector("#post-comment").value.trim();

  if (comment) {
    const response = await fetch(`/api/comment/create`, {
      method: "POST",
      body: JSON.stringify({ blogPost_id, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/display?id=${blogPost_id}`);
    } else {
      alert("Failed to add post");
    }
  }
};

document
  .querySelector(".createCommentBtn")
  .addEventListener("click", createCommentHandler);

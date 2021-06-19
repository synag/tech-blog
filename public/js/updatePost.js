const updatePostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
         id = document.querySelector('#id').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/blog/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  document
  .querySelector('.postBtn')
  .addEventListener('click', createPostHandler);


  //UPDATE POST
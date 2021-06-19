



const createPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    
    if (title && content) {
      const response = await fetch(`/api/blog/create`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blogs');
      } else {
        alert('Failed to add post');
      }
    }
  };
  
  document
  .querySelector('.postBtn')
  .addEventListener('click', createPostHandler);
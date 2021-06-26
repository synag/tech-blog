const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/blogs");
  } else {
    alert(response.statusText);
  }
};

const signupAnchorHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/signup");
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".anchorSignup")
  .addEventListener("click", signupAnchorHandler);

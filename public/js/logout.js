const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

let timeOut = 1000 * 60 * 10; //15 minutes then application times out.

if (!window.onload || !window.onmousemove || !window.onkeydown) {
  const timeStatus = setTimeout(logout, timeOut);
} else {
  timeOut = 1000 * 60 * 10;
}

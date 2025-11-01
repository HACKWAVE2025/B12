const API_URL = "http://localhost:5000/api";

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "index.html";
  } else {
    loginError.textContent = data.message;
    loginError.style.display = "block";
  }
});

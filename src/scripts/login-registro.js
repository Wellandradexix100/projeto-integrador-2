let users = JSON.parse(localStorage.getItem("users")) || [];

function showLogin() {
  window.location.href = "index.html";
}

function showRegister() {
  window.location.href = "register.html";
}

function register() {
  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const registerError = document.getElementById("registerError");

  if (!username || !password || !confirmPassword) {
    registerError.textContent = "Preencha todos os campos.";
    return;
  }

  if (password !== confirmPassword) {
    registerError.textContent = "As senhas não coincidem.";
    return;
  }

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    registerError.textContent = "Usuário já existe.";
    return;
  }

  users.push({ fullName, username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registro bem-sucedido!");
  showLogin();
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const loginError = document.getElementById("loginError");

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    loginError.textContent = "";
    alert("Login bem-sucedido!");
    window.location.href = "home.html";
  } else {
    loginError.textContent = "Usuário ou senha incorretos.";
  }
}

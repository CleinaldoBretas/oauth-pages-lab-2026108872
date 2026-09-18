fetch("/api/me", {
  credentials: "same-origin"
})
  .then((response) => {
    if (!response.ok) {
      return null;
    }

    return response.json();
  })
  .then((user) => {
    const status = document.getElementById("status");
    const loginOptions = document.getElementById("login-options");
    const logoutForm = document.getElementById("logout-form");

    if (user) {
      status.textContent =
        `Sessão ativa: ${user.name || user.email || user.provider}`;

      loginOptions.hidden = true;
      logoutForm.hidden = false;
      return;
    }

    status.textContent = "Você ainda não está autenticado.";
  })
  .catch(() => {
    document.getElementById("status").textContent =
      "Não foi possível consultar a sessão.";
  });

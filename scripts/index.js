function handleEmail(e) {
  /* Impede que a página atualize a cada submit */
  e.preventDefault();

  /* recupera o email digitado */
  const email = document.getElementById("email-text").value;
  /* recupera do documente as tags */
  const icon = document.getElementById("icon-error");
  const text = document.getElementById("error");
  const inputField = document.getElementById("email-text");

  /* Verifica se o email não é válido */
  if (!IsEmail(email)) {
    /* setta os styles */
    icon.style.display = "block";
    text.style.display = "block";
    inputField.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    icon.style.display = "none";
    text.style.display = "none";
    inputField.style.border = "2px solid #4caf50";
  }
}

/* função de validação */
function IsEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

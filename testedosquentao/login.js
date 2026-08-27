const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (nome === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
   
    if (nome === "" || nome.split(" ").length < 2) {
        alert("Digite seu nome completo!");
        return;
    }

    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    if (!senha.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        alert("A senha deve ter pelo menos 6 caracteres e conter letras e números!");
        return;
    }

    alert("Login realizado com sucesso!");

    sessionStorage.setItem("logado", "true");

        window.location.href = "index2.html";{

        }
});
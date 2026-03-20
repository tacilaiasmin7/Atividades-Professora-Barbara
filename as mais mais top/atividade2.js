const nome = document.getElementById("nome");
const senha = document.getElementById("senha");


function login() {
    let usuarios = nome.value;
    if ((nome.value == "adimin" && senha.value == "1234") || 
    (nome.value == "joao" && senha.value == "5678") || 
    (nome.value == "maria" && senha.value == "9012") || 
    (nome.value == "placidina" && senha.value == "3456") || 
    (nome.value == "geraldo" && senha.value == '7890'))
        
{
    window.location.replace("atividade2.html");
} else {
    alert("Usuário ou senha incorretos! Tente Novamente.");
}
}
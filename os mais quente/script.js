let indice1 = 0;
const imagens1 = document.querySelectorAll(".carrossel1 img");

function mostrarimagem1(tela){
    imagens1.forEach(img => img.classList.remove("ativa"));
    imagens1[tela].classList.add("ativa");
}

function proximo1(){
    indice1 = (indice1 + 1) % imagens1.length;
    mostrarimagem1(indice1);
}

function anterior1(){
    indice1 = (indice1 - 1 + imagens1.length) % imagens1.length;
    mostrarimagem1(indice1);
}
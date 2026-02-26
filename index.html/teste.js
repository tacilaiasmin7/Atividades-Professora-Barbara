// -------- CARROSSEL 1 --------
let indice1 = 0;
const imagens1 = document.querySelectorAll(".carrossel1 img");

function mostrarimagem1(tela) {
    imagens1.forEach(img => img.classList.remove("ativa"));
    imagens1[tela].classList.add("ativa");
}

function proximo1() {
    indice1 = (indice1 + 1) % imagens1.length;
    mostrarimagem1(indice1);
}

function anterior1() {
    indice1 = (indice1 - 1 + imagens1.length) % imagens1.length;
    mostrarimagem1(indice1);
}

// -------- CARROSSEL 2 --------
let indice2 = 0;
const imagens2 = document.querySelectorAll(".carrossel2 img");

function mostrarimagem2(tela) {
    imagens2.forEach(img => img.classList.remove("ativa"));
    imagens2[tela].classList.add("ativa");
}

function proximo2() {
    indice2 = (indice2 + 1) % imagens2.length;
    mostrarimagem2(indice2);
}

function anterior2() {
    indice2 = (indice2 - 1 + imagens2.length) % imagens2.length;
    mostrarimagem2(indice2);
}
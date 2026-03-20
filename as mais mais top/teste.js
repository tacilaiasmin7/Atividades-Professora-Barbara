let indice = 0;
    const imagens = document.querySelectorAll(".carrosel img")

    function mostrarimagem(tela) {
        imagens.forEach(img => img.classList.remove("ativa"));
        imagens [tela].classList.add("ativa");
    
    }

    function proximo() {
        indice = (indice + 1) % imagens.length;
        mostrarimagem(indice);
    
    }

    function anterior() {
        indice = (indice - 1 + imagens.length) % imagens.length;
        mostrarimagem(indice);
    
    }
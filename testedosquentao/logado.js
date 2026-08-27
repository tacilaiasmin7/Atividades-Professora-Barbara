const campoPesquisa = document.querySelector(".pesquisa");

if (campoPesquisa) {

    campoPesquisa.addEventListener("input", function() {

        let pesquisa = campoPesquisa.value.toLowerCase();

        const produtos = document.querySelectorAll(".produto");

        produtos.forEach(function(produto) {

            let nomeProduto = produto.querySelector(".card-title");

            if (nomeProduto) {

                nomeProduto = nomeProduto.textContent.toLowerCase();

                if (nomeProduto.includes(pesquisa)) {

                    produto.style.display = "";

                } else {

                    produto.style.display = "none";

                }

            }

        });

    });

}
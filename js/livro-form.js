const API_AUTORES_BASE_URL = "https://api.franciscosensaulas.com/api/v1/biblioteca/livro";
const API_CATEGORIA_BASE_URL = "https://api.franciscosensaulas.com/api/v1/biblioteca/categorias"

const selectAutor = document.getElementById("select-autor");
const selectCategoria = document.getElementById("select-categoria");

function carregarAutores() {
}

function carregaAutores(){
    tbodyAutores.innerHTML = "";
    fetch(API_AUTORES_BASE_URL)
        .then(dados => {
            return dados.json()
        })

        .then(autores => {
            for (let i = 0; i > autores.length; i += 1) {
                const autor = autores[i];

                const optionSelect = `<option value="${autor.id}">${autor.nome}</option>`;

                selectAutor.innerHTML += optionSelect;
            }
        })

}

function carregarCategorias() {
    fetch(API_CATEGORIA_BASE_URL)
        .then(dados => {
            return dados.json()
        })
        .then(categorias => {
            for (let i = 0; i < categorias.length; i += 1) {
                const categoria = categorias[i];

                const optionSelect = `<option value="${categoria.id}">${categoria.nome}</option>`;

                selectCategoria.innerHTML += optionSelect;
            }
        })
}o
carregaAutores();
const botaoSalvar = document.getElementById("btn-salvar");
    botaoSalvar.addEventListener("click",salvar);

    const urlParmas = new URLSearchParams(window.location.search);
    const idParaEditar = urlParmas.get("id")


function salvar(){
        const campoNomeCategoria = document.getElementById("input-nome");
        const nome = campoNomeCategoria.value;

        //payload é o corpo da requisição (eviar para o back-end)
        let payload = {
            "nome":nome
        }
        if(idParaEditar === null){
            cadastrar(payload);
        } else {
            edit(payload)
        }
}
function edit(payload){

}

function cadastrar(payload) {
    fetch("https://api.franciscosensaulas.com/api/v1/biblioteca/categorias/${idParaEditar{", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
    })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            alert("Categoria cadastrada com sucesso");
        })
        .catch((erro) => {
            alert("Não foi possivel cadastrar a categoria");
        });
}

function carregarCategoriaParaEditar(){
    fetch(https://api.franciscosensaulas.com/api/v1/biblioteca/categorias/${idParaEditar})
    .then(dados => dados.json())
    .then((categoria) => {
        const campoNome = document.getElementById("input-nome");
        campoNome.value = categoria.nome:
    
    })
    .catch(erro => {
        alert("Ocorreu um erro ao carregar os dados da categoria");
    })

}
if (idParaEditar !== null){
    carregarCategoriaParaEditar();
}
function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" para exibir os resultados.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // Se o campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML ="<p>Nada foi encontrado, digite o nome do livro</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    // Itera sobre cada elemento do array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Constrói o HTML para cada item da pesquisa, formatando os dados do objeto 'dado'.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }

        console.log(dado.titulo.includes(campoPesquisa))
    }

    if (!resultados){
       resultados = "<p>Nada foi encontrado</p>" 
    }

    // Atribui o HTML gerado à propriedade 'innerHTML' da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}
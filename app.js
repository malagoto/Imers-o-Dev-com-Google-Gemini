function buscarFilosofos() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada elemento 'dado' dentro do array 'dados'
    for (let dado of dados) {
        // Constrói o HTML para cada resultado da pesquisa, incluindo título, descrição e link
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo} </a> 
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="blank">Mais informações</a>
            </div>
        `; 
    }

    // Define o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}
function buscarFilosofos() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;
 
    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado </p>";
return;
    }

campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento 'dado' dentro do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
            // se titulo includes campo pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
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
    }

    if(!resultados) {
        resultados = "<p> Nada foi encontrado no nosso banco de dados </p>"; 

    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
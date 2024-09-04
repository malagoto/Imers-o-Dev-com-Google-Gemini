//  Implementação da Funcionalidade de Pesquisa
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
const resultadosPesquisa = document.querySelector('.resultados-pesquisa');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const resultados = resultadosPesquisa.querySelectorAll('.item-resultado');

    resultados.forEach(resultado => {
        const nomeFilosofo = resultado.querySelector('h2 a').textContent.toLowerCase();
        const descricao = resultado.querySelector('.descricao-meta').textContent.toLowerCase();

        if (nomeFilosofo.includes(searchTerm) || descricao.includes(searchTerm)) {
            resultado.style.display = 'block';
        } else {
            resultado.style.display = 'none';
        }
    });
});

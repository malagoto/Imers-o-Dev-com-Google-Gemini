let dados = [
    {
        titulo: "Mario Sergio Cortella",
        descricao: "é um filósofo, escritor, educador, palestrante e professor universitário brasileiro. É autor de vários livros, entre eles Qual é a tua obra? e Por que Fazemos o que Fazemos?, nos quais analisa a vida profissional na contemporaneidade.",
        link: "https://pt.wikipedia.org/wiki/Mario_Sergio_Cortella",
        tags: "Filosofia, Educação, Ética, Trabalho" 
    },
    {
        titulo: "Marilena de Souza Chauí",
        descricao: "é uma filósofa brasileira, professora emérita da Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo. Filha do jornalista Nicolau Alberto Chauí e da professora Laura de Souza Chauí, é considerada uma das intelectuais mais influentes do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Marilena_Chau%C3%AD",
        tags: "Filosofia, Política, Feminismo, Intelectualidade Brasileira" 
    },
    {
        titulo: "Djamila Taís Ribeiro dos Santos",
        descricao: "é uma filósofa, escritora e acadêmica brasileira. Mestre em Filosofia Política pela Universidade Federal de São Paulo, é conhecida por sua atuação no movimento negro e por seus trabalhos sobre feminismo negro, questões raciais e de gênero.",
        link: "https://pt.wikipedia.org/wiki/Djamila_Ribeiro",
        tags: "Filosofia, Feminismo Negro, Questões Raciais, Gênero"
    },
    {
        titulo: "Paulo Freire",
        descricao: "foi um educador e filósofo brasileiro, mundialmente conhecido por seu trabalho no campo da pedagogia crítica. Seu livro mais famoso, Pedagogia do Oprimido, é considerado uma das obras mais importantes da história da educação.",
        link: "https://pt.wikipedia.org/wiki/Paulo_Freire",
        tags: "Pedagogia, Educação, Conscientização, Transformação Social"
    },
    {
        titulo: "Moacir Gadotti",
        descricao: "É um educador e filósofo brasileiro, um dos principais expoentes da pedagogia freireana no Brasil. Foi amigo pessoal e colaborador de Paulo Freire, e suas obras exploram temas como educação popular, gestão democrática e diálogo na educação.",
        link: "https://pt.wikipedia.org/wiki/Moacir_Gadotti",
        tags: "Pedagogia Freireana, Educação Popular, Gestão Democrática, Diálogo"
    },
    {
        titulo: "Dermeval Saviani",
        descricao: "É um filósofo e pedagogo brasileiro, conhecido por sua teoria histórico-crítica da educação. Embora tenha suas próprias ideias, Saviani reconhece a influência de Paulo Freire em sua obra, especialmente no que diz respeito à importância da conscientização e da transformação social através da educação.",
        link: "https://pt.wikipedia.org/wiki/Dermeval_Saviani",
        tags: "Filosofia da Educação, Teoria Histórico-Crítica, Conscientização, Transformação Social"
    },
    {
        titulo: "Maria Nilde Mascellani",
        descricao: "É uma filósofa e educadora brasileira, especialista em Paulo Freire. Sua obra se concentra na análise e disseminação do pensamento freireano, buscando aplicá-lo em diferentes contextos educacionais.",
        link: "https://pt.wikipedia.org/wiki/Maria_Nilde_Mascellani",
        tags: "Filosofia, Educação, Pensamento Freireano, Pedagogia"
    },
    {
        titulo: "Leandro Karnal",
        descricao: "É um historiador, professor, escritor e palestrante brasileiro. Suas obras e palestras abordam temas como filosofia, história, cultura e comportamento humano, com uma abordagem acessível e reflexiva.",
        link: "https://pt.wikipedia.org/wiki/Leandro_Karnal",
        tags: "História, Filosofia, Cultura, Comportamento Humano"
    },
    {
        titulo: "Luiz Felipe Pondé",
        descricao: "É um filósofo, escritor e professor universitário brasileiro. Suas obras e ensaios exploram temas como ética, religião, política e cultura, com uma perspectiva muitas vezes provocativa e polêmica.",
        link: "https://pt.wikipedia.org/wiki/Luiz_Felipe_Pond%C3%A9",
        tags: "Filosofia, Ética, Religião, Política"
    },
    {
        titulo: "Viviane Mosé",
        descricao: "É uma filósofa, psicanalista e escritora brasileira. Suas obras e palestras abordam temas como filosofia, psicanálise, ética, política e cultura, com uma ênfase na importância da reflexão crítica e da busca por sentido na vida.",
        link: "https://pt.wikipedia.org/wiki/Viviane_Mos%C3%A9",
        tags: "Filosofia, Psicanálise, Ética, Sentido da Vida"
    },
    {
        titulo: "Marcia Tiburi",
        descricao: "É uma filósofa, escritora e professora universitária brasileira. Suas obras e ensaios exploram temas como filosofia política, ética, feminismo, arte e cultura, com uma perspectiva crítica e engajada.",
        link: "https://pt.wikipedia.org/wiki/M%C3%A1rcia_Tiburi",
        tags: "Filosofia Política, Ética, Feminismo, Arte"
    },
    {
        titulo: "Clóvis de Barros Filho",
        descricao: "É um filósofo e professor universitário brasileiro. Suas obras e palestras abordam temas como ética, filosofia da ciência, filosofia da mente e comportamento humano, com uma abordagem clara e acessível.",
        link: "https://pt.wikipedia.org/wiki/Cl%C3%B3vis_de_Barros_Filho",
        tags: "Ética, Filosofia da Ciência, Filosofia da Mente, Comportamento Humano"
    },
    {
        titulo: "Silvio Gallo",
        descricao: "É um filósofo e professor universitário brasileiro. Suas obras e ensaios exploram temas como filosofia da educação, ética, política e cultura, com uma perspectiva crítica e transformadora.",
        link: "https://pt.wikipedia.org/wiki/Silvio_Gallo",
        tags: "Filosofia da Educação, Ética, Política, Cultura"
    },
    {
        titulo: "Vladimir Safatle",
        descricao: "É um filósofo e professor universitário brasileiro. Suas obras e ensaios exploram temas como filosofia política, ética, psicanálise e crítica da cultura, com uma perspectiva crítica e engajada.",
        link: "https://pt.wikipedia.org/wiki/Vladimir_Safatle",
        tags: "Filosofia Política, Ética, Psicanálise, Crítica da Cultura"
    },
    {
        titulo: "Sueli Carneiro",
        descricao: "É uma filósofa, ativista e escritora brasileira. Suas obras e ensaios exploram temas como feminismo negro, questões raciais e de gênero, com uma perspectiva crítica e interseccional.",
        link: "https://pt.wikipedia.org/wiki/Sueli_Carneiro",
        tags: "Feminismo Negro, Questões Raciais, Gênero, Interseccionalidade"
    },
    {
        titulo: "Olgária Matos",
        descricao: "É uma filósofa e professora universitária brasileira. Suas obras e ensaios exploram temas como filosofia da educação, ética, política e cultura, com uma perspectiva crítica e transformadora.",
        link: "https://pt.wikipedia.org/wiki/Olg%C3%A1ria_Matos",
        tags: "Filosofia da Educação, Ética, Política, Cultura"
    },
    {
        titulo: "Renato Janine Ribeiro",
        descricao: "É um filósofo e professor universitário brasileiro. Suas obras e ensaios exploram temas como filosofia política, ética, educação e cultura, com uma perspectiva crítica e reflexiva.",
        link: "https://pt.wikipedia.org/wiki/Renato_Janine_Ribeiro",
        tags: "Filosofia Política, Ética, Educação, Cultura"
    },
];
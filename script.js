const botaoTopo =
document.getElementById(
    "voltarTopo"
);

const modal =
document.getElementById(
    "modalObra"
);

const fecharModal =
document.getElementById(
    "fecharModal"
);

const modalAno =
document.getElementById(
    "modalAno"
);

const modalTitulo =
document.getElementById(
    "modalTitulo"
);

const modalConteudo =
document.getElementById(
    "modalConteudo"
);


/* ==================================================
   INFORMAÇÕES DAS PRINCIPAIS OBRAS
================================================== */

const obras = {

    "alguma-poesia": {

        ano: "1930",

        titulo:
        "Alguma Poesia",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Alguma Poesia</strong> foi o primeiro
        livro publicado por Carlos Drummond de Andrade.
        A obra marcou sua estreia na literatura e
        apresentou ao público uma poesia moderna,
        diferente dos modelos tradicionais.
        </p>

        <h3>🕰️ Contexto histórico e literário</h3>

        <p>
        O livro foi publicado alguns anos depois da
        Semana de Arte Moderna de 1922, evento que
        iniciou o Modernismo no Brasil. Os escritores
        modernistas buscavam maior liberdade de criação,
        utilizavam uma linguagem mais próxima do cotidiano
        e questionavam as regras rígidas da poesia antiga.
        </p>

        <p>
        Drummond participou do movimento modernista em
        Minas Gerais e teve contato com outros escritores
        importantes. Em sua primeira obra, ele já demonstrava
        uma personalidade poética própria.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas apresentam um eu lírico que observa
        o mundo com estranhamento, humor e ironia.
        Muitos textos falam sobre a juventude, o amor,
        a cidade, a família, a vida cotidiana e a sensação
        de não se encaixar completamente na sociedade.
        </p>

        <p>
        A obra também mostra a relação entre o indivíduo
        e o mundo. Em vários poemas, o sujeito sente-se
        deslocado, sozinho ou incapaz de compreender
        completamente a realidade ao seu redor.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Identidade e autoconhecimento;<br>
        • Solidão e sentimento de deslocamento;<br>
        • Amor e relações humanas;<br>
        • Vida cotidiana;<br>
        • Cidade e modernidade;<br>
        • Memórias da infância e de Minas Gerais.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A linguagem é simples e próxima da fala cotidiana.
        Drummond utiliza versos livres, sem a obrigação
        de manter rimas ou uma métrica fixa. Também aparecem
        humor, ironia, repetição e situações aparentemente
        comuns transformadas em reflexões profundas.
        </p>

        <h3>⭐ Poemas conhecidos</h3>

        <p>
        Entre os textos mais conhecidos do livro estão
        <strong>Poema de Sete Faces</strong>,
        <strong>No Meio do Caminho</strong>,
        <strong>Quadrilha</strong> e
        <strong>Cidadezinha Qualquer</strong>.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        Alguma Poesia foi fundamental para apresentar
        Carlos Drummond de Andrade como uma nova voz
        da literatura brasileira. O livro ajudou a
        consolidar a poesia modernista e influenciou
        muitos escritores.
        </p>
        `

    },


    "brejo-das-almas": {

        ano: "1934",

        titulo:
        "Brejo das Almas",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Brejo das Almas</strong> é o segundo
        livro de poemas de Carlos Drummond de Andrade.
        A obra apresenta uma poesia mais introspectiva,
        com reflexões sobre sentimentos, relações humanas
        e dificuldades pessoais.
        </p>

        <h3>🕰️ Contexto</h3>

        <p>
        O livro foi publicado em uma fase em que Drummond
        desenvolvia sua identidade literária. Ele continuou
        utilizando elementos do Modernismo, mas passou a
        explorar de maneira mais profunda as dúvidas e
        os conflitos do indivíduo.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas mostram pessoas que enfrentam solidão,
        insegurança, amor, frustração e dificuldade de
        comunicação. O título sugere um espaço simbólico
        de imobilidade e sofrimento, como se as emoções
        humanas estivessem presas em um “brejo”.
        </p>

        <p>
        O livro apresenta situações comuns, mas transforma
        essas experiências em reflexões sobre a condição
        humana.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Solidão;<br>
        • Amor e desejo;<br>
        • Insegurança;<br>
        • Dificuldade de comunicação;<br>
        • Conflitos internos;<br>
        • Relação entre o indivíduo e a sociedade.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A obra utiliza humor e ironia, mas apresenta um
        tom mais melancólico. A linguagem continua moderna,
        com versos livres e liberdade de construção.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        Brejo das Almas mostra o amadurecimento de Drummond.
        O livro amplia os temas de sua primeira obra e
        prepara o caminho para uma poesia mais social e
        reflexiva.
        </p>
        `

    },


    "sentimento-do-mundo": {

        ano: "1940",

        titulo:
        "Sentimento do Mundo",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Sentimento do Mundo</strong> representa
        uma mudança importante na poesia de Drummond.
        O poeta passa a observar não apenas seus sentimentos
        pessoais, mas também os problemas da sociedade.
        </p>

        <h3>🕰️ Contexto histórico</h3>

        <p>
        O livro foi publicado durante a Segunda Guerra
        Mundial, período marcado por violência, autoritarismo,
        perseguições e grandes conflitos internacionais.
        Esses acontecimentos influenciaram a visão do poeta.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas apresentam preocupação com a guerra,
        a desigualdade, a injustiça e o sofrimento humano.
        O eu lírico percebe que não pode ignorar os
        acontecimentos do mundo e passa a refletir sobre
        a responsabilidade das pessoas diante da realidade.
        </p>

        <p>
        Apesar das dificuldades, a obra também apresenta
        esperança e desejo de transformação social.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Guerra;<br>
        • Desigualdade social;<br>
        • Injustiça;<br>
        • Solidariedade;<br>
        • Esperança;<br>
        • Responsabilidade coletiva.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A poesia torna-se mais social e política. Drummond
        utiliza uma linguagem reflexiva e apresenta um
        olhar preocupado com a humanidade.
        </p>

        <h3>⭐ Poemas de destaque</h3>

        <p>
        Entre os poemas conhecidos estão
        <strong>Sentimento do Mundo</strong>,
        <strong>Os Ombros Suportam o Mundo</strong>
        e <strong>Mãos Dadas</strong>.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        O livro é considerado uma das obras mais importantes
        da poesia social brasileira e demonstra que a
        literatura também pode refletir sobre os problemas
        do seu tempo.
        </p>
        `

    },


    "jose": {

        ano: "1942",

        titulo:
        "José",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>José</strong> é um livro de poemas que
        recebeu o nome de uma de suas obras mais famosas.
        O personagem José tornou-se um símbolo da dúvida,
        da solidão e da falta de direção.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas apresentam pessoas que enfrentam
        dificuldades e precisam continuar vivendo mesmo
        quando parecem não encontrar uma saída.
        </p>

        <p>
        José representa qualquer pessoa que se sente
        perdida, isolada ou sem saber o que fazer.
        Por isso, o personagem é considerado uma figura
        universal.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Solidão;<br>
        • Dúvida;<br>
        • Falta de esperança;<br>
        • Busca por um caminho;<br>
        • Existência humana;<br>
        • Dificuldades da vida.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A linguagem é direta e utiliza perguntas e
        repetições. Esses recursos aumentam a sensação
        de dúvida e desorientação.
        </p>

        <h3>⭐ Destaque</h3>

        <p>
        O poema <strong>José</strong> tornou-se um dos
        textos mais conhecidos da literatura brasileira
        porque apresenta uma situação que muitas pessoas
        conseguem compreender: não saber qual caminho seguir.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        A obra mostra a capacidade de Drummond de
        transformar uma experiência individual em uma
        reflexão sobre a condição humana.
        </p>
        `

    },


    "rosa-do-povo": {

        ano: "1945",

        titulo:
        "A Rosa do Povo",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>A Rosa do Povo</strong> é considerada
        uma das obras mais importantes de Carlos Drummond
        de Andrade e uma das principais produções da
        poesia brasileira do século XX.
        </p>

        <h3>🕰️ Contexto histórico</h3>

        <p>
        O livro foi publicado no final da Segunda Guerra
        Mundial. O mundo vivia grandes conflitos políticos
        e sociais, e o Brasil enfrentava o período da
        ditadura do Estado Novo.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        A obra apresenta uma poesia ligada à realidade
        coletiva. Drummond escreve sobre a guerra,
        a opressão, a desigualdade, o trabalho e a
        esperança de construir uma sociedade melhor.
        </p>

        <p>
        A “rosa” do título pode ser entendida como um
        símbolo de esperança, beleza e possibilidade de
        transformação em meio às dificuldades.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Guerra;<br>
        • Política;<br>
        • Desigualdade;<br>
        • Trabalho;<br>
        • Esperança;<br>
        • Solidariedade;<br>
        • Transformação social.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A obra possui forte preocupação social. Os poemas
        apresentam uma linguagem acessível, mas cheia de
        símbolos e reflexões.
        </p>

        <h3>⭐ Poemas de destaque</h3>

        <p>
        Entre os textos conhecidos estão
        <strong>A Rosa do Povo</strong>,
        <strong>Nosso Tempo</strong>,
        <strong>O Medo</strong> e
        <strong>A Flor e a Náusea</strong>.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        O livro consolidou Drummond como um dos maiores
        poetas brasileiros e demonstrou a força da poesia
        como forma de reflexão social.
        </p>
        `

    },


    "claro-enigma": {

        ano: "1951",

        titulo:
        "Claro Enigma",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Claro Enigma</strong> representa uma fase
        mais madura, filosófica e reflexiva da poesia
        de Carlos Drummond de Andrade.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas refletem sobre o tempo, a morte,
        a memória, o amor e a dificuldade de compreender
        completamente a existência.
        </p>

        <p>
        O título apresenta uma contradição: algo pode
        parecer claro, mas continuar sendo um mistério.
        Essa ideia está relacionada aos limites do
        conhecimento humano.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Passagem do tempo;<br>
        • Morte;<br>
        • Memória;<br>
        • Amor;<br>
        • Existência;<br>
        • Mistério da vida.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A linguagem é mais elaborada e apresenta maior
        organização formal. Drummond utiliza imagens
        complexas e reflexões filosóficas.
        </p>

        <h3>⭐ Poemas de destaque</h3>

        <p>
        Alguns poemas conhecidos são
        <strong>Confidência do Itabirano</strong>,
        <strong>Memória</strong> e
        <strong>A Máquina do Mundo</strong>.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        Claro Enigma é uma das obras mais estudadas
        de Drummond e demonstra a profundidade de sua
        poesia na fase madura.
        </p>
        `

    },


    "fazendeiro-do-ar": {

        ano: "1954",

        titulo:
        "Fazendeiro do Ar",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Fazendeiro do Ar</strong> continua as
        reflexões filosóficas e existenciais presentes
        na produção madura de Drummond.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas tratam da passagem do tempo,
        das lembranças, da morte e das mudanças
        que acontecem durante a vida.
        </p>

        <p>
        O título sugere uma atividade impossível:
        cultivar o ar. Essa imagem pode representar
        o trabalho do poeta, que cria significados
        utilizando algo invisível e abstrato.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Tempo;<br>
        • Memória;<br>
        • Morte;<br>
        • Existência;<br>
        • Arte;<br>
        • Função do poeta.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A obra utiliza imagens simbólicas e apresenta
        um tom reflexivo. A linguagem é elaborada,
        mas mantém a capacidade de relacionar grandes
        questões a experiências comuns.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        O livro reforça a posição de Drummond como
        um poeta maduro e aprofundou suas reflexões
        sobre a vida e a criação artística.
        </p>
        `

    },


    "licao-de-coisas": {

        ano: "1962",

        titulo:
        "Lição de Coisas",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Lição de Coisas</strong> apresenta
        experiências com novas formas de escrever
        e organizar a poesia.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Drummond observa objetos, palavras, situações
        e acontecimentos do cotidiano. A partir dessas
        coisas aparentemente simples, constrói reflexões
        sobre a realidade e a existência.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Cotidiano;<br>
        • Linguagem;<br>
        • Objetos;<br>
        • Conhecimento;<br>
        • Realidade;<br>
        • Experiência humana.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A obra apresenta jogos de palavras,
        experimentações visuais e diferentes formas
        de organizar os versos. Alguns poemas exploram
        a aparência das palavras na página.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        O livro mostra que Drummond continuou inovando
        mesmo depois de décadas de carreira. Sua poesia
        permaneceu aberta a novas experiências.
        </p>
        `

    },


    "impurezas-do-branco": {

        ano: "1973",

        titulo:
        "As Impurezas do Branco",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>As Impurezas do Branco</strong> pertence
        à fase madura de Carlos Drummond de Andrade e
        apresenta grande variedade de temas.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas refletem sobre a vida, o amor,
        o corpo, a memória e as imperfeições humanas.
        O título sugere que até aquilo que parece puro
        pode possuir contradições e diferentes sentidos.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Amor;<br>
        • Corpo;<br>
        • Memória;<br>
        • Envelhecimento;<br>
        • Imperfeição;<br>
        • Condição humana.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A obra mistura reflexão, humor, ironia e
        linguagem poética elaborada. O poeta observa
        aspectos comuns da vida e revela significados
        mais profundos.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        O livro demonstra a capacidade de Drummond de
        continuar produzindo poesia inovadora e reflexiva
        durante a fase final de sua carreira.
        </p>
        `

    },


    "corpo": {

        ano: "1984",

        titulo:
        "Corpo",

        conteudo: `

        <h3>📖 Sobre a obra</h3>

        <p>
        <strong>Corpo</strong> foi publicado nos últimos
        anos da vida de Carlos Drummond de Andrade.
        A obra apresenta reflexões maduras sobre o corpo
        e a experiência de viver.
        </p>

        <h3>📝 Resumo</h3>

        <p>
        Os poemas abordam o envelhecimento, o desejo,
        o amor, a passagem do tempo e a relação entre
        corpo e existência.
        </p>

        <p>
        O corpo é apresentado não apenas como uma parte
        física, mas como um lugar onde ficam registradas
        experiências, emoções, memórias e mudanças.
        </p>

        <h3>🎯 Temas principais</h3>

        <p>
        • Corpo;<br>
        • Amor;<br>
        • Desejo;<br>
        • Envelhecimento;<br>
        • Tempo;<br>
        • Morte;<br>
        • Memória.
        </p>

        <h3>✍️ Características</h3>

        <p>
        A obra possui linguagem madura e reflexiva.
        Drummond utiliza o corpo para discutir questões
        profundas sobre a vida e a condição humana.
        </p>

        <h3>🏆 Importância</h3>

        <p>
        Corpo mostra que, mesmo no final da vida,
        Drummond continuava explorando novos temas
        e produzindo poesia de grande profundidade.
        </p>
        `

    }

};


/* ==================================================
   ABRIR AS OBRAS
================================================== */

const botoesObras =
document.querySelectorAll(
    ".obra"
);


botoesObras.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const id =
                botao.dataset.obra;

                const obra =
                obras[id];

                modalAno.textContent =
                obra.ano;

                modalTitulo.textContent =
                obra.titulo;

                modalConteudo.innerHTML =
                obra.conteudo;

                modal.classList.add(
                    "ativo"
                );

                document.body.style
                .overflow = "hidden";

            }
        );

    }
);


/* ==================================================
   FECHAR A JANELA
================================================== */

function fecharJanela() {

    modal.classList.remove(
        "ativo"
    );

    document.body.style
    .overflow = "auto";

}


fecharModal.addEventListener(
    "click",
    fecharJanela
);


modal.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === modal
        ) {

            fecharJanela();

        }

    }
);


document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            fecharJanela();

        }

    }
);


/* ==================================================
   BOTÃO VOLTAR AO TOPO
================================================== */

window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            botaoTopo.classList.add(
                "mostrar"
            );

        } else {

            botaoTopo.classList.remove(
                "mostrar"
            );

        }

    }
);


botaoTopo.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);
const abrirGlossario =
document.getElementById(
    "abrirGlossario"
);

const modalGlossario =
document.getElementById(
    "modalGlossario"
);

const fecharGlossario =
document.getElementById(
    "fecharGlossario"
);


abrirGlossario.addEventListener(
    "click",
    function () {

        modalGlossario.classList.add(
            "ativo"
        );

        document.body.style
        .overflow = "hidden";

    }
);


function fecharJanelaGlossario() {

    modalGlossario.classList.remove(
        "ativo"
    );

    document.body.style
    .overflow = "auto";

}


fecharGlossario.addEventListener(
    "click",
    fecharJanelaGlossario
);


modalGlossario.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target ===
            modalGlossario
        ) {

            fecharJanelaGlossario();

        }

    }
);


document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            fecharJanelaGlossario();

        }

    }
);
const abrirPoema =
document.getElementById(
    "abrirPoema"
);

const modalPoema =
document.getElementById(
    "modalPoema"
);

const fecharPoema =
document.getElementById(
    "fecharPoema"
);


abrirPoema.addEventListener(
    "click",
    function () {

        modalPoema.classList.add(
            "ativo"
        );

        document.body.style
        .overflow = "hidden";

    }
);


function fecharJanelaPoema() {

    modalPoema.classList.remove(
        "ativo"
    );

    document.body.style
    .overflow = "auto";

}


fecharPoema.addEventListener(
    "click",
    fecharJanelaPoema
);


modalPoema.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target ===
            modalPoema
        ) {

            fecharJanelaPoema();

        }

    }
);
/* ==================================
   QUIZ CARLOS DRUMMOND
================================== */

const perguntasQuiz = [

    {
        pergunta:
        "Em que ano Carlos Drummond de Andrade nasceu?",

        respostas: [
            "1889",
            "1902",
            "1915",
            "1930"
        ],

        correta: 1
    },

    {
        pergunta:
        "Em qual cidade Carlos Drummond nasceu?",

        respostas: [
            "Belo Horizonte",
            "Ouro Preto",
            "Itabira",
            "São Paulo"
        ],

        correta: 2
    },

    {
        pergunta:
        "Qual foi o primeiro livro publicado por Drummond?",

        respostas: [
            "A Rosa do Povo",
            "José",
            "Alguma Poesia",
            "Claro Enigma"
        ],

        correta: 2
    },

    {
        pergunta:
        "Em que ano foi publicado o livro Alguma Poesia?",

        respostas: [
            "1922",
            "1928",
            "1930",
            "1945"
        ],

        correta: 2
    },

    {
        pergunta:
        "Qual poema começa com a imagem de um “anjo torto”?",

        respostas: [
            "José",
            "No Meio do Caminho",
            "Poema de Sete Faces",
            "Mãos Dadas"
        ],

        correta: 2
    },

    {
        pergunta:
        "Carlos Drummond de Andrade pertenceu principalmente a qual movimento literário?",

        respostas: [
            "Romantismo",
            "Modernismo",
            "Barroco",
            "Parnasianismo"
        ],

        correta: 1
    },

    {
        pergunta:
        "Qual destes temas aparece frequentemente na poesia de Drummond?",

        respostas: [
            "A vida, o tempo e a solidão",
            "Somente histórias de reis",
            "Apenas aventuras medievais",
            "Somente lendas antigas"
        ],

        correta: 0
    },

    {
        pergunta:
        "Em que ano Carlos Drummond de Andrade morreu?",

        respostas: [
            "1977",
            "1980",
            "1987",
            "1995"
        ],

        correta: 2
    }

];


let perguntaAtual = 0;

let pontosQuiz = 0;

let respostaSelecionada = false;


const perguntaQuiz =
document.getElementById(
    "perguntaQuiz"
);

const respostasQuiz =
document.getElementById(
    "respostasQuiz"
);

const progressoQuiz =
document.getElementById(
    "progressoQuiz"
);

const pontuacaoQuiz =
document.getElementById(
    "pontuacaoQuiz"
);

const progressoBarra =
document.getElementById(
    "progressoBarra"
);

const proximaPergunta =
document.getElementById(
    "proximaPergunta"
);


function mostrarPergunta() {

    respostaSelecionada = false;

    proximaPergunta.disabled = true;

    const pergunta =
    perguntasQuiz[
        perguntaAtual
    ];


    progressoQuiz.textContent =
        "Pergunta " +
        (
            perguntaAtual + 1
        ) +
        " de " +
        perguntasQuiz.length;


    pontuacaoQuiz.textContent =
        "Pontos: " +
        pontosQuiz;


    progressoBarra.style.width =
        (
            (
                perguntaAtual + 1
            )
            /
            perguntasQuiz.length
        )
        *
        100
        +
        "%";


    perguntaQuiz.textContent =
        pergunta.pergunta;


    respostasQuiz.innerHTML = "";


    pergunta.respostas.forEach(
        function (
            resposta,
            indice
        ) {

            const botao =
            document.createElement(
                "button"
            );


            botao.className =
            "resposta-quiz";


            botao.textContent =
            String.fromCharCode(
                65 + indice
            )
            +
            ") "
            +
            resposta;


            botao.addEventListener(
                "click",
                function () {

                    verificarResposta(
                        indice,
                        botao
                    );

                }
            );


            respostasQuiz.appendChild(
                botao
            );

        }
    );

}


function verificarResposta(
    indice,
    botaoEscolhido
) {

    if (
        respostaSelecionada
    ) {
        return;
    }


    respostaSelecionada = true;


    const pergunta =
    perguntasQuiz[
        perguntaAtual
    ];


    const botoes =
    document.querySelectorAll(
        ".resposta-quiz"
    );


    botoes.forEach(
        function (
            botao,
            numero
        ) {

            botao.disabled = true;


            if (
                numero ===
                pergunta.correta
            ) {

                botao.classList.add(
                    "correta"
                );

            }

        }
    );


    if (
        indice ===
        pergunta.correta
    ) {

        pontosQuiz++;


    } else {

        botaoEscolhido.classList.add(
            "errada"
        );

    }


    pontuacaoQuiz.textContent =
        "Pontos: " +
        pontosQuiz;


    proximaPergunta.disabled =
    false;


    if (
        perguntaAtual ===
        perguntasQuiz.length - 1
    ) {

        proximaPergunta.textContent =
        "Ver resultado 🏆";

    }

}


proximaPergunta.addEventListener(
    "click",
    function () {

        perguntaAtual++;


        if (
            perguntaAtual <
            perguntasQuiz.length
        ) {

            mostrarPergunta();

        } else {

            mostrarResultado();

        }

    }
);


function mostrarResultado() {

    const porcentagem =
        Math.round(
            (
                pontosQuiz
                /
                perguntasQuiz.length
            )
            *
            100
        );


    perguntaQuiz.innerHTML =
        "🏆 Resultado final";


    respostasQuiz.innerHTML =
        `
        <div class="resultado-quiz">

            <h3>
                Você acertou
                ${pontosQuiz}
                de
                ${perguntasQuiz.length}
                perguntas!
            </h3>

            <p>
                Aproveitamento:
                ${porcentagem}%
            </p>

            <button
                id="reiniciarQuiz"
                class="botao-proxima"
            >
                Tentar novamente ↻
            </button>

        </div>
        `;


    proximaPergunta.style.display =
    "none";


    progressoBarra.style.width =
    "100%";


    document
    .getElementById(
        "reiniciarQuiz"
    )
    .addEventListener(
        "click",
        reiniciarQuiz
    );

}


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontosQuiz = 0;

    proximaPergunta.style.display =
    "inline-block";


    proximaPergunta.textContent =
        "Próxima pergunta →";


    mostrarPergunta();

}


mostrarPergunta();
// ================================
// SCROLL REVEAL
// ================================

const elementosReveal = document.querySelectorAll(".reveal");

function revelarElementos() {

    const alturaTela = window.innerHeight;

    elementosReveal.forEach((elemento) => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {
            elemento.classList.add("ativo");
        }

    });

}

window.addEventListener("scroll", revelarElementos);

revelarElementos();
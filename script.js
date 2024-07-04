const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Os grandes eventos esportivos são mais do que simples competições; são celebrações da habilidade humana, paixão e união global. Quando atletas de todos os cantos do mundo se reúnem, não apenas para competir, mas para inspirar, quebrar recordes e transcender fronteiras, testemunhamos o poder do esporte em unir nações e culturas. Esses eventos não são apenas sobre quem ganha ou perde, mas sobre os momentos de superação, a camaradagem entre adversários e o espírito de fair play que ecoa em todo o mundo. Eles lembram-nos de que, independentemente das diferenças, todos compartilhamos a capacidade de alcançar o extraordinário quando nos unimos em torno de uma paixão comum: o amor pelo esporte.?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "A Inteligência Artificial está transformando o mundo dos esportes, oferecendo análises avançadas de desempenho, previsões precisas de resultados e personalização da experiência dos fãs. Com sistemas de análise de dados e tecnologias de captura de movimento, atletas e equipes podem otimizar seu treinamento e estratégias, enquanto os fãs desfrutam de uma interação mais envolvente e personalizada com seus esportes favoritos.?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Como a Inteligência Artificial está mudando o treinamento dos atletas?",
        alternativas: [
            {
                texto: "Defende a ideia de melhora no desenvolvimento esportivo dos atletas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Mas me preocupo um pouco,pode ser assutador.Pois pode haver trapaças ou algo desportivo.",
                afirmacao: "Percebi que muitas pessoas ainda não dominam as ferramentas tradicionais de análise esportiva e decidi compartilhar meus conhecimentos, facilitando o acesso a tecnologias de IA para melhorar o treinamento de atletas e a experiência dos fãs.."
            }
        ]
    },
    {
        enunciado: "Como você imagina a Inteligência Artificial conectando atletas, análises de desempenho e interação com os fãs em um cenário esportivo digitalmente integrado??",
        alternativas: [
            {
                texto: "Vejo a Inteligência Artificial melhorando o treinamento dos atletas com análises precisas de dados, enquanto personaliza a experiência dos fãs com interações e conteúdos específicos, tudo em tempo real..",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Imagino a Inteligência Artificial como a ponte entre o desempenho otimizado dos atletas, através de análises detalhadas, e uma conexão mais profunda dos fãs com os esportes, por meio de experiências digitais mais envolventes e personalizadas.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Como você abordaria a situação em que um trabalho sobre esportes e grandes eventos foi entregue, e parte do conteúdo é substancialmente similar ao que discutimos aqui?? ",
        alternativas: [
            {
                texto: "Eu abordaria a situação conversando com a pessoa responsável pela parte similar do trabalho, explicando a importância da originalidade e da contribuição individual no trabalho em grupo.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: " Eu sugeriria revisar e reescrever a parte similar do trabalho, garantindo que cada um contribua com ideias únicas e genuínas para o projeto de biologia sobre esportes e grandes eventos..",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
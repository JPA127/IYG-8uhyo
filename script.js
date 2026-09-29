// ---------------------------------------------
// Dados: as 8 versões do Ryan Gosling
// ---------------------------------------------
const personas = {
  meia: {
    emoji: "🧦",
    img: "imagens/meia.jpg",
    title: "Ryan Gosling Meia",
    desc: "Você preza o conforto acima de qualquer coisa. Não importa a ocasião: se tiver um sofá e uma manta por perto, você já tá em casa. Reservado, quentinho e cheio de calor humano (literalmente)."
  },
  carro: {
    emoji: "🚗",
    img: "imagens/carro.jpg",
    title: "Ryan Gosling Carro",
    desc: "Misterioso, estiloso e sempre em movimento. Você não fala muito, mas quando aparece, todo mundo repara. Olhar de quem sabe pra onde vai, mesmo sem saber."
  },
  guerra: {
    emoji: "🎖️",
    img: "imagens/guerra.jpg",
    title: "Ryan Gosling Pós-Guerra",
    desc: "Você já viu de tudo e sobreviveu pra contar a história, com uma cara séria de quem carrega mil batalhas nas costas. Intenso, resiliente e meio dramático, mas no bom sentido."
  },
  egipcio: {
    emoji: "👑",
    img: "imagens/egipcio.jpg",
    title: "Ryan Gosling Egípcio",
    desc: "Realeza, simples assim. Você entra em qualquer ambiente como se fosse dono do lugar. Elegante, confiante e com uma pitada de mistério milenar."
  },
  cartas: {
    emoji: "🎴",
    img: "imagens/cartas.jpg",
    title: "Ryan Gosling Colecionador de Cartas",
    desc: "Nerd raiz, e com muito orgulho. Você tem uma paixão genuína por coisas que a maioria ignora, e isso te faz único. Detalhista, nostálgico e sempre pronto pra mostrar sua coleção pra quem quiser ver (ou não)."
  },
  ocupado: {
    emoji: "🍌",
    img: "imagens/ocupado.jpg",
    title: "Ryan Gosling Ocupado",
    desc: "Sempre correndo, sempre numa call importante, mesmo que seja com uma banana. Multitarefa nato e estiloso até na correria. Ninguém sabe direito o que você faz, mas parece muito importante."
  },
  feliz: {
    emoji: "😄",
    img: "imagens/feliz.jpg",
    title: "Ryan Gosling Feliz",
    desc: "Sol, boa vibe e um sorriso fácil. Você encontra motivo pra alegria em qualquer cenário, inclusive dentro de um mundo de blocos. Leve, gente boa e a companhia perfeita pra qualquer rolê."
  },
  flor: {
    emoji: "🌼",
    img: "imagens/flor.jpg",
    title: "Ryan Gosling Flor",
    desc: "Sensível, doce e cheio de camadas, tipo uma margarida. Você prefere um dia tranquilo cercado de coisas bonitas a qualquer alvoroço. Romântico até quando finge que não é."
  },
  nerd: {
    emoji: "🤓",
    img: "imagens/nerd.jpg",
    title: "Ryan Gosling Nerd",
    desc: "Inteligente, curioso e dono de um conhecimento profundo sobre coisas que quase ninguém entende (mas todo mundo precisa quando o wi-fi cai). Óculos na cara, argumento afiado e zero medo de ser o mais esclarecido da sala."
  },
  abelha: {
    emoji: "🐝",
    img: "imagens/abelha.jpg",
    title: "Ryan Gosling Abelha",
    desc: "Trabalhador incansável, doce por natureza, mas com ferrão pra quem merece. Vive em movimento, ajuda todo mundo do grupo e nunca abandona a colmeia. Sua semana tem 7 dias e todos são de produzir mel."
  }
};

// ---------------------------------------------
// Dados: as 15 perguntas do quiz
// ---------------------------------------------
const questions = [
  {
    text: "É sábado à noite. O que você tá fazendo?",
    options: [
      { text: "Enrolado numa manta, imóvel, tipo uma larva feliz", scores: { meia: 2 } },
      { text: "Dirigindo sem destino, ouvindo synthwave no talo", scores: { carro: 2 } },
      { text: "Numa festa a fantasia de história antiga", scores: { egipcio: 2 } },
      { text: "Organizando minha coleção (cartas, figuras, o que for)", scores: { cartas: 2 } }
    ]
  },
  {
    text: "Escolha uma bebida:",
    options: [
      { text: "Chá quentinho, luz baixa, playlist calma", scores: { meia: 1, flor: 1 } },
      { text: "Café puro, sem tempo pra floreio", scores: { carro: 2 } },
      { text: "Suco em taça bem dourada, porque eu mereço", scores: { egipcio: 2 } },
      { text: "O que estiver mais perto, tomado correndo entre reuniões", scores: { ocupado: 2 } }
    ]
  },
  {
    text: "Qual dessas cenas combina mais com você agora?",
    options: [
      { text: "Sobrevivendo a algo dramático, olhar de quem já viu de tudo", scores: { guerra: 2 } },
      { text: "Dia de sol, tudo tranquilo, sem pressa nenhuma", scores: { feliz: 2 } },
      { text: "Cercado de flores, clima completamente zen", scores: { flor: 2 } },
      { text: "No banco de trás, planejando o próximo golpe", scores: { carro: 1, ocupado: 1 } }
    ]
  },
  {
    text: "No trabalho (ou nos estudos), você é mais o tipo que...",
    options: [
      { text: "Vive com mil tarefas ao mesmo tempo", scores: { ocupado: 2 } },
      { text: "Leva numa boa, sorrindo pra quem passa", scores: { feliz: 2 } },
      { text: "É sério, quieto, olhar de quem carrega o mundo", scores: { guerra: 2 } },
      { text: "É obcecado por detalhes que só você percebe", scores: { cartas: 2 } }
    ]
  },
  {
    text: "Se pudesse escolher uma fantasia pra festa à fantasia, seria:",
    options: [
      { text: "Faraó", scores: { egipcio: 2 } },
      { text: "Soldado", scores: { guerra: 2 } },
      { text: "Margarida gigante", scores: { flor: 2 } },
      { text: "Meia de Natal", scores: { meia: 2 } }
    ]
  },
  {
    text: "Qual desses objetos representa melhor sua personalidade?",
    options: [
      { text: "Um carro velho, mas com estilo de sobra", scores: { carro: 2 } },
      { text: "Uma banana (não pergunta, só confia)", scores: { ocupado: 2 } },
      { text: "Um baralho de cartas raras", scores: { cartas: 2 } },
      { text: "Uma florzinha branca", scores: { flor: 2 } }
    ]
  },
  {
    text: "Escolha uma palavra que as pessoas usariam pra te descrever:",
    options: [
      { text: "Aconchegante", scores: { meia: 2 } },
      { text: "Intenso", scores: { guerra: 1, egipcio: 1 } },
      { text: "Alegre", scores: { feliz: 2 } },
      { text: "Nostálgico", scores: { cartas: 1, flor: 1 } }
    ]
  },
  {
    text: "Por fim, qual emoji resume seu humor hoje?",
    options: [
      { text: "😌 tranquilo", scores: { meia: 1, flor: 1 } },
      { text: "😎 estiloso", scores: { carro: 2 } },
      { text: "😄 feliz da vida", scores: { feliz: 2 } },
      { text: "🏃 correria total", scores: { ocupado: 2 } }
    ]
  },
  {
    text: "Sua bateria social no fim de semana tá mais pra...",
    options: [
      { text: "100%: quero ver todo mundo, virei e mexo", scores: { abelha: 2 } },
      { text: "Zero: vou ficar no meu canto com meus hobbies", scores: { nerd: 1, meia: 1 } },
      { text: "Só em drive-thru: converso sem sair do carro", scores: { carro: 2 } },
      { text: "Suficiente pra um chá tranquilo com alguém querido", scores: { flor: 2 } }
    ]
  },
  {
    text: "Escolha um superpoder inútil mas genial:",
    options: [
      { text: "Voar, mas só a 2cm do chão", scores: { abelha: 2 } },
      { text: "Saber a resposta de qualquer quiz de cultura pop", scores: { nerd: 2 } },
      { text: "Atrair papel picado pra perto de mim", scores: { cartas: 2 } },
      { text: "Nunca mais errar o ponto do miojo", scores: { ocupado: 2 } }
    ]
  },
  {
    text: "Qual dessas maratonas você topa agora?",
    options: [
      { text: "Trilogia completa de ficção científica, com pausa pra anotar referências", scores: { nerd: 2 } },
      { text: "Filme da abelha que virou lenda, obviamente", scores: { abelha: 2 } },
      { text: "Documentário longo sobre a história de uma guerra antiga", scores: { guerra: 2 } },
      { text: "Compilação de vídeos fofos de 3 horas", scores: { feliz: 2 } }
    ]
  },
  {
    text: "Seu pet dos sonhos seria:",
    options: [
      { text: "Uma abelhinha de estimação (com coleirinha)", scores: { abelha: 2 } },
      { text: "Um gato que usa óculos e julga minhas decisões", scores: { nerd: 2 } },
      { text: "Um cachorro grandão que pensa que é de guarda", scores: { guerra: 2 } },
      { text: "Uma plantinha que eu converso todo dia", scores: { flor: 2 } }
    ]
  },
  {
    text: "Escolha um lugar perfeito pras suas férias:",
    options: [
      { text: "Um campo de flores pra relaxar e produzir mel em paz", scores: { abelha: 2 } },
      { text: "Uma convenção de jogos com 5 dias de duração", scores: { nerd: 2, cartas: 1 } },
      { text: "Roteiro de estrada, sem mapa e sem pressa", scores: { carro: 2 } },
      { text: "Um palácio antigo com muita história (e mordomos)", scores: { egipcio: 2 } }
    ]
  },
  {
    text: "Seu look ideal pra um domingo:",
    options: [
      { text: "Suéter de orelhinhas e caneca cheia", scores: { nerd: 2 } },
      { text: "Amarelo e preto, abelha fashion, é tendência", scores: { abelha: 1, egipcio: 1 } },
      { text: "Manta por cima, manta por baixo, manta em tudo", scores: { meia: 2 } },
      { text: "Roupa confortável pra correr de um compromisso pro outro", scores: { ocupado: 2 } }
    ]
  },
  {
    text: "Por fim, escolha uma frase que combina com sua vida:",
    options: [
      { text: "“Trabalho em equipe faz o mel fluir”", scores: { abelha: 2 } },
      { text: "“Na verdade, tecnicamente...”", scores: { nerd: 2 } },
      { text: "“Só mais um episódio e eu durmo”", scores: { meia: 1, nerd: 1 } },
      { text: "“A vida é bela e cheia de memes”", scores: { feliz: 1, abelha: 1 } }
    ]
  }
];

// Pontuação máxima possível por pergunta (usado pra calcular % no resultado final)
const MAX_POINTS_PER_QUESTION = 2;
const TOTAL_POINTS = questions.length * MAX_POINTS_PER_QUESTION;

// ---------------------------------------------
// Estado
// ---------------------------------------------
let currentIndex = 0;
let scores = {};

function resetScores() {
  scores = {};
  Object.keys(personas).forEach(key => { scores[key] = 0; });
}

// ---------------------------------------------
// Elementos
// ---------------------------------------------
const progressEl = document.getElementById("progress");
const quizCard = document.getElementById("quiz-card");
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");

const resultCard = document.getElementById("result-card");
const resultBadge = document.getElementById("result-badge");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const breakdownToggle = document.getElementById("breakdown-toggle");
const breakdownEl = document.getElementById("breakdown");
const restartBtn = document.getElementById("restart-btn");
const galleryEl = document.getElementById("gallery");

// ---------------------------------------------
// Progresso (pontinhos)
// ---------------------------------------------
function renderProgressDots() {
  progressEl.innerHTML = "";
  questions.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    progressEl.appendChild(dot);
  });
}

function updateProgressDots() {
  const dots = progressEl.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("dot--active", "dot--done");
    if (i < currentIndex) dot.classList.add("dot--done");
    if (i === currentIndex) dot.classList.add("dot--active");
  });
}

// ---------------------------------------------
// Renderizar pergunta
// ---------------------------------------------
function renderQuestion() {
  const q = questions[currentIndex];
  questionCountEl.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  questionTextEl.textContent = q.text;

  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => selectOption(opt));
    optionsEl.appendChild(btn);
  });

  updateProgressDots();
}

function selectOption(opt) {
  Object.entries(opt.scores).forEach(([key, val]) => {
    scores[key] = (scores[key] || 0) + val;
  });

  quizCard.classList.add("card--leaving");

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
      quizCard.classList.remove("card--leaving");
    } else {
      showResult();
    }
  }, 200);
}

// ---------------------------------------------
// Resultado
// ---------------------------------------------
function renderGallery() {
  galleryEl.innerHTML = "";
  Object.values(personas).forEach(persona => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = persona.img;
    img.alt = persona.title;
    img.loading = "lazy";
    img.onerror = () => { img.remove(); item.classList.add("gallery-item--emoji"); item.textContent = persona.emoji; };

    const name = document.createElement("p");
    name.className = "gallery-name";
    name.textContent = persona.title;

    item.appendChild(img);
    item.appendChild(name);
    galleryEl.appendChild(item);
  });
}

function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const winnerKey = sorted[0][0];
  const winner = personas[winnerKey];

  resultBadge.innerHTML = "";
  const badgeImg = document.createElement("img");
  badgeImg.src = winner.img;
  badgeImg.alt = winner.title;
  badgeImg.onerror = () => { resultBadge.textContent = winner.emoji; };
  resultBadge.appendChild(badgeImg);

  resultTitle.textContent = `Você é o(a) ${winner.title}`;
  resultDesc.textContent = winner.desc;

  breakdownEl.innerHTML = "";
  sorted.forEach(([key, value]) => {
    const persona = personas[key];
    const pct = Math.round((value / TOTAL_POINTS) * 100);

    const row = document.createElement("div");
    row.className = "breakdown-row";

    const label = document.createElement("span");
    label.className = "breakdown-label";
    label.textContent = `${persona.emoji} ${persona.title.replace("Ryan Gosling ", "")}`;

    const track = document.createElement("div");
    track.className = "breakdown-track";
    const fill = document.createElement("div");
    fill.className = "breakdown-fill";
    fill.style.width = "0%";
    track.appendChild(fill);

    const pctLabel = document.createElement("span");
    pctLabel.className = "breakdown-pct";
    pctLabel.textContent = `${pct}%`;

    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(pctLabel);
    breakdownEl.appendChild(row);

    requestAnimationFrame(() => { fill.style.width = `${pct}%`; });
  });

  breakdownEl.classList.add("hidden");
  breakdownToggle.textContent = "Ver compatibilidade completa";

  renderGallery();
}

breakdownToggle.addEventListener("click", () => {
  const isHidden = breakdownEl.classList.toggle("hidden");
  breakdownToggle.textContent = isHidden ? "Ver compatibilidade completa" : "Esconder compatibilidade";
});

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  resetScores();
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
});

// ---------------------------------------------
// Início
// ---------------------------------------------
resetScores();
renderProgressDots();
renderQuestion();

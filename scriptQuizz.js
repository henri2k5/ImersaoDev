    // PARTE 1: Lista de perguntas e respostas
    perguntas = [
      {
        pergunta: "Qual é o maior planeta do sistema solar?",
        respostas: [
          { opcao: "Terra", correto: false },
          { opcao: "Marte", correto: false },
          { opcao: "Júpiter", correto: true },
          { opcao: "Saturno", correto: false }
        ]
      },
      {
        pergunta: "Quem pintou a Mona Lisa?",
        respostas: [
          { opcao: "Michelangelo", correto: false },
          { opcao: "Leonardo da Vinci", correto: true },
          { opcao: "Van Gogh", correto: false },
          { opcao: "Picasso", correto: false }
        ]
      },
      {
        pergunta: "Qual é a capital da Austrália?",
        respostas: [
          { opcao: "Sydney", correto: false },
          { opcao: "Melbourne", correto: false },
          { opcao: "Brisbane", correto: false },
          { opcao: "Canberra", correto: true }
        ]
      },
      {
        pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
        respostas: [
          { opcao: "1965", correto: false },
          { opcao: "1969", correto: true },
          { opcao: "1971", correto: false },
          { opcao: "1975", correto: false }
        ]
      },
      {
        pergunta: "Qual é o elemento químico representado pelo símbolo O?",
        respostas: [
          { opcao: "Ouro", correto: false },
          { opcao: "Ozônio", correto: false },
          { opcao: "Oxigênio", correto: true },
          { opcao: "Ósmio", correto: false }
        ]
      },
      {
        pergunta: "Quem escreveu 'Dom Casmurro'?",
        respostas: [
          { opcao: "José de Alencar", correto: false },
          { opcao: "Graciliano Ramos", correto: false },
          { opcao: "Machado de Assis", correto: true },
          { opcao: "Clarice Lispector", correto: false }
        ]
      },
      {
        pergunta: "Quantas cores tem o arco-íris?",
        respostas: [
          { opcao: "5", correto: false },
          { opcao: "6", correto: false },
          { opcao: "7", correto: true },
          { opcao: "8", correto: false }
        ]
      },
      {
        pergunta: "Em que continente fica o Egito?",
        respostas: [
          { opcao: "Europa", correto: false },
          { opcao: "Ásia", correto: false },
          { opcao: "África", correto: true },
          { opcao: "América", correto: false }
        ]
      },
      {
        pergunta: "Quem é o criador da série Harry Potter?",
        respostas: [
          { opcao: "J.R.R. Tolkien", correto: false },
          { opcao: "Rick Riordan", correto: false },
          { opcao: "J.K. Rowling", correto: true },
          { opcao: "George R.R. Martin", correto: false }
        ]
      },
      {
        pergunta: "Qual é o animal mais rápido do mundo?",
        respostas: [
          { opcao: "Guepardo", correto: true },
          { opcao: "Falcão-peregrino", correto: false },
          { opcao: "Leopardo", correto: false },
          { opcao: "Cavalo de corrida", correto: false }
        ]
      },
      {
        pergunta: "Quantos ossos tem o corpo humano adulto?",
        respostas: [
          { opcao: "198", correto: false },
          { opcao: "206", correto: true },
          { opcao: "214", correto: false },
          { opcao: "220", correto: false }
        ]
      },
      {
        pergunta: "Qual é o menor país do mundo?",
        respostas: [
          { opcao: "Mônaco", correto: false },
          { opcao: "Vaticano", correto: true },
          { opcao: "San Marino", correto: false },
          { opcao: "Liechtenstein", correto: false }
        ]
      },
      {
        pergunta: "Quem descobriu o Brasil?",
        respostas: [
          { opcao: "Cristóvão Colombo", correto: false },
          { opcao: "Vasco da Gama", correto: false },
          { opcao: "Pedro Álvares Cabral", correto: true },
          { opcao: "Fernão de Magalhães", correto: false }
        ]
      },
      {
        pergunta: "Qual é a fórmula da água?",
        respostas: [
          { opcao: "CO₂", correto: false },
          { opcao: "O₂", correto: false },
          { opcao: "H₂O", correto: true },
          { opcao: "H₂SO₄", correto: false }
        ]
      },
      {
        pergunta: "Qual time ganhou a Copa do Mundo de 2022?",
        respostas: [
          { opcao: "França", correto: false },
          { opcao: "Brasil", correto: false },
          { opcao: "Argentina", correto: true },
          { opcao: "Alemanha", correto: false }
        ]
      }
    ];    
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos = acertos + 1;// Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  

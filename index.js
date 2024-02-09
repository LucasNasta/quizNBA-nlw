const perguntas = [
    {
      pergunta: "Quem detém o recorde de pontos marcados em um único jogo da NBA?",
      respostas: [
        "LeBron James",
        "Kobe Bryant",
        "Wilt Chamberlain"
      ],
      correta: 2
    },
    {
      pergunta: "Qual equipe conquistou mais títulos da NBA até o momento?",
      respostas: [
        "Chicago Bulls",
        "Los Angeles Clippers",
        "Boston Celtics"
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi o MVP das finais da NBA na temporada 2020-2021?",
      respostas: [
        "Giannis Antetokounmpo",
        "Kevin Durant",
        "Stephen Curry"
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano Michael Jordan se aposentou pela última vez da NBA?",
      respostas: [
        "1998",
        "2001",
        "2003"
      ],
      correta: 2
    },
    {
      pergunta: "Qual jogador foi escolhido como a primeira escolha no Draft da NBA de 2020?",
      respostas: [
        "LaMelo Ball",
        "Anthony Edwards",
        "James Wiseman"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o treinador atual dos Golden State Warriors?",
      respostas: [
        "Steve Nash",
        "Steve Kerr",
        "Doc Rivers"
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador é conhecido como 'The Greek Freak' na NBA?",
      respostas: [
        "Luka Dončić",
        "Giannis Antetokounmpo",
        "Joel Embiid"
      ],
      correta: 1
    },
    {
      pergunta: "Em que cidade os Toronto Raptors disputam seus jogos em casa?",
      respostas: [
        "Montreal",
        "Toronto",
        "Vancouver"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o único jogador na história da NBA a ter conquistado o prêmio de MVP em unanimidade?",
      respostas: [
        "LeBron James",
        "Stephen Curry",
        "Kevin Durant"
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador detém o recorde de mais triplos-duplos na temporada regular da NBA?",
      respostas: [
        "Russell Westbrook",
        "LeBron James",
        "James Harden"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template =document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span') 
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector ('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) 
      dt.querySelector('input').value = item.respostas.indexOf(resposta) 
      dt.querySelector('input').onchange = (event) =>{
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
        corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
     quizItem.querySelector('dl').appendChild(dt)
   }
  
  
  quizItem.querySelector('dl dt').remove() 
  
  
  
  quiz.appendChild(quizItem) 
   }